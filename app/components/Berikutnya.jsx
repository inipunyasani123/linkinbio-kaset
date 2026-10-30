'use client';

import { useEffect, useState } from 'react';
import { NAMA_HARI, berikutnya } from '@/lib/kaset';

export default function Berikutnya() {
  const [n, setN] = useState(null);
  useEffect(() => {
    const f = () => setN(berikutnya());
    f();
    const t = setInterval(f, 60000);
    return () => clearInterval(t);
  }, []);
  const tgl = n && n.t.toLocaleDateString('id-ID', { day: 'numeric', month: 'long' });

  return (
    <div role="status" className="tape mt-6 rounded-2xl p-5 text-krem70">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-mustard">{n?.live ? '● Sedang siaran' : 'Siaran berikutnya'}</p>
      <p className="mt-2 text-2xl font-bold">{n ? n.nama : 'Memeriksa jadwal…'}</p>
      {n && <p className="mt-1 text-sm">{NAMA_HARI[n.hari]}, {tgl} · {String(n.jam).padStart(2, '0')}.00 WIB · bersama {n.penyiar}</p>}
      <p className="mt-3 text-xs text-krem70/80">Dengarkan lewat aplikasi radio daring mana pun — cari &ldquo;Kaset Kita FM&rdquo;.</p>
    </div>
  );
}
