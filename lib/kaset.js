/* Kaset Kita FM — mixtape & radio komunitas di Bandung (fiktif). Satu sumber isi
   untuk kaset tautan, jadwal siaran, dan arsip mixtape. Band, lagu, dan penyiar
   adalah contoh purwarupa desain. */

export const SITE = 'https://linkinbio-kaset.pintuweb.id';

export const SIDE_A = [
  { ikon: 'kaset', label: 'Mixtape #24 — "Hujan Kota"', meta: '60 menit · lo-fi & city pop lokal', href: '/mixtape#m24' },
  { ikon: 'radio', label: 'Jadwal siaran', meta: 'Jumat 20.00 · Selasa 21.00 · Minggu 16.00', href: '/siaran' },
];
export const SIDE_B = [
  { ikon: 'arsip', label: 'Arsip semua mixtape', meta: 'enam episode terakhir + tracklist', href: '/mixtape' },
  { ikon: 'mic', label: 'Kirim demo', meta: 'terbuka untuk musisi lokal', href: '/mixtape#kirim' },
  { ikon: 'tamu', label: 'Jadi penyiar tamu', meta: 'bawa 10 lagu & satu cerita', href: '/siaran#tamu' },
];

// hari: 0 = Minggu … 6 = Sabtu; jam dalam WIB.
export const ACARA = [
  { hari: 5, jam: 20, nama: 'Mixtape Jumat', durasi: 60, penyiar: 'Nindy & Fajar', ket: 'Satu mixtape baru, diputar utuh tanpa jeda iklan.' },
  { hari: 2, jam: 21, nama: 'Demo Kiriman', durasi: 45, penyiar: 'Bagas', ket: 'Lima demo kiriman pendengar, dikomentari dengan sopan.' },
  { hari: 0, jam: 16, nama: 'Arsip Kaset Lama', durasi: 90, penyiar: 'Om Herman', ket: 'Kaset-kaset koleksi pendengar, lengkap dengan ceritanya.' },
];
export const NAMA_HARI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

// Siaran berikutnya dari waktu sekarang (WIB).
export function berikutnya(d = new Date()) {
  const wib = new Date(d.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
  let terbaik = null;
  for (const a of ACARA) {
    const t = new Date(wib);
    t.setHours(a.jam, 0, 0, 0);
    let selisih = (a.hari - wib.getDay() + 7) % 7;
    if (selisih === 0 && wib >= new Date(t.getTime() + a.durasi * 60000)) selisih = 7;
    t.setDate(t.getDate() + selisih);
    const live = selisih === 0 && wib >= t;
    if (!terbaik || t < terbaik.t || live) terbaik = { ...a, t, live };
    if (live) break;
  }
  return terbaik;
}

export const MIXTAPE = [
  { no: 24, judul: 'Hujan Kota', tanggal: 'Jumat, 25 Sep 2026', durasi: '60 menit', lagu: [['Lampu Merah di Dago', 'Senandika'], ['Payung Biru', 'Kolam Renang'], ['Jalan Pulang', 'Tiga Sore'], ['Hujan di Kaca Bus', 'Rumah Kaca'], ['Malam di Cihampelas', 'Senandika']] },
  { no: 23, judul: 'Pasar Malam', tanggal: 'Jumat, 18 Sep 2026', durasi: '60 menit', lagu: [['Komidi Putar', 'Kawan Lama'], ['Gulali', 'Tiga Sore'], ['Lampu Pasar', 'Orkes Senja'], ['Pulang Larut', 'Kolam Renang']] },
  { no: 22, judul: 'Kamar Kos', tanggal: 'Jumat, 11 Sep 2026', durasi: '55 menit', lagu: [['Dinding Tipis', 'Rumah Kaca'], ['Mi Instan Jam Dua', 'Kawan Lama'], ['Surat dari Ibu', 'Orkes Senja']] },
  { no: 21, judul: 'Kereta Pagi', tanggal: 'Jumat, 4 Sep 2026', durasi: '60 menit', lagu: [['Peron Satu', 'Tiga Sore'], ['Jendela Gerbong', 'Senandika'], ['Stasiun Terakhir', 'Kawan Lama']] },
];
