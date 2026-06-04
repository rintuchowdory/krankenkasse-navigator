# 🏥 Krankenkasse Navigator

> Vergleiche GKV & PKV, verstehe Leistungen, und lass KI deine Fragen beantworten — kostenlos & unabhängig.

**Live:** https://rintuchowdory.github.io/krankenkasse-navigator/

## Features

- **KV-Vergleich** – GKV & PKV Kassen mit Beitragssätzen, Ratings und Leistungen
- **Leistungen erklärt** – Deckungsgrad mit GKV/PKV Balken
- **Erstattungsrechner** – Eigenanteil nach Behandlung & Bonusheft
- **Zahnkosten-Schätzer** – Live-Slider für Bonusheft-Jahre
- **KI-Assistent** – Fragen auf Deutsch, Antworten via Groq (Llama3-70b)

## Stack

- React 18 + Vite
- GitHub Pages (Deployment)
- Groq API via Cloudflare Worker Proxy

## Setup

```bash
npm install
npm run dev
```

## Deployment

Wird automatisch via GitHub Actions bei Push auf `main` deployed.

### Secrets benötigt

| Secret | Beschreibung |
|--------|-------------|
| `VITE_PROXY_URL` | URL des Cloudflare Worker Proxy (Groq API) |

## Projekt-Struktur

```
src/
├── components/
│   ├── Hero.jsx
│   └── NavTabs.jsx
├── pages/
│   ├── KVVergleich.jsx
│   ├── Leistungen.jsx
│   ├── Erstattung.jsx
│   ├── Zahnkosten.jsx
│   └── AIChat.jsx
├── data/
│   └── kvData.js
├── App.jsx
├── main.jsx
└── index.css
```

---

Built with ❤️ by [rintuchowdory](https://github.com/rintuchowdory)
