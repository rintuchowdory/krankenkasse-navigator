import React, { useState } from 'react'
import { kvData } from '../data/kvData'

const filters = [
  { key: 'alle', label: 'Alle' },
  { key: 'gkv', label: 'Nur GKV' },
  { key: 'pkv', label: 'Nur PKV' },
  { key: 'digital', label: 'Digital-stark' },
  { key: 'bonus', label: 'Bonusprogramm' },
]

export default function KVVergleich({ onChatQuery }) {
  const [filter, setFilter] = useState('alle')

  const filtered = kvData.filter(k => {
    if (filter === 'gkv') return k.type === 'gkv'
    if (filter === 'pkv') return k.type === 'pkv'
    if (filter === 'digital') return k.tags.includes('Digital')
    if (filter === 'bonus') return k.tags.includes('Bonusprogramm')
    return true
  })

  return (
    <div>
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.5rem', fontWeight: 500, marginBottom: '4px' }}>Krankenkassen vergleichen</h2>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Gesetzliche und private Kassen im Ueberblick</p>
      </div>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {filters.map(f => (
          <button key={f.key} onClick={() => setFilter(f.key)} style={{ background: filter === f.key ? 'var(--teal-light)' : '#fff', border: `1px solid ${filter === f.key ? 'var(--teal-mid)' : 'var(--border)'}`, color: filter === f.key ? 'var(--teal-deep)' : 'var(--text-mid)', borderRadius: '20px', padding: '6px 16px', fontSize: '13px', transition: 'all 0.2s' }}>{f.label}</button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
        {filtered.map(kv => (
          <div key={kv.name} style={{ background: '#fff', borderRadius: '14px', border: kv.featured ? `2px solid ${kv.color}` : '1px solid var(--border)', padding: '1.25rem', position: 'relative', transition: 'box-shadow 0.2s' }} onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-md)'} onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
            {kv.featured && <div style={{ position: 'absolute', top: '-10px', left: '1.25rem', background: kv.color, color: '#fff', fontSize: '11px', padding: '3px 10px', borderRadius: '10px' }}>Empfohlen</div>}
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: kv.color + '22', color: kv.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '15px', marginBottom: '0.75rem' }}>{kv.short}</div>
            <div style={{ fontFamily: 'Lora, serif', fontWeight: 500, fontSize: '1rem', marginBottom: '2px' }}>{kv.name}</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px' }}>{kv.type === 'gkv' ? 'Gesetzliche Krankenversicherung' : 'Private Krankenversicherung'}</div>
            <div style={{ fontSize: '12px', color: 'var(--text-mid)', marginBottom: '0.75rem', lineHeight: 1.4 }}>{kv.description}</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--teal-deep)', lineHeight: 1 }}>
              {kv.beitrag ? `${kv.beitrag}%` : 'Individuell'}
              <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 400 }}> {kv.beitrag ? 'Beitragssatz' : '(nach Tarif)'}</span>
            </div>
            <div style={{ color: '#E9A317', fontSize: '13px', margin: '6px 0' }}>{'★'.repeat(Math.round(kv.rating))}{'☆'.repeat(5 - Math.round(kv.rating))} <span style={{ color: 'var(--text-muted)' }}>{kv.rating}</span></div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '1rem' }}>
              {kv.tags.map(tag => <span key={tag} style={{ fontSize: '11px', background: 'var(--teal-light)', color: 'var(--teal-deep)', borderRadius: '5px', padding: '3px 8px' }}>{tag}</span>)}
            </div>
            <button onClick={() => onChatQuery(`Erklaere mir die ${kv.name} genauer. Was sind die Vor- und Nachteile?`)} style={{ width: '100%', background: 'var(--teal-deep)', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px', fontSize: '13px', fontWeight: 500 }}>Details und Vergleich</button>
          </div>
        ))}
      </div>
    </div>
  )
}
