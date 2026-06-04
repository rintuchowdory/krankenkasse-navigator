import React from 'react'

const tabs = [
  { id: 'vergleich', icon: 'ti-scale', label: 'KV-Vergleich' },
  { id: 'leistungen', icon: 'ti-shield-check', label: 'Leistungen' },
  { id: 'erstattung', icon: 'ti-receipt', label: 'Kostenerstattung' },
  { id: 'zahnkosten', icon: 'ti-dental-broken', label: 'Zahnkosten' },
  { id: 'aichat', icon: 'ti-robot', label: 'KI-Assistent' },
]

export default function NavTabs({ active, onChange }) {
  return (
    <div style={{
      display: 'flex',
      background: '#fff',
      borderBottom: '1px solid rgba(0,0,0,0.08)',
      overflowX: 'auto',
      position: 'sticky',
      top: 0,
      zIndex: 10,
    }}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          style={{
            padding: '14px 20px',
            fontSize: '14px',
            color: active === tab.id ? '#0F6E56' : '#4A4A47',
            background: 'none',
            border: 'none',
            borderBottom: active === tab.id ? '2px solid #0F6E56' : '2px solid transparent',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontWeight: active === tab.id ? 500 : 400,
            transition: 'all 0.2s',
            cursor: 'pointer',
          }}
        >
          <i className={`ti ${tab.icon}`} aria-hidden="true" />
          {tab.label}
        </button>
      ))}
    </div>
  )
}
