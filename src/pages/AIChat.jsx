import React, { useState, useRef, useEffect } from 'react'

const PROXY_URL = import.meta.env.VITE_PROXY_URL || 'https://groq-proxy.chowdoryrintu.workers.dev'

const suggestions = [
  'Wechsel zur PKV - wann lohnt es sich?',
  'Was ist Krankentagegeld?',
  'Brille - wer zahlt was?',
  'Als Selbststaendiger versichern',
  'Zusatzbeitrag berechnen',
  'GKV kuendigen - wie geht das?',
]

export default function AIChat({ initialQuery }) {
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Hallo! Ich bin dein Krankenkassen-Assistent. Ich erklaere dir GKV, PKV, Beitraege, Leistungen und helfe beim Vergleich - alles auf Deutsch. Was moechtest du wissen?' }])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)
  const didInit = useRef(false)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  useEffect(() => {
    if (initialQuery && !didInit.current) { didInit.current = true; sendMessage(initialQuery) }
  }, [initialQuery])

  const sendMessage = async (text) => {
    const userMsg = text || input.trim()
    if (!userMsg || loading) return
    setInput('')
    setLoading(true)
    const newMessages = [...messages, { role: 'user', content: userMsg }]
    setMessages(newMessages)
    try {
      const res = await fetch(PROXY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'llama3-70b-8192',
          max_tokens: 600,
          messages: [
            { role: 'system', content: 'Du bist ein freundlicher Krankenkassen-Experte in Deutschland. Erklaere GKV, PKV, Beitraege und Leistungen in einfachem Deutsch. Antworte kurz (max 4 Saetze) und gib immer einen Handlungstipp am Ende.' },
            ...newMessages.map(m => ({ role: m.role, content: m.content }))
          ]
        })
      })
      const data = await res.json()
      const reply = data.choices?.[0]?.message?.content ?? 'Keine Antwort erhalten.'
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Verbindungsfehler. Bitte versuche es erneut.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.5rem', fontWeight: 500, marginBottom: '4px' }}>KI-Assistent</h2>
      <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '1rem' }}>Stell deine Fragen zur Krankenversicherung</p>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '1rem' }}>
        {suggestions.map(s => (
          <button key={s} onClick={() => sendMessage(s)} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '20px', padding: '6px 14px', fontSize: '12px', color: 'var(--text-mid)', transition: 'all 0.2s' }} onMouseEnter={e => { e.target.style.background = 'var(--teal-light)'; e.target.style.color = 'var(--teal-deep)' }} onMouseLeave={e => { e.target.style.background = '#fff'; e.target.style.color = 'var(--text-mid)' }}>{s}</button>
        ))}
      </div>
      <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid var(--border)', height: '360px', overflowY: 'auto', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {messages.map((m, i) => (
          <div key={i} style={{ maxWidth: '80%', padding: '10px 14px', borderRadius: '12px', fontSize: '13px', lineHeight: 1.5, background: m.role === 'assistant' ? 'var(--teal-light)' : 'var(--teal-deep)', color: m.role === 'assistant' ? 'var(--text-dark)' : '#fff', alignSelf: m.role === 'assistant' ? 'flex-start' : 'flex-end', borderBottomLeftRadius: m.role === 'assistant' ? '3px' : '12px', borderBottomRightRadius: m.role === 'user' ? '3px' : '12px' }}>{m.content}</div>
        ))}
        {loading && <div style={{ maxWidth: '80%', padding: '10px 14px', borderRadius: '12px', fontSize: '13px', background: 'var(--teal-light)', color: 'var(--text-muted)', alignSelf: 'flex-start' }}>Antwort wird generiert...</div>}
        <div ref={bottomRef} />
      </div>
      <div style={{ display: 'flex', gap: '8px', marginTop: '1rem' }}>
        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMessage()} placeholder="Deine Frage zur Krankenversicherung..." style={{ flex: 1, padding: '10px 14px', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '13px', outline: 'none' }} />
        <button onClick={() => sendMessage()} disabled={loading} style={{ background: 'var(--teal-deep)', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 16px', fontSize: '14px', opacity: loading ? 0.6 : 1 }}>
          <i className="ti ti-send" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
