import { SITE } from '@/lib/kaset';
import { hariIniWIB } from '@/lib/waktu';
import Kembali from '../components/Kembali';
import FormTamu from '../components/FormTamu';
import ArsipMixtape from '../components/ArsipMixtape';

export const metadata = {
  title: 'Arsip Mixtape',
  description: 'Arsip mixtape Kaset Kita FM — #24 "Hujan Kota" sampai #21 "Kereta Pagi" — lengkap dengan tracklist band lokal, dan formulir kirim demo.',
  alternates: { canonical: `${SITE}/mixtape` },
};

export default function Mixtape() {
  return (
    <main className="px-4 py-10">
      <div className="mx-auto max-w-lg">
        <Kembali sisi="Side B · 01" />
        <h1 className="mt-8 text-3xl font-bold tracking-tight">ARSIP MIXTAPE</h1>
        <p className="mt-1 text-sm text-cokelat/80">Satu mixtape tiap Jumat. Semua lagu dari band lokal, dengan izin mereka.</p>

        <ArsipMixtape hari={hariIniWIB()} />

        <FormTamu jenis="demo" />
        <p className="mt-8 text-center text-[11px] text-cokelat/75">Band dan lagu adalah contoh purwarupa desain.</p>
      </div>
    </main>
  );
}
