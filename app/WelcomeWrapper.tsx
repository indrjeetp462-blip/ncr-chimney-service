'use client'
import { useState, useEffect } from 'react';

export default function WelcomeWrapper({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(t);
  }, []);

  if (show) {
    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        background: '#ff6600',
        color: 'white',
        fontWeight: 'bold'
      }}>
        <div style={{ fontSize: '32px' }}>Welcome</div>
        <div style={{ fontSize: '16px', marginTop: '8px' }}>Chimney Service NCR</div>
      </div>
    )
  }

  return <>{children}</>;
}
