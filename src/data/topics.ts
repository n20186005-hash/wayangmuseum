import { sources } from './site';

export type TopicGroup = 'visit' | 'culture' | 'nearby' | 'food' | 'route';
export interface TopicSection { id?: string; heading: string; paragraphs?: string[]; bullets?: string[]; }
export interface TopicFaq { q: string; a: string; }
export interface TopicSource { label: string; href: string; }
export interface TopicContent {
  slug: string;
  group: TopicGroup;
  title: string;
  description: string;
  h1: string;
  lead: string;
  updated: string;
  sections: TopicSection[];
  faq: TopicFaq[];
  related: string[];
  sources?: TopicSource[];
}

// Reused public-source links (checked 19 October 2026 unless noted).
const S = sources;
const museumSources: TopicSource[] = [
  { label: S[0].id, href: S[0].href },
  { label: S[1].id, href: S[1].href },
  { label: S[2].id, href: S[2].href },
  { label: S[4].id, href: S[4].href },
  { label: 'Google Maps · Museum Wayang', href: 'https://maps.app.goo.gl/vh98zoiskQniENPV6' }
];
const museumSourcesEn: TopicSource[] = [
  { label: S[0].en, href: S[0].href },
  { label: S[1].en, href: S[1].href },
  { label: S[2].en, href: S[2].href },
  { label: S[4].en, href: S[4].href },
  { label: 'Google Maps · Museum Wayang', href: 'https://maps.app.goo.gl/vh98zoiskQniENPV6' }
];

export const GROUP_LABELS_ID: Record<TopicGroup, string> = {
  visit: 'Kunjungan & informasi praktis',
  culture: 'Wayang, sejarah & koleksi',
  nearby: 'Museum & bangunan bersejarah Kota Tua',
  food: 'Kuliner & istirahat di sekitar',
  route: 'Rute & itinerary Kota Tua'
};

