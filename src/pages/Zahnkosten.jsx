import React, { useState } from 'react'
import { dentalTreatments } from '../data/kvData'

export default function Zahnkosten() {
  const [bonusJahre, setBonusJahre] = useState(5)
  const bonusRate = bonusJahre >= 10 ? 0.75 : bonusJahre >= 5 ? 0.70 : 0.60

  return (
    <div>
      <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.5rem', fontWeight: 500, marginBottom: '4px' }}>Zahnkosten-Schaetzer</h2>
      <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Was kostet dich dein Zahnarztbesuch wirklich?</p>
      <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid var(--border)', padding: '1.25rem', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <label style={{ fontSize: '13px', color: 'var(--text-mid)' }}>Bonusheft-Jahre</label>
          <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--teal-deep)' }}>{bonusJahre} Jahre ({Math.round(bonusRate * 100)}% KV-Zuschuss)</span>
        </div>
        <input type="range" min={0} max={10} value={bonusJahre} step={1} onChange={e => setBonusJahre(parseInt(e.target.value))} style={{ width: '100%', accentColor: 'var(--teal-deep)' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}><span>0 Jahre (60%)</span><span>5 Jahre (70%)</span><span>10 Jahre (75%)</span></div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        {dentalTreatments.map(t => {
          const kvAmt = t.kvBase > 0 ? Math.round(t.cost * bonusRate) : 0
          const self = Math.round(t.cost - kvAmt)
          return (
            <div key={t.name} style={{ background: '#fff', borderRadius: '10px', padding: '1rem', border: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 500 }}>{t.name}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>KV zahlt: <span style={{ color: 'var(--teal-deep)', fontWeight: 500 }}>{kvAmt} Euro</span></div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Eigenanteil</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#D85A30' }}>{self} Euro</div>
              </div>
            </div>
          )
        })}
      </div>
      <div style={{ background: 'var(--amber-light)', borderRadius: '10px', padding: '1rem', fontSize: '13px', color: 'var(--amber-deep)', border: '1px solid rgba(133,79,11,0.1)' }}>
        <strong>Tipp:</strong> Mit 5 Jahren Bonusheft steigt dein Zuschuss von 60% auf 70%. Nach 10 Jahren sogar 75% - das spart bis zu 135 Euro bei einer Krone!
      </div>
    </div>
  )
}
