'use client';

import { arsipMixtape } from '@/lib/kaset';
import useHariIni from './useHariIni';
import Gambar from './Gambar';

export default function ArsipMixtape({ hari: awal }) {
  const hari = useHariIni(awal);
  return (
    <ol className="mt-8 space-y-4">
      {arsipMixtape(hari).map((m, i) => (
        <li key={m.no} id={`m${m.no}`} className="scroll-mt-6">
          <details open={i === 0} className="group rounded-xl bg-krem70 shadow-[0_8px_24px_-14px_rgba(74,52,38,0.6)] ring-1 ring-cokelat/15">
            <summary className="flex min-h-16 cursor-pointer list-none items-center gap-4 p-4 [&::-webkit-details-marker]:hidden">
              <Gambar src={`/images/mixtape/m${m.no}.webp`} alt="" width={56} height={56} asli={800} className="h-14 w-14 shrink-0 rounded-md shadow-[0_6px_14px_-8px_rgba(74,52,38,0.8)]" />
              <span className="flex-1">
                <span className="block font-bold">&ldquo;{m.judul}&rdquo;</span>
                <span className="block text-[11px] text-cokelat/75">{m.tanggal} · {m.durasi} · {m.lagu.length} lagu</span>
              </span>
              <span aria-hidden="true" className="text-xs font-bold text-oranye-ink transition-transform group-open:rotate-90">▸</span>
            </summary>
            <div className="flex gap-5 border-t border-dashed border-cokelat/25 px-4 py-4">
            <Gambar src={`/images/mixtape/m${m.no}.webp`} alt={`Sampul J-card mixtape #${m.no} “${m.judul}”: ${m.sampul}`} width={128} height={128} asli={800} className="hidden h-32 w-32 shrink-0 -rotate-2 rounded-md shadow-[0_10px_24px_-12px_rgba(74,52,38,0.7)] sm:block" />
            <ol className="flex-1">
              {m.lagu.map(([lagu, band], k) => (
                <li key={lagu} className="flex gap-3 py-1.5 text-sm">
                  <span className="w-6 text-cokelat/75">{String(k + 1).padStart(2, '0')}</span>
                  <span className="flex-1 font-bold">{lagu}</span>
                  <span className="text-cokelat/80">{band}</span>
                </li>
              ))}
            </ol>
            </div>
          </details>
        </li>
      ))}
    </ol>
  );
}
