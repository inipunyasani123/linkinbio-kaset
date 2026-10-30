import { ACARA, NAMA_HARI, SITE } from '@/lib/kaset';
import Kembali from '../components/Kembali';
import Gambar from '../components/Gambar';
import Berikutnya from '../components/Berikutnya';
import FormTamu from '../components/FormTamu';

export const metadata = {
  title: 'Jadwal Siaran',
  description: 'Jadwal siaran mingguan Kaset Kita FM: Mixtape Jumat, Lagu Kiriman, dan Arsip Kaset Lama, siaran berikutnya menurut WIB, dan cara jadi penyiar tamu.',
  alternates: { canonical: `${SITE}/siaran` },
};

export default function Siaran() {
  const urut = [...ACARA].sort((a, b) => ((a.hari + 6) % 7) - ((b.hari + 6) % 7));
  return (
    <main className="px-4 py-10">
      <div className="mx-auto max-w-lg">
        <Kembali sisi="Side A · 02" />
        <h1 className="mt-8 text-3xl font-bold tracking-tight">JADWAL SIARAN</h1>
        <Berikutnya />

        <ol className="mt-8 border-t-2 border-cokelat">
          {urut.map((a) => (
            <li key={a.nama} className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-cokelat/15 py-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-oranye-ink">{NAMA_HARI[a.hari]}</p>
                <p className="text-2xl font-bold">{String(a.jam).padStart(2, '0')}.00</p>
                <p className="text-xs text-cokelat/75">{a.durasi} menit</p>
              </div>
              <div>
                <h2 className="text-lg font-bold">{a.nama}</h2>
                <p className="mt-1 flex items-center gap-2.5 text-sm text-cokelat/80">
                  <Gambar src={`/images/penyiar/${a.foto}.webp`} alt={a.alt} width={44} height={44} asli={400} className="h-11 w-11 shrink-0 rounded-full ring-2 ring-krem70" />
                  <span>bersama {a.penyiar}</span>
                </p>
                <p className="mt-1 text-sm">{a.ket}</p>
              </div>
            </li>
          ))}
        </ol>

        <FormTamu />
        <p className="mt-8 text-center text-xs text-cokelat/75">Acara dan penyiar adalah contoh purwarupa desain.</p>
      </div>
    </main>
  );
}
