---
name: web-design-guidelines
description: Vercel'in web arayüzü tasarım kılavuzu (interactions, animation, layout, content, forms, performance, design, copywriting). UI kodu incelerken/denetlerken kullan — kaynak https://vercel.com/design/guidelines
---

# Vercel Web Interface Guidelines

Bu kılavuz, bir web arayüzünü denetlerken (audit) veya yeni bir UI parçası yazarken referans alınacak kontrol listesidir. Kaynak: https://vercel.com/design/guidelines

Bir sayfa/bileşen denetlenirken bu listedeki maddeler tek tek kontrol edilir; her ihlal "sorun / neden sorun / düzeltilmiş hali" formatında raporlanır.

## Etkileşimler (Interactions)
- Klavye ile her yerde gezinilebilmeli
- Focus durumu net görünmeli
- Focus yönetimi (modal açılınca içeri taşınmalı, kapanınca geri dönmeli)
- Görsel boyut ile tıklama alanı (hit target) eşleşmeli
- Mobilde input font-size ≥16px (zoom tetiklenmesin)
- Tarayıcı zoom'una saygı duyulmalı (px kilitli birimler kullanılmamalı)
- Input'lar hydration-safe olmalı (SSR/CSR uyuşmazlığı olmamalı)
- Yapıştırmayı (paste) engelleme
- Loading durumundaki butonlar disabled + spinner göstermeli
- Loading state'in minimum görünme süresi olmalı (flicker önleme)
- URL, uygulama state'ini yansıtmalı (deep-link edilebilir olmalı)
- Optimistic update'ler kullanılmalı
- Devam eden/kesik input ve loading state'lerinde "…" kullanılmalı
- Yıkıcı (destructive) aksiyonlar onay istemeli
- Kontrollerde çift dokunma zoom'u engellenmeli
- Tap highlight tasarımla uyumlu olmalı
- Etkileşimler affedici (forgiving) tasarlanmalı — yanlış tıklama kolayca geri alınabilmeli
- Tooltip'ler doğru gecikmeyle (delay) açılmalı
- Overscroll davranışı kontrol edilmeli
- Scroll pozisyonları sayfa geçişlerinde korunmalı
- Hız için mantıklı yerlerde autofocus kullanılmalı
- Ölü tıklama alanları (dead zone) olmamalı
- Her state deep-link edilebilir olmalı
- Sürükle-bırak etkileşimleri temiz olmalı
- Gesture'ların (kaydırma vb.) klavye/buton alternatifi olmalı
- Link olan her şey gerçek `<a>` etiketi olmalı (yeni sekmede açma, sağ tık menüsü çalışmalı)
- Asenkron güncellemeler ekran okuyucuya duyurulmalı (aria-live)
- Klavye kısayolları locale'e duyarlı olmalı

## Animasyonlar
- `prefers-reduced-motion` saygı görmeli
- Uygulama tercihi (CSS transition vs JS) duruma göre doğru seçilmeli
- Compositor-friendly özellikler animasyonlanmalı (`transform`, `opacity`)
- Her animasyonun bir amacı olmalı — gereksiz animasyon olmamalı
- Easing, animasyon edilen şeyin fiziğine uygun olmalı
- Animasyonlar kesilebilir (interruptible) olmalı
- Kullanıcı girdisine bağlı (input-driven) animasyonlar akıcı olmalı
- Transform origin doğru ayarlanmalı
- `transition: all` asla kullanılmamalı
- SVG transform'ları tarayıcılar arası tutarlı olmalı

## Yerleşim (Layout)
- Optik hizalama (matematiksel değil, göze göre) yapılmalı
- Hizalama bilinçli/kasıtlı olmalı
- Kompozisyonlarda kontrast dengeli olmalı
- Responsive kapsam tüm ekran boyutlarını kapsamalı
- Güvenli alanlara (safe area / notch) saygı gösterilmeli
- Gereksiz scrollbar'lar olmamalı
- Mümkün olduğunda boyutlandırmayı tarayıcıya bırak (intrinsic sizing)

## İçerik
- Yardım metni önce satır içi (inline) gösterilmeli
- Skeleton'lar stabil olmalı (layout shift yapmamalı)
- Sayfa başlıkları (title) doğru ve açıklayıcı olmalı
- Kullanıcıyı çıkmaza sokan (dead end) ekranlar olmamalı
- Tüm state'ler (boş, hata, yükleniyor, dolu) tasarlanmalı
- Tipografik tırnak işaretleri (" ") kullanılmalı, düz tırnak değil
- Dul/yetim satırlardan (widow/orphan) kaçınılmalı
- Karşılaştırmalı sayılarda tabular (eşit genişlikli) rakam kullanılmalı
- Durum, sadece renkle değil ikon/metinle de (redundant cue) belirtilmeli
- İkonların yanında etiket/label olmalı
- Ham şema/teknik veri (schema, id) kullanıcıya gösterilmemeli
- Üç nokta yerine gerçek ellipsis karakteri (…) kullanılmalı
- Başlıklara anchor link eklenmeli
- Kullanıcı içeriğine (UGC) karşı dayanıklı tasarım
- Tarih/sayı formatları locale'e duyarlı olmalı
- Konum yerine dil ayarı tercih edilmeli
- Marka isimleri gibi birebir içerik çeviriden korunmalı
- İçerik erişilebilir olmalı
- Sadece ikon içeren butonların erişilebilir adı (aria-label) olmalı
- ARIA'dan önce doğru HTML semantiği kullanılmalı
- Başlık hiyerarşisi ve "içeriğe atla" linki olmalı
- Medya erişilebilir olmalı (alt text, caption)
- Logo kullanımı marka kaynaklarına uygun olmalı
- Bitişik terimlerde (örn. "10 TL") non-breaking space kullanılmalı

