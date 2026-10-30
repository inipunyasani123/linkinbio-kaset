/* Kaset Kita FM — mixtape & radio komunitas di Bandung (fiktif). Satu sumber isi
   untuk kaset tautan, jadwal siaran, dan arsip mixtape. Band, lagu, dan penyiar
   adalah contoh purwarupa desain. */

import { hariKe, tambahHari, tgl } from './waktu';

export const SITE = 'https://linkinbio-kaset.pintuweb.id';

export const SIDE_A = [
  { ikon: 'kaset', label: 'Mixtape #24 — "Hujan Kota"', meta: '60 menit · lo-fi & city pop lokal', href: '/mixtape#m24' },
  { ikon: 'radio', label: 'Jadwal siaran', meta: 'Jumat 20.00 · Selasa 21.00 · Minggu 16.00', href: '/siaran' },
];
export const SIDE_B = [
  { ikon: 'arsip', label: 'Arsip semua mixtape', meta: 'empat episode terakhir + tracklist', href: '/mixtape' },
  { ikon: 'mic', label: 'Kirim lagu', meta: 'terbuka untuk musisi lokal', href: '/mixtape#kirim' },
  { ikon: 'tamu', label: 'Jadi penyiar tamu', meta: 'bawa 10 lagu & satu cerita', href: '/siaran#tamu' },
];

// hari: 0 = Minggu … 6 = Sabtu; jam dalam WIB.
export const ACARA = [
  { hari: 5, jam: 20, nama: 'Mixtape Jumat', foto: 'nindy-fajar', alt: 'Ilustrasi penyiar Nindy dan Fajar, tanpa wajah', durasi: 60, penyiar: 'Nindy & Fajar', ket: 'Satu mixtape baru, diputar utuh tanpa jeda iklan.' },
  { hari: 2, jam: 21, nama: 'Lagu Kiriman', foto: 'bagas', alt: 'Ilustrasi penyiar Bagas berheadphone, tanpa wajah', durasi: 45, penyiar: 'Bagas', ket: 'Lima lagu kiriman pendengar, dikomentari dengan sopan.' },
  { hari: 0, jam: 16, nama: 'Arsip Kaset Lama', foto: 'om-herman', alt: 'Ilustrasi penyiar Om Herman, tanpa wajah, berambut putih di sisi kepala', durasi: 90, penyiar: 'Om Herman', ket: 'Kaset-kaset koleksi pendengar, lengkap dengan ceritanya.' },
];
export const NAMA_HARI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

/** Posisi "pita" saat ini (WIB): sedang siaran (bagian yang sudah lewat) atau
    menunggu siaran berikutnya (bagian jeda antara siaran lalu dan berikutnya). */
export function posisiPita(d = new Date()) {
  const wib = new Date(d.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
  const kejadian = [];
  for (let k = -7; k <= 7; k += 1) {
    const hari = new Date(wib);
    hari.setDate(hari.getDate() + k);
    for (const a of ACARA) {
      if (hari.getDay() !== a.hari) continue;
      const mulai = new Date(hari);
      mulai.setHours(a.jam, 0, 0, 0);
      kejadian.push({ ...a, mulai, selesai: new Date(mulai.getTime() + a.durasi * 60000) });
    }
  }
  const live = kejadian.find((x) => wib >= x.mulai && wib < x.selesai);
  if (live) return { live: true, acara: live, porsi: (wib - live.mulai) / (live.selesai - live.mulai) };
  const lalu = kejadian.filter((x) => x.selesai <= wib).sort((a, b) => b.selesai - a.selesai)[0];
  const lanjut = kejadian.filter((x) => x.mulai > wib).sort((a, b) => a.mulai - b.mulai)[0];
  return { live: false, acara: lanjut, porsi: (wib - lalu.selesai) / (lanjut.mulai - lalu.selesai) };
}

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

// Arsip mixtape: satu tiap Jumat. Tanggal dihitung mundur dari Jumat terakhir
// sebelum hari ini (WIB) supaya arsip di demo selalu terlihat terbaru.
const POLA_MIXTAPE = [
  { no: 24, sampul: 'lampu kota berbayang di kaca jendela berembun saat hujan malam', judul: 'Hujan Kota', durasi: '60 menit', lagu: [['Lampu Merah di Dago', 'Senandika'], ['Payung Biru', 'Kolam Renang'], ['Jalan Pulang', 'Tiga Sore'], ['Hujan di Kaca Bus', 'Rumah Kaca'], ['Malam di Cihampelas', 'Senandika']] },
  { no: 23, sampul: 'kincir ria bergondola dengan untaian lampu saat senja', judul: 'Pasar Malam', durasi: '60 menit', lagu: [['Komidi Putar', 'Kawan Lama'], ['Gulali', 'Tiga Sore'], ['Lampu Pasar', 'Orkes Senja'], ['Pulang Larut', 'Kolam Renang']] },
  { no: 22, sampul: 'semangkuk mi instan dengan sumpit di atas meja kayu', judul: 'Kamar Kos', durasi: '55 menit', lagu: [['Dinding Tipis', 'Rumah Kaca'], ['Mi Instan Jam Dua', 'Kawan Lama'], ['Surat dari Ibu', 'Orkes Senja']] },
  { no: 21, sampul: 'lokomotif merah melaju di rel di tengah bukit pagi hari', judul: 'Kereta Pagi', durasi: '60 menit', lagu: [['Peron Satu', 'Tiga Sore'], ['Jendela Gerbong', 'Senandika'], ['Stasiun Terakhir', 'Kawan Lama']] },
];
export function arsipMixtape(hari) {
  const jumat = tambahHari(hari, -(((hariKe(hari) - 5 + 7) % 7) || 7));
  return POLA_MIXTAPE.map((m, i) => ({ ...m, tanggal: tgl(tambahHari(jumat, -7 * i)) }));
}
export const MIXTAPE = POLA_MIXTAPE;
