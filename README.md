# SilverRing — Kurumsal Web Sitesi

Astro tabanlı, iki dilli (TR / EN) statik kurumsal site.
Endüstriyel B2B tasarım dili: Archivo + Inter, is siyahı / çelik grisi / kağıt + imza turuncu-kırmızı.

## Teknoloji

- **Astro 7** — statik site üretimi (SSG), sıfır JS varsayılanı
- **@astrojs/sitemap** — otomatik `sitemap-index.xml`
- Yerleşik **i18n**: `tr` kök (`/`), `en` alt dizin (`/en/`), yerelleştirilmiş yollar (ör. `/urunler` ↔ `/en/products`)

## Komutlar

```bash
npm install        # bağımlılıklar
npm run dev        # geliştirme sunucusu — http://localhost:4321
npm run build      # üretim derlemesi -> dist/
npm run preview    # dist/ önizleme
```

## Proje yapısı

```
src/
  i18n/
    config.ts      # dil listesi + rota anahtarı → yol eşlemesi + yardımcılar
    tr.ts          # TÜM Türkçe içerik (ana kaynak + tip referansı)
    en.ts          # İngilizce içerik (tr.ts şekline göre tip denetimli)
    index.ts       # useContent(lang)
  layouts/
    BaseLayout.astro   # <head>, SEO/hreflang/OG/JSON-LD, header+footer, arayüz script'i
  components/
    Header.astro, Footer.astro, PageHead.astro, DocLayout.astro,
    DocBlock.astro, CtaBand.astro, Icon.astro
    pages/*.astro      # her sayfanın gövdesi (lang prop alır)
  pages/
    *.astro            # TR rotaları (ince sarmalayıcılar)
    en/*.astro         # EN rotaları
  styles/global.css    # tüm tasarım sistemi (tek dosya)
public/
  img/                 # tüm görseller (eski siteden taşındı)
  favicon.png, robots.txt
_legacy/               # eski düz HTML taslağı (referans, derlemeye dahil değil)
```

## Logo

Kurumsal logo koddadır — `src/components/Logo.astro` (inline SVG).
İşaret: **kapatma kollu çelik çember** — firmanın ürettiği varil çemberi kilidinin
soyutlanmış hâli. Çember `currentColor` (bağlama göre is siyahı / beyaz), kapatma
kolu daima imza turuncu-kırmızı (#e2380f).

Raster türevler (arama motoru / OG / PWA için) `scripts/gen-logo.mjs` ile üretilir:

```bash
node scripts/gen-logo.mjs
# -> public/img/logo.png  (koyu yazılı, şeffaf)
#    public/img/logo-white.png  (beyaz, koyu zemin için)
#    public/img/logo-mark.png   (kare ikon)
#    public/favicon.png
```

`public/favicon.svg` elle tutulur; işareti değiştirirsen ikisini de güncelle.

## İçerik nasıl güncellenir

Metin ve ürün/sertifika listeleri **kod içinde değil**, `src/i18n/tr.ts` ve `src/i18n/en.ts`
dosyalarındadır. Bir alanı TR'de değiştirdiğinizde EN karşılığını da eklemezseniz `npm run build`
tip hatası verir — böylece iki dil senkron kalır.

Yeni sayfa eklemek için: `src/i18n/config.ts` içindeki `routes` nesnesine anahtar ekleyin,
`src/components/pages/` altına gövde bileşeni, `src/pages/` ve `src/pages/en/` altına birer
ince rota dosyası koyun.

## Yapılacaklar (canlı öncesi)

- [ ] `astro.config.mjs` içindeki `SITE` değerini gerçek alan adıyla değiştirin
- [ ] İletişim formunu bir e-posta servisine bağlayın (şu an sadece istemci tarafı onay gösterir)
- [ ] Gerçek katalog PDF'i eklenince `catalog` sayfasını indirme bağlantısına çevirin
- [ ] `public/img/logo.png` ve `favicon.png` dosyalarını yüksek çözünürlüklü kurumsal sürümlerle değiştirin
- [ ] Haberler için içerik koleksiyonu (`src/content/`) kurun
- [ ] Google Search Console / Bing Webmaster Tools'a alan adını ekleyip doğrulama kodlarını
      `.env` dosyasına yazın (bkz. aşağıdaki "Arama motoru doğrulaması" bölümü)
- [ ] Yayına alındıktan sonra `sitemap-index.xml`'i Search Console ve Bing Webmaster'a gönderin
- [ ] Yayına aldıktan sonra güvenlik başlıklarının gerçekten uygulandığını doğrulayın
      (bkz. aşağıdaki "Güvenlik başlıkları" bölümü) — [securityheaders.com](https://securityheaders.com) ile test edin

## Güvenlik başlıkları

`public/_headers` (Netlify, Cloudflare Pages) ve `vercel.json` (Vercel) dosyalarında
aynı güvenlik başlıkları tanımlı: CSP, HSTS, X-Frame-Options, X-Content-Type-Options,
Referrer-Policy, Permissions-Policy. Astro'nun kendi geliştirme sunucusu bu dosyaları
okumaz — yalnızca gerçek dağıtımda (Netlify/Cloudflare/Vercel) devreye girerler, bu
yüzden lokal `npm run dev`/`preview` ile test edilemezler.

CSP'de `script-src`/`style-src` için `'unsafe-inline'` var çünkü site genelinde
`style="..."` özniteliği ve `<script is:inline>` (JSON-LD, form onayı, sayfa içi
etkileşim) yoğun kullanılıyor; nonce/hash tabanlı sıkı bir CSP'ye geçmek bu kalıpların
kaldırılmasını gerektirir. Yeni bir üçüncü parti script veya iframe eklerseniz (Google
Fonts ve Google Maps zaten izinli) `_headers` ve `vercel.json`'daki CSP'ye ilgili
domaini eklemeyi unutmayın, aksi halde tarayıcı sessizce engeller.

## Arama motoru doğrulaması (Search Console / Bing / Yandex)

`BaseLayout.astro`, aşağıdaki ortam değişkenleri tanımlıysa ilgili doğrulama `<meta>`
etiketini otomatik olarak sayfaya ekler. Proje kökünde bir `.env` dosyası oluşturup
sadece elinizdeki kodları girin (hiçbiri zorunlu değildir, boş bırakılan atlanır):

```bash
PUBLIC_GOOGLE_SITE_VERIFICATION=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
PUBLIC_BING_SITE_VERIFICATION=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
PUBLIC_YANDEX_SITE_VERIFICATION=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Kodları şuradan alırsınız: [Google Search Console](https://search.google.com/search-console)
(mülk ekle → URL öneki → "HTML etiketi" doğrulama yöntemi → `content="..."` değerini kopyalayın)
ve [Bing Webmaster Tools](https://www.bing.com/webmasters) (Bing, Yandex'i de otomatik ithal eder,
ayrıca Search Console mülkünü doğrudan içe aktarma seçeneği de sunar).

## Dağıtım

Statik çıktı `dist/`. Herhangi bir statik hosting'e yüklenebilir:
Netlify / Vercel / Cloudflare Pages (framework: Astro) veya klasik sunucuda `dist/` içeriğini
web köküne kopyalayın. Sunucu yapılandırmasında `/en` → `/en/` yönlendirmesi ve 404 için
`404.html` ayarı önerilir.
