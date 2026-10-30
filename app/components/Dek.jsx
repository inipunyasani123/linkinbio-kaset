'use client';

import { useEffect, useState } from 'react';
import { NAMA_HARI, posisiPita } from '@/lib/kaset';

// Dek kaset di beranda. Gulungan hanya berputar saat jadwal siaran sedang berjalan;
// pita menunjukkan posisi sesungguhnya: bagian siaran yang sudah lewat, atau jeda
// menuju siaran berikutnya. Dihitung menurut WIB, diperbarui tiap menit.
export default function Dek() {
  const [p, setP] = useState(null);
  useEffect(() => {
    const f = () => setP(posisiPita());
    f();
    const t = setInterval(f, 60000);
    return () => clearInterval(t);
  }, []);
  const putar = p?.live ? ' berputar' : '';
  const teks = !p ? 'Jadwal siaran mingguan' : p.live ? `● Sedang siaran: ${p.acara.nama}` : `Berikutnya ${NAMA_HARI[p.acara.hari]} ${String(p.acara.jam).padStart(2, '0')}.00 WIB`;
  return (
    <div className="mt-3 flex items-center justify-between rounded-lg bg-[#2b1d12] px-6 py-4">
      <div className={`reel h-14 w-14 rounded-full border-4 border-mustard/70${putar}`} aria-hidden="true" />
      <div className="flex-1 px-4">
        <div className="h-1 rounded bg-mustard/30" aria-hidden="true">
          <div className="h-full rounded bg-oranye70 transition-[width] duration-700" style={{ width: `${p ? Math.max(4, Math.round(p.porsi * 100)) : 0}%` }} />
        </div>
        <p role="status" className="mt-1.5 text-center text-xs uppercase tracking-[0.2em] text-krem70/85">{teks}</p>
      </div>
      <div className={`reel h-14 w-14 rounded-full border-4 border-mustard/70${putar}`} style={{ animationDuration: '2.6s' }} aria-hidden="true" />
    </div>
  );
}
