import React from 'react';

export default function Loading() {
  return (
    <main className="page" style={{ 
      minHeight: '60vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'var(--ground)' 
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '3px solid var(--line)',
        borderTopColor: 'var(--hi)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
}
