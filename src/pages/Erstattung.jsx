import React, { useState } from 'react'
import { reimbursementData } from '../data/kvData'

const kvOptions = ['TK (Techniker Krankenkasse)', 'AOK Bayern', 'BARMER', 'DAK-Gesundheit', 'HEK']

export default function Erstattung() {
  const [behandlung, setBehandlung] = useState(Object.keys(reimbursementData)[0])
  const [kosten, setKosten] = useState(350)
  const [bonus, setBonus] = useState('Ja')
  const [result, setResult] = useState(null)

  const calculate = () => {
    const base = reimbursementData[behandlung]?.base ?? 0
    let rate = base
    if (bonus === 'Ja') rate = Math.min(rate + 0.1, 0.85)
    else if (bonus === 'Teilweise') rate = Math.min(rate + 0.05, 0.75)
    const erstattung = Math.round(kosten * rate)
    const eigen = Math.round(kosten - erstattung)
    const note = reimbursementData[behandlung]?.note ?? ''
    setResult({ erstattung, eigen, note })
  }

  const s = { width: '100%', padding: '10px 14px', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '14px', background: '#fff', outline: 'none' }

  return (
    <div>
      <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.5rem', fontWeight: 500, marginBottom: '4px' }}>Erstattungsrechner</h2>
      <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Berechne deinen Eigenanteil</p>
      <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid var(--border)', padding: '1.5rem', marginBottom: '1.5rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontSize: '13px', color: 'var(--text-mid)', display: 'block', marginBottom: '6px' }}>Art der Behandlung</label>
          <select value={behandlung} onChange={e => setBehandlung(e.target.value)} style={s}>
            {Object.keys(reimbursementData).map(k => <option key={k}>{k}</option>)}
          </select>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontSize: '13px', color: 'var(--text-mid)', display: 'block', marginBottom: '6px' }}>Gesamtkosten (Euro)</label>
          <input type="number" value={kosten} min={0} onChange={e => setKosten(parseFloat(e.target.value) || 0)} style={s} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontSize: '13px', color: 'var(--text-mid)', display: 'block', marginBottom: '6px' }}>Meine Krankenkasse</label>
          <select style={s}>{kvOptions.map(k => <option key={k}>{k}</option>)}</select>
        </div>
        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ fontSize: '13px', color: 'var(--text-mid)', display: 'block', marginBottom: '6px' }}>Bonusheft gefuehrt?</label>
          <select value={bonus} onChange={e => setBonus(e.target.value)} style={s}>
            <option>Ja</option>
            <option>Teilweise</option>
            <option>Nein</option>
          </select>
        </div>
        <button onClick={calculate} style={{ background: 'var(--teal-deep)', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px 24px', fontSize: '14px', fontWeight: 500 }}>Erstattung berechnen</button>
      </div>
      {result && (
        <div style={{ background: 'var(--teal-light)', borderRadius: '12px', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '12px', color: 'var(--teal-deep)', marginBottom: '2px' }}>Geschaetzte Erstattung</div>
            <div style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--teal-deep)', fontFamily: 'Lora, serif' }}>{result.erstattung} Euro</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '14px', color: 'var(--teal-deep)' }}>Eigenanteil: <strong>{result.eigen} Euro</strong></div>
            {result.note && <div style={{ fontSize: '12px', color: 'var(--teal-deep)', marginTop: '4px' }}>{result.note}</div>}
          </div>
        </div>
      )}
    </div>
  )
}
