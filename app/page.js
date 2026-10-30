import Link from 'next/link';
import { Archive, Disc3, Mic, Radio, Users } from 'lucide-react';
import { SIDE_A, SIDE_B } from '@/lib/kaset';
import Dek from './components/Dek';

const IKON = { kaset: Disc3, radio: Radio, arsip: Archive, mic: Mic, tamu: Users };

// Side A untuk didengarkan (▸ putar), Side B untuk ikut terlibat (● rekam).
function Row({ l, i, delay, sisi }) {
  const Ikon = IKON[l.ikon];
  return (
    <Link
      href={l.href}
      className="masuk group flex min-h-14 items-center gap-3 border-b border-cokelat/15 py-3.5 transition-[background-color,padding] hover:bg-cokelat/5 hover:px-2"
      style={{ animationDelay: `${delay}s` }}
    >
      <span className="text-xs text-cokelat/75">{String(i + 1).padStart(2, '0')}</span>
      <Ikon size={16} className="text-oranye-ink" aria-hidden="true" />
      <span className="flex-1">
        <span className="block text-sm font-bold group-hover:underline">{l.label}</span>
        <span className="block text-xs text-cokelat/75">{l.meta}</span>
      </span>
      <span className="text-xs uppercase text-cokelat/75 transition group-hover:text-oranye-ink" aria-hidden="true">{sisi === 'A' ? 'play ▸' : 'rec ●'}</span>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12 lg:px-8">
      {/* Di layar lebar: kaset di kiri, sampul J-card (daftar Side A/B) di kanan */}
      <div className="w-full max-w-md lg:grid lg:max-w-5xl lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
        <div className="turun tape -rotate-1 rounded-2xl p-4 lg:p-6">
          <div className="rounded-lg bg-krem70 px-4 py-3">
            <div className="flex items-center justify-between border-b-2 border-oranye70 pb-1.5">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-oranye-ink">Kaset Kita · FM</p>
              <p className="text-xs text-cokelat/75">C-60</p>
            </div>
            <h1 className="mt-2 font-mono text-2xl font-bold tracking-tight lg:text-4xl">MIXTAPE &amp; RADIO<br />KOMUNITAS</h1>
            <p className="text-xs text-cokelat/75">direkam manual di Bandung — sejak 2021</p>
          </div>
          <Dek />
        </div>

        <div className="lg:jcard">
        <section className="mt-7 lg:mt-0" aria-labelledby="side-a">
          <h2 id="side-a" className="masuk text-xs font-bold uppercase tracking-[0.3em] text-oranye-ink" style={{ animationDelay: '0.12s' }}>● Side A — dengarkan</h2>
          <nav className="mt-1" aria-label="Side A">{SIDE_A.map((l, i) => <Row key={l.label} l={l} i={i} sisi="A" delay={0.16 + i * 0.05} />)}</nav>
        </section>
        <section className="mt-6" aria-labelledby="side-b">
          <h2 id="side-b" className="masuk text-xs font-bold uppercase tracking-[0.3em] text-mustard-ink" style={{ animationDelay: '0.26s' }}>● Side B — ikut terlibat</h2>
          <nav className="mt-1" aria-label="Side B">{SIDE_B.map((l, i) => <Row key={l.label} l={l} i={i} sisi="B" delay={0.3 + i * 0.05} />)}</nav>
        </section>

        <p className="masuk mt-7 text-center text-xs text-cokelat/75 lg:text-left" style={{ animationDelay: '0.45s' }}>
          ⟲ putar-balik kaset sebelum mengembalikan · radio komunitas fiktif untuk purwarupa desain
        </p>
        </div>
      </div>
    </main>
  );
}
