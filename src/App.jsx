import React, { useState } from 'react'
import Hero from './components/Hero'
import NavTabs from './components/NavTabs'
import KVVergleich from './pages/KVVergleich'
import Leistungen from './pages/Leistungen'
import Erstattung from './pages/Erstattung'
import Zahnkosten from './pages/Zahnkosten'
import AIChat from './pages/AIChat'

export default function App() {
  const [activeTab, setActiveTab] = useState('vergleich')
  const [chatQuery, setChatQuery] = useState(null)

  const handleSearch = (query) => {
    setChatQuery(query)
    setActiveTab('aichat')
  }

  const handleChatQuery = (query) => {
    setChatQuery(query)
    setActiveTab('aichat')
  }

  return (
    <>
      <Hero onSearch={handleSearch} />
      <NavTabs active={activeTab} onChange={setActiveTab} />
      <main style={{ maxWidth: '880px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        {activeTab === 'vergleich' && <KVVergleich onChatQuery={handleChatQuery} />}
        {activeTab === 'leistungen' && <Leistungen />}
        {activeTab === 'erstattung' && <Erstattung />}
        {activeTab === 'zahnkosten' && <Zahnkosten />}
        {activeTab === 'aichat' && <AIChat key={chatQuery} initialQuery={chatQuery} />}
      </main>
      <footer style={{
        textAlign: 'center', padding: '2rem',
        fontSize: '12px', color: 'var(--text-muted)',
        borderTop: '1px solid var(--border)',
      }}>
        Krankenkasse Navigator &middot; Unabhaengig &amp; kostenlos &middot; Keine Rechtsberatung
      </footer>
    </>
  )
}
