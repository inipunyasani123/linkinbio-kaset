'use client';

import { arsipMixtape } from '@/lib/kaset';
import useHariIni from './useHariIni';

export default function ArsipMixtape({ hari: awal }) {
  const hari = useHariIni(awal);
  return (
    <ol className="mt-8 space-y-4">
      {arsipMixtape(hari).map((m, i) => (
        <li key={m.no} id={`m${m.no}`} className="scroll-mt-6">
          <details open={i === 0} className="group rounded-xl bg-krem70 shadow-[0_8px_24px_-14px_rgba(74,52,38,0.6)] ring-1 ring-cokelat/15">
            <summary className="flex min-h-16 cursor-pointer list-none items-center gap-4 p-4 [&::-webkit-details-marker]:hidden">
              <span aria-hidden="true" className="tape grid h-12 w-16 shrink-0 place-items-center rounded-md text-xs font-bold text-krem70">#{m.no}</span>
              <span className="flex-1">
                <span className="block font-bold">&ldquo;{m.judul}&rdquo;</span>
                <span className="block text-[11px] text-cokelat/75">{m.tanggal} · {m.durasi} · {m.lagu.length} lagu</span>
              </span>
              <span aria-hidden="true" className="text-xs font-bold text-oranye-ink transition-transform group-open:rotate-90">▸</span>
            </summary>
            <ol className="border-t border-dashed border-cokelat/25 px-4 py-3">
              {m.lagu.map(([lagu, band], k) => (
                <li key={lagu} className="flex gap-3 py-1.5 text-sm">
                  <span className="w-6 text-cokelat/75">{String(k + 1).padStart(2, '0')}</span>
                  <span className="flex-1 font-bold">{lagu}</span>
                  <span className="text-cokelat/80">{band}</span>
                </li>
              ))}
            </ol>
          </details>
        </li>
      ))}
    </ol>
  );
}
