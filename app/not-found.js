import Link from "next/link";

export const metadata = { title: "Halaman tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="tape w-full max-w-sm -rotate-1 rounded-2xl p-4">
        <div className="rounded-lg bg-krem70 px-5 py-6 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-oranye-ink">Kaset Kita · FM · 404</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight">PITA KUSUT</h1>
          <p className="mt-2 text-sm text-cokelat/80">Halaman ini tidak ada. Putar balik pakai pensil, lalu coba lagi.</p>
          <Link href="/" className="mt-5 inline-flex min-h-11 items-center rounded-lg border-2 border-cokelat px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] hover:bg-cokelat hover:text-krem70">⏮ Ke Side A</Link>
        </div>
      </div>
    </main>
  );
}
