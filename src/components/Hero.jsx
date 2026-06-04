import React, { useState } from 'react'

export default function Hero({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    if (query.trim()) onSearch(query.trim())
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #0F4C37 0%, #1D9E75 60%, #5DCAA5 100%)',
      padding: '3rem 2rem 4rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: '-40px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
      <div style={{ position: 'absolute', bottom: '-60px', left: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
      <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', fontSize: '12px', padding: '4px 14px', borderRadius: '20px', marginBottom: '1rem', letterSpacing: '0.5px' }}>
        Kostenlos und unabhaengig
      </div>
      <h1 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: '#fff', fontWeight: 600, lineHeight: 1.2, marginBottom: '0.75rem' }}>
        Dein Krankenkassen-Navigator
      </h1>
      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
        Vergleiche GKV und PKV, verstehe Leistungen, und lass KI deine Fragen beantworten.
      </p>
      <div style={{ background: '#fff', borderRadius: '50px', padding: '10px 10px 10px 20px', display: 'flex', alignItems: 'center', maxWidth: '520px', margin: '0 auto', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}>
        <i className="ti ti-search" style={{ color: '#888', marginRight: '8px', fontSize: '18px' }} aria-hidden="true" />
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSearch()} placeholder="z.B. Beste Krankenkasse fuer Selbststaendige" style={{ border: 'none', outline: 'none', flex: 1, fontSize: '15px', color: '#1C1C1A', background: 'transparent' }} />
        <button onClick={handleSearch} style={{ background: '#0F6E56', color: '#fff', border: 'none', borderRadius: '40px', padding: '10px 22px', fontSize: '14px', fontWeight: 500, transition: 'background 0.2s' }} onMouseEnter={e => e.target.style.background = '#0a5040'} onMouseLeave={e => e.target.style.background = '#0F6E56'}>
          Suchen
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
        {[{ icon: 'ti-shield-check', text: '100+ Kassen verglichen' }, { icon: 'ti-robot', text: 'KI-Assistent auf Deutsch' }, { icon: 'ti-calculator', text: 'Kostenrechner' }].map(({ icon, text }) => (
          <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.85)', fontSize: '13px' }}>
            <i className={`ti ${icon}`} aria-hidden="true" />
            {text}
          </div>
        ))}
      </div>
    </div>
  )
}
