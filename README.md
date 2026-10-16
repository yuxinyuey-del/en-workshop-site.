# 縁 EN Chopsticks & Craft Workshop

京都の体験型工房「縁 EN Chopsticks & Craft Workshop」のマーケティング・予約サイトです。箸作り、金継ぎ、包丁研ぎ、コインリング作りの各体験を紹介し、Square の決済リンクを使った直接予約を受け付けます。

フロントエンドは React、Vite、Tailwind CSS で構築され、Figma Make から公開されます。予約、決済、メール通知、空き枠管理は Supabase Edge Function `hyper-function` が担当します。

## 現在の重要事項

> [!IMPORTANT]
> フロントエンドと管理画面は実装済みですが、Supabase 上で稼働中の `hyper-function` は旧バージョンです。最新の関数コードを Supabase Dashboard の Edge Functions > `hyper-function` > Code に反映し、**Deploy updates** を実行してください。
>
> デプロイが完了するまでは `/admin` で `Failed to fetch` が表示され、予約停止枠の取得・更新などを利用できません。特に CORS で `X-Admin-Password` ヘッダーと `PATCH` メソッドを許可する必要があります。

なお、リポジトリ内の `supabase/functions/server/index.tsx` は Figma Make が生成した最小構成のサーバーで、現在は health check のみを実装しています。Square 予約を処理する本番用 `hyper-function` と同一ではありません。

## 主な機能

- 各ワークショップの紹介ページ
- 日付、時間、人数、連絡先を入力するステップ式予約フォーム
- 管理者が設定した休業日・停止枠のリアルタイム確認
- Square Payment Link への遷移
- 予約情報の Supabase KV ストア保存
- Resend による顧客・店舗向けメール通知
- 予約一覧、検索、ステータス変更ができる管理画面
- ワークショップ単位の日付・時間枠の受付停止と再開
- レスポンシブなナビゲーションとモバイル CTA

## ページ

ルーティングは React Router ではなく、`src/App.tsx` の History API ベースの軽量ルーターで管理しています。

| URL | 内容 |
| --- | --- |
| `/` | Homepage |
| `/how-to-find-us` | アクセス案内 |
| `/chopsticks` | 箸作り |
| `/kintsugi` | 金継ぎ |
| `/knives` | 包丁研ぎ |
| `/musubi` | MUSUBI コインリング |
| `/rainy-day-guide` | 雨の日向け京都ガイド |
| `/summer-indoor` | 夏の屋内体験ガイド |
| `/team` | チーム紹介 |
| `/booking` | 直接予約フォーム |
| `/admin` | 予約管理画面 |

過去のリンクとの互換性のため、`?page=book` と `?page=admin` も解釈します。公開環境では、各 URL を `index.html` にフォールバックする SPA rewrite が必要です。Vercel 用の設定は `vercel.json` に含まれています。

## 技術スタック

- React 19
- TypeScript 5.7
- Vite 8
- Tailwind CSS 4
- Figma Make
- Supabase Edge Functions / KV store
- Square Payments
- Resend
- oxfmt

## デザインシステム

ベースのトークンは `src/index.css` と `src/lib/styles.ts` で管理しています。

| Token | Value |
| --- | --- |
| Paper | `#F6F3ED` |
| Paper alt | `#EDE8DE` |
| Ink | `#23211C` |
| Ink soft | `#5C574E` |
| Green deep | `#22402F` |
| Green pale | `#C7D4C0` |
| Wood | `#A9743F` |
| Line | `#DDD6C9` |

使用フォント:

- 見出し: Newsreader
- 本文・UI: Inter
- 日本語明朝: Shippori Mincho

フォントは `src/index.css` で Google Fonts から読み込んでいます。

## ローカル開発

### 必要な環境

- Node.js 22
- pnpm 10.34.3

バージョンは `.mise.toml` に定義されています。mise を利用する場合:

```bash
mise install
```

依存関係をインストール:

```bash
pnpm install
```

通常のローカル環境で開発サーバーを起動:

```bash
pnpm dev
```

デフォルトでは `http://localhost:8443` で起動します。ポートは `PORT` 環境変数で変更できます。

Figma Make 内では開発サーバーが自動で起動しているため、手動で `pnpm dev` を実行する必要はありません。ソース変更は Hot Module Replacement によりプレビューへ反映されます。

### コマンド

```bash
pnpm build      # 本番ビルド
pnpm preview    # ビルド結果のプレビュー
pnpm format     # oxfmt によるフォーマット
```

## プロジェクト構成

```text
.
├── src/
│   ├── components/          # Header、Footer、予約フォームなど
│   ├── hooks/               # UI 用カスタムフック
│   ├── imports/             # サイト内で使用する画像
│   ├── lib/                 # 定数と共有スタイル
│   ├── pages/               # 各ページと管理画面
│   ├── App.tsx              # ルーティングとアプリ全体の構成
│   ├── index.css            # Tailwind、フォント、グローバル CSS
│   └── main.tsx             # React エントリーポイント
├── supabase/
│   └── functions/server/    # Figma Make 生成の KV / サーバー雛形
├── utils/supabase/info.tsx  # Supabase Project ID と公開 anon key
├── vercel.json              # SPA rewrite
└── vite.config.ts           # Vite / Tailwind / Figma Make 設定
```

