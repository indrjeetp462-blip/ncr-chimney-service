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
        {/* White Chimney Icon */}
        <div style={{ marginBottom: '18px' }}>
          <svg width="80" height="80" viewBox="0 0 24 24" fill="white">
            <path d="M7 10h10a1 1 0 0 1 1 1v1H6v-1a1 1 0 0 1 1-1z" />
            <path d="M8 12h8v7H8z" />
            <path d="M10 2.5c0.3 0.8 1.5 1 1.5 2 0 0.8-1.5 1-1.5 2s1.5 1.2 1.5 2-1.5 1-1.5 2" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
        </div>

        <h1 style={{ color: 'white', fontSize: '36px', fontWeight: '900', margin: 0, lineHeight: '1.2' }}>
          Welcome to<br/>Chimney Care
        </h1>
        <p style={{ color: 'white', fontSize: '18px', marginTop: '10px', fontWeight: '500' }}>
          Chimney Service or Repair
        </p>

        <div style={{
          marginTop: '22px',
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
