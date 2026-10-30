import Link from 'next/link';

export default function Kembali({ sisi }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <Link href="/" className="tape inline-flex min-h-11 -rotate-1 items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-krem70 hover:text-white">
        ⏮ Kaset Kita · FM
      </Link>
      <span className="text-xs font-bold uppercase tracking-[0.3em] text-oranye-ink">{sisi}</span>
    </div>
  );
}
