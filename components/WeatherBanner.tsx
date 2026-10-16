import { useState, useEffect } from 'react'
import { fonts, colors } from '../lib/styles'

export default function WeatherBanner() {
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=35.0003&longitude=135.7633&current=precipitation,temperature_2m&forecast_days=1',
    )
      .then((r) => r.json())
      .then((data) => {
        const precip: number = data.current?.precipitation ?? 0
        const temp: number = data.current?.temperature_2m ?? 0
        if (precip > 0) {
          setMessage(
            'Raining in Kyoto right now. We are indoors, and we are open until 19:00. Walk-ins welcome.',
          )
          setVisible(true)
        } else if (temp > 33) {
          setMessage(
            `${Math.round(temp)}°C outside. Inside it is air-conditioned, quiet, and smells like hinoki. Open until 19:00.`,
          )
          setVisible(true)
        }
      })
      .catch(() => {})
  }, [])

  if (!visible) return null

  return (
    <div
      role="status"
      style={{
        backgroundColor: colors.greenDeep,
        color: colors.paper,
        fontSize: 13,
        fontFamily: fonts.sans,
        textAlign: 'center',
        padding: '10px 48px',
        position: 'relative',
        zIndex: 101,
        lineHeight: 1.5,
      }}
    >
      {message}
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss banner"
        style={{
          position: 'absolute',
          right: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          color: colors.paper,
          cursor: 'pointer',
          fontSize: 18,
          opacity: 0.7,
          padding: 4,
          lineHeight: 1,
        }}
      >
        ×
      </button>
    </div>
  )
}