## Formlar
- Enter tuşu formu göndermeli
- Textarea davranışı (Enter/Shift+Enter) doğru olmalı
- Her input'un label'ı olmalı
- Label'a tıklayınca ilgili input aktive olmalı
- Gönderim (submit) kuralı tutarlı olmalı
- Yazmayı engelleyen validasyon olmamalı
- Submit butonu önceden disable edilmemeli
- Kontrollerde ölü tıklama alanı olmamalı
- Hata mesajları ilgili alanın yanında gösterilmeli
- Autocomplete ve name özellikleri doğru ayarlanmalı
- Spellcheck sadece uygun alanlarda açık olmalı
- Doğru input type ve inputmode kullanılmalı (tel, email, number...)
- Placeholder, alanın boş olduğunu göstermeli — label yerine geçmemeli
- Placeholder değeri gerçekçi bir örnek olmalı
- Kaydedilmemiş değişiklikler kullanıcıya bildirilmeli
- Şifre yöneticileri ve 2FA ile uyumlu olunmalı
- Auth olmayan alanlarda şifre yöneticisi tetiklenmemeli
- Metin genişletme/otomatik değiştirme (text replacement) engellenmemeli
- Windows'ta `<select>` arka planı tutarlı olmalı

## Performans
- Cihaz/tarayıcı matrisinde test edilmeli
- Performans güvenilir şekilde ölçülmeli
- Gereksiz re-render'lar takip edilmeli
- Profiling yaparken CPU/network throttle edilmeli
- Layout hesaplaması minimize edilmeli
- Network gecikmesi bütçelenmeli
- Tuş vuruşu (keystroke) maliyeti düşük olmalı
- Büyük listeler sanallaştırılmalı (virtualization)
- Kaynaklar akıllıca preload edilmeli
- Görseller CLS'e (layout shift) sebep olmamalı
- Kritik origin'lere preconnect yapılmalı
- Fontlar preload edilmeli
- Fontlar subset edilmeli (gereksiz karakter seti yüklenmemeli)
- Ana thread'de pahalı işlem yapılmamalı
- Animasyonlu GIF yerine video kullanılmalı
- Safari'de video-as-image davranışı test edilmeli

## Tasarım
- Katmanlı (layered) gölgeler kullanılmalı
- Border'lar keskin/net görünmeli
- İç içe radius'lar (nested radii) tutarlı hesaplanmalı
- Renk tonu (hue) tutarlılığı korunmalı
- Grafikler/chart'lar erişilebilir renklerle çizilmeli
- Minimum kontrast oranlarına uyulmalı (WCAG)
- Etkileşim durumları kontrastı artırmalı, azaltmamalı
- Tarayıcı arayüzü (status bar rengi vb.) sayfa arka planıyla uyumlu olmalı
- Doğru `color-scheme` (light/dark) ayarlanmalı
- Metin anti-aliasing'i transform sırasında bozulmamalı
- Gradient banding'den kaçınılmalı

## Metin Yazımı (Vercel-specific Copywriting)
- Aktif cümle yapısı kullanılmalı
- Başlık ve buton metinleri Title Case olmalı (TR'de karşılığı: anlamlı büyük harf kullanımı)
- Net ve öz yazılmalı
- "ve" yerine uygun yerlerde "&" tercih edilebilir (marka diline göre)
- Aksiyon odaklı dil kullanılmalı ("Kaydet", "Gönder" — "Tamam" değil)
- Aynı kavram için tutarlı isimlendirme kullanılmalı
- İkinci tekil/çoğul şahıs ("siz") ile yazılmalı
- Placeholder'lar tutarlı kullanılmalı
- Sayılar rakamla yazılmalı ("3 ürün", "üç ürün" değil)
- Para birimi formatı tutarlı olmalı
- Sayı ile birim arası boşluk olmalı ("10 kg", "10kg" değil)
- Varsayılan olarak pozitif dil kullanılmalı
- Hata mesajları kullanıcıya çıkış yolu göstermeli
- Belirsizlikten kaçınılmalı

## Kullanım
Bir sayfa/bileşen "bu kurallara göre denetle" istendiğinde: yukarıdaki maddeleri kod ve canlı davranış üzerinden tek tek kontrol et, her ihlali üç sütunlu bir tabloda raporla (**sorun** / **neden sorun** / **düzeltilmiş hali**), ve aksi açıkça istenmedikçe **düzeltmeleri kullanıcı onayı olmadan uygulama**.
