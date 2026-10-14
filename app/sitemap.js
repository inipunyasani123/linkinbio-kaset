const SITE = "https://linkinbio-kaset.pintuweb.id";

export default function sitemap() {
  const now = new Date();
  return ["", "/siaran", "/mixtape"].map((r, i) => ({ url: SITE + r, lastModified: now, changeFrequency: "monthly", priority: i ? 0.7 : 1 }));
}