`utils/supabase/info.tsx` は自動生成ファイルです。直接編集しないでください。ここに含まれる anon key はブラウザで使用する公開キーであり、サービスロールキーや外部サービスのシークレットは含めないでください。

## 予約システム

### フロントエンド

`src/components/BookingForm.tsx` が次の処理を行います。

1. ワークショップ、日時、人数、連絡先を収集
2. `GET /availability` で休業日・停止枠を確認
3. `POST /booking` へ予約内容を送信
4. Edge Function が返した Square Payment Link へ遷移
5. Square から戻った際に予約完了画面を表示

API のベース URL:

```text
https://yumosrazpcikoypwthkl.supabase.co/functions/v1/hyper-function
```

### Edge Function の API

フロントエンドは `hyper-function` に次のエンドポイントを要求します。

| Method | Path | 用途 |
| --- | --- | --- |
| `GET` | `/availability?workshopId=...&date=...` | 停止中の日付・時間枠を取得 |
| `POST` | `/booking` | 予約作成、Square Payment Link 発行、メール処理 |
| `GET` | `/admin/bookings` | 予約一覧を取得 |
| `PATCH` | `/admin/bookings/:id` | 予約ステータスを更新 |
| `GET` | `/admin/blocks` | 受付停止枠を取得 |
| `POST` | `/admin/blocks` | 日付または時間枠を停止 |
| `DELETE` | `/admin/blocks` | 停止枠を解除 |

公開 API へのリクエストには Supabase anon key を `Authorization: Bearer ...` として送信します。管理 API はそれに加えて `X-Admin-Password` ヘッダーを使用します。

### 必要な Supabase Secrets

Supabase Dashboard の Project Settings / Edge Functions Secrets で、次の値を設定してください。

| Secret | 用途 |
| --- | --- |
| `SQUARE_ACCESS_TOKEN` | Square API の認証 |
| `SQUARE_LOCATION_ID` | 決済を作成する Square Location |
| `NOTIFICATION_EMAIL` | 店舗側の予約通知先 |
| `RESEND_API_KEY` | Resend API の認証 |
| `ADMIN_DASHBOARD_PASSWORD` | `/admin` のログインと管理 API の認証 |

シークレットの実値はフロントエンド、README、Git のいずれにも保存しないでください。

## 管理画面

`/admin` では以下の操作ができます。

- 予約の一覧表示、検索、ステータス絞り込み
- `pending_payment`、`confirmed`、`cancelled`、`completed`、`no_show` の更新
- Square Payment Link の確認
- ワークショップごとの終日受付停止
- 特定時間枠の受付停止
- 停止枠の再開

管理者パスワードはブラウザの `sessionStorage` にだけ保持され、管理 API の呼び出し時に `X-Admin-Password` として送信されます。

## Edge Function の更新手順

1. Supabase Dashboard でプロジェクト `yumosrazpcikoypwthkl` を開く
2. **Edge Functions** から `hyper-function` を選択
3. **Code** 画面で最新の関数コードを反映
4. 必要な 5 つの Secrets が登録済みであることを確認
5. **Deploy updates** をクリック
6. `/booking` で空き枠取得を確認
7. `/admin` にログインし、予約一覧と停止枠が取得できることを確認
8. テスト用の停止枠を作成・削除し、公開予約フォームへ反映されることを確認

`Failed to fetch` が続く場合は、デプロイされた関数の CORS 設定を確認してください。

```ts
allowHeaders: ["Content-Type", "Authorization", "X-Admin-Password"]
allowMethods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"]
```

そのほか、Edge Function の URL、ブラウザの Network タブに表示される preflight (`OPTIONS`) の応答、Supabase の Function Logs を順に確認します。

## 公開とドメイン

フロントエンドは Figma Make から公開されています。`kansaitrip.com` は現在別サーバーの nginx を参照しているため、このサイトへ直接到達しません。独自ドメインで公開する場合は、DNS または nginx の向き先を実際の公開先に変更し、すべての SPA ルートを `index.html` へフォールバックさせてください。

ドメイン切り替え後は、次を確認します。

- `/` と各下層 URL を直接開ける
- `/booking` から Square へ遷移できる
- Square の戻り先が公開ドメインになる
- `/admin` から Edge Function へ接続できる
- HTTPS とメール内リンクが正しい

## セキュリティ上の注意

- `ADMIN_DASHBOARD_PASSWORD` をクライアントコードへ埋め込まない
- Square、Resend、Supabase service role のキーを Git に追加しない
- anon key は Supabase の Row Level Security と Edge Function 側の認可を前提に使用する
- 管理 API では必ずサーバー側で `X-Admin-Password` を検証する
- 本番運用では管理パスワードの定期更新とアクセスログの確認を行う
