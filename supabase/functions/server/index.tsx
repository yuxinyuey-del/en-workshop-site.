import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-0b4a43c5/health", (c) => {
  return c.json({ status: "ok" });
});

const escapeHtml = (value: unknown) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

app.post("/booking", async (c) => {
  try {
    const body = await c.req.json();
    const {
      workshopName,
      workshopJapanese,
      date,
      time,
      guests,
      name,
      email,
      phone,
      total,
      returnUrl,
      location,
      locationUrl,
    } = body;

    if (!workshopName || !date || !time || !name || !email || !phone || !returnUrl) {
      return c.json({ error: "Missing required booking details." }, 400);
    }

    const amount = Number(total);
    if (!Number.isInteger(amount) || amount <= 0) {
      return c.json({ error: "Invalid booking total." }, 400);
    }

    const squareToken = Deno.env.get("SQUARE_ACCESS_TOKEN");
    const locationId = Deno.env.get("SQUARE_LOCATION_ID");
    const notificationEmail = Deno.env.get("NOTIFICATION_EMAIL");
    const resendKey = Deno.env.get("RESEND_API_KEY");

    if (!squareToken || !locationId) {
      console.error("Square credentials are not configured.");
      return c.json({ error: "Payment is temporarily unavailable." }, 503);
    }

    const squareResponse = await fetch(
      "https://connect.squareup.com/v2/online-checkout/payment-links",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${squareToken}`,
          "Square-Version": "2024-01-18",
        },
        body: JSON.stringify({
          idempotency_key: crypto.randomUUID(),
          locale: "en-US",
          quick_pay: {
            name: `${workshopName} - ${guests} guest${Number(guests) === 1 ? "" : "s"} - ${date} ${time}`,
            price_money: { amount, currency: "JPY" },
            location_id: locationId,
          },
          checkout_options: {
            redirect_url: String(returnUrl),
          },
          pre_populated_data: {
            buyer_email: String(email),
          },
        }),
      },
    );

    if (!squareResponse.ok) {
      console.error("Square payment link error:", await squareResponse.text());
      return c.json({ error: "Square checkout could not be created." }, 502);
    }

    const squareData = await squareResponse.json();
    const paymentUrl = squareData.payment_link?.url;
    if (!paymentUrl) {
      console.error("Square returned no payment link.");
      return c.json({ error: "Square checkout could not be created." }, 502);
    }

    const safe = {
      workshopName: escapeHtml(workshopName),
      workshopJapanese: escapeHtml(workshopJapanese),
      date: escapeHtml(date),
      time: escapeHtml(time),
      guests: escapeHtml(guests),
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      location: escapeHtml(location),
      locationUrl: escapeHtml(locationUrl),
      paymentUrl: escapeHtml(paymentUrl),
    };
    const locationRow = safe.location
      ? `<tr><td style="padding:10px 0;color:#5a5a52">Location</td><td style="padding:10px 0;text-align:right">${safe.location}${safe.locationUrl ? `<br><a href="${safe.locationUrl}">Open map</a>` : ""}</td></tr>`
      : "";
    const details = `<table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:10px 0;color:#5a5a52">Workshop</td><td style="padding:10px 0;text-align:right">${safe.workshopName} — ${safe.workshopJapanese}</td></tr>
      <tr><td style="padding:10px 0;color:#5a5a52">Date & time</td><td style="padding:10px 0;text-align:right">${safe.date} at ${safe.time}</td></tr>
      <tr><td style="padding:10px 0;color:#5a5a52">Guests</td><td style="padding:10px 0;text-align:right">${safe.guests}</td></tr>
      ${locationRow}
      <tr><td style="padding:10px 0;color:#5a5a52">Total</td><td style="padding:10px 0;text-align:right">JPY ${amount.toLocaleString("en-US")}</td></tr>
    </table>`;

    if (resendKey && notificationEmail) {
      const customerHtml = `<div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;color:#1a1a18"><h1>Complete your EN workshop booking</h1><p>Hello ${safe.name}, your workshop details are below. Your place is confirmed after payment.</p>${details}<p><a href="${safe.paymentUrl}">Pay securely with Square</a></p></div>`;
      const companyHtml = `<div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;color:#1a1a18"><h1>New booking awaiting payment</h1>${details}<p>Name: ${safe.name}<br>Email: ${safe.email}<br>Phone: ${safe.phone}</p><p><a href="${safe.paymentUrl}">Open Square payment link</a></p></div>`;
      const messages = [
        { to: String(email), subject: `Complete your EN booking: ${workshopName}`, html: customerHtml },
        { to: notificationEmail, subject: `New booking: ${workshopName} — ${date} ${time}`, html: companyHtml },
      ];

      const results = await Promise.all(
        messages.map((message) =>
          fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${resendKey}`,
            },
            body: JSON.stringify({
              from: "EN Workshop <onboarding@resend.dev>",
              ...message,
            }),
          }),
        ),
      );
      for (const result of results) {
        if (!result.ok) console.error("Resend email error:", await result.text());
      }
    } else {
      console.error("Resend configuration is incomplete.");
    }

    return c.json({ success: true, paymentUrl });
  } catch (error) {
    console.error("Booking error:", String(error));
    return c.json({ error: "The booking could not be processed." }, 500);
  }
});

Deno.serve(app.fetch);
