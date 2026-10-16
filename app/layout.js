import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plex = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-plex", weight: ["400", "500", "700"] });

const __jsonld = {"@context":"https://schema.org","@type":"Organization","name":"KASET KITA","description":"Kolektif musik & radio komunitas","url":"https://linkinbio-kaset.pintuweb.id"};

export const metadata = {
  metadataBase: new URL("https://linkinbio-kaset.pintuweb.id"),
  title: { default: "Kaset Kita FM — Mixtape & Radio Komunitas, Bandung", template: "%s — Kaset Kita FM" },
  description: "Tautan Kaset Kita FM, radio komunitas di Bandung: siaran berikutnya menurut WIB, jadwal mingguan, arsip mixtape band lokal, kirim demo, dan penyiar tamu.",
  applicationName: "KASET KITA",
  keywords: ["radio komunitas bandung", "mixtape lokal", "kirim demo band", "jadwal siaran", "link in bio radio"],
  authors: [{ name: "KASET KITA" }],
  creator: "KASET KITA",
  publisher: "KASET KITA",
  alternates: { canonical: "https://linkinbio-kaset.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://linkinbio-kaset.pintuweb.id",
    siteName: "KASET KITA",
    title: "Kaset Kita FM — Mixtape & Radio Komunitas, Bandung",
    description: "Tautan Kaset Kita FM, radio komunitas di Bandung: siaran berikutnya menurut WIB, jadwal mingguan, arsip mixtape band lokal, kirim demo, dan penyiar tamu.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Kaset Kita FM — Mixtape & Radio Komunitas, Bandung" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaset Kita FM — Mixtape & Radio Komunitas, Bandung",
    description: "Tautan Kaset Kita FM, radio komunitas di Bandung: siaran berikutnya menurut WIB, jadwal mingguan, arsip mixtape band lokal, kirim demo, dan penyiar tamu.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${plex.variable}`}>
      <body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 16px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Situs demo buatan PintuWeb — nama dan isinya rekaan.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=kaset" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Buat yang seperti ini →</a>
        </aside>
        </body>
    </html>
  );
}
