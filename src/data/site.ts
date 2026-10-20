export type Locale = 'id' | 'en';
export type PageKey = 'home' | 'privacy' | 'terms' | 'cookies';
export const paths = { home: { id: '/', en: '/en/' }, privacy: { id: '/privacy/', en: '/en/privacy/' }, terms: { id: '/terms/', en: '/en/terms/' }, cookies: { id: '/cookies/', en: '/en/cookies/' } } as const;
export const attraction = { name: 'Museum Wayang', latitude: -6.1349287, longitude: 106.8123108, mapsShareUrl: 'https://maps.app.goo.gl/vh98zoiskQniENPV6' };
export const sources = [
 { id:'Kementerian Kebudayaan — profil museum', en:'Ministry of Culture — museum profile', href:'https://museum.kemenbud.go.id/museum/profile/museum%2Bwayang' },
 { id:'Bapenda Jakarta — tarif, 2 April 2026', en:'Jakarta revenue agency — ticket categories, 2 April 2026', href:'https://dpp.jakarta.go.id/berita/museum-wayang-jakarta-warisan-budaya-yang-menghidupkan-retribusi-daerah' },
 { id:'Pemprov Jakarta — wajah baru, 24 Januari 2025', en:'Jakarta government — renewed museum, 24 January 2025', href:'https://www.jakarta.go.id/siaran-pers/5262-SP-HMS-01-2025' },
 { id:'Dinas Kebudayaan — acara 29 Maret 2026', en:'Culture department — event on 29 March 2026', href:'https://dinaskebudayaan.jakarta.go.id/event/931?from=index' },
 { id:'Jakarta Barat — catatan Lebaran 2026', en:'West Jakarta — 2026 Eid visiting report', href:'https://barat.jakarta.go.id/berita/libur-lebaran-2026-8810-wisatawan-kunjungi-museum-seni-di-kota-tua' }
] as const;
