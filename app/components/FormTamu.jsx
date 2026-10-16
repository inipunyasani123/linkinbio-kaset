'use client';

import { useState } from 'react';

// Formulir bersama untuk penyiar tamu (siaran) dan kirim demo (mixtape).
export default function FormTamu({ jenis = 'tamu' }) {
  const [selesai, setSelesai] = useState(false);
  const demo = jenis === 'demo';
  const input = 'w-full border-b-2 border-cokelat/60 bg-transparent py-2 focus:border-oranye-ink';

  return (
    <section id={demo ? 'kirim' : 'tamu'} aria-labelledby={`${jenis}-h`} className="mt-12 scroll-mt-6 rounded-2xl border-2 border-dashed border-cokelat/40 p-6">
      <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-mustard-ink">Side B · {demo ? '02' : '03'}</p>
      <h2 id={`${jenis}-h`} className="mt-1 text-2xl font-bold tracking-tight">{demo ? 'KIRIM DEMO' : 'JADI PENYIAR TAMU'}</h2>
      <p className="mt-1 text-sm text-cokelat/80">{demo ? 'Lima demo terpilih diputar di Demo Kiriman tiap Selasa.' : 'Bawa sepuluh lagu dan satu cerita. Satu jam di Minggu sore.'}</p>
      {selesai ? (
        <div role="status" className="mt-4 text-sm">
          <p className="font-bold">⏺ Terekam. Kami membalas dalam seminggu.</p>
          <p className="mt-1 text-cokelat/80">Ini purwarupa desain: tidak ada data yang benar-benar dikirim.</p>
          <button type="button" onClick={() => setSelesai(false)} className="mt-4 min-h-11 rounded-lg border-2 border-cokelat px-4 py-1.5 text-xs font-bold uppercase">⏏ Ulangi</button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSelesai(true); }} className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={`${jenis}-nama`} className="text-[11px] font-bold uppercase tracking-[0.2em] text-cokelat/80">{demo ? 'Nama band / musisi' : 'Nama'}</label>
            <input id={`${jenis}-nama`} required className={input} />
          </div>
          <div>
            <label htmlFor={`${jenis}-surel`} className="text-[11px] font-bold uppercase tracking-[0.2em] text-cokelat/80">Surel</label>
            <input id={`${jenis}-surel`} type="email" required autoComplete="email" className={input} />
          </div>
          {demo ? (
            <div className="sm:col-span-2">
              <label htmlFor="demo-tautan" className="text-[11px] font-bold uppercase tracking-[0.2em] text-cokelat/80">Tautan demo (berkas audio atau halaman band)</label>
              <input id="demo-tautan" type="url" required placeholder="https://" className={input} />
            </div>
          ) : (
            <div className="sm:col-span-2">
              <label htmlFor="tamu-tema" className="text-[11px] font-bold uppercase tracking-[0.2em] text-cokelat/80">Tema sepuluh lagumu</label>
              <textarea id="tamu-tema" required rows={3} className={input} />
            </div>
          )}
          <button type="submit" className="tape rounded-lg py-3 text-sm font-bold uppercase tracking-[0.2em] text-krem70 hover:text-white sm:col-span-2">⏺ {demo ? 'Kirim demo' : 'Daftar siaran'}</button>
        </form>
      )}
    </section>
  );
}