export const topicsId: Record<string, TopicContent> = {
  // ───────────────────────── A. Kunjungan & informasi praktis ─────────────────────────
  'jam-buka-museum-wayang': {
    slug: 'jam-buka-museum-wayang', group: 'visit',
    title: 'Jam Buka Museum Wayang Jakarta (2026): Senin Tutup',
    description: 'Jam buka Museum Wayang menurut dua sumber: Google Maps dan portal Kementerian Kebudayaan berbeda satu jam pada hari kerja. Senin tutup. Konfirmasikan sebelum berangkat.',
    h1: 'Jam Buka Museum Wayang',
    lead: 'Museum Wayang tutup setiap Senin. Pada hari kerja (Selasa–Jumat) dua sumber terpercaya mencantumkan jam tutup berbeda: Google Maps 15.00 dan portal Kementerian Kebudayaan 16.00. Akhir pekan buka hingga 20.00.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'dua-sumber', heading: 'Dua sumber, satu jam berbeda', paragraphs: [
        'Google Maps, diperiksa 19 Oktober 2026, mencantumkan Selasa–Jumat 09.00–15.00; Sabtu–Minggu 09.00–20.00; Senin tutup.',
        'Portal Museum Kementerian Kebudayaan pada tanggal yang sama mencantumkan Selasa–Jumat 09.00–16.00; Sabtu–Minggu 09.00–20.00; Senin tutup. Portal mencantumkan hari libur nasional 09.00–16.00.'
      ]},
      { id: 'konfirmasi', heading: 'Konfirmasi sebelum berangkat', paragraphs: [
        'Perbedaan satu jam pada hari kerja belum diselesaikan oleh sumber yang kami baca. Tanyakan batas masuk terakhir, jam ruang pamer, dan penutupan hari libur sebelum tiba.',
        'Cantuman akhir pekan hingga 20.00 bukan jaminan seluruh ruang atau loket tetap buka hingga waktu tersebut.'
      ]}
    ],
    faq: [
      { q: 'Hari apa Museum Wayang tutup?', a: 'Senin tutup menurut kedua sumber yang diperiksa (Google Maps dan portal Kementerian Kebudayaan).' },
      { q: 'Jam berapa tutup hari kerja?', a: 'Berbeda: Maps 15.00, portal kementerian 16.00. Konfirmasikan batas masuk terakhir untuk tanggal kunjungan Anda.' },
      { q: 'Buka malam setiap hari?', a: 'Tidak. Cantuman hingga 20.00 hanya berlaku Sabtu–Minggu pada kedua sumber; bukan jaminan ruang atau pertunjukan buka hingga malam.' }
    ],
    related: ['harga-tiket-museum-wayang', 'panduan-kunjungan-museum-wayang', 'museum-di-kota-tua-yang-buka-senin'],
    sources: museumSources
  },
  'harga-tiket-museum-wayang': {
    slug: 'harga-tiket-museum-wayang', group: 'visit',
    title: 'Harga Tiket Museum Wayang: Kategori & Cara Bayar',
    description: 'Kategori tiket Museum Wayang menurut Bapenda Jakarta (2 April 2026) dan portal museum. Dewasa Rp10.000–15.000, anak/mahasiswa Rp5.000, wisatawan mancanegara Rp50.000. Konfirmasikan cara bayar.',
    h1: 'Harga Tiket Museum Wayang',
    lead: 'Tiket dewasa umumnya Rp10.000 (hari kerja) hingga Rp15.000 (akhir pekan) menurut portal museum; Bapenda Jakarta menyebut kategori anak/mahasiswa Rp5.000 dan wisatawan mancanegara Rp50.000. Konfirmasikan kategori, bukti, dan cara bayar untuk tanggal kunjungan Anda.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'kategori', heading: 'Kategori yang tercatat', paragraphs: [
        'Bapenda Jakarta dalam berita 2 April 2026 menyebut Rp5.000 untuk anak dan mahasiswa, Rp10.000–15.000 untuk dewasa, serta Rp50.000 untuk wisatawan mancanegara.',
        'Portal museum menampilkan Rp10.000 pada hari kerja dan Rp15.000 pada akhir pekan tanpa rincian kelompok pada tabelnya.'
      ]},
      { id: 'cara-bayar', heading: 'Cara bayar & pembuktian', paragraphs: [
        'Angka di atas adalah referensi yang diatribusikan, bukan jaminan total biaya. Tanyakan bukti pelajar/mahasiswa, batas usia, metode pembayaran, reservasi, dan apakah ruang atau program tertentu memerlukan ketentuan tambahan.',
        'Jangan menganggap promosi gratis pada acara lama masih berlaku tanpa konfirmasi.'
      ]}
    ],
    faq: [
      { q: 'Berapa tiket dewasa?', a: 'Portal museum Rp10.000 hari kerja / Rp15.000 akhir pekan; Bapenda menyebut rentang Rp10.000–15.000 untuk dewasa. Konfirmasikan kategori untuk tanggal Anda.' },
      { q: 'Anak dan mahasiswa gratis?', a: 'Bapenda mencantumkan Rp5.000 untuk anak dan mahasiswa, bukan gratis. Siapkan bukti yang diminta petugas.' },
      { q: 'Wisatawan asing bayar berapa?', a: 'Bapenda menyebut Rp50.000 untuk wisatawan mancanegara. Konfirmasikan kategori dan cara bayar di loket.' }
    ],
    related: ['jam-buka-museum-wayang', 'panduan-kunjungan-museum-wayang', 'aksesibilitas-museum-wayang'],
    sources: museumSources
  },
  'panduan-kunjungan-museum-wayang': {
    slug: 'panduan-kunjungan-museum-wayang', group: 'visit',
    title: 'Panduan Kunjungan Museum Wayang: Persiapan Sebelum Berangkat',
    description: 'Panduan lengkap kunjungan pertama ke Museum Wayang Kota Tua: jam, tiket, waktu tempuh, apa yang dipelajari, dan cara memverifikasi info sebelum berangkat.',
    h1: 'Panduan Kunjungan Museum Wayang',
    lead: 'Siapkan kunjungan dengan membandingkan dua sumber jam buka, mengecek kategori tiket, dan memastikan hari kunjungan bukan Senin (tutup). Bawa bukti pelajar bila berlaku, dan konfirmasikan program pertunjukan untuk tanggal Anda.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'sebelum', heading: 'Sebelum berangkat', bullets: [
        'Pastikan hari bukan Senin (museum tutup).',
        'Bandingkan jam Maps (15.00 hari kerja) dan portal kementerian (16.00); konfirmasikan batas masuk.',
        'Cek kategori tiket dan siapkan bukti pelajar/mahasiswa bila perlu.',
        'Cek apakah ada pertunjukan wayang pada tanggal kunjungan.'
      ]},
      { id: 'saat', heading: 'Saat di museum', paragraphs: [
        'Museum berfokus pada pewayangan dan dikelola Unit Pengelola Museum Seni. Ikuti label kuratorial dan petunjuk staf.',
        'Gunakan nama museum dan konfirmasikan pintu masuk: Maps juga menampilkan penulisan Jl. Kali Besar Timur 4 No. 27, RT 3/RW 6, selain Jalan Pintu Besar Utara.'
      ]}
    ],
    faq: [
      { q: 'Berapa lama waktu yang dibutuhkan?', a: 'Pengunjung umumnya butuh 1–2 jam untuk melihat pameran inti. Lihat halaman "Berapa lama mengunjungi Museum Wayang" untuk rincian.' },
      { q: 'Apakah ini situs resmi?', a: 'Bukan. Ini panduan pengunjung independen tanpa afiliasi museum atau pemerintah, dan tidak melayani tiket.' },
      { q: 'Boleh foto?', a: 'Aturan foto mengikuti ketentuan museum; lihat panduan foto Museum Wayang sebelum memotret.' }
    ],
    related: ['jam-buka-museum-wayang', 'harga-tiket-museum-wayang', 'berapa-lama-mengunjungi-museum-wayang', 'panduan-foto-museum-wayang'],
    sources: museumSources
  },
  'cara-ke-museum-wayang': {
    slug: 'cara-ke-museum-wayang', group: 'visit',
    title: 'Cara ke Museum Wayang Kota Tua: Rute & Transportasi',
    description: 'Cara mencapai Museum Wayang di Kota Tua Jakarta dengan KRL, TransJakarta, atau kendaraan pribadi. Stasiun Jakarta Kota adalah pintu masuk utama Kota Tua.',
    h1: 'Cara ke Museum Wayang',
    lead: 'Cara paling umum ke Museum Wayang adalah turun di Stasiun Jakarta Kota (KRL) lalu berjalan kaki sekitar 10 menit ke arah Taman Fatahillah. TransJakarta juga melayani Kota Tua. Konfirmasikan rute aktif dan pintu keluar dengan operator.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'krl', heading: 'Naik KRL', paragraphs: [
        'Stasiun Jakarta Kota (Beos) adalah gerbang KRL ke Kota Tua. Dari stasiun, museum berjarak sekitar 10 menit jalan kaki melalui kawasan Kali Besar menuju Taman Fatahillah.',
        'Lihat halaman khusus "Museum Wayang naik KRL" untuk rincian stasiun dan keluar.' ] },
      { id: 'transjakarta', heading: 'Naik TransJakarta', paragraphs: [
        'Beberapa koridor dan rute perbatasan melayani halte sekitar Kota Tua. Konfirmasikan nomor koridor dan halte tujuan terkini dengan TransJakarta.',
        'Lihat halaman "Museum Wayang naik TransJakarta" untuk catatan turun.' ] },
      { id: 'kendaraan', heading: 'Kendaraan pribadi', paragraphs: [
        'Museum berada di kawasan Jalan Pintu Besar Utara, Pinangsia, Taman Sari, Jakarta Barat. Parkir legal terbatas; lihat panduan parkir dekat Museum Wayang.',
        'Jalan di Kota Tua kerap padat akhir pekan, sehingga transportasi umum sering lebih mudah.' ] }
    ],
    faq: [
      { q: 'Stasiun apa yang paling dekat?', a: 'Stasiun Jakarta Kota (KRL), sekitar 10 menit jalan kaki menuju Taman Fatahillah.' },
      { q: 'Dari Bandara Soekarno-Hatta?', a: 'Gunakan KRL dari Stasiun Bandara Soekarno-Hatta ke Stasiun Jakarta Kota, lalu jalan kaki. Konfirmasikan rute dan waktu tempuh dengan operator.' },
      { q: 'Apakah ada jalur langsung tanpa berjalan?', a: 'Tidak dijamin; konfirmasikan halte/titik turun terdekat dengan operator angkutan.' }
    ],
    related: ['museum-wayang-naik-krl', 'museum-wayang-naik-transjakarta', 'parkir-dekat-museum-wayang', 'museum-wayang-dan-stasiun-jakarta-kota'],
    sources: museumSources
  },
  'museum-wayang-naik-krl': {
    slug: 'museum-wayang-naik-krl', group: 'visit',
    title: 'Museum Wayang Naik KRL: Stasiun Jakarta Kota & Jalan Kaki',
    description: 'Naik KRL ke Museum Wayang: turun di Stasiun Jakarta Kota, keluar ke arah Kota Tua, lalu jalan kaki sekitar 10 menit ke Taman Fatahillah.',
    h1: 'Museum Wayang Naik KRL',
    lead: 'Turun di Stasiun Jakarta Kota (Beos), keluar melalui pintu menuju kawasan Kota Tua, lalu berjalan kaki sekitar 10 menit ke arah Taman Fatahillah di mana Museum Wayang berada.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'stasiun', heading: 'Stasiun tujuan', paragraphs: [
        'Stasiun Jakarta Kota adalah stasiun akhir/penghubung banyak rute KRL Commuterline. Dari sini Kota Tua dapat dijangkau dengan berjalan kaki.',
        'Konfirmasikan jalur aktif, pintu keluar, dan arah Kota Tua melalui informasi KRL resmi sebelum berangkat.' ] },
      { id: 'jalan', heading: 'Jalan kaki dari stasiun', bullets: [
        'Ambil arah keluar menuju Taman Fatahillah / Kali Besar.',
        'Jarak tempuh jalan kaki sekitar 10 menit (tidak dijamin; tergantung rute dan kecepatan).',
        'Museum berada di sisi Jalan Pintu Besar Utara yang menyambung ke Taman Fatahillah.'
      ]}
    ],
    faq: [
      { q: 'Berapa lama jalan kaki dari stasiun?', a: 'Sekitar 10 menit, tergantung rute keluar dan kondisi jalan. Angka ini perkiraan, bukan jaminan.' },
      { q: 'Apakah ramah kursi roda?', a: 'Konfirmasikan akses jalan dan pintu masuk dengan stasiun serta museum; lihat panduan aksesibilitas Museum Wayang.' }
    ],
    related: ['cara-ke-museum-wayang', 'museum-wayang-dan-stasiun-jakarta-kota', 'museum-wayang-untuk-anak'],
    sources: museumSources
  },
  'museum-wayang-naik-transjakarta': {
    slug: 'museum-wayang-naik-transjakarta', group: 'visit',
    title: 'Museum Wayang Naik TransJakarta: Halte Kota Tua',
    description: 'Naik TransJakarta ke Museum Wayang: turun di halte sekitar Kota Tua, lalu jalan kaki ke Taman Fatahillah. Konfirmasikan koridor aktif.',
    h1: 'Museum Wayang Naik TransJakarta',
    lead: 'Beberapa koridor TransJakarta melayani halte di sekitar Kota Tua. Turun di halte terdekat lalu berjalan kaki ke Taman Fatahillah; konfirmasikan nomor koridor dan halte tujuan terkini dengan TransJakarta.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'koridor', heading: 'Koridor & halte', paragraphs: [
        'Rute TransJakarta yang melayani Kota Tua dapat berubah; cek aplikasi atau layanan informasi resmi untuk halte tujuan terdekat ke Taman Fatahillah.',
        'Dari halte, museum berjarak beberapa menit jalan kaki melalui kawasan Kota Tua.' ] },
      { id: 'catatan', heading: 'Catatan turun', bullets: [
        'Konfirmasikan halte tujuan sebelum naik.',
        'Siapkan kartu uang elektronik atau metode bayar TransJakarta.',
        'Akhir pekan Kota Tua padat; sisakan waktu jalan kaki.' ] }
    ],
    faq: [
      { q: 'Halte TransJakarta mana yang paling dekat?', a: 'Tergantung rute aktif; cek informasi TransJakarta untuk halte di sekitar Kota Tua terdekat Taman Fatahillah.' },
      { q: 'Bisa satu tiket dari Bandara?', a: 'Tidak langsung; rute bandara dan Kota Tua berbeda. Konfirmasikan dengan operator.' }
    ],
    related: ['cara-ke-museum-wayang', 'parkir-dekat-museum-wayang', 'wisata-kota-tua-hemat'],
    sources: museumSources
  },
  'parkir-dekat-museum-wayang': {
    slug: 'parkir-dekat-museum-wayang', group: 'visit',
    title: 'Parkir Dekat Museum Wayang Kota Tua',
    description: 'Pilihan parkir di sekitar Museum Wayang dan Taman Fatahillah. Ruang terbatas dan padat akhir pekan; konfirmasikan lokasi serta tarif resmi.',
    h1: 'Parkir Dekat Museum Wayang',
    lead: 'Parkir legal di sekitar Kota Tua terbatas dan kerap penuh akhir pekan. Tanyakan lokasi parkir resmi, tarif, dan titik turun; transportasi umum sering lebih mudah daripada membawa kendaraan pribadi.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'pilihan', heading: 'Pilihan parkir', paragraphs: [
        'Beberapa lahan parkir umum dan tepi jalan dikelola di sekitar Kota Tua, tetapi kapasitas tidak dijamin dan tarif bervariasi.',
        'Konfirmasikan lokasi parkir resmi, tarif berlaku, dan jam operasional melalui penyedia setempat sebelum tiba.' ] },
      { id: 'tips', heading: 'Tips', bullets: [
        'Gunakan KRL/TransJakarta bila memungkinkan untuk menghindari parkir penuh.',
        'Datang lebih awal pada akhir pekan dan hari libur.',
        'Tanyakan titik turun terdekat ke museum, bukan hanya parkir.' ] }
    ],
    faq: [
      { q: 'Apakah museum punya parkir sendiri?', a: 'Tidak dijamin tersedia; tanyakan parkir legal terdekat dan tarif resmi melalui penyedia setempat.' },
      { q: 'Parkir gratis?', a: 'Tarif bervariasi dan tidak dijamin gratis; konfirmasikan dengan pengelola parkir.' }
    ],
    related: ['cara-ke-museum-wayang', 'museum-wayang-naik-krl', 'wisata-kota-tua-hemat'],
    sources: museumSources
  },
  'berapa-lama-mengunjungi-museum-wayang': {
    slug: 'berapa-lama-mengunjungi-museum-wayang', group: 'visit',
    title: 'Berapa Lama Mengunjungi Museum Wayang? (Waktu Tempuh)',
    description: 'Perkiraan waktu kunjungan Museum Wayang: 1–2 jam untuk pameran inti, lebih lama bila ada pertunjukan atau kunjungan sekolah. Sesuaikan dengan rute Kota Tua.',
    h1: 'Berapa Lama Mengunjungi Museum Wayang',
    lead: 'Pengunjung umumnya butuh 1–2 jam untuk melihat pameran inti Museum Wayang. Waktu bertambah bila ada pertunjukan wayang, kunjungan bersama anak, atau penyatuan dengan museum lain di Taman Fatahillah.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'estimasi', heading: 'Estimasi waktu', bullets: [
        'Pameran inti (wayang, topeng, boneka): sekitar 1–1,5 jam.',
        'Ditambah ruang imersif/interaktif: hingga 2 jam.',
        'Dengan pertunjukan atau panduan: 2–3 jam.'
      ]},
      { id: 'gabung', heading: 'Gabung dengan Kota Tua', paragraphs: [
        'Museum Wayang bersebelahan dengan Taman Fatahillah dan Museum Sejarah Jakarta, sehingga setengah hari hingga sehari mudah dijalani.',
        'Lihat itinerary setengah hari dan sehari di Kota Tua untuk penyusunan waktu.' ] }
    ],
    faq: [
      { q: 'Cukup 1 jam?', a: 'Untuk pameran inti cukup, tetapi ruang imersif dan pertunjukan butuh tambahan waktu.' },
      { q: 'Worth it for kids?', a: 'Ya, bila disiapkan sebagai kunjungan interaktif; lihat Museum Wayang untuk anak.' }
    ],
    related: ['panduan-kunjungan-museum-wayang', 'itinerary-setengah-hari-kota-tua', 'museum-wayang-untuk-anak'],
    sources: museumSources
  },
  'fasilitas-museum-wayang': {
    slug: 'fasilitas-museum-wayang', group: 'visit',
    title: 'Fasilitas Museum Wayang: Ruang Pamer & Fasilitas Pengunjung',
    description: 'Fasilitas Museum Wayang mencakup ruang pamer wayang/topeng/boneka, ruang imersif, serta fasilitas dasar pengunjung. Konfirmasikan ketersediaan sebelum tiba.',
    h1: 'Fasilitas Museum Wayang',
    lead: 'Museum menyediakan ruang pamer wayang, topeng, dan boneka, serta elemen interaktif/imersif hasil pembaruan 2025. Untuk toilet, ruang ibadah, dan fasilitas lain, konfirmasikan kondisi aktif dengan pengelola.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'ruang', heading: 'Ruang & pameran', paragraphs: [
        'Siaran pers Pemprov Jakarta 24 Januari 2025 mencantumkan tata pamer wayang, topeng, dan boneka dengan pengalaman interaktif dan imersif.',
        'Tidak semua ruang atau alat dijamin tersedia hari ini; ikuti petunjuk staf dan label kuratorial.' ] },
      { id: 'pengunjung', heading: 'Fasilitas pengunjung', bullets: [
        'Toilet, ruang ibadah, dan bantuan dasar: tanyakan kondisi operasional.',
        'Akses lantai atas, kursi roda, pendampingan: lihat panduan aksesibilitas.',
        'Makanan/ATM/penginapan di luar museum: cek penyedia masing-masing.' ] }
    ],
    faq: [
      { q: 'Ada ruang imersif?', a: 'Pembaruan 2025 menyebut elemen imersif/interaktif; konfirmasikan ruang yang sedang beroperasi.' },
      { q: 'Ada toilet dan musala?', a: 'Tanyakan ketersediaan dan lokasi kepada petugas saat kedatangan.' }
    ],
    related: ['ruang-immersif-museum-wayang', 'aksesibilitas-museum-wayang', 'panduan-kunjungan-museum-wayang'],
    sources: museumSources
  },
  'aksesibilitas-museum-wayang': {
    slug: 'aksesibilitas-museum-wayang', group: 'visit',
    title: 'Aksesibilitas Museum Wayang: Kursi Roda & Pengunjung Disabilitas',
    description: 'Panduan aksesibilitas Museum Wayang untuk kursi roda, lansia, dan pengunjung disabilitas. Konfirmasikan ramp, lift, dan bantuan sebelum tiba.',
    h1: 'Aksesibilitas Museum Wayang',
    lead: 'Museum menyatakan pembaruan fasilitas, tetapi rincian akses (ramp, lift, akses lantai atas, kursi roda, toilet, ruang ibadah, pendampingan) harus dikonfirmasikan dengan pengelola sebelum kedatangan.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'tanya', heading: 'Yang perlu dikonfirmasi', bullets: [
        'Jalur masuk dan ramp yang benar-benar dapat diakses.',
        'Ketersediaan lift dan akses ke lantai atas.',
        'Kursi roda, toilet, dan ruang ibadah yang beroperasi.',
        'Bantuan petugas dan kebutuhan sensorik.'
      ]},
      { id: 'tips', heading: 'Tips kunjungan', paragraphs: [
        'Jangan menganggap deskripsi akses lama masih berlaku. Tanyakan kondisi layanan serta aturan ruang sebelum tiba.',
        'Datang di luar jam puncak bila memungkinkan untuk kenyamanan lebih baik.' ] }
    ],
    faq: [
      { q: 'Boleh kursi roda?', a: 'Tanyakan pintu masuk, jalur, dan fasilitas yang benar-benar beroperasi sebelum datang.' },
      { q: 'Ada pendampingan?', a: 'Konfirmasikan dengan pengelola; panduan ini tidak menjamin ketersediaan pendamping.' }
    ],
    related: ['fasilitas-museum-wayang', 'museum-wayang-untuk-anak', 'wisata-kota-tua-bersama-anak'],
    sources: museumSources
  },
  'museum-wayang-untuk-anak': {
    slug: 'museum-wayang-untuk-anak', group: 'visit',
    title: 'Museum Wayang untuk Anak: Kunjungan Keluarga & Edukasi',
    description: 'Tips membawa anak ke Museum Wayang: koleksi wayang yang menarik, ruang interaktif, durasi 1–2 jam, dan penyatuan dengan Taman Fatahillah.',
    h1: 'Museum Wayang untuk Anak',
    lead: 'Museum Wayang cocok untuk anak karena koleksi wayang, topeng, dan boneka yang visual, serta elemen interaktif. Siapkan kunjungan 1–2 jam dan gabungkan dengan Taman Fatahillah di sebelahnya.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'menarik', heading: 'Mengapa menarik', bullets: [
        'Koleksi wayang kulit, wayang golek, topeng, dan boneka dari berbagai daerah.',
        'Elemen interaktif/imersif hasil pembaruan 2025.',
        'Tokoh pewayangan mudah dikenali anak melalui dongeng.'
      ]},
      { id: 'tips', heading: 'Tips orang tua', paragraphs: [
        'Siapkan durasi 1–2 jam agar tidak lelah.',
        'Konfirmasikan fasilitas ramah anak (toilet, ruang ibadah) sebelum tiba.',
        'Lihat wisata Kota Tua bersama anak untuk rute keluarga lintas museum.' ] }
    ],
    faq: [
      { q: 'Berapa usia cocok?', a: 'Usia sekolah dasar umumnya paling menikmati; lebih muda butuh pengawasan ketat.' },
      { q: 'Ada kegiatan khusus anak?', a: 'Cek program museum untuk tanggal kunjungan; tidak dijamin ada kegiatan rutin.' }
    ],
    related: ['kunjungan-sekolah-museum-wayang', 'wisata-kota-tua-bersama-anak', 'aksesibilitas-museum-wayang'],
    sources: museumSources
  },
  'kunjungan-sekolah-museum-wayang': {
    slug: 'kunjungan-sekolah-museum-wayang', group: 'visit',
    title: 'Kunjungan Sekolah ke Museum Wayang',
    description: 'Panduan kunjungan belajar mengajar ke Museum Wayang: persiapan, durasi, dan koordinasi dengan pihak museum untuk grup.',
    h1: 'Kunjungan Sekolah ke Museum Wayang',
    lead: 'Kunjungan sekolah ke Museum Wayang membutuhkan koordinasi jadwal, jumlah peserta, dan ketentuan grup dengan pengelola. Siapkan durasi 2–3 jam bila digabung dengan Taman Fatahillah.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'persiapan', heading: 'Persiapan', bullets: [
        'Koordinasikan hari dan jam dengan pengelola; hindari Senin (tutup).',
        'Pastikan pembimbing memadai untuk jumlah siswa.',
        'Siapkan materi pendamping agar kunjungan terarah.'
      ]},
      { id: 'saat', heading: 'Saat kunjungan', paragraphs: [
        'Gunakan label kuratorial dan contoh wayang untuk menjelaskan tokoh dan daerah asal.',
        'Gabungkan dengan Museum Sejarah Jakarta di Taman Fatahillah bila waktu mencukupi.' ] }
    ],
    faq: [
      { q: 'Perlu reservasi?', a: 'Konfirmasikan dengan pengelola; kunjungan grup sering perlu koordinasi.' },
      { q: 'Berapa biaya siswa?', a: 'Bapenda mencantumkan Rp5.000 untuk anak/mahasiswa; konfirmasikan kategori dan bukti.' }
    ],
    related: ['museum-wayang-untuk-anak', 'harga-tiket-museum-wayang', 'museum-wayang-dan-museum-sejarah-jakarta'],
    sources: museumSources
  },
  'panduan-foto-museum-wayang': {
    slug: 'panduan-foto-museum-wayang', group: 'visit',
    title: 'Panduan Foto di Museum Wayang: Aturan & Objek',
    description: 'Aturan dan tips fotografi di Museum Wayang: ikuti ketentuan museum, hindari flash pada benda sensitif, dan objek menarik seperti wayang kulit.',
    h1: 'Panduan Foto Museum Wayang',
    lead: 'Foto diperbolehkan mengikuti ketentuan museum. Hindari flash dan tripod pada benda sensitif, hormati pengunjung lain, dan tanyakan staf bila ragu. Koleksi wayang kulit dan topeng merupakan objek fotografi yang kaya.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'aturan', heading: 'Aturan dasar', bullets: [
        'Ikuti papan petunjuk dan arahan staf tentang foto.',
        'Hindari flash pada koleksi sensitif terhadap cahaya.',
        'Tanyakan bila menggunakan tripod atau alat profesional.'
      ]},
      { id: 'objek', heading: 'Objek menarik', paragraphs: [
        'Wayang kulit dengan detail ukiran, wayang golek tiga dimensi, dan topeng dari berbagai daerah.',
        'Arsitektur gedung dan Taman Fatahillah di seberangnya juga sering difoto.' ] }
    ],
    faq: [
      { q: 'Boleh pakai flash?', a: 'Hindari flash pada benda sensitif; ikuti ketentuan museum.' },
      { q: 'Boleh video?', a: 'Konfirmasikan dengan staf; aturan dapat berbeda untuk video.' }
    ],
    related: ['koleksi-museum-wayang', 'sejarah-gedung-museum-wayang', 'museum-wayang-dan-taman-fatahillah'],
    sources: museumSources
  },
  'ruang-immersif-museum-wayang': {
    slug: 'ruang-immersif-museum-wayang', group: 'visit',
    title: 'Ruang Imersif Museum Wayang: Pengalaman Interaktif',
    description: 'Ruang imersif dan elemen interaktif Museum Wayang hasil pembaruan 2025. Konfirmasikan ruang yang sedang beroperasi sebelum kunjungan.',
    h1: 'Ruang Imersif Museum Wayang',
    lead: 'Pembaruan museum yang diresmikan 24 Januari 2025 menyebut pengalaman interaktif dan imersif pada tata pamer wayang, topeng, dan boneka. Konfirmasikan ruang yang sedang beroperasi untuk tanggal kunjungan Anda.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'pembaruan', heading: 'Dari pembaruan 2025', paragraphs: [
        'Siaran pers Pemprov Jakarta 24 Januari 2025 melaporkan pengalaman interaktif dan imersif sebagai bagian pembaruan museum.',
        'Ini membantu pengunjung, termasuk anak, memahami pewayangan secara lebih langsung.' ] },
      { id: 'konfirmasi', heading: 'Konfirmasi sebelum datang', paragraphs: [
        'Tidak semua ruang atau alat dijamin tersedia hari ini. Tanyakan ruang imersif yang beroperasi dan apakah butuh antrean atau sesi tertentu.' ] }
    ],
    faq: [
      { q: 'Gratis masuk ruang imersif?', a: 'Termasuk dalam kunjungan bila beroperasi; konfirmasikan ketentuannya.' },
      { q: 'Perlu reservasi?', a: 'Tanyakan apakah ada sesi atau kuota tertentu.' }
    ],
    related: ['fasilitas-museum-wayang', 'museum-wayang-untuk-anak', 'pertunjukan-wayang-museum-wayang'],
    sources: museumSources
  },
  'pertunjukan-wayang-museum-wayang': {
    slug: 'pertunjukan-wayang-museum-wayang', group: 'visit',
    title: 'Pertunjukan Wayang di Museum Wayang',
    description: 'Informasi pertunjukan wayang di Museum Wayang: arsip mencatat pertunjukan tertentu, bukan jadwal rutin. Konfirmasikan program untuk tanggal kunjungan.',
    h1: 'Pertunjukan Wayang di Museum Wayang',
    lead: 'Pertunjukan wayang tidak dijamin tersedia setiap hari. Arsip Dinas Kebudayaan mencatat pergelaran Wayang Orang Betawi pada 29 Maret 2026, tetapi satu acara bukan jaminan jadwal rutin. Konfirmasikan program dan reservasi untuk tanggal Anda.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'arsip', heading: 'Yang tercatat', paragraphs: [
        'Dinas Kebudayaan mencatat pergelaran Wayang Orang Betawi pada 29 Maret 2026.',
        'Meski arsip menyebut "rutin", satu catatan acara tidak menjamin pertunjukan setiap minggu atau jam tertentu.' ] },
      { id: 'konfirmasi', heading: 'Konfirmasi', bullets: [
        'Cek pengumuman bertanggal untuk kunjungan Anda.',
        'Tanyakan apakah tiket termasuk atau ada biaya tambahan.',
        'Tanyakan reservasi bila acara berbayar/terbatas.'
      ]}
    ],
    faq: [
      { q: 'Setiap hari ada pertunjukan?', a: 'Tidak dijamin. Konfirmasikan program tertentu untuk tanggal kunjungan.' },
      { q: 'Gratis atau berbayar?', a: 'Tanyakan apakah termasuk tiket masuk atau butuh biaya/reservasi tambahan.' }
    ],
    related: ['gamelan-dan-pertunjukan-wayang', 'ruang-immersif-museum-wayang', 'koleksi-museum-wayang'],
    sources: museumSources
  },

  // ───────────────────────── B. Wayang, sejarah & koleksi ─────────────────────────
  'sejarah-museum-wayang': {
    slug: 'sejarah-museum-wayang', group: 'culture',
    title: 'Sejarah Museum Wayang Jakarta',
    description: 'Sejarah Museum Wayang: dari gereja Belanda abad ke-17, gudang, hingga museum wayang yang diresmikan 1975 oleh Gubernur Ali Sadikin.',
    h1: 'Sejarah Museum Wayang',
    lead: 'Gedung Museum Wayang awalnya berfungsi sebagai gereja Belanda pada abad ke-17, kemudian menjadi gudang, dan diresmikan sebagai Museum Wayang pada 1975 oleh Gubernur DKI Jakarta Ali Sadikin. Catatan sejarah bervariasi; verifikasi detail melalui sumber resmi.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'gedung', heading: 'Gedung dan perubahan fungsi', paragraphs: [
        'Berdasarkan catatan sejarah Kota Tua, bangunan di Jalan Pintu Besar Utara pernah digunakan sebagai gereja Belanda (sekitar abad ke-17) dan kemudian sebagai gudang sebelum difungsikan sebagai museum.',
        'Pada 1975, di masa Gubernur Ali Sadikin, bangunan ini diresmikan menjadi Museum Wayang yang kita kenal.' ] },
      { id: 'koleksi', heading: 'Dari koleksi menjadi lembaga', paragraphs: [
        'Museum berfokus pada pewayangan dan kini dikelola Unit Pengelola Museum Seni menurut portal nasional.',
        'Lihat juga halaman sejarah gedung Museum Wayang dan koleksi Museum Wayang untuk rincian bangunan dan benda.' ] }
    ],
    faq: [
      { q: 'Kapan museum diresmikan?', a: '1975, pada masa Gubernur Ali Sadikin, menurut catatan sejarah umum Kota Tua.' },
      { q: 'Apa fungsi gedung sebelumnya?', a: 'Sempat menjadi gereja Belanda dan gudang sebelum menjadi museum.' }
    ],
    related: ['sejarah-gedung-museum-wayang', 'koleksi-museum-wayang', 'tradisi-wayang-indonesia'],
    sources: museumSources
  },
  'sejarah-gedung-museum-wayang': {
    slug: 'sejarah-gedung-museum-wayang', group: 'culture',
    title: 'Sejarah Gedung Museum Wayang (Bangunan Kota Tua)',
    description: 'Sejarah bangunan Museum Wayang di Kota Tua: gereja Belanda abad ke-17, gudang VOC/perdagangan, lalu museum. Verifikasi detail arsitektur.',
    h1: 'Sejarah Gedung Museum Wayang',
    lead: 'Bangunan Museum Wayang merupakan salah satu rumah kolonial tua di Kota Tua yang pernah berfungsi sebagai gereja Belanda dan gudang sebelum dijadikan museum pada 1975. Detail arsitektur dan tahun bervariasi antar catatan; verifikasi melalui sumber resmi.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'arsitektur', heading: 'Arsitektur kolonial', paragraphs: [
        'Bangunan bergaya kolonial dengan elemen yang masih terlihat pada fasad di Jalan Pintu Besar Utara.',
        'Catatan umum menyebut fungsi awal sebagai gereja Belanda (abad ke-17) dan penggunaan sebagai gudang sebelum masa museum.' ] },
      { id: 'verifikasi', heading: 'Verifikasi', paragraphs: [
        'Tahun pendirian dan detail renovasi berbeda antar sumber. Gunakan profil museum Kementerian Kebudayaan dan catatan DKI untuk pemeriksaan.',
        'Jangan menganggap satu angka tahun sebagai pasti tanpa sumber resmi.' ] }
    ],
    faq: [
      { q: 'Berapa usia bangunan?', a: 'Catatan umum menyebut akar abad ke-17; verifikasi tahun pasti melalui sumber resmi.' },
      { q: 'Apakah bangunan bersejarah?', a: 'Ya, termasuk bangunan tua Kota Tua; status perlindungan detail verifikasi melalui instansi terkait.' }
    ],
    related: ['sejarah-museum-wayang', 'koleksi-museum-wayang', 'museum-wayang-dan-taman-fatahillah'],
    sources: museumSources
  },
  'koleksi-museum-wayang': {
    slug: 'koleksi-museum-wayang', group: 'culture',
    title: 'Koleksi Museum Wayang: Wayang, Topeng & Boneka',
    description: 'Koleksi Museum Wayang mencakup wayang kulit, wayang golek, topeng, dan boneka dari Indonesia dan mancanegara. Ikuti label kuratorial.',
    h1: 'Koleksi Museum Wayang',
    lead: 'Koleksi Museum Wayang berpusat pada pewayangan: wayang kulit, wayang golek, topeng, dan boneka dari berbagai daerah Indonesia serta beberapa koleksi mancanegara. Ikuti label kuratorial; tidak semua benda lama pasti sedang dipajang.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'inti', heading: 'Koleksi inti', bullets: [
        'Wayang kulit (kulit kerbau, bayangan).',
        'Wayang golek (kayu, tiga dimensi).',
        'Topeng dari berbagai daerah.',
        'Boneka dan bentuk teater rakyat lain.'
      ]},
      { id: 'mancanegara', heading: 'Koleksi mancanegara', paragraphs: [
        'Museum juga menyimpan boneka dari beberapa negara sebagai bagian perbandingan teater boneka dunia.',
        'Lihat halaman boneka mancanegara di Museum Wayang untuk rincian.' ] }
    ],
    faq: [
      { q: 'Apa saja yang dipajang?', a: 'Wayang kulit, wayang golek, topeng, dan boneka Indonesia serta mancanegara.' },
      { q: 'Boleh disentuh?', a: 'Umumnya tidak; ikuti arahan staf dan label koleksi.' }
    ],
    related: ['wayang-kulit-di-museum-wayang', 'wayang-golek-dan-tradisinya', 'boneka-mancanegara-di-museum-wayang'],
    sources: museumSources
  },
  'wayang-kulit-di-museum-wayang': {
    slug: 'wayang-kulit-di-museum-wayang', group: 'culture',
    title: 'Wayang Kulit di Museum Wayang',
    description: 'Wayang kulit adalah boneka bayangan dari kulit kerbau, warisan takbenda UNESCO. Museum Wayang memajang berbagai tokoh dan gaya daerah.',
    h1: 'Wayang Kulit di Museum Wayang',
    lead: 'Wayang kulit adalah boneka bayangan tipis dari kulit kerbau yang dimainkan di balik kelir (layar). Seni ini diakui UNESCO sebagai Warisan Budaya Takbenda. Museum Wayang memajang tokoh dan gaya dari berbagai daerah.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'bentuk', heading: 'Bentuk & bahan', paragraphs: [
        'Wayang kulit dibuat dari kulit kerbau yang diukir dan diberi tangkai tanduk. Digunakan dengan sumber cahaya di balik layar putih (kelir).',
        'Tiap daerah memiliki gaya ukiran dan pewarnaan tersendiri.' ] },
      { id: 'tokoh', heading: 'Tokoh', paragraphs: [
        'Koleksi mencakup tokoh Ramayana, Mahabharata, dan cerita lokal seperti Panji.',
        'Pengunjung dapat melihat perbedaan proporsi dan detail antar gaya daerah.' ] }
    ],
    faq: [
      { q: 'Apa bedanya dengan wayang golek?', a: 'Wayang kulit datar dari kulit untuk bayangan; wayang golek tiga dimensi dari kayu. Lihat perbandingan keduanya.' },
      { q: 'Apakah UNESCO?', a: 'Ya, seni wayang Indonesia diakui UNESCO; lihat halaman wayang warisan UNESCO.' }
    ],
    related: ['perbedaan-wayang-kulit-dan-wayang-golek', 'wayang-warisan-budaya-unesco', 'koleksi-museum-wayang'],
    sources: [
      { label: 'UNESCO — Wayang puppet theatre', href: 'https://ich.unesco.org/en/RL/wayang-puppet-theatre-00062' },
      ...museumSources
    ]
  },
  'wayang-golek-dan-tradisinya': {
    slug: 'wayang-golek-dan-tradisinya', group: 'culture',
    title: 'Wayang Golek & Tradisinya (Jawa Barat)',
    description: 'Wayang golek adalah boneka kayu tiga dimensi dari Jawa Barat, dimainkan dengan tangan. Tradisi Sunda yang hidup dalam pertunjukan dan hiburan.',
    h1: 'Wayang Golek dan Tradisinya',
    lead: 'Wayang golek adalah boneka kayu tiga dimensi dari Jawa Barat yang digerakkan dengan tangan, berbeda dari wayang kulit yang datar. Tradisi Sunda ini hidup dalam pertunjukan hiburan dan upacara.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'bentuk', heading: 'Bentuk & cara main', paragraphs: [
        'Wayang golek terbuat dari kayu dengan tangkai di tubuh dan lengan untuk digerakkan dalang.',
        'Lazim dalam tradisi Sunda (Jawa Barat) dan sering mengambil kisah Mahabharata serta cerita lucu lokal.' ] },
      { id: 'tradisi', heading: 'Dalam kehidupan Sunda', paragraphs: [
        'Wayang golek sering dipentaskan untuk hiburan, hajatan, dan ruwatan.',
        'Museum memajang contoh wayang golek sebagai bagian perbandingan dengan wayang kulit.' ] }
    ],
    faq: [
      { q: 'Daerah mana asalnya?', a: 'Tradisi Sunda, Jawa Barat, meski dikenal di berbagai tempat.' },
      { q: 'Dimainkan tangan atau bayangan?', a: 'Dimainkan dengan tangan (tiga dimensi), bukan bayangan seperti wayang kulit.' }
    ],
    related: ['perbedaan-wayang-kulit-dan-wayang-golek', 'wayang-kulit-di-museum-wayang', 'tradisi-wayang-indonesia'],
    sources: museumSources
  },
  'perbedaan-wayang-kulit-dan-wayang-golek': {
    slug: 'perbedaan-wayang-kulit-dan-wayang-golek', group: 'culture',
    title: 'Perbedaan Wayang Kulit dan Wayang Golek',
    description: 'Perbandingan wayang kulit (kulit, datar, bayangan) dan wayang golek (kayu, tiga dimensi, tangan). Bahan, cara main, dan daerah berbeda.',
    h1: 'Perbedaan Wayang Kulit dan Wayang Golek',
    lead: 'Perbedaan utama: wayang kulit terbuat dari kulit kerbau, datar, dan dimainkan di balik layar sebagai bayangan; wayang golek terbuat dari kayu, tiga dimensi, dan digerakkan tangan. Daerah asal dan cara pementasan juga berbeda.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'banding', heading: 'Perbandingan', bullets: [
        'Bahan: kulit kerbau (kulit) vs kayu (golek).',
        'Bentuk: datar tipis vs tiga dimensi.',
        'Cara main: bayangan di balik kelir vs gerak tangan dalang.',
        'Daerah: beragam (kulit) vs tradisi Sunda (golek).'
      ]},
      { id: 'museum', heading: 'Di Museum Wayang', paragraphs: [
        'Koleksi museum memajang keduanya sehingga pengunjung dapat membandingkan langsung teknik dan gaya.',
        'Lihat halaman wayang kulit dan wayang golek untuk rincian masing-masing.' ] }
    ],
    faq: [
      { q: 'Mana yang lebih tua?', a: 'Keduanya panjang sejarahnya; wayang kulit lebih sering dikaitkan dengan tradisi istana kuna.' },
      { q: 'Mana yang untuk anak?', a: 'Wayang golek tiga dimensi sering lebih mudah diamati anak secara langsung.' }
    ],
    related: ['wayang-kulit-di-museum-wayang', 'wayang-golek-dan-tradisinya', 'koleksi-museum-wayang'],
    sources: museumSources
  },
  'tradisi-wayang-indonesia': {
    slug: 'tradisi-wayang-indonesia', group: 'culture',
    title: 'Tradisi Wayang Indonesia: Seni Bertutur Nusantara',
    description: 'Tradisi wayang Indonesia sebagai seni bertutur, musik, dan bayangan yang hidup di berbagai daerah. Diakui UNESCO sebagai warisan takbenda.',
    h1: 'Tradisi Wayang Indonesia',
    lead: 'Wayang adalah seni bertutur Nusantara yang memadukan boneka, musik gamelan, dan narasi epik. Tradisi ini hidup di berbagai daerah dengan bentuk berbeda dan diakui UNESCO sebagai Warisan Budaya Takbenda.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'nusantara', heading: 'Keragaman daerah', paragraphs: [
        'Bentuk wayang bervariasi: kulit, golek, beber, dan lainnya, masing-masing dengan tradisi daerah.',
        'Museum Wayang merangkum contoh dari berbagai daerah sebagai pusat referensi pewayangan.' ] },
      { id: 'unesco', heading: 'Pengakuan dunia', paragraphs: [
        'UNESCO mencatat Wayang puppet theatre dalam daftar Warisan Budaya Takbenda.',
        'Lihat halaman wayang warisan UNESCO untuk detail pengakuan.' ] }
    ],
    faq: [
      { q: 'Apa inti pertunjukan wayang?', a: 'Narasi epik (Ramayana/Mahabharata atau lokal) yang dibawakan dalang dengan iringan gamelan.' },
      { q: 'Diakui UNESCO?', a: 'Ya, seni wayang Indonesia diakui UNESCO sebagai warisan budaya takbenda.' }
    ],
    related: ['wayang-warisan-budaya-unesco', 'gamelan-dan-pertunjukan-wayang', 'wayang-kulit-di-museum-wayang'],
    sources: [
      { label: 'UNESCO — Wayang puppet theatre', href: 'https://ich.unesco.org/en/RL/wayang-puppet-theatre-00062' },
      ...museumSources
    ]
  },
  'boneka-mancanegara-di-museum-wayang': {
    slug: 'boneka-mancanegara-di-museum-wayang', group: 'culture',
    title: 'Boneka Mancanegara di Museum Wayang',
    description: 'Museum Wayang juga memajang boneka dari beberapa negara sebagai perbandingan teater boneka dunia. Bukan sekadar wayang Indonesia.',
    h1: 'Boneka Mancanegara di Museum Wayang',
    lead: 'Selain wayang Indonesia, Museum Wayang menyimpan boneka dari beberapa negara sebagai bagian perbandingan teater boneka dunia. Ini menunjukkan persamaan dan perbedaan tradisi boneka lintas budaya.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'perbandingan', heading: 'Teater boneka dunia', paragraphs: [
        'Koleksi mancanegara memperlihatkan ragam bentuk boneka dan teknik dari budaya lain.',
        'Perbandingan ini membantu pengunjung memahami wayang dalam konteks teater boneka global.' ] },
      { id: 'catatan', heading: 'Catatan', paragraphs: [
        'Jumlah dan asal boneka mancanegara bervariasi; ikuti label kuratorial di ruang pamer.',
        'Tidak semua benda lama pasti sedang dipajang.' ] }
    ],
    faq: [
      { q: 'Ada boneka dari negara mana?', a: 'Beberapa negara terwakili; ikuti label kuratorial untuk asal masing-masing.' },
      { q: 'Apakah ini fokus utama museum?', a: 'Tidak; fokus utama tetaplah pewayangan Indonesia, dengan mancanegara sebagai perbandingan.' }
    ],
    related: ['koleksi-museum-wayang', 'tradisi-wayang-indonesia', 'wayang-golek-dan-tradisinya'],
    sources: museumSources
  },
  'gamelan-dan-pertunjukan-wayang': {
    slug: 'gamelan-dan-pertunjukan-wayang', group: 'culture',
    title: 'Gamelan & Pertunjukan Wayang',
    description: 'Pertunjukan wayang diiringi gamelan. Pelajari peran gamelan, dalang, dan susunan pertunjukan dalam tradisi pewayangan.',
    h1: 'Gamelan dan Pertunjukan Wayang',
    lead: 'Pertunjukan wayang tidak lepas dari gamelan sebagai pengiring. Dalang memimpin narasi sekaligus menggerakkan boneka, dibantu nayaga (pemain gamelan) dan sinden (penyanyi).',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'peran', heading: 'Peran dalam pertunjukan', bullets: [
        'Dalang: pemimpin sekaligus penggerak boneka dan penutur cerita.',
        'Nayaga: pemain gamelan pengiring.',
        'Sinden: penyanyi yang melantunkan tembang.'
      ]},
      { id: 'museum', heading: 'Di Museum Wayang', paragraphs: [
        'Museum menyajikan konteks pertunjukan melalui koleksi dan kadang pertunjukan langsung (konfirmasikan jadwal).',
        'Lihat pertunjukan wayang di Museum Wayang untuk status acara.' ] }
    ],
    faq: [
      { q: 'Apa itu gamelan?', a: 'Ansambel alat musik tradisional Indonesia, biasanya berbilah dan berpendar, pengiring wayang.' },
      { q: 'Siapa dalang?', a: 'Maestro yang memimpin pertunjukan sekaligus menggerakkan boneka dan menuturkan cerita.' }
    ],
    related: ['pertunjukan-wayang-museum-wayang', 'tradisi-wayang-indonesia', 'koleksi-museum-wayang'],
    sources: museumSources
  },
  'wayang-warisan-budaya-unesco': {
    slug: 'wayang-warisan-budaya-unesco', group: 'culture',
    title: 'Wayang Warisan Budaya UNESCO',
    description: 'Seni wayang Indonesia diakui UNESCO sebagai Warisan Budaya Takbenda. Bukan bangunan Museum Wayang yang diakui, melainkan tradisi pewayangannya.',
    h1: 'Wayang Warisan Budaya UNESCO',
    lead: 'UNESCO mengakui seni Wayang puppet theatre Indonesia sebagai Warisan Budaya Takbenda. Yang diakui adalah tradisi pewayangan (pertunjukan, narasi, dan musik), bukan bangunan Museum Wayang sebagai gedung.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'pengakuan', heading: 'Pengakuan UNESCO', paragraphs: [
        'UNESCO mencatat Wayang puppet theatre dalam Representative List of Intangible Cultural Heritage.',
        'Pengakuan ini menyangkut praktik budaya hidup, bukan status gedung museum.' ] },
      { id: 'klarifikasi', heading: 'Klarifikasi', bullets: [
        'Bangunan Museum Wayang bukan situs warisan UNESCO.',
        'Yang diakui adalah tradisi pewayangan sebagai warisan takbenda.',
        'Museum menjadi tempat belajar tradisi tersebut, bukan subjek pengakuan.'
      ]}
    ],
    faq: [
      { q: 'Apakah Museum Wayang situs UNESCO?', a: 'Tidak. Yang diakui UNESCO adalah tradisi pewayangan, bukan gedungnya.' },
      { q: 'Kapan diakui?', a: 'Wayang Indonesia dicatat UNESCO dalam daftar warisan budaya takbenda; verifikasi tahun melalui situs UNESCO.' }
    ],
    related: ['tradisi-wayang-indonesia', 'sejarah-museum-wayang', 'wayang-kulit-di-museum-wayang'],
    sources: [
      { label: 'UNESCO — Wayang puppet theatre', href: 'https://ich.unesco.org/en/RL/wayang-puppet-theatre-00062' }
    ]
  },

  // ───────────────────────── C. Museum & bangunan Kota Tua ─────────────────────────
  'museum-wayang-dan-taman-fatahillah': {
    slug: 'museum-wayang-dan-taman-fatahillah', group: 'nearby',
    title: 'Museum Wayang & Taman Fatahillah',
    description: 'Museum Wayang bersebelahan dengan Taman Fatahillah, alun-alun utama Kota Tua. Gabungkan keduanya dalam satu kunjungan singkat.',
    h1: 'Museum Wayang dan Taman Fatahillah',
    lead: 'Museum Wayang terletak tepat di sisi Taman Fatahillah, alun-alun bersejarah Kota Tua. Keduanya dapat dikunjungi bersama dalam satu jalan kaki singkat tanpa biaya masuk ke alun-alun.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'jarak', heading: 'Jarak & akses', paragraphs: [
        'Museum Wayang berada di Jalan Pintu Besar Utara yang menyambung ke Taman Fatahillah; berjalan kaki hanya beberapa menit.',
        'Taman Fatahillah bebas masuk dan menjadi titik kumpul wisatawan Kota Tua.' ] },
      { id: 'gabung', heading: 'Cara menggabungkan', bullets: [
        'Mulai dari Museum Wayang, lalu keluar ke Taman Fatahillah.',
        'Taman dikelilingi Museum Sejarah Jakarta dan Museum Seni Rupa & Keramik.',
        'Cocok untuk setengah hari santai tanpa pindah kendaraan.'
      ]}
    ],
    faq: [
      { q: 'Berapa jarak jalan kaki?', a: 'Sangat dekat, beberapa menit dari pintu museum ke alun-alun.' },
      { q: 'Gratis masuk taman?', a: 'Ya, Taman Fatahillah bebas masuk; museum butuh tiket.' }
    ],
    related: ['museum-wayang-dan-museum-sejarah-jakarta', 'museum-wayang-dan-museum-seni-rupa-dan-keramik', 'itinerary-setengah-hari-kota-tua'],
    sources: museumSources
  },
  'museum-wayang-dan-museum-sejarah-jakarta': {
    slug: 'museum-wayang-dan-museum-sejarah-jakarta', group: 'nearby',
    title: 'Museum Wayang & Museum Sejarah Jakarta (Fatahillah)',
    description: 'Museum Sejarah Jakarta (Museum Fatahillah) berhadapan dengan Taman Fatahillah, beberapa menit dari Museum Wayang. Bekas Stadhuis Batavia.',
    h1: 'Museum Wayang dan Museum Sejarah Jakarta',
    lead: 'Museum Sejarah Jakarta (Museum Fatahillah) menempati bekas Stadhuis Batavia dan berhadapan dengan Taman Fatahillah, hanya beberapa menit jalan kaki dari Museum Wayang. Cocok digabung dalam satu kunjungan.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'bangunan', heading: 'Bangunan bersejarah', paragraphs: [
        'Museum Sejarah Jakarta menempati bekas balai kota (Stadhuis) Batavia, salah satu bangunan kolonial paling dikenal di Kota Tua.',
        'Berhadapan langsung dengan Taman Fatahillah, sehingga mudah dijangkau dari Museum Wayang.' ] },
      { id: 'kunjungan', heading: 'Penyatuan kunjungan', bullets: [
        'Jalan kaki beberapa menit dari Museum Wayang.',
        'Cek jam dan tiket masing-masing (berbeda dengan Museum Wayang).',
        'Lihat perbandingan keduanya untuk memilih fokus.'
      ]}
    ],
    faq: [
      { q: 'Buka Senin?', a: 'Konfirmasikan; Museum Wayang tutup Senin, tetapi museum lain bisa berbeda. Cek halaman museum Kota Tua yang buka Senin.' },
      { q: 'Satu tiket gabung?', a: 'Tidak dijamin; tiket terpisah. Konfirmasikan masing-masing.' }
    ],
    related: ['museum-wayang-vs-museum-sejarah-jakarta', 'museum-wayang-dan-taman-fatahillah', 'museum-di-kota-tua-yang-buka-senin'],
    sources: museumSources
  },
  'museum-wayang-dan-museum-seni-rupa-dan-keramik': {
    slug: 'museum-wayang-dan-museum-seni-rupa-dan-keramik', group: 'nearby',
    title: 'Museum Wayang & Museum Seni Rupa dan Keramik',
    description: 'Museum Seni Rupa dan Keramik berada di Taman Fatahillah, beberapa menit dari Museum Wayang. Koleksi seni dan keramik Nusantara.',
    h1: 'Museum Wayang dan Museum Seni Rupa & Keramik',
    lead: 'Museum Seni Rupa dan Keramik berada di sisi Taman Fatahillah, beberapa menit jalan kaki dari Museum Wayang. Koleksinya melengkapi pewayangan dengan seni rupa dan keramik Nusantara.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'koleksi', heading: 'Koleksi', paragraphs: [
        'Museum ini memajang seni lukis, patung, dan keramik dari berbagai daerah.',
        'Bangunan juga bersejarah dan menghadap Taman Fatahillah.' ] },
      { id: 'gabung', heading: 'Gabung dengan Museum Wayang', bullets: [
        'Jalan kaki beberapa menit dari Museum Wayang.',
        'Cek jam dan tiket (terpisah dari Museum Wayang).',
        'Cocok sebagai lanjutan setelah melihat wayang.'
      ]}
    ],
    faq: [
      { q: 'Dekat dari Museum Wayang?', a: 'Ya, di sekitar Taman Fatahillah, beberapa menit jalan kaki.' },
      { q: 'Satu tiket?', a: 'Tiket terpisah; konfirmasikan masing-masing.' }
    ],
    related: ['museum-wayang-dan-taman-fatahillah', 'museum-wayang-dan-museum-bank-indonesia', 'itinerary-setengah-hari-kota-tua'],
    sources: museumSources
  },
  'museum-wayang-dan-museum-bank-indonesia': {
    slug: 'museum-wayang-dan-museum-bank-indonesia', group: 'nearby',
    title: 'Museum Wayang & Museum Bank Indonesia',
    description: 'Museum Bank Indonesia (bekas De Javasche Bank) di kawasan Kali Besar, sekitar 10–15 menit jalan kaki dari Museum Wayang.',
    h1: 'Museum Wayang dan Museum Bank Indonesia',
    lead: 'Museum Bank Indonesia menempati bekas De Javasche Bank di kawasan Kali Besar, sekitar 10–15 menit jalan kaki dari Museum Wayang. Bangunan kolonialnya megah dan sering digabung dalam rute Kota Tua.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'bangunan', heading: 'Bekas bank sentral', paragraphs: [
        'Museum Bank Indonesia berada di gedung bekas De Javasche Bank, salah satu arsitektur kolonial penting di Kali Besar.',
        'Lokasinya agak ke arah barat dari Taman Fatahillah,仍可 dijangkau jalan kaki.' ] },
      { id: 'rute', heading: 'Rute dari Museum Wayang', bullets: [
        'Jalan kaki sekitar 10–15 menit melalui Kali Besar (perkiraan, bukan jaminan).',
        'Dapat dikombinasikan dengan Museum Bank Mandiri di seberangnya.',
        'Cek jam dan tiket masing-masing.'
      ]}
    ],
    faq: [
      { q: 'Berapa lama jalan kaki?', a: 'Sekitar 10–15 menit perkiraan; tergantung rute dan kecepatan.' },
      { q: 'Gratis?', a: 'Museum Bank Indonesia kerap memiliki kebijakan tersendiri; konfirmasikan tiket.' }
    ],
    related: ['museum-wayang-dan-museum-bank-mandiri', 'museum-wayang-dan-kawasan-kali-besar', 'museum-di-kota-tua-yang-buka-senin'],
    sources: museumSources
  },
  'museum-wayang-dan-museum-bank-mandiri': {
    slug: 'museum-wayang-dan-museum-bank-mandiri', group: 'nearby',
    title: 'Museum Wayang & Museum Bank Mandiri',
    description: 'Museum Bank Mandiri (bekas NHM) berseberangan dengan Museum Bank Indonesia, sekitar 10–15 menit dari Museum Wayang.',
    h1: 'Museum Wayang dan Museum Bank Mandiri',
    lead: 'Museum Bank Mandiri menempati bekas Nederlandsche Handel-Maatschappij (NHM) dan berseberangan dengan Museum Bank Indonesia, sekitar 10–15 menit jalan kaki dari Museum Wayang.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'bangunan', heading: 'Bekas NHM', paragraphs: [
        'Gedung bergaya kolonial ini dahulu milik NHM, bank perdagangan Belanda.',
        'Berada tepat di seberang Museum Bank Indonesia.' ] },
      { id: 'gabung', heading: 'Gabung dalam rute', bullets: [
        'Pasangkan dengan Museum Bank Indonesia (seberang).',
        'Jalan kaki sekitar 10–15 menit dari Museum Wayang.',
        'Cek jam dan tiket masing-masing.'
      ]}
    ],
    faq: [
      { q: 'Berseberangan dengan Museum Bank Indonesia?', a: 'Ya, keduanya saling berhadapan di Kali Besar.' },
      { q: 'Satu tiket?', a: 'Tiket terpisah; konfirmasikan masing-masing.' }
    ],
    related: ['museum-wayang-dan-museum-bank-indonesia', 'museum-wayang-dan-kawasan-kali-besar', 'itinerary-setengah-hari-kota-tua'],
    sources: museumSources
  },
  'museum-wayang-dan-kawasan-kali-besar': {
    slug: 'museum-wayang-dan-kawasan-kali-besar', group: 'nearby',
    title: 'Museum Wayang & Kawasan Kali Besar',
    description: 'Kawasan Kali Besar di Kota Tua menyimpan deretan rumah kolonial tua, sekitar 10–15 menit jalan kaki dari Museum Wayang.',
    h1: 'Museum Wayang dan Kawasan Kali Besar',
    lead: 'Kawasan Kali Besar menyimpan deretan bangunan kolonial tua di tepi kanal, sekitar 10–15 menit jalan kaki dari Museum Wayang. Cocok untuk jalan santai melihat arsitektur.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'arsitektur', heading: 'Rumah kolonial', paragraphs: [
        'Kali Besar dikelilingi bangunan bergaya kolonial yang dulu milik keluarga dan perusahaan Belanda.',
        'Area ini sering dijadikan latar fotografi arsitektur Kota Tua.' ] },
      { id: 'rute', heading: 'Rute', bullets: [
        'Jalan kaki dari Museum Wayang melalui Taman Fatahillah ke arah barat.',
        'Gabungkan dengan Museum Bank Indonesia/Mandiri di tepi kanal.',
        'Waspadai jalan dan lalu lintas saat menyeberang.'
      ]}
    ],
    faq: [
      { q: 'Apa menarik di Kali Besar?', a: 'Deretan bangunan kolonial tua dan kanal bersejarah.' },
      { q: 'Berapa lama?', a: 'Sekitar 10–15 menit jalan kaki dari Museum Wayang, lebih lama bila berhenti berfoto.' }
    ],
    related: ['museum-wayang-dan-museum-bank-indonesia', 'museum-wayang-dan-stasiun-jakarta-kota', 'rute-jalan-kaki-kota-tua-2-jam'],
    sources: museumSources
  },
  'museum-wayang-dan-stasiun-jakarta-kota': {
    slug: 'museum-wayang-dan-stasiun-jakarta-kota', group: 'nearby',
    title: 'Museum Wayang & Stasiun Jakarta Kota (Beos)',
    description: 'Stasiun Jakarta Kota (Beos) adalah pintu masuk KRL Kota Tua, sekitar 10 menit jalan kaki dari Museum Wayang. Bergaya Art Deco.',
    h1: 'Museum Wayang dan Stasiun Jakarta Kota',
    lead: 'Stasiun Jakarta Kota (Beos) adalah gerbang KRL menuju Kota Tua dengan arsitektur Art Deco. Dari stasiun, Museum Wayang berjarak sekitar 10 menit jalan kaki melalui Kali Besar.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'stasiun', heading: 'Gerbang Kota Tua', paragraphs: [
        'Stasiun ini menjadi titik turun sebagian besar pengunjung Kota Tua dengan KRL.',
        'Bangunan bergaya Art Deco dan merupakan landmark transportasi kolonial.' ] },
      { id: 'rute', heading: 'Rute ke museum', bullets: [
        'Keluar stasiun ke arah Kota Tua, jalan kaki sekitar 10 menit.',
        'Lewati kawasan Kali Besar menuju Taman Fatahillah.',
        'Cocok sebagai awal rute jalan kaki 2 jam.'
      ]}
    ],
    faq: [
      { q: 'Berapa jauh dari museum?', a: 'Sekitar 10 menit jalan kaki dari stasiun ke Museum Wayang.' },
      { q: 'Bisa jadi awal itinerary?', a: 'Ya, banyak rute Kota Tua dimulai dari stasiun.' }
    ],
    related: ['cara-ke-museum-wayang', 'rute-jalan-kaki-kota-tua-2-jam', 'museum-wayang-dan-kawasan-kali-besar'],
    sources: museumSources
  },
  'museum-wayang-dan-museum-bahari': {
    slug: 'museum-wayang-dan-museum-bahari', group: 'nearby',
    title: 'Museum Wayang & Museum Bahari',
    description: 'Museum Bahari (bekas gudang VOC) di dekat Pelabuhan Sunda Kelapa, sekitar 1,5 km utara Museum Wayang. Cocok untuk rute lebih panjang.',
    h1: 'Museum Wayang dan Museum Bahari',
    lead: 'Museum Bahari menempati bekas gudang VOC di dekat Pelabuhan Sunda Kelapa, sekitar 1,5 km ke arah utara dari Museum Wayang. Lebih jauh, cocok untuk kunjungan yang digabung dengan jalan kaki panjang atau naik angkutan.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'bangunan', heading: 'Bekas gudang VOC', paragraphs: [
        'Museum Bahari berada di bangunan bekas gudang rempah VOC yang bersejarah.',
        'Lokasinya di ujung utara Kota Tua, dekat Pelabuhan Sunda Kelapa.' ] },
      { id: 'rute', heading: 'Rute', bullets: [
        'Jarak sekitar 1,5 km utara dari Museum Wayang (perkiraan).',
        'Dapat ditempuh jalan kaki panjang atau angkutan pendek.',
        'Gabungkan dengan suasana pelabuhan Sunda Kelapa.'
      ]}
    ],
    faq: [
      { q: 'Berapa jauh?', a: 'Sekitar 1,5 km ke utara; tidak sekadar jalan kaki singkat.' },
      { q: 'Buka Senin?', a: 'Konfirmasikan; lihat museum Kota Tua yang buka Senin.' }
    ],
    related: ['museum-wayang-dan-kawasan-kali-besar', 'museum-di-kota-tua-yang-buka-senin', 'itinerary-sehari-di-kota-tua'],
    sources: museumSources
  },

  // ───────────────────────── D. Kuliner & istirahat ─────────────────────────
  'tempat-makan-dekat-museum-wayang': {
    slug: 'tempat-makan-dekat-museum-wayang', group: 'food',
    title: 'Tempat Makan Dekat Museum Wayang (Kota Tua)',
    description: 'Panduan makan di sekitar Museum Wayang dan Taman Fatahillah: jenis hidangan, waktu terbaik, dan tips memverifikasi tempat yang masih buka.',
    h1: 'Tempat Makan Dekat Museum Wayang',
    lead: 'Di sekitar Museum Wayang dan Taman Fatahillah terdapat pilihan makan dari warung Betawi hingga kafe. Pilih berdasarkan waktu (sarapan/siang/sore) dan verifikasi tempat masih buka melalui peta sebelum pergi.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'jenis', heading: 'Jenis hidangan', bullets: [
        'Kuliner Betawi: soto Betawi, nasi uduk, kerak telor.',
        'Kafe dan restoran di sekitar Taman Fatahillah.',
        'Jajanan khas di sepanjang jalan Kota Tua.'
      ]},
      { id: 'tips', heading: 'Tips memilih', paragraphs: [
        'Cek jam buka, ulasan terkini, dan lokasi melalui peta sebelum pergi; penyewa dapat berubah.',
        'Jangan menganggap nama atau harga dari tulisan lama masih berlaku.',
        'Lihat kuliner Betawi dan jajanan khas untuk jenis makanan.' ] }
    ],
    faq: [
      { q: 'Ada restoran di Taman Fatahillah?', a: 'Beberapa kedai mengelilingi alun-alun; verifikasi yang masih buka melalui peta.' },
      { q: 'Harga mahal?', a: 'Bervariasi; bandingkan dan cek daftar harga sebelum memesan.' }
    ],
    related: ['kuliner-betawi-sekitar-kota-tua', 'cafe-dekat-museum-wayang', 'jajanan-khas-kota-tua'],
    sources: museumSources
  },
  'cafe-dekat-museum-wayang': {
    slug: 'cafe-dekat-museum-wayang', group: 'food',
    title: 'Cafe Dekat Museum Wayang & Kota Tua',
    description: 'Pilihan kafe di sekitar Museum Wayang untuk istirahat, wifi, dan minuman. Verifikasi jam buka dan lokasi melalui peta.',
    h1: 'Cafe Dekat Museum Wayang',
    lead: 'Kawasan Kota Tua memiliki beberapa kafe untuk istirahat setelah keliling museum. Pilih berdasarkan suasana dan verifikasi jam buka melalui peta, karena penyewa sering berubah.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'istirahat', heading: 'Untuk istirahat', paragraphs: [
        'Kafe di sekitar Taman Fatahillah dan Kali Besar cocok untuk berhenti sejenak.',
        'Beberapa menyediakan wifi dan tempat duduk nyaman.' ] },
      { id: 'tips', heading: 'Tips', bullets: [
        'Cek ulasan dan jam buka terkini melalui peta.',
        'Hindari jam puncak bila ingin tempat duduk tenang.',
        'Tanyakan harga sebelum memesan.'
      ]}
    ],
    faq: [
      { q: 'Buka pagi?', a: 'Bervariasi; verifikasi melalui peta sebelum datang.' },
      { q: 'Dekat museum?', a: 'Beberapa berjarak jalan kaki pendek dari Museum Wayang.' }
    ],
    related: ['tempat-makan-dekat-museum-wayang', 'jajanan-khas-kota-tua', 'wisata-kota-tua-saat-hujan'],
    sources: museumSources
  },
  'kuliner-betawi-sekitar-kota-tua': {
    slug: 'kuliner-betawi-sekitar-kota-tua', group: 'food',
    title: 'Kuliner Betawi di Sekitar Kota Tua',
    description: 'Jenis kuliner Betawi yang umum ditemui di Kota Tua: soto Betawi, kerak telor, nasi uduk, rujak, dan es selendang mayang.',
    h1: 'Kuliner Betawi di Sekitar Kota Tua',
    lead: 'Kota Tua berada di Jakarta yang kaya kuliner Betawi. Hidangan umum meliputi soto Betawi, kerak telor, nasi uduk, rujak juhi, dan es selendang mayang. Cicipi sebagai bagian wisata budaya, dan verifikasi penjual melalui peta.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'jenis', heading: 'Hidangan umum', bullets: [
        'Soto Betawi: kuah santan susu dengan daging.',
        'Kerak telor: telur dan kelapa sangrai panggang.',
        'Nasi uduk: nasi kelapa dengan lauk.',
        'Rujak juhi dan es selendang mayang: jajanan Betawi.'
      ]},
      { id: 'cicip', heading: 'Cara menikmati', paragraphs: [
        'Cari penjual yang terjaga kebersihan dan harga jelas.',
        'Tanyakan daftar harga sebelum memesan.',
        'Tidak semua hidangan tersedia setiap saat; sesuaikan dengan waktu.' ] }
    ],
    faq: [
      { q: 'Apa khas Betawi di Kota Tua?', a: 'Kerak telor dan soto Betawi sering dikaitkan dengan Kota Tua.' },
      { q: 'Halal?', a: 'Umumnya hidangan Betawi halal; verifikasi label pada penjual.' }
    ],
    related: ['jajanan-khas-kota-tua', 'tempat-makan-dekat-museum-wayang', 'wisata-kota-tua-hemat'],
    sources: museumSources
  },
  'jajanan-khas-kota-tua': {
    slug: 'jajanan-khas-kota-tua', group: 'food',
    title: 'Jajanan Khas Kota Tua Jakarta',
    description: 'Jajanan khas dan street food di Kota Tua: kerak telor, es dawet, gorengan, dan jajanan Betawi lain. Tips aman menikmati.',
    h1: 'Jajanan Khas Kota Tua',
    lead: 'Jajanan khas Kota Tua mencakup kerak telor, es dawet, gorengan, dan jajanan Betawi lainnya. Nikmati sebagai pengalaman budaya sambil menjaga kebersihan dan memverifikasi harga.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'contoh', heading: 'Contoh jajanan', bullets: [
        'Kerak telor: jajanan ikonik Kota Tua.',
        'Es dawet/es campur: pelepas dahaga.',
        'Gorengan dan pisang: camilan sederhana.'
      ]},
      { id: 'aman', heading: 'Tips aman', paragraphs: [
        'Pilih penjual dengan penyajian higienis.',
        'Tanyakan harga sebelum membeli.',
        'Hindari makanan terjaga terlalu lama di terik.' ] }
    ],
    faq: [
      { q: 'Kerak telor di mana?', a: 'Sering ditemui di sekitar Taman Fatahillah; verifikasi penjual melalui peta.' },
      { q: 'Berapa harga?', a: 'Bervariasi; tanyakan sebelum membeli.' }
    ],
    related: ['kuliner-betawi-sekitar-kota-tua', 'cafe-dekat-museum-wayang', 'wisata-kota-tua-hemat'],
    sources: museumSources
  },

  // ───────────────────────── E. Rute & itinerary ─────────────────────────
  'rute-jalan-kaki-kota-tua-2-jam': {
    slug: 'rute-jalan-kaki-kota-tua-2-jam', group: 'route',
    title: 'Rute Jalan Kaki Kota Tua 2 Jam dari Museum Wayang',
    description: 'Rute jalan kaki singkat Kota Tua selama 2 jam: Museum Wayang, Taman Fatahillah, Kali Besar, dan Stasiun Jakarta Kota.',
    h1: 'Rute Jalan Kaki Kota Tua 2 Jam',
    lead: 'Rute 2 jam dimulai dari Museum Wayang, menyeberang ke Taman Fatahillah, menyusuri Kali Besar, dan berakhir di Stasiun Jakarta Kota. Cocok untuk kunjungan singkat yang padat.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'rute', heading: 'Urutan rute', bullets: [
        '00:00 Mulai di Museum Wayang (1–1,5 jam).',
        '01:00 Taman Fatahillah dan sekitarnya (15 menit).',
        '01:30 Jalan menyusuri Kali Besar (30 menit).',
        '02:00 Stasiun Jakarta Kota sebagai titik pulang.'
      ]},
      { id: 'catatan', heading: 'Catatan', paragraphs: [
        'Waktu perkiraan; sesuaikan dengan ketahanan dan foto.',
        'Konfirmasikan museum yang buka (Senin banyak tutup).' ] }
    ],
    faq: [
      { q: 'Cukup 2 jam?', a: 'Cukup untuk ringkasan Kota Tua tanpa masuk semua museum.' },
      { q: 'Aman jalan kaki?', a: 'Ya di siang hari; waspadai lalu lintas saat menyeberang.' }
    ],
    related: ['itinerary-setengah-hari-kota-tua', 'museum-wayang-dan-stasiun-jakarta-kota', 'museum-wayang-dan-kawasan-kali-besar'],
    sources: museumSources
  },
  'itinerary-setengah-hari-kota-tua': {
    slug: 'itinerary-setengah-hari-kota-tua', group: 'route',
    title: 'Itinerary Setengah Hari Kota Tua (dari Museum Wayang)',
    description: 'Rencana setengah hari Kota Tua: 2 museum, Taman Fatahillah, dan istirahat kafe. Cocok untuk pagi hingga siang.',
    h1: 'Itinerary Setengah Hari Kota Tua',
    lead: 'Setengah hari cukup untuk dua museum (Museum Wayang + satu museum di Taman Fatahillah), jalan di alun-alun, dan istirahat kafe. Mulai pagi agar tidak terburu-buru.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'rute', heading: 'Saran urutan', bullets: [
        '09:00 Museum Wayang (1,5 jam).',
        '10:30 Taman Fatahillah & Museum Sejarah Jakarta (1,5 jam).',
        '12:00 Makan siang di sekitar Kota Tua.',
        '13:30 Kali Besar / Museum Bank (opsional).'
      ]},
      { id: 'tips', heading: 'Tips', paragraphs: [
        'Hindari Senin (banyak museum tutup).',
        'Cek jam dan tiket masing-masing melalui panduan kami.',
        'Bawa air dan topi untuk terik.' ] }
    ],
    faq: [
      { q: 'Mulai jam berapa?', a: 'Sepagi mungkin (09:00) agar lebih santai.' },
      { q: 'Cukup satu hari?', a: 'Setengah hari untuk ringkasan; sehari untuk lebih lengkap.' }
    ],
    related: ['itinerary-sehari-di-kota-tua', 'rute-jalan-kaki-kota-tua-2-jam', 'museum-di-kota-tua-yang-buka-senin'],
    sources: museumSources
  },
  'itinerary-sehari-di-kota-tua': {
    slug: 'itinerary-sehari-di-kota-tua', group: 'route',
    title: 'Itinerary Sehari di Kota Tua (dari Museum Wayang)',
    description: 'Rencana sehari Kota Tua: Museum Wayang, Taman Fatahillah, Kali Besar, Museum Bank, dan pilihan ke Museum Bahari.',
    h1: 'Itinerary Sehari di Kota Tua',
    lead: 'Sehari memungkinkan menjelajah Museum Wayang, Taman Fatahillah, Kali Besar, Museum Bank Indonesia/Mandiri, dan bila cukup waktu ke Museum Bahari di utara.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'rute', heading: 'Saran urutan', bullets: [
        '09:00 Museum Wayang.',
        '10:30 Taman Fatahillah & museum di sekitarnya.',
        '12:30 Makan siang.',
        '14:00 Kali Besar & Museum Bank.',
        '16:00 (opsional) Museum Bahari ke arah pelabuhan.'
      ]},
      { id: 'tips', heading: 'Tips', paragraphs: [
        'Gunakan transportasi umum untuk menghindari parkir penuh.',
        'Cek hari buka tiap museum (Senin banyak tutup).',
        'Sesuaikan dengan cuaca; lihat wisata saat hujan.' ] }
    ],
    faq: [
      { q: 'Muat sehari?', a: 'Ya, dengan penyusunan waktu yang baik.' },
      { q: 'Ke Museum Bahari jauh?', a: 'Sekitar 1,5 km utara; bisa jalan kaki panjang atau angkutan.' }
    ],
    related: ['itinerary-setengah-hari-kota-tua', 'wisata-kota-tua-saat-hujan', 'museum-wayang-dan-museum-bahari'],
    sources: museumSources
  },
  'wisata-kota-tua-saat-hujan': {
    slug: 'wisata-kota-tua-saat-hujan', group: 'route',
    title: 'Wisata Kota Tua Saat Hujan',
    description: 'Rencana Kota Tua saat hujan: masuk museum, gunakan kafe, dan pilih rute dalam ruangan. Hindari jalan kaki lama di terik hujan.',
    h1: 'Wisata Kota Tua Saat Hujan',
    lead: 'Saat hujan, fokus pada museum dan kafe di dalam ruangan. Susun rute antar-museum yang berdekatan dan bawa payung. Beberapa museum tutup Senin, jadi cek dulu.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'dalam', heading: 'Aktivitas dalam ruangan', bullets: [
        'Museum Wayang dan museum di Taman Fatahillah.',
        'Kafe untuk istirahat di sela hujan.',
        'Toko buku/suvenir di sekitar alun-alun.'
      ]},
      { id: 'tips', heading: 'Tips', paragraphs: [
        'Bawa payung dan alas kaki nyaman.',
        'Cek jam buka (Senin banyak tutup).',
        'Gunakan rute dekat antar-museum untuk mengurangi jalan hujan.' ] }
    ],
    faq: [
      { q: 'Boleh tetap jalan kaki?', a: 'Bisa, tetapi kurangi dengan masuk museum saat hujan lebat.' },
      { q: 'Apa prioritas?', a: 'Museum dalam ruangan dan kafe.' }
    ],
    related: ['itinerary-setengah-hari-kota-tua', 'cafe-dekat-museum-wayang', 'museum-di-kota-tua-yang-buka-senin'],
    sources: museumSources
  },
  'wisata-kota-tua-bersama-anak': {
    slug: 'wisata-kota-tua-bersama-anak', group: 'route',
    title: 'Wisata Kota Tua Bersama Anak',
    description: 'Rute keluarga ke Kota Tua: Museum Wayang, taman terbuka, dan kafe ramah anak. Durasi 3–4 jam yang nyaman.',
    h1: 'Wisata Kota Tua Bersama Anak',
    lead: 'Kota Tua ramah keluarga bila disiapkan: Museum Wayang dengan koleksi visual, Taman Fatahillah terbuka, dan kafe istirahat. Siapkan durasi 3–4 jam agar anak tidak lelah.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'rute', heading: 'Saran keluarga', bullets: [
        'Museum Wayang (koleksi wayang menarik anak).',
        'Taman Fatahillah untuk bergerak bebas.',
        'Kafe dengan tempat duduk nyaman.',
        'Hindari terik siang dengan jeda dalam ruangan.'
      ]},
      { id: 'tips', heading: 'Tips', paragraphs: [
        'Bawa air, snack, dan topi.',
        'Cek fasilitas ramah anak (toilet, musala) di museum.',
        'Lihat Museum Wayang untuk anak untuk persiapan.' ] }
    ],
    faq: [
      { q: 'Umur berapa cocok?', a: 'Sekolah dasar umumnya paling menikmati.' },
      { q: 'Lama berapa?', a: '3–4 jam dengan jeda.' }
    ],
    related: ['museum-wayang-untuk-anak', 'itinerary-setengah-hari-kota-tua', 'wisata-kota-tua-saat-hujan'],
    sources: museumSources
  },
  'wisata-kota-tua-hemat': {
    slug: 'wisata-kota-tua-hemat', group: 'route',
    title: 'Wisata Kota Tua Hemat (Budget)',
    description: 'Tips berwisata murah ke Kota Tua: gunakan transportasi umum, nikmati taman gratis, dan pilih museum dengan tiket terjangkau.',
    h1: 'Wisata Kota Tua Hemat',
    lead: 'Wisata hemat ke Kota Tua bisa dilakukan dengan transportasi umum (KRL/TransJakarta), menikmati Taman Fatahillah yang gratis, dan memilih museum dengan tiket terjangkau seperti Museum Wayang.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'hemat', heading: 'Cara hemat', bullets: [
        'Naik KRL/TransJakarta而非 kendaraan pribadi (hemat parkir).',
        'Nikmati Taman Fatahillah dan jalan kaki gratis.',
        'Cek kategori tiket museum; anak/mahasiswa lebih murah.'
      ]},
      { id: 'makan', heading: 'Makan hemat', paragraphs: [
        'Pilih jajanan khas dan warung dibanding restoran mewah.',
        'Bawa air minum sendiri.',
        'Lihat kuliner Betawi dan jajanan khas untuk pilihan terjangkau.' ] }
    ],
    faq: [
      { q: 'Gratis masuk Kota Tua?', a: 'Alun-alun bebas masuk; museum butuh tiket.' },
      { q: 'Transportasi termurah?', a: 'KRL ke Stasiun Jakarta Kota lalu jalan kaki.' }
    ],
    related: ['wisata-kota-tua-bersama-anak', 'cara-ke-museum-wayang', 'kuliner-betawi-sekitar-kota-tua'],
    sources: museumSources
  },
  'museum-wayang-vs-museum-sejarah-jakarta': {
    slug: 'museum-wayang-vs-museum-sejarah-jakarta', group: 'route',
    title: 'Museum Wayang vs Museum Sejarah Jakarta: Mana yang Dipilih?',
    description: 'Perbandingan Museum Wayang dan Museum Sejarah Jakarta (Fatahillah): fokus koleksi, durasi, dan siapa yang cocok.',
    h1: 'Museum Wayang vs Museum Sejarah Jakarta',
    lead: 'Museum Wayang fokus pada pewayangan (wayang, topeng, boneka), sedangkan Museum Sejarah Jakarta menceritakan sejarah Batavia dan Jakarta. Keduanya berdekatan; pilih berdasar minat atau kunjungi keduanya.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'beda', heading: 'Perbedaan fokus', bullets: [
        'Museum Wayang: pewayangan, budaya, visual.',
        'Museum Sejarah Jakarta: sejarah kota, kolonial, arkeologi.',
        'Lokasi: saling dekat di Taman Fatahillah.'
      ]},
      { id: 'pilih', heading: 'Siapa cocok', paragraphs: [
        'Pecinta budaya dan anak: Museum Wayang.',
        'Pecinta sejarah kota: Museum Sejarah Jakarta.',
        'Waktu terbatas: pilih satu; waktu cukup: kunjungi keduanya.' ] }
    ],
    faq: [
      { q: 'Lebih menarik yang mana?', a: 'Tergantung minat; keduanya saling melengkapi.' },
      { q: 'Bisa satu tiket?', a: 'Tiket terpisah; konfirmasikan masing-masing.' }
    ],
    related: ['museum-wayang-dan-museum-sejarah-jakarta', 'koleksi-museum-wayang', 'itinerary-setengah-hari-kota-tua'],
    sources: museumSources
  },
  'museum-di-kota-tua-yang-buka-senin': {
    slug: 'museum-di-kota-tua-yang-buka-senin', group: 'route',
    title: 'Museum di Kota Tua yang Buka Senin',
    description: 'Museum Wayang tutup Senin. Rencanakan hari Senin dengan museum/ruang lain yang buka, atau nikmati taman dan kafe.',
    h1: 'Museum di Kota Tua yang Buka Senin',
    lead: 'Museum Wayang tutup setiap Senin. Untuk kunjungan hari Senin, verifikasi museum lain yang buka, atau nikmati Taman Fatahillah, Kali Besar, dan kafe sebagai alternatif dalam ruangan.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'senin', heading: 'Catatan Senin', paragraphs: [
        'Museum Wayang tutup Senin menurut kedua sumber jam buka.',
        'Museum lain di Kota Tua memiliki kebijakan berbeda; verifikasi masing-masing melalui sumber resmi sebelum pergi.' ] },
      { id: 'alternatif', heading: 'Alternatif Senin', bullets: [
        'Taman Fatahillah (bebas masuk) untuk jalan santai.',
        'Kafe dan toko di sekitar alun-alun.',
        'Verifikasi museum yang buka melalui situs resmi masing-masing.'
      ]}
    ],
    faq: [
      { q: 'Museum Wayang buka Senin?', a: 'Tidak; tutup Senin.' },
      { q: 'Apa alternatif Senin?', a: 'Taman, kafe, dan museum lain yang diverifikasi masih buka.' }
    ],
    related: ['jam-buka-museum-wayang', 'wisata-kota-tua-saat-hujan', 'itinerary-setengah-hari-kota-tua'],
    sources: museumSources
  }
};

