export const kvData = [
  { name: 'Techniker Krankenkasse', short: 'TK', type: 'gkv', beitrag: 15.8, rating: 4.8, tags: ['Digital', 'App', 'Bonusprogramm'], color: '#1D9E75', featured: true, description: 'Groesste GKV Deutschlands mit starkem Digitalangebot und sehr guten Bonusprogrammen.' },
  { name: 'BARMER', short: 'BAR', type: 'gkv', beitrag: 16.1, rating: 4.5, tags: ['Bonusprogramm', 'Zusatzleistungen'], color: '#378ADD', featured: false, description: 'Zweitgroesste GKV mit starken Zusatzleistungen und gutem Kundenservice.' },
  { name: 'DAK-Gesundheit', short: 'DAK', type: 'gkv', beitrag: 16.4, rating: 4.2, tags: ['Osteopathie', 'Hebamme'], color: '#D85A30', featured: false, description: 'Bekannt fuer Uebernahme alternativer Heilmethoden wie Osteopathie und Homoeopathie.' },
  { name: 'AOK Bayern', short: 'AOK', type: 'gkv', beitrag: 15.9, rating: 4.3, tags: ['Regional', 'Bonusprogramm'], color: '#639922', featured: false, description: 'Starke regionale Kasse mit ausgezeichnetem Netz an Kooperationsaerzten in Bayern.' },
  { name: 'HEK', short: 'HEK', type: 'gkv', beitrag: 14.9, rating: 4.6, tags: ['Digital', 'Guenstig'], color: '#7F77DD', featured: false, description: 'Eine der guenstigsten GKVs mit ueberraschend starkem Digitalangebot.' },
  { name: 'Debeka PKV', short: 'DEB', type: 'pkv', beitrag: null, rating: 4.7, tags: ['Chefarzt', 'Zahnersatz', 'Ausland'], color: '#BA7517', featured: false, description: 'Marktfuehrer in der PKV mit starker Tarifvielfalt und solider Beitragsentwicklung.' },
  { name: 'DKV', short: 'DKV', type: 'pkv', beitrag: null, rating: 4.4, tags: ['Chefarzt', 'Ausland'], color: '#D4537E', featured: false, description: 'Grosser PKV-Anbieter mit Fokus auf internationale Zusatzleistungen.' },
  { name: 'Hallesche PKV', short: 'HAL', type: 'pkv', beitrag: null, rating: 4.5, tags: ['Digital', 'Chefarzt'], color: '#0F6E56', featured: false, description: 'Modern aufgestellte PKV mit schneller Abrechnung und guter App.' },
]

export const benefits = [
  { icon: 'ti-tooth', title: 'Zahnarzt', desc: 'Regelmaessige Kontrollen und Fuellungen werden uebernommen. Krone/Implantat nur anteilig.', gkv: 60, pkv: 90 },
  { icon: 'ti-eye', title: 'Sehhilfe', desc: 'GKV nur fuer Kinder bis 18 J. PKV uebernimmt je nach Tarif auch fuer Erwachsene.', gkv: 15, pkv: 80 },
  { icon: 'ti-heartbeat', title: 'Vorsorge', desc: 'Krebsvorsorge, Impfungen, Gesundheits-Check-up - in beiden gut abgedeckt.', gkv: 85, pkv: 95 },
  { icon: 'ti-arrow-guide', title: 'Physiotherapie', desc: 'Mit aerztlichem Rezept meist erstattet. Ohne Rezept oft nicht.', gkv: 75, pkv: 90 },
  { icon: 'ti-brain', title: 'Psychotherapie', desc: 'GKV: lange Wartezeiten (3-6 Monate). PKV: deutlich schnellerer Zugang.', gkv: 65, pkv: 90 },
  { icon: 'ti-pill', title: 'Medikamente', desc: 'Verschreibungspflichtige Medikamente werden weitgehend uebernommen. 10 Euro Zuzahlung GKV.', gkv: 80, pkv: 85 },
]

export const dentalTreatments = [
  { name: 'Fuellung (Composite)', kvBase: 60, cost: 80 },
  { name: 'Krone (Keramik)', kvBase: 60, cost: 600 },
  { name: 'Implantat komplett', kvBase: 0, cost: 2800 },
  { name: 'Bruecke (3-gliedrig)', kvBase: 60, cost: 900 },
  { name: 'Professionelle Zahnreinigung', kvBase: 0, cost: 120 },
  { name: 'Wurzelbehandlung', kvBase: 60, cost: 350 },
]

export const reimbursementData = {
  'Zahnarzt - Fuellung': { base: 0.6, note: 'Inkl. Bonusheft-Zuschlag moeglich.' },
  'Zahnarzt - Krone': { base: 0.6, note: 'Festzuschuss abhaengig vom Bonusheft.' },
  'Brille / Sehhilfe': { base: 0.0, note: 'Brillen sind ab 18 Jahren nicht GKV-erstattungsfaehig.' },
  'Physiotherapie': { base: 0.85, note: 'Mit Rezept fast vollstaendig erstattet.' },
  'Osteopathie': { base: 0.2, note: 'Viele Kassen zahlen 50-200 Euro/Jahr als Satzungsleistung.' },
  'Heilpraktiker': { base: 0.2, note: 'Nur bei Kassen mit Satzungsleistungen anteilig.' },
  'Medikament (Privatrezept)': { base: 0.0, note: 'Privatrezepte werden von der GKV nicht uebernommen.' },
}
