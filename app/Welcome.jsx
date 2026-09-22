'use client'
import { useEffect } from 'react';

export default function Welcome({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ color: '#ff6600', fontSize: '28px', fontWeight: 'bold' }}>
        Welcome to<br/>Chimney Care Service<br/>or Repair<br/>Annual Maintenance
      </h1>
      <p style={{ marginTop: '15px', color: '#555' }}>Loading...</p>
    </div>
  );
}