// ───────────────────────── English subset (auxiliary) ─────────────────────────
export const topicsEn: Record<string, TopicContent> = {
  'jam-buka-museum-wayang': {
    slug: 'jam-buka-museum-wayang', group: 'visit',
    title: 'Wayang Museum Opening Hours (2026): Closed on Mondays',
    description: 'Wayang Museum opening hours from two sources: Google Maps and the Ministry of Culture portal differ by one hour on weekdays. Closed Mondays.',
    h1: 'Wayang Museum Opening Hours',
    lead: 'Wayang Museum is closed every Monday. On weekdays (Tuesday–Friday) two trusted sources list different closing times: Google Maps 15:00 and the Ministry of Culture portal 16:00. Weekends open until 20:00.',
    updated: '29 October 2026',
    sections: [
      { id: 'two', heading: 'Two sources, one hour apart', paragraphs: [
        'Google Maps, checked 19 October 2026, lists Tuesday–Friday 09:00–15:00; Saturday–Sunday 09:00–20:00; Monday closed.',
        'The Ministry of Culture museum portal on the same date lists Tuesday–Friday 09:00–16:00; Saturday–Sunday 09:00–20:00; Monday closed, with public holidays 09:00–16:00.' ] },
      { id: 'confirm', heading: 'Confirm before travelling', paragraphs: [
        'The weekday one-hour gap is unresolved in the sources reviewed. Ask about last admission and holiday closures before arriving.' ] }
    ],
    faq: [
      { q: 'Which day is the museum closed?', a: 'Monday, according to both checked sources.' },
      { q: 'What time does it close on weekdays?', a: 'Maps says 15:00, the ministry portal says 16:00. Confirm last admission for your date.' }
    ],
    related: ['harga-tiket-museum-wayang', 'panduan-kunjungan-museum-wayang', 'museum-di-kota-tua-yang-buka-senin'],
    sources: museumSourcesEn
  },
  'harga-tiket-museum-wayang': {
    slug: 'harga-tiket-museum-wayang', group: 'visit',
    title: 'Wayang Museum Ticket Prices: Categories & Payment',
    description: 'Wayang Museum ticket categories per Jakarta revenue agency (2 April 2026) and the museum portal. Adults Rp10,000–15,000, children/students Rp5,000, international Rp50,000.',
    h1: 'Wayang Museum Ticket Prices',
    lead: 'Adult tickets are generally Rp10,000 (weekday) to Rp15,000 (weekend) per the museum portal; Jakarta’s revenue agency mentions Rp5,000 for children/students and Rp50,000 for international visitors. Confirm category and payment for your visit date.',
    updated: '29 October 2026',
    sections: [
      { id: 'cat', heading: 'Recorded categories', paragraphs: [
        'Bapenda Jakarta (2 April 2026) mentions Rp5,000 for children and university students, Rp10,000–15,000 for adults, and Rp50,000 for international visitors.',
        'The museum portal shows Rp10,000 on weekdays and Rp15,000 at weekends without group detail.' ] },
      { id: 'pay', heading: 'Payment', paragraphs: [
        'These are attributed references, not guaranteed totals. Ask about student evidence, age, payment method and reservations.' ] }
    ],
    faq: [
      { q: 'How much for adults?', a: 'Portal: Rp10,000 weekday / Rp15,000 weekend; Bapenda mentions Rp10,000–15,000 for adults.' },
      { q: 'Are children free?', a: 'Bapenda lists Rp5,000 for children/students, not free. Bring proof if required.' }
    ],
    related: ['jam-buka-museum-wayang', 'panduan-kunjungan-museum-wayang', 'aksesibilitas-museum-wayang'],
    sources: museumSourcesEn
  },
  'panduan-kunjungan-museum-wayang': {
    slug: 'panduan-kunjungan-museum-wayang', group: 'visit',
    title: 'Wayang Museum Visit Guide: Before You Go',
    description: 'A first-visit guide to Wayang Museum Kota Tua: hours, tickets, duration, what you learn, and how to verify information.',
    h1: 'Wayang Museum Visit Guide',
    lead: 'Prepare by comparing the two opening-hours sources, checking ticket categories, and making sure your visit day is not Monday (closed). Bring student proof if applicable and confirm any performance.',
    updated: '29 October 2026',
    sections: [
      { id: 'before', heading: 'Before you go', bullets: [
        'Make sure the day is not Monday (closed).',
        'Compare Maps (15:00 weekdays) and ministry portal (16:00); confirm last entry.',
        'Check ticket category and bring student proof if needed.'
      ]},
      { id: 'at', heading: 'At the museum', paragraphs: [
        'The museum focuses on puppetry and is managed by Unit Pengelola Museum Seni. Follow curatorial labels and staff guidance.' ] }
    ],
    faq: [
      { q: 'How long does a visit take?', a: 'Usually 1–2 hours for the core exhibits.' },
      { q: 'Is this the official site?', a: 'No. This is an independent visitor guide with no affiliation and no ticket sales.' }
    ],
    related: ['jam-buka-museum-wayang', 'harga-tiket-museum-wayang', 'berapa-lama-mengunjungi-museum-wayang'],
    sources: museumSourcesEn
  },
  'cara-ke-museum-wayang': {
    slug: 'cara-ke-museum-wayang', group: 'visit',
    title: 'How to Get to Wayang Museum Kota Tua',
    description: 'Getting to Wayang Museum in Kota Tua Jakarta by KRL, TransJakarta, or private vehicle. Jakarta Kota station is the main gateway.',
    h1: 'How to Get to Wayang Museum',
    lead: 'The most common way is to alight at Jakarta Kota station (KRL) and walk about 10 minutes toward Taman Fatahillah. TransJakarta also serves Kota Tua. Confirm active routes with the operator.',
    updated: '29 October 2026',
    sections: [
      { id: 'krl', heading: 'By KRL', paragraphs: [
        'Jakarta Kota station (Beos) is the KRL gateway to Kota Tua, about 10 minutes’ walk from the museum via Kali Besar.' ] },
      { id: 'trans', heading: 'By TransJakarta', paragraphs: [
        'Several corridors serve halts around Kota Tua. Confirm the current corridor and halt with TransJakarta.' ] },
      { id: 'car', heading: 'By private vehicle', paragraphs: [
        'The museum is on Jalan Pintu Besar Utara, Pinangsia, Taman Sari, West Jakarta. Legal parking is limited; see the parking guide.' ] }
    ],
    faq: [
      { q: 'Which station is closest?', a: 'Jakarta Kota station (KRL), about 10 minutes’ walk to Taman Fatahillah.' }
    ],
    related: ['museum-wayang-naik-krl', 'museum-wayang-naik-transjakarta', 'parkir-dekat-museum-wayang'],
    sources: museumSourcesEn
  },
  'museum-wayang-naik-krl': {
    slug: 'museum-wayang-naik-krl', group: 'visit',
    title: 'Wayang Museum by KRL: Jakarta Kota Station & Walk',
    description: 'Take the KRL to Wayang Museum: alight at Jakarta Kota station, exit toward Kota Tua, then walk about 10 minutes to Taman Fatahillah.',
    h1: 'Wayang Museum by KRL',
    lead: 'Alight at Jakarta Kota station (Beos), exit toward Kota Tua, then walk about 10 minutes to Taman Fatahillah where Wayang Museum is located.',
    updated: '29 October 2026',
    sections: [
      { id: 'station', heading: 'Destination station', paragraphs: [
        'Jakarta Kota station is a KRL terminus/hub. From here Kota Tua is reachable on foot. Confirm the active line and exit with KRL.' ] },
      { id: 'walk', heading: 'Walk from the station', bullets: [
        'Head toward Taman Fatahillah / Kali Besar.',
        'Walking time about 10 minutes (estimate, not guaranteed).',
        'The museum is on Jalan Pintu Besar Utara leading to the square.'
      ]}
    ],
    faq: [
      { q: 'How long is the walk?', a: 'About 10 minutes, depending on exit and conditions.' }
    ],
    related: ['cara-ke-museum-wayang', 'museum-wayang-dan-stasiun-jakarta-kota', 'museum-wayang-untuk-anak'],
    sources: museumSourcesEn
  },
  'museum-wayang-naik-transjakarta': {
    slug: 'museum-wayang-naik-transjakarta', group: 'visit',
    title: 'Wayang Museum by TransJakarta',
    description: 'Take TransJakarta to Wayang Museum: alight at a halt near Kota Tua, then walk to Taman Fatahillah. Confirm active corridor.',
    h1: 'Wayang Museum by TransJakarta',
    lead: 'Several TransJakarta corridors serve halts around Kota Tua. Alight at the nearest halt then walk to Taman Fatahillah; confirm the current corridor and halt with TransJakarta.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'corridor', heading: 'Corridor & halt', paragraphs: [
        'TransJakarta routes serving Kota Tua can change; check the app or official info for the nearest halt to Taman Fatahillah.' ] },
      { id: 'note', heading: 'Notes', bullets: [
        'Confirm the destination halt before boarding.',
        'Prepare an electronic card or TransJakarta payment.',
        'Allow walking time on weekends when Kota Tua is busy.'
      ]}
    ],
    faq: [
      { q: 'Which halt is closest?', a: 'Depends on the active route; check TransJakarta info for the halt nearest Taman Fatahillah.' }
    ],
    related: ['cara-ke-museum-wayang', 'parkir-dekat-museum-wayang', 'wisata-kota-tua-hemat'],
    sources: museumSourcesEn
  },
  'parkir-dekat-museum-wayang': {
    slug: 'parkir-dekat-museum-wayang', group: 'visit',
    title: 'Parking Near Wayang Museum Kota Tua',
    description: 'Parking options around Wayang Museum and Taman Fatahillah. Limited and busy on weekends; confirm official location and rates.',
    h1: 'Parking Near Wayang Museum',
    lead: 'Legal parking around Kota Tua is limited and often full on weekends. Ask about official parking, rates and drop-off; public transport is usually easier than driving.',
    updated: '29 October 2026',
    sections: [
      { id: 'options', heading: 'Options', paragraphs: [
        'Some public lots and roadside parking operate around Kota Tua, but capacity is not guaranteed and rates vary.',
        'Confirm official location, applicable rate and hours with the local provider before arriving.' ] },
      { id: 'tips', heading: 'Tips', bullets: [
        'Use KRL/TransJakarta if possible.',
        'Arrive early on weekends and holidays.',
        'Ask for the nearest drop-off to the museum.'
      ]}
    ],
    faq: [
      { q: 'Does the museum have its own parking?', a: 'Not guaranteed; ask about the nearest legal parking and official rates.' }
    ],
    related: ['cara-ke-museum-wayang', 'museum-wayang-naik-krl', 'wisata-kota-tua-hemat'],
    sources: museumSourcesEn
  },
  'aksesibilitas-museum-wayang': {
    slug: 'aksesibilitas-museum-wayang', group: 'visit',
    title: 'Wayang Museum Accessibility: Wheelchair & Visitors with Disabilities',
    description: 'Accessibility guide for Wayang Museum: wheelchair, elderly, and visitors with disabilities. Confirm ramps, lifts and assistance before arriving.',
    h1: 'Wayang Museum Accessibility',
    lead: 'The museum reports facility renewal, but access details (ramps, lifts, upper-floor access, wheelchairs, toilets, prayer space, assistance) must be confirmed with management before arrival.',
    updated: '29 October 2026',
    sections: [
      { id: 'ask', heading: 'What to confirm', bullets: [
        'Accessible entrance and ramp that truly operate.',
        'Lift availability and upper-floor access.',
        'Wheelchairs, toilets and prayer space in operation.',
        'Staff assistance and sensory needs.'
      ]},
      { id: 'tips', heading: 'Tips', paragraphs: [
        'Do not assume old accessibility descriptions still apply. Ask about service conditions before coming.' ] }
    ],
    faq: [
      { q: 'Are wheelchairs allowed?', a: 'Ask about the entrance, routes and facilities actually operating before your visit.' }
    ],
    related: ['fasilitas-museum-wayang', 'museum-wayang-untuk-anak', 'wisata-kota-tua-bersama-anak'],
    sources: museumSourcesEn
  },
  'koleksi-museum-wayang': {
    slug: 'koleksi-museum-wayang', group: 'culture',
    title: 'Wayang Museum Collection: Puppets, Masks & Dolls',
    description: 'The Wayang Museum collection includes wayang kulit, wayang golek, masks and dolls from Indonesia and abroad. Follow curatorial labels.',
    h1: 'Wayang Museum Collection',
    lead: 'The collection centers on puppetry: wayang kulit, wayang golek, masks, and dolls from across Indonesia and some from abroad. Follow curatorial labels; not every old item is necessarily on display.',
    updated: '29 October 2026',
    sections: [
      { id: 'core', heading: 'Core collection', bullets: [
        'Wayang kulit (buffalo hide, shadow).',
        'Wayang golek (wood, three-dimensional).',
        'Masks from various regions.',
        'Dolls and other folk-theatre forms.'
      ]},
      { id: 'abroad', heading: 'International items', paragraphs: [
        'The museum also keeps dolls from several countries for comparison. See the foreign puppets page for detail.' ] }
    ],
    faq: [
      { q: 'What is on display?', a: 'Wayang kulit, wayang golek, masks and Indonesian/foreign dolls.' }
    ],
    related: ['wayang-kulit-di-museum-wayang', 'wayang-golek-dan-tradisinya', 'boneka-mancanegara-di-museum-wayang'],
    sources: museumSourcesEn
  },
  'sejarah-museum-wayang': {
    slug: 'sejarah-museum-wayang', group: 'culture',
    title: 'History of Wayang Museum Jakarta',
    description: 'History of Wayang Museum: from a 17th-century Dutch church and warehouse to a puppet museum inaugurated in 1975 by Governor Ali Sadikin.',
    h1: 'History of Wayang Museum',
    lead: 'The Wayang Museum building was used as a Dutch church in the 17th century, later a warehouse, and was inaugurated as Wayang Museum in 1975 by Jakarta Governor Ali Sadikin. Historical notes vary; verify details through official sources.',
    updated: '29 October 2026',
    sections: [
      { id: 'building', heading: 'Building and changes', paragraphs: [
        'The building on Jalan Pintu Besar Utara was a Dutch church (around the 17th century) and later a warehouse before becoming a museum.',
        'In 1975, under Governor Ali Sadikin, it was inaugurated as Wayang Museum.' ] },
      { id: 'collection', heading: 'From collection to institution', paragraphs: [
        'The museum focuses on puppetry and is managed by Unit Pengelola Museum Seni per the national portal.' ] }
    ],
    faq: [
      { q: 'When was the museum inaugurated?', a: '1975, under Governor Ali Sadikin, per general Kota Tua history.' }
    ],
    related: ['sejarah-gedung-museum-wayang', 'koleksi-museum-wayang', 'tradisi-wayang-indonesia'],
    sources: museumSourcesEn
  },
  'wayang-kulit-di-museum-wayang': {
    slug: 'wayang-kulit-di-museum-wayang', group: 'culture',
    title: 'Wayang Kulit at Wayang Museum',
    description: 'Wayang kulit are flat buffalo-hide shadow puppets, UNESCO intangible heritage. The museum displays figures and regional styles.',
    h1: 'Wayang Kulit at Wayang Museum',
    lead: 'Wayang kulit are thin buffalo-hide shadow puppets played behind a screen (kelir). The art is recognized by UNESCO as intangible cultural heritage. The museum displays figures and regional styles.',
    updated: '29 October 2026',
    sections: [
      { id: 'form', heading: 'Form & material', paragraphs: [
        'Wayang kulit is carved buffalo hide with horn handles, used with a light behind a white screen.',
        'Each region has its own carving and coloring style.' ] },
      { id: 'figures', heading: 'Figures', paragraphs: [
        'The collection includes Ramayana, Mahabharata and local tales such as Panji.' ] }
    ],
    faq: [
      { q: 'UNESCO?', a: 'Yes, Indonesian wayang is recognized by UNESCO; see the wayang UNESCO page.' }
    ],
    related: ['perbedaan-wayang-kulit-dan-wayang-golek', 'wayang-warisan-budaya-unesco', 'koleksi-museum-wayang'],
    sources: [
      { label: 'UNESCO — Wayang puppet theatre', href: 'https://ich.unesco.org/en/RL/wayang-puppet-theatre-00062' },
      ...museumSourcesEn
    ]
  },
  'pertunjukan-wayang-museum-wayang': {
    slug: 'pertunjukan-wayang-museum-wayang', group: 'visit',
    title: 'Wayang Performances at Wayang Museum',
    description: 'Information on wayang performances at Wayang Museum: archives record specific events, not a regular schedule. Confirm the programme for your date.',
    h1: 'Wayang Performances at Wayang Museum',
    lead: 'Performances are not guaranteed daily. The culture department archive records a Wayang Orang Betawi performance on 29 March 2026, but one event is not a guarantee of a regular schedule. Confirm the programme and reservations for your date.',
    updated: '29 October 2026',
    sections: [
      { id: 'archive', heading: 'What is recorded', paragraphs: [
        'The culture department records a Wayang Orang Betawi performance on 29 March 2026.',
        'Even if the archive calls it “regular”, one dated event does not guarantee a show every week.' ] },
      { id: 'confirm', heading: 'Confirm', bullets: [
        'Check an announcement dated for your visit.',
        'Ask whether tickets are included or extra charges apply.'
      ]}
    ],
    faq: [
      { q: 'Are there shows every day?', a: 'Not guaranteed. Confirm a specific programme for your date.' }
    ],
    related: ['gamelan-dan-pertunjukan-wayang', 'ruang-immersif-museum-wayang', 'koleksi-museum-wayang'],
    sources: museumSourcesEn
  },
  'museum-wayang-dan-taman-fatahillah': {
    slug: 'museum-wayang-dan-taman-fatahillah', group: 'nearby',
    title: 'Wayang Museum & Taman Fatahillah',
    description: 'Wayang Museum sits beside Taman Fatahillah, the main Kota Tua square. Combine both in one short visit.',
    h1: 'Wayang Museum and Taman Fatahillah',
    lead: 'Wayang Museum is right beside Taman Fatahillah, the historic Kota Tua square. Both can be visited together with a short walk; the square is free to enter.',
    updated: '29 October 2026',
    sections: [
      { id: 'distance', heading: 'Distance & access', paragraphs: [
        'The museum is on Jalan Pintu Besar Utara leading to Taman Fatahillah, only a few minutes’ walk.',
        'Taman Fatahillah is free and the meeting point for Kota Tua visitors.' ] },
      { id: 'combine', heading: 'How to combine', bullets: [
        'Start at Wayang Museum, then step out to Taman Fatahillah.',
        'The square is ringed by Jakarta History Museum and Museum of Fine Arts & Ceramics.'
      ]}
    ],
    faq: [
      { q: 'How far is the walk?', a: 'Very close, a few minutes from the museum door to the square.' }
    ],
    related: ['museum-wayang-dan-museum-sejarah-jakarta', 'museum-wayang-dan-museum-seni-rupa-dan-keramik', 'itinerary-setengah-hari-kota-tua'],
    sources: museumSourcesEn
  },
  'itinerary-sehari-di-kota-tua': {
    slug: 'itinerary-sehari-di-kota-tua', group: 'route',
    title: 'A Full Day in Kota Tua (from Wayang Museum)',
    description: 'A full-day Kota Tua plan: Wayang Museum, Taman Fatahillah, Kali Besar, Bank Museums, and optional Museum Bahari.',
    h1: 'A Full Day in Kota Tua',
    lead: 'A full day lets you explore Wayang Museum, Taman Fatahillah, Kali Besar, the Bank Museums, and, if time allows, Museum Bahari to the north.',
    updated: '29 October 2026',
    sections: [
      { id: 'order', heading: 'Suggested order', bullets: [
        '09:00 Wayang Museum.',
        '10:30 Taman Fatahillah & museums around it.',
        '12:30 Lunch.',
        '14:00 Kali Besar & Bank Museums.',
        '16:00 (optional) Museum Bahari toward the port.'
      ]},
      { id: 'tips', heading: 'Tips', paragraphs: [
        'Use public transport to avoid full parking.',
        'Check each museum’s open day (many close Mondays).' ] }
    ],
    faq: [
      { q: 'Does it fit in a day?', a: 'Yes, with good time planning.' }
    ],
    related: ['itinerary-setengah-hari-kota-tua', 'wisata-kota-tua-saat-hujan', 'museum-wayang-dan-museum-bahari'],
    sources: museumSourcesEn
  },
  'museum-di-kota-tua-yang-buka-senin': {
    slug: 'museum-di-kota-tua-yang-buka-senin', group: 'route',
    title: 'Kota Tua Museums Open on Mondays',
    description: 'Wayang Museum is closed Mondays. Plan a Monday with other open museums/spaces, or enjoy the square and cafés.',
    h1: 'Kota Tua Museums Open on Mondays',
    lead: 'Wayang Museum is closed every Monday. For a Monday visit, verify which other museums are open, or enjoy Taman Fatahillah, Kali Besar and cafés as indoor alternatives.',
    updated: '29 Oktober 2026',
    sections: [
      { id: 'mon', heading: 'Monday note', paragraphs: [
        'Wayang Museum is closed Mondays per both opening-hours sources.',
        'Other Kota Tua museums have different policies; verify each through official sources before going.' ] },
      { id: 'alt', heading: 'Alternatives', bullets: [
        'Taman Fatahillah (free) for a relaxed walk.',
        'Cafés and shops around the square.',
        'Verify open museums via their official sites.'
      ]}
    ],
    faq: [
      { q: 'Is Wayang Museum open Monday?', a: 'No, closed on Mondays.' }
    ],
    related: ['jam-buka-museum-wayang', 'wisata-kota-tua-saat-hujan', 'itinerary-setengah-hari-kota-tua'],
    sources: museumSourcesEn
  }
};

export const topicSlugsId = Object.keys(topicsId);
export const topicSlugsEn = Object.keys(topicsEn);

export function topicExists(locale: 'id' | 'en', slug: string): boolean {
  return locale === 'id' ? slug in topicsId : slug in topicsEn;
}
export function getTopic(locale: 'id' | 'en', slug: string): TopicContent | undefined {
  return locale === 'id' ? topicsId[slug] : topicsEn[slug];
}
