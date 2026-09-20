// Kurumsal logonun raster türevlerini üretir (favicon / OG / schema için).
// Kaynak: public/img/logo-real.png (gerçek marka lockup'ı, silverring.com.tr'den)
//         ve public/img/logo-mark-real.png (yalnız işaret, lockup'tan kırpıldı).
// Kullanım: node scripts/gen-logo.mjs
import sharp from 'sharp';

const bg = '#10151d';

async function squareIcon(size, outPath) {
  const mark = sharp('public/img/logo-mark-real.png');
  const meta = await mark.metadata();
  const pad = Math.round(size * 0.16);
  const avail = size - pad * 2;
  const scale = Math.min(avail / meta.width, avail / meta.height);
  const w = Math.round(meta.width * scale);
  const h = Math.round(meta.height * scale);
  const markBuf = await sharp('public/img/logo-mark-real.png').resize(w, h).toBuffer();
  const r = Math.round(size * 0.2);
  const roundedRect = Buffer.from(
    `<svg width="${size}" height="${size}"><rect x="0" y="0" width="${size}" height="${size}" rx="${r}" fill="${bg}"/></svg>`
  );
  await sharp(roundedRect)
    .composite([{ input: markBuf, left: Math.round((size - w) / 2), top: Math.round((size - h) / 2) }])
    .png()
    .toFile(outPath);
  console.log('yazıldı:', outPath, `(${size}px)`);
}

await squareIcon(512, 'public/img/logo-mark.png');
await squareIcon(96, 'public/favicon.png');

// Lockup görselleri (işaret + yazı) zaten public/img/logo-real.png ve
// logo-real-white.png olarak mevcut; şema/OG için düz kopya yeterli.
await sharp('public/img/logo-real.png').toFile('public/img/logo.png');
await sharp('public/img/logo-real-white.png').toFile('public/img/logo-white.png');
console.log('yazıldı: public/img/logo.png, public/img/logo-white.png');
