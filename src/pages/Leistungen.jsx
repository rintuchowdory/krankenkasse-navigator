import React from 'react'
import { benefits } from '../data/kvData'

export default function Leistungen() {
  return (
    <div>
      <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.5rem', fontWeight: 500, marginBottom: '4px' }}>Versicherungsleistungen</h2>
      <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Was zahlt die Krankenkasse?</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        {benefits.map(b => (
          <div key={b.title} style={{ background: '#fff', borderRadius: '12px', padding: '1.25rem', border: '1px solid var(--border)' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--teal-light)', color: 'var(--teal-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '0.75rem' }}><i className={'ti ' + b.icon} aria-hidden="true" /></div>
            <div style={{ fontWeight: 500, fontSize: '14px', marginBottom: '4px' }}>{b.title}</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{b.desc}</div>
            <div style={{ marginTop: '10px', fontSize: '11px', color: 'var(--text-muted)' }}>GKV Uebernahme</div>
            <div style={{ height: '6px', background: '#F0EFE8', borderRadius: '3px', marginTop: '4px', overflow: 'hidden' }}><div style={{ height: '100%', width: b.gkv + '%', borderRadius: '3px', background: 'var(--teal-mid)' }} /></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginTop: '3px' }}><span style={{ color: 'var(--teal-deep)' }}>{b.gkv}%</span><span style={{ color: 'var(--text-muted)' }}>PKV: {b.pkv}%</span></div>
          </div>
        ))}
      </div>
      <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid var(--border)', padding: '1.25rem' }}>
        <div style={{ fontWeight: 500, fontSize: '14px', marginBottom: '1rem' }}>GKV vs. PKV</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div style={{ background: 'var(--teal-light)', borderRadius: '8px', padding: '12px' }}><div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--teal-deep)', marginBottom: '8px' }}>GKV Vorteile</div><ul style={{ fontSize: '12px', color: 'var(--text-mid)', paddingLeft: '14px', lineHeight: 2 }}><li>Familienversicherung kostenlos</li><li>Beitrag nach Einkommen</li><li>Kein Gesundheitscheck</li></ul></div>
          <div style={{ background: 'var(--amber-light)', borderRadius: '8px', padding: '12px' }}><div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--amber-deep)', marginBottom: '8px' }}>PKV Vorteile</div><ul style={{ fontSize: '12px', color: 'var(--text-mid)', paddingLeft: '14px', lineHeight: 2 }}><li>Chefarztbehandlung</li><li>Bessere Zahnleistungen</li><li>Kuerzere Wartezeiten</li></ul></div>
        </div>
      </div>
    </div>
  )
}
