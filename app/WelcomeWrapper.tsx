"use client"
import { useState, useEffect } from 'react'

export default function WelcomeWrapper({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2500)
    return () => clearTimeout(t)
  }, [])

  if (show) {
    return (
      <div style={{
        background: '#FF6B00',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        textAlign: 'center',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <h1 style={{ color: 'white', fontSize: '36px', fontWeight: '900', margin: 0, lineHeight: '1.2' }}>
          Welcome to<br/>Chimney Care
        </h1>
        <p style={{ color: 'white', fontSize: '18px', marginTop: '12px', fontWeight: '500' }}>
          Chimney Service or Repair
        </p>

        <div style={{
          marginTop: '24px',
          background: 'white',
          padding: '8px 18px',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <span style={{ color: '#FFB400', fontSize: '18px' }}>★</span>
          <span style={{ color: '#111', fontSize: '14px', fontWeight: '800' }}>4.6</span>
          <span style={{ color: '#555', fontSize: '13px', fontWeight: '600' }}>| 5000+ Happy Customer</span>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
