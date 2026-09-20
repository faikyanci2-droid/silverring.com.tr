// Türkçe içerik — sitenin ana içerik kaynağı ve tip referansı.
// İngilizce (en.ts) bu nesnenin şekline göre tip denetiminden geçer.

const tr = {
  company: {
    name: 'SilverRing',
    legalName: 'SilverRing Metal Sanayi A.Ş.',
    tagline: 'Varil ve Bidon Aksesuarları İmalatı',
    phone: '0262 646 70 77',
    phoneHref: '+902626467077',
    email: 'info@silverring.com.tr',
    hqTitle: 'Merkez Fabrika',
    hqAddress: ['Gebze Güzeller O.S.B', 'İnönü Mah. Aşık Veysel Sok. No:2/1', 'Kocaeli / Türkiye'],
    branchTitle: 'Şube',
    branchAddress: ['Barış Mah. 1802 Sok. No:11', 'Gebze / Kocaeli'],
    footerBlurb:
      'Metal, plastik ve fiber varil çemberleri ile aksesuarlarının üretiminde ambalaj sektörünün lider tedarikçilerinden. Yaklaşık 30 ülkeye ihracat.',
  },

  common: {
    skipToContent: 'İçeriğe geç',
    home: 'Anasayfa',
    menu: 'Menü',
    openMenu: 'Menüyü aç',
    closeMenu: 'Menüyü kapat',
    allRightsReserved: 'Tüm hakları saklıdır.',
    location: 'Gebze, Kocaeli — Türkiye',
    langLabel: 'Dil',
    readMore: 'Devamı',
    explore: 'İncele',
    viewCatalog: 'Kataloğu Görüntüle',
    contactUs: 'Bize Ulaşın',
    getInTouch: 'İletişime Geç',
    requestCatalog: 'Katalog Talep Et',
    backToHome: 'Anasayfaya dön',
  },

  nav: {
    home: 'Anasayfa',
    corporate: 'Kurumsal',
    products: 'Ürünler',
    catalog: 'Katalog',
    services: 'Teknik Hizmetler',
    quality: 'Kalite',
    news: 'Haberler',
    responsibility: 'Sosyal Sorumluluk',
    careers: 'Kariyer',
    contact: 'İletişim',
    sub: {
      corporate: [
        { label: 'Hakkımızda', hash: 'hakkimizda' },
        { label: 'Kalite Politikası', hash: 'kalite-politikasi' },
        { label: 'Çevre Politikası', hash: 'cevre-politikasi' },
        { label: 'İSG Politikası', hash: 'isg-politikasi' },
        { label: 'Müşteri Memnuniyeti Politikası', hash: 'musteri-politikasi' },
        { label: 'Sosyal Sorumluluk Politikası', hash: 'sosyal-politikasi' },
        { label: 'Sürdürülebilir Tedarik Politikası', hash: 'tedarik-politikasi' },
        { label: 'Modern Kölelik Politikası ve Beyannamesi', hash: 'modern-kolelik-politikasi' },
      ],
      products: [
        {
          title: 'Çemberler',
          hash: 'cemberler',
          items: [
            { label: 'Sac Varil Çemberi', hash: 'cemberler' },
            { label: 'Teneke Kova Çemberi', hash: 'cemberler' },
            { label: 'Özel Amaçlı Çemberler', hash: 'cemberler' },
          ],
        },
        {
          title: 'Aksesuarlar',
          hash: 'aksesuarlar',
          items: [
            { label: 'Kulplar', hash: 'kulplar' },
            { label: 'Diğer Aksesuarlar', hash: 'aksesuarlar' },
          ],
        },
      ],
      services: [
        { label: 'Danışmanlık', hash: 'danismanlik' },
        { label: 'Ürün Tasarımı', hash: 'urun-tasarimi' },
        { label: 'Ürün Geliştirme', hash: 'urun-gelistirme' },
        { label: 'Test', hash: 'test' },
      ],
      quality: [
        { label: 'Kalite Kontrol', hash: 'kalite-kontrol' },
        { label: 'Sertifikalar', hash: 'sertifikalar' },
        { label: 'Üyelikler', hash: 'uyelikler' },
        { label: 'Marka Tescil', hash: 'marka-tescil' },
      ],
      responsibility: [
        { label: 'Eğitime Destek', hash: 'egitim' },
        { label: 'Sokak Hayvanlarına Destek', hash: 'hayvan' },
      ],
    },
  },

  footer: {
    colCorporate: 'Kurumsal',
    colProducts: 'Ürün & Hizmet',
    colContact: 'İletişim',
    linksCorporate: [
      { label: 'Hakkımızda', key: 'corporate', hash: 'hakkimizda' },
      { label: 'Kalite Politikası', key: 'corporate', hash: 'kalite-politikasi' },
      { label: 'Çevre Politikası', key: 'corporate', hash: 'cevre-politikasi' },
      { label: 'Sosyal Sorumluluk', key: 'responsibility', hash: '' },
      { label: 'Kariyer', key: 'careers', hash: '' },
    ],
    linksProducts: [
      { label: 'Çemberler', key: 'products', hash: 'cemberler' },
      { label: 'Aksesuarlar', key: 'products', hash: 'aksesuarlar' },
      { label: 'Katalog', key: 'catalog', hash: '' },
      { label: 'Teknik Hizmetler', key: 'services', hash: '' },
      { label: 'Sertifikalar', key: 'quality', hash: 'sertifikalar' },
    ],
  },

  meta: {
    home: {
      title: 'Varil ve Bidon Çemberi, Kulp, Aksesuar İmalatı',
      description:
        'SilverRing Metal Sanayi A.Ş. — Varil ve bidon aksesuarları imalatı: metal, plastik ve fiber çemberler, kulplar ve aksesuarlar. Yaklaşık 30 ülkeye ihracat.',
    },
    corporate: {
      title: 'Kurumsal',
      description:
        'SilverRing hakkında; kalite, çevre, iş sağlığı ve güvenliği, müşteri memnuniyeti, sosyal sorumluluk ve sürdürülebilir tedarik politikalarımız.',
    },
    products: {
      title: 'Ürünler',
      description:
        'Metal, plastik ve fiber varil çemberleri, paslanmaz çelik çemberler, kulplar ve varil aksesuarları — SilverRing ürün gamı.',
    },
    catalog: {
      title: 'Katalog',
      description: 'SilverRing ürün kataloğu — çemberler, kulplar ve varil aksesuarlarının teknik ölçü, malzeme ve kilit mekanizması detayları tek dosyada.',
    },
    services: {
      title: 'Teknik Hizmetler',
      description: 'Danışmanlık, ürün tasarımı, ürün geliştirme ve test hizmetlerimizle müşteriye özel çember ve aksesuar çözümleri geliştiriyoruz.',
    },
    quality: {
      title: 'Kalite',
      description:
        'SilverRing kalite kontrol süreçleri, ISO 9001, ISO 14001, ISO 45001, ISO 10002 sertifikaları, üyelikler ve marka tescili.',
    },
    news: {
      title: 'Haberler',
      description: "SilverRing'den güncel gelişmeler, ürün duyuruları ve sektör haberleri — varil ve bidon aksesuarları üretiminden son dakika bilgileri.",
    },
    responsibility: {
      title: 'Sosyal Sorumluluk',
      description: 'SilverRing eğitime destek ve sokak hayvanlarına destek projeleri — kârlılığın ötesinde topluma ve doğaya karşı sorumluluklarımız.',
    },
    careers: {
      title: 'Kariyer',
      description: 'SilverRing insan kaynakları ve kariyer fırsatları — sektörün lider tedarikçisinde büyüyen bir ekibe katılın, başvurunuzu gönderin.',
    },
    contact: {
      title: 'İletişim',
      description: 'SilverRing Metal Sanayi A.Ş. iletişim bilgileri — merkez fabrika ve şube adresleri, telefon, e-posta ve online teklif formu.',
    },
    privacy: {
      title: 'Gizlilik Politikası',
      description: 'SilverRing web sitesi gizlilik politikası — toplanan bilgiler, kullanım amacı ve veri güvenliği hakkında bilgilendirme.',
    },
    kvkk: {
      title: 'KVKK Aydınlatma Metni',
      description: '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında SilverRing tarafından yapılan aydınlatma metni.',
    },
    cookies: {
      title: 'Çerez Politikası',
      description: 'SilverRing web sitesinde çerez kullanımı hakkında bilgilendirme.',
    },
  },

  home: {
    hero: {
      eyebrow: 'Varil ve Bidon Aksesuarları İmalatı',
      title: 'Çember, kulp ve aksesuarda güvenilir üretim ortağınız',
      lead: 'Metal, plastik ve fiber varil çemberleri ile aksesuarlarının üretiminde; kimya, gıda, ilaç ve petrol sektörlerine özel çözümler sunuyoruz. Yaklaşık 30 ülkeye ihracat yapan bir Kocaeli sanayi kuruluşuyuz.',
      ctaPrimary: 'Ürünlerimizi İnceleyin',
      ctaSecondary: 'Bize Ulaşın',
      stats: [
        { num: '30+', label: 'ülkeye ihracat' },
        { num: '300+', label: 'çember & aksesuar çeşidi' },
        { num: 'ISO', label: '9001 · 14001 · 45001' },
      ],
    },
    sectors: {
      kicker: 'Hizmet Verdiğimiz Sektörler',
      title: 'Kritik ambalaj ihtiyaçlarında tercih edilen tedarikçi',
      items: ['Kimya', 'Gıda', 'İlaç', 'Petrol & Yağ', 'Boya & Kaplama', 'Tarım Kimyasalları'],
    },
    about: {
      kicker: 'Biz Kimiz',
      title: 'Ambalaj sektöründe uzun yıllara dayanan deneyim',
      p1: 'Firmamız, metal, plastik ve fiber varil çemberleri ile aksesuarlarının üretimi konusunda faaliyet göstermektedir. Kimya, gıda, ilaç, petrol v.b. birçok alanda kullanım için özelleştirilmiş ürün yelpazemiz, müşterilerimize yüksek kalitesi ve aynı zamanda rekabetçi fiyatları ile büyük bir avantaj sağlamaktadır.',
      p2: 'SilverRing, ambalaj sektöründe uzun yıllara dayanan deneyimi, uzman kadrosu ve güçlü mali yapısıyla yurt içinde lider konumda hizmet vermektedir. Küresel bir marka haline gelme yolunda ilerleyen SilverRing, çok uluslu şirketlerin global tedarikçisi olmayı başarmıştır.',
      cta: 'Hakkımızda',
    },
    productsTeaser: {
      kicker: 'Ürün Ailemiz',
      title: 'Varil ve bidon için uçtan uca aksesuar çözümleri',
      cards: [
        { title: 'Sac Varil Çemberi', text: 'Metal varil ve bidonlar için dayanıklı kilit mekanizmalı çemberler.', img: '/img/sac-varil-cemberi.webp', hash: 'cemberler' },
        { title: 'Fiber Varil Çemberi', text: 'Fiber varil gövdeleri için özel tasarlanmış çember sistemleri.', img: '/img/fiber-varil-cemberi.webp', hash: 'cemberler' },
        { title: 'Kulplar', text: 'Metal ve fiber varil kulpları, taşıma ve elleçlemeyi kolaylaştırır.', img: '/img/metal-kulplar.webp', hash: 'kulplar' },
        { title: 'Aksesuarlar', text: 'Garanti kapakları, kelepçeler, plastik tapalar ve emniyet pimleri.', img: '/img/metal-garanti-kapaklari.webp', hash: 'aksesuarlar' },
      ],
    },
    quality: {
      kicker: 'Kalite Yönetimi',
      title: 'Önleme odaklı kalite kontrol yaklaşımı',
      text: 'Kalite kontrol faaliyetlerimiz, proaktif yaklaşım esas alınarak "önleme" mantığı çerçevesinde ele alınmaktadır. Seri üretime geçmeden önce numune üretimi, test ve raporlama süreçleri titizlikle yürütülür.',
      items: [
        'ISO 9001 Kalite Yönetim Sistemi',
        'ISO 14001 Çevre Yönetim Sistemi',
        'ISO 45001 İş Sağlığı ve Güvenliği Yönetim Sistemi',
        'ISO 10002 Müşteri Memnuniyeti Yönetim Sistemi',
      ],
      cta: 'Kalite Sayfasına Git',
    },
    trust: {
      label: 'Belgelendirilmiş yönetim sistemleri',
      items: [
        { code: 'ISO 9001', name: 'Kalite' },
        { code: 'ISO 14001', name: 'Çevre' },
        { code: 'ISO 45001', name: 'İSG' },
        { code: 'ISO 10002', name: 'Müşteri Memnuniyeti' },
        { code: 'CE', name: 'Kafes Sertifikaları' },
        { code: 'UN', name: 'Standartlarına Uygun' },
      ],
    },
    why: {
      kicker: 'Neden SilverRing',
      title: 'Sektörün lider tedarikçisiyle çalışmanın farkı',
      cards: [
        { no: '01', icon: 'consult', title: 'Müşteri Odaklı', text: 'Müşteri odaklı ürün ve iletişim stratejimiz ile ihtiyacınıza en uygun çözümü birlikte belirleriz.' },
        { no: '02', icon: 'tag', title: 'Rekabetçi Maliyet', text: 'Güçlü mali yapımız ve verimli üretim süreçlerimizle yıl boyu rekabetçi fiyat sunarız.' },
        { no: '03', icon: 'truck', title: 'Hızlı Teslimat & Destek', text: 'Yüksek üretim kapasitemiz ve stok yönetimimizle taleplerinize hızlı yanıt veririz.' },
        { no: '04', icon: 'test', title: 'AR-GE ve Sürekli İyileştirme', text: 'Sürekli iyileştirme kültürüyle ürünlerimizi ve süreçlerimizi geliştirmeye devam ederiz.' },
      ],
    },
    counters: {
      items: [
        { icon: 'globe', n: '30+', l: 'ülkeye ihracat' },
        { icon: 'layers', n: '300+', l: 'çember & aksesuar çeşidi' },
        { icon: 'award', n: '20+', l: 'yıllık sektör deneyimi' },
        { icon: 'factory', n: '2', l: 'üretim tesisi · Gebze' },
      ],
    },
    faq: {
      kicker: 'Sık Sorulan Sorular',
      title: 'Aklınıza takılanlar',
      lead: 'Ürünlerimiz ve çalışma şeklimiz hakkında en çok sorulan sorular.',
      items: [
        {
          q: 'Hangi varil ve bidon tiplerine çember üretiyorsunuz?',
          a: 'Metal, plastik ve fiber varil gövdeleri ile teneke kovalar için; farklı çap, kalınlık ve kilit mekanizmalarında 300’ün üzerinde çember ve aksesuar üretiyoruz. İhtiyacınıza özel ölçü ve tasarımlar da geliştiriyoruz.',
        },
        {
          q: 'Ürünleriniz UN standartlarına uygun mu?',
          a: 'Evet. Ürün gamımız UN standartlarına uygun olarak üretilmektedir. Kalite yönetim sistemlerimiz ISO 9001, 14001, 45001 ve 10002 kapsamında belgelendirilmiştir.',
        },
        {
          q: 'Numune ve teknik doküman sağlıyor musunuz?',
          a: 'Evet. Müşteriye özel taleplerde numune üretimi, testler ve teknik doküman desteği sağlıyor; onaylanan ürünlerin seri üretimine geçiyoruz.',
        },
        {
          q: 'İhracat yapıyor musunuz?',
          a: 'Yaklaşık 30 ülkeye ihracat yapıyoruz ve çok uluslu şirketlerin global tedarikçisiyiz. İhracat operasyonlarımızı ilgili ihracatçılar birliği çatısı altında yürütüyoruz.',
        },
      ],
    },
    ctaBand: 'Ürün kataloğumuzu inceleyin, ihtiyacınıza en uygun çözümü birlikte belirleyelim.',
  },

  corporate: {
    lead: 'Kim olduğumuz, nasıl çalıştığımız ve taahhütlerimiz.',
    about: {
      kicker: 'Biz Kimiz',
      title: 'SilverRing',
      paras: [
        'Firmamız, metal, plastik ve fiber varil çemberleri ile aksesuarlarının üretimi konusunda faaliyet göstermektedir. Kimya, gıda, ilaç, petrol v.b. birçok alanda kullanım için özelleştirilmiş ürün yelpazemiz, müşterilerimize yüksek kalitesi ve aynı zamanda rekabetçi fiyatları ile büyük bir avantaj sağlamaktadır.',
        'SilverRing, ambalaj sektöründe uzun yıllara dayanan deneyimi, uzman kadrosu ve güçlü mali yapısıyla, yurt içinde lider konumda hizmet vermektedir.',
        'Küresel bir marka haline gelme yolunda ilerleyen SilverRing, çok uluslu şirketlerin global tedarikçisi olmayı başarmıştır. Şu anda yaklaşık 30 ülkeye ihracat yapan firmamız, ihracat oranını sürekli artırarak, sektörün dünya çapındaki lideri olma yolunda emin adımlar atmaktadır.',
      ],
      img: '/img/hero-factory.webp',
      imgAlt: 'SilverRing ekibi ve üretim tesisi',
    },
    missionVision: {
      mission: {
        title: 'Misyonumuz',
        text: 'Kurumsal bir yapıda; yurtiçinde ve yurtdışında müşteriye özgü, kaliteli "Varil ve Bidon Aksesuarları" ürün ve hizmetleri sunmaktır.',
      },
      vision: {
        title: 'Vizyonumuz',
        text: 'Varil ve bidon aksesuarları imalatı sektöründe hizmet ve kalite farklılıkları ile tercih edilen, lider bir marka olmak.',
      },
    },
    blocks: [
      {
        id: 'kalite-politikasi',
        kicker: 'Politika',
        title: 'Kalite Politikası',
        paras: [
          '"Müşteri Odaklılık" vizyonu ile hareket eden şirketimiz, aşağıdaki ilkeler doğrultusunda en yüksek seviyede kaliteli hizmet vermeyi taahhüt etmektedir:',
        ],
        list: [
          'Misyonu gereği tüm faaliyetlerinde en yüksek seviyede kaliteli hizmet vermeyi,',
          'Şirketimizde ilgili birimlerin kalite hedeflerini somut ve ölçülebilir parametreler üzerinden belirlemeyi,',
          'İş süreçlerini vizyonumuz doğrultusunda yapılandırmayı,',
          'İş süreçlerimizin kalite seviyeleri arasında ortaya çıkabilecek farklılıkları en aza indirmeyi,',
          'İş süreçlerini sürekli gözden geçirerek kalite seviyesinin arttırılabileceği alanları belirlemeyi,',
          'Kalite standartları, müşteri ve diğer şartlara göre çalışmalarımızı yürütmeyi ve kalite yönetim sisteminin etkinliğini sürekli iyileştirmeyi,',
          'İş süreçlerimizdeki verimliliğimizi uluslararası düzeyde rekabet edebilecek bir seviyeye yükseltmeyi,',
          'Şirketimizde yenilikçi ve yaratıcı yaklaşımları cesaretlendirmeyi,',
          'Kalite yönetim sistemimizin gerektirdiği dokümantasyon ve arşiv sistemini oluşturmayı,',
          'Şirketimizin faaliyet göstermiş olduğu sektörde kalitesi ile öne çıkan bir işletme olmayı,',
        ],
        signOff: 'Genel Müdür',
        img: '/img/iso9001.webp',
        imgAlt: 'ISO 9001 Kalite Yönetim Sistemi Sertifikası',
      },
      {
        id: 'cevre-politikasi',
        kicker: 'Politika',
        title: 'Çevre Politikası',
        paras: [
          'Yaşadığımız dünyanın herhangi bir yerinde çevreye verilen her türde zararın, hepimizin sorunu olduğunu ve hepimizi tehdit ettiğini kabul ediyoruz.',
          'Bu bağlamda şirketimiz;',
        ],
        list: [
          'Çevre yönetim sistemimizi ve performansını sürekli geliştirerek çevre kirliliğini önlemeyi,',
          'Çevreyle ilgili çıkarılan yasalara ve mevzuata uymayı,',
          'Geri dönüşüme konu olan hammadde/işletme malzemelerini kullanmayı,',
          'Süreçlerimizi etkin ve verimli olarak yöneterek atıklarımızı en aza indirmeyi,',
          'Çalışanlarımızı ve altyüklenici firma personellerini çevre sorunlarına karşı duyarlı hale getirmek ve farkındalıklarını arttırmak için eğitim vermeyi,',
          'Her türlü faaliyetimizden doğabilecek çevresel etkileri, toplumsal sorumluluk bilinciyle yönetmeyi,',
          'Yasal yükümlülüklerin ötesinde en iyi çevresel çözümlerin, uygulamaların, çevre dostu teknolojilerin gelişmesine ve yayılmasına yardımcı olmayı,',
          'Çevre bilincini arttıracak her türlü girişime destek sağlamayı,',
          'Faaliyet gösterdiğimiz alanda çevreye duyarlı örnek bir işletme olmayı,',
        ],
        outro: ['taahhüt etmektedir.'],
        signOff: 'Genel Müdür',
        img: '/img/iso14001.webp',
        imgAlt: 'ISO 14001 Çevre Yönetim Sistemi',
      },
      {
        id: 'isg-politikasi',
        kicker: 'Politika',
        title: 'İş Sağlığı ve Güvenliği Politikası',
        paras: [
          'İnsan bizim için en değerli varlıktır. Bu bağlamda çalışanlarımızın ve altyüklenici firmalarımızın daha sağlıklı ve güvenli bir ortamda çalışmalarını sağlamak önceliklerimizden birisidir. Bu önceliğimizi gerçekleştirmek amacıyla kurduğumuz iş sağlığı ve güvenliği sistemimizi sürekli iyileştirme yaklaşımıyla mükemmelliğe taşıyarak, "Sıfır İş Kazası ve Meslek Hastalığı"nı hedefliyoruz.',
          'Bu politikamızı gerçekleştirmek için şirketimiz;',
        ],
        list: [
          'İşyeri ve eklentilerinde; çalışanların, altyüklenici personellerin, ziyaretçilerin daha sağlıklı ve güvenilir bir ortamda çalışmalarını temin etmek için, yürürlükte bulunan İSG mevzuatına ve İSG ile ilgili diğer gerekliliklere uygun olarak her türlü tedbiri almayı, araç gereç ve kişisel koruyucu ekipmanları bulundurmayı, gereğinde kullanılmasını sağlamayı,',
          'İşyeri ve eklentilerinde iş kazaları ve meslek hastalığı doğurabilecek durum ve hareketleri, olası kaza risklerini, etkin bir risk değerlendirmesi yaparak önceden tespit etmeyi ve ortadan kaldırmayı,',
          'İşyerinde iş kazası ve meslek hastalığına sebep olabilecek riskleri tespit edip, her seviyedeki çalışanların, altyüklenici personellerin ve ziyaretçilerin sağlık, güvenlik ve sosyal refahlarını temin etmeyi, kendilerine ve ailelerine ait ilerde doğabilecek her türlü maddi ve manevi kayıpları azaltmayı,',
          'Çalışanlarımızı ve altyüklenici personelleri, iş sağlığı ve güvenliği alanında eğitmeyi ve iyi bir iş sağlığı ve güvenliği bilincine erişmelerini sağlamayı,',
          'İşyerinde hizmet veren altyüklenici personellerin ve ziyaretçilerin de şirketimizin koymuş olduğu iş sağlığı ve güvenliği ile ilgili kurallara uymalarını sağlamayı,',
          'Şirketimizi, İSG uygulamaları açısından, faaliyet gösterdiği sektörde ve bağlı bulunduğu odalar nezdinde örnek bir şirket haline getirmeyi,',
          'Bu doğrultuda kurulmuş ve yürütülmekte olan İSG Yönetim Sistemimizin sürekliliğini sağlamayı,',
        ],
        outro: ['taahhüt etmektedir.'],
        signOff: 'Genel Müdür',
        img: '/img/iso45001.webp',
        imgAlt: 'ISO 45001 İş Sağlığı ve Güvenliği Yönetim Sistemi Sertifikası',
      },
      {
        id: 'musteri-politikasi',
        kicker: 'Politika',
        title: 'Müşteri Memnuniyeti Politikası',
        paras: [
          '"Müşteri Odaklılık" vizyonu ile hareket eden şirketimiz;',
          'Müşterilerimizin taleplerini yerine getirirken açık, şeffaf, hızlı, güven verici ve müşteri memnuniyeti ilkesi ile hareket eder.',
          'Bu ilkeler doğrultusunda şirketimiz;',
        ],
        list: [
          'Tüm şikâyet, öneri, talep, bilgilendirme ve beğenileri kayıt altına alarak takibini sağlamayı,',
          'Müşteri, personel ve diğer tüm ilgili taraflardan sağlanan her bir bildirimi sürekli gelişimimiz için ödül kabul ederek; objektif, adil, dikkatli, gizlilik esasına dayanarak incelemeyi ve çözüm sunmayı,',
          'Memnuniyetsizliklerin tekrarının önlenmesi için "Düzeltici/Önleyici" faaliyetleri gerçekleştirmeyi, iş süreçlerimizi müşterilerimizin beklentilerini karşılayacak şekilde sürekli iyileştirmeyi,',
          'Tüm çalışmalarımızın çözüm odaklı olmasını sağlamayı,',
          'Yasal, finansal, operasyonel, kurumsal ve diğer uygulanabilir şartlara dayalı hizmet sunmayı,',
          'Müşterilerimizin ürün ve hizmetlerimizden en üst seviyede memnun olmasını sağlamayı,',
        ],
        outro: ['taahhüt etmektedir.'],
        signOff: 'Genel Müdür',
        img: '/img/iso10002.webp',
        imgAlt: 'ISO 10002 Müşteri Memnuniyeti Yönetim Sistemi Sertifikası',
      },
      {
        id: 'sosyal-politikasi',
        kicker: 'Politika',
        title: 'Sosyal Sorumluluk Politikası',
        paras: [
          'Şirketimiz insana ve doğal çevreye saygıyı en önde tutan bir anlayışla yönetilmektedir.',
          'Bu bağlamda şirketimiz;',
        ],
        list: [
          'Hissedarlarımız, çalışanlarımız, müşterilerimiz ve diğer paydaşlarımız ile uyumlu çalışmayı,',
          'Çalışanlarımızın özlük haklarını eksiksiz ve doğru biçimde kullanmayı,',
          'Çalışanlarımıza dürüst, güvenli, sağlıklı ve huzurlu bir çalışma ortamı sağlamayı,',
          'Çalışanlarımızın iş hayatı ile özel hayatları arasındaki dengeyi gözetmeyi,',
          'Çalışanlarımız arasında ırk, din, dil, cinsiyet, siyasi düşünce gibi nedenlerle ayrımcılık yapmamayı,',
          'En değerli varlığımız olan çalışanlarımızın sağlıklarını korumayı,',
          'Kurumsal sosyal sorumluluk ilkesi çerçevesinde toplumumuzun gelişimi için çaba göstermeyi,',
          'Çalışanlarımızı, sosyal sorumluluk bilinciyle yer alacakları faaliyetlerde desteklemeyi,',
          'Ülkemizin gelenek ve kültürüne duyarlı davranıp, tüm yasal düzenlemelere uygun hareket etmeyi,',
        ],
        outro: [
          'taahhüt etmektedir.',
          'Şirketimiz genelinde kurumsal sosyal sorumluluk uygulamalarından, başta Genel Müdürümüz olmak üzere, tüm Yöneticilerimiz ve Çalışanlarımız sorumludur.',
          'Bu belge, şirketimizin daha güzel bir dünya için üzerine düşen her türlü sorumluluğu yerine getireceğinin açık bir taahhüdüdür.',
        ],
        signOff: 'Genel Müdür',
        img: '/img/sosyal-sorumluluk.webp',
        imgAlt: 'Sosyal Sorumluluk',
      },
      {
        id: 'tedarik-politikasi',
        kicker: 'Politika',
        title: 'Sürdürülebilir Tedarik Politikası',
        paras: [
          'SILVERRING METAL SAN. A.Ş. olarak tüm paydaşlarımız ile güvene dayalı ilişkiler kurmayı önemsiyor, sorumlu ve sürdürülebilir tedarik zinciri yaklaşımımızı yaygınlaştırmayı hedefliyoruz. Sürdürülebilir bir değer yaratmak için çevresel, sosyal ve etik değerleri gözeten, toplumun gelişimine önem veren bir yaklaşım sergilerken aynı zamanda tüm tedarikçilerimiz ve paydaşlarımızın da benzer davranışı benimsemeleri için çaba gösteriyoruz. Bu kapsamda tüm tedarikçilerimiz ve iş ortaklarımız;',
        ],
        list: [
          'Çalışanlarına mevzuata ve çalışma şartlarına uygun haklar sağlamakla yükümlüdür.',
          'Çalışanlarına hiçbir türde (din, dil, ırk, renk, cinsiyet, cinsel yönelim, yaş, vb.) ayrımcılık yapamaz. Çalışanları tarafından bu türde davranışlar sergilenmesini de hoş göremez; gerekli önlemleri alır.',
          'Çalışanların iş yerinde ve/veya iş sebebiyle bulundukları herhangi bir yerde; fiziksel, cinsel, psikolojik ve/veya duygusal taciz yoluyla herhangi bir şekilde dokunulmazlıklarının ihlal edilmesi, hukuka ve etik kurallara aykırı olup, tedarikçi bu duruma kesinlikle tolerans gösteremez.',
          'Zorla veya zorunlu çalıştırmanın hiçbir türünü uygulayamaz, istihdam kararları serbest seçim esasına dayalı olmak zorundadır.',
          'Çocuk işçi çalıştıramaz, yasalar ve mevzuatla belirlenmiş en düşük çalışma yaşı kısıtlamalarına kapsayan Uluslararası Çalışma Örgütü (ILO) ve Birleşmiş Milletler ("BM") Sözleşmeleri başta olmak üzere tüm geçerli ulusal ve uluslararası standartlara uymak zorundadır.',
          'İş sağlığı ve güvenliği bakımından tüm önlemleri alır. Çalışanlarına bu kapsamda gerekli her türlü eğitim, donanım ve ekipmanı temin eder. Sağlık ve güvenlik risklerinin yönetilmesi, iş kazası ve meslek hastalıklarının önlenmesi için gerekli olanakları sağlar.',
          'Faaliyetlerini çevresel anlamda geçerli olan tüm yerel kanunlara ve uluslararası düzenlemelere uygun olarak sürdürmek zorundadır. Yaptığı işlerin ve aldığı kararların çevreye etkilerini değerlendirir; doğal kaynakların korunması, atıkların azaltılması, temiz enerji kullanımı, geri dönüşüm ve kirlilik kontrolü için gerekli önlemleri alır.',
          'Rüşvet veremez, alamaz ve yolsuzluk yapamaz. Rüşvet ve yolsuzlukla mücadele amacıyla gerekli önlemleri alır. Ulusal ve uluslararası tüm geçerli yolsuzlukla mücadele kanunlarına uymak zorundadır.',
          'Çıkar çatışmasından ve üçüncü kişiler tarafından çıkar çatışması olarak algılanabilecek her türlü faaliyetten kaçınır. Olası bir çıkar çatışması halinde ilgili tüm tarafları bilgilendirir.',
        ],
        sections: [
          {
            paras: [
              'Ticari gelenek ve promosyon niteliğindeki malzemeler dışında, bir usulsüzlüğün varlığı izlenimi yaratan, bağımlılık ilişkisine neden olabilecek ya da öyle algılanabilecek, tedarikçi tarafından gönderilen herhangi bir hediye kabul edilmez.',
            ],
          },
          {
            list: [
              'Herhangi bir etik ya da kanun dışı konunun gündeme gelmesi durumunda, bunları raporlamakla yükümlüdür.',
              'Tüm tedarik zinciri ağındaki malzeme, bilgi, teknoloji, para, metot, iş gücü ve diğer tüm kaynakları etkin ve entegre şekilde yönetir.',
              'Süreçlerini yalın, katma değerli ve yenilikçi metotlarla tasarlayıp performans hedeflerini gerçekleştirir ve sürekli iyileştirir.',
              'Paydaşlar, kullanabilecekleri birçok şikâyet kanalına sahiptir ve şikâyetleri araştırmak için prosedürler geliştirilmiştir.',
              'Tüm işlemlerine ilişkin, gerçeği doğru, dürüst ve zamanında yansıtacak şekilde kayıt tutar. Kayıtlarında tahrifat yapmaz, gerçekleştirdiği işlemleri gizlemez. Kayıtlarını yasal gereklilikler doğrultusunda saklar.',
              'Ticari sır, know-how ve finansal veriler dâhil, SILVERRING METAL SAN. A.Ş.\'ye ait ve erişimleri olan tüm gizli bilgileri korumakla yükümlüdür.',
              'Faaliyetlerinde "çatışma minerallerini" kullanmamakla birlikte yasadışı çatışmaları destekleyen, insan haklarını ihlal eden ve finansman desteği veren her türlü eylemden kaçınır.',
            ],
          },
          {
            paras: [
              'İş zihniyetimiz, yalnızca standartlarımızı ve spesifikasyonlarımızı tutarlı bir şekilde karşılama yeteneğine sahip ve kurumsal değerlerimiz ile uyumlu tedarikçilerle çalışmamızı gerektirir. Tedarikçilerimizden sadece kurallara uymalarını değil, aynı zamanda beklentilerin üzerine çıkmak için makul çabayı göstermelerini ve ticari faaliyetleri boyunca sürekli iyileştirmeyi teşvik etmelerini bekleriz. Kurallar, bu gereksinimleri kendi tedarik zincirlerine aktarması beklenen tüm sözleşmeli tedarikçilerimiz, iş ortaklarımız ve SILVERRING METAL SAN. A.Ş. için geçerlidir. Bu konuda tüm paydaşlarımızla iş birliği içinde olacağımızı taahhüt ederiz.',
            ],
          },
          {
            heading: 'Tedarikçi\'nin Beyanı',
            paras: ['Biz, SILVERRING METAL SAN. A.Ş.\'nin tedarikçisi olarak;'],
            list: [
              'SILVERRING tarafından iletilen, SILVERRING Sürdürülebilir Tedarik Politikasını dikkatlice okuduğumuzu,',
              'Faaliyet gösterdiğimiz ülkedeki operasyonumuzla ilgili tüm yasa ve yönetmeliklerin farkında olduğumuzu,',
              'SILVERRING tarafından belirtilen bu kurallarla ilgili, herhangi bir ihlal söz konusu olduğunda SILVERRING\'i bilgilendireceğimizi,',
              'SILVERRING Sürdürülebilir Tedarik Politikasının getirdiği gereksinimlere, herhangi bir yorum ya da istisna olmaksızın uyarak, bu gereksinimleri gelişim fırsatları olarak göreceğimizi,',
              'Tüm çalışanlarımızı ve taşeronlarımızı, SILVERRING Sürdürülebilir Tedarik Politikası hakkında bilgilendireceğimizi ve bu şekilde onların da bu kurallara eksiksiz uymasını sağlayacağımızı, gayrikabili rücu olarak, kabul, beyan ve taahhüt ederiz.',
            ],
          },
        ],
        outro: [
          'Ayrıca, işbu hüküm ile SILVERRING\'i ya da SILVERRING tarafından yetkilendirilen herhangi bir kuruluşu; kuruluşumuzun veya taşeron tedarikçilerimizin, SILVERRING Sürdürülebilir Tedarik Politikası uyumluluğunu doğrulamak adına, önceden bilgilendirme gereği olmaksızın denetim yapma konusunda yetkilendirdiğimizi peşinen kabul ve beyan ederiz.',
          'SILVERRING METAL SAN. A.Ş., modern köleliğe karşı uygulamalarını iyileştirmeye devam etmeyi, üzerine düşen her türlü sorumluluğu yerine getirmeyi taahhüt eder.',
        ],
        signOff: 'Genel Müdür',
        img: '',
        imgAlt: '',
      },
      {
        id: 'modern-kolelik-politikasi',
        kicker: 'Politika',
        title: 'Modern Kölelik Politikası ve Beyannamesi',
        paras: [
          'Modern kölelik temel bir insan hakları ihlalidir. Kölelik, karşılıksız, zorla ve zorunlu çalıştırma, çocuk işçiliği ve insan ticareti suçlarını kapsamaktadır.',
          'Bu bağlamda şirketimiz;',
        ],
        list: [
          'Şirketimiz, tüm çalışanları için güvenli ve adil çalışma koşulları sağlamakta ve çocuk işçi çalıştırılmaması, modern kölelikle mücadele konusunda iş kanununa, Uluslararası Çalışma Örgütü (ILO) anlaşmalarına, Birleşmiş Milletler Küresel İlkeler Sözleşmesine uygun hareket etmektedir.',
          'Modern kölelikle uğraşan hiçbir ortak, müşteri, tedarikçi, alt yüklenici, acente veya başka bir sıfatla görevlendirilen herhangi bir bireyle iş ilişkisi içerisine girmemektedir,',
          'Bu politika ve beyanname, SILVERRING METAL SAN. A.Ş. bünyesinde çalışan her seviye personel için geçerlidir ve aşağıda sorumlulukları belirtilmiştir:',
          'Şirket içi ve şirket dışında modern köleliğe yönelik hiçbir suç ve konuyla bağlantılı olmamak,',
          'Modern kölelikle mücadelede, şirket tüm unsurları ile koordineli olarak çalışmak,',
          'Operasyonlarımızda ve tedarik zincirimizin herhangi bir aşamasında modern köleliğe karşı tetikte olmak,',
          'Modern kölelik kapsamındaki tespitlerini en kısa sürede raporlamak,',
          'Şirketimiz, tedarik zincirinde bulunan her firmanın veya herhangi bir sıfatla görevlendirilen her bireyin bu politikada yer alan gerekliliklere ve yasal şartlara uymalarını bekler,',
          'Şirketimiz, tedarik zincirinde bulunan her firmanın veya herhangi bir sıfatla görevlendirilen her bireyin modern kölelik konularında mevcut durumunun şeffaflık ilkesi çerçevesinde tespitini yapıp, gerekli önlemlerin alınmasını sağlar,',
          'Modern kölelik konularıyla ilgili ihlal tespiti veya endişe duyulması halinde info@silverring.com.tr adresine mail atılması gerekmektedir. Şirketimiz gerekli işlemleri derhal başlatır,',
        ],
        sections: [
          {
            heading: 'Eğitim ve Bilgilendirme',
            list: [
              'SILVERRING METAL SAN. A.Ş., bünyesindeki tüm çalışanlarının, bu politika ve beyannameye uygun davranmaları, modern kölelik kapsamındaki suçları tanıyabilmeleri ve kaçınmaları için gerekli eğitimleri almalarını sağlamaktadır,',
              'Şirketimiz, tedarik zincirinde bulunan her firmanın kendi çalışanlarına bu kapsamda eğitim vermesini beklemekte, sözleşmelerine şart olarak eklemekte ve herhangi bir sıfatla görevlendirilen her bireyi bilgilendirmektedir,',
            ],
          },
          {
            heading: 'İhlal Durumu',
            paras: [
              'Herhangi bir SILVERRING METAL SAN. A.Ş. çalışanının modern kölelik suçlarına dahil olduğu ve bu politikayı ihlal ettiği durumda sıfır tolerans ilkesiyle gerekli yaptırım prosedürleri uygulanacaktır.',
              'Şirket operasyonları içerisinde modern köleliğe yönelik bir suç işlendiği tespit edildiği durumda;',
            ],
            list: [
              'İlgililerin şeffaf davranması ve şirketimiz tarafından talep edilen bilgileri sağlaması beklenir,',
              'Sorumlu tedarikçi ve kişiler tespit edilerek, hakkında yaptırım prosedürleri uygulanır,',
              'İlgili durumu sona erdirmek ve mağduru korumak için en kısa zaman içinde düzeltici faaliyet uygulanır,',
            ],
          },
        ],
        outro: [
          'Şirketimiz genelinde uygulamalardan, başta Genel Müdürümüz olmak üzere, tüm Yöneticilerimiz ve Çalışanlarımız sorumludur.',
          'SILVERRING METAL SAN. A.Ş., modern köleliğe karşı uygulamalarını iyileştirmeye devam etmeyi, üzerine düşen her türlü sorumluluğu yerine getirmeyi taahhüt eder.',
        ],
        signOff: 'Genel Müdür',
        img: '',
        imgAlt: '',
      },
    ],
  },

  products: {
    lead: "UN standartlarına uygun, farklı çap ve kalınlıklarda 300'ün üzerinde çember ve varil aksesuarı üretimi. Metal, plastik, fiber varil çemberleri, paslanmaz çelik çemberler, teneke kova çemberleri, varil garanti kapakları ve daha fazlası.",
    groups: [
      {
        id: 'cemberler',
        kicker: 'Ürün Grubu',
        title: 'Çemberler',
        text: 'Metal, plastik ve fiber varil gövdeleri için, farklı kilit mekanizmalarına sahip çember çözümleri.',
        items: [
          { name: 'Silindirik Sac Varil Çemberi', tag: 'Sac Varil Çemberi', desc: 'Silindirik varil gövdeleri için; kimya, petrokimya, madeni yağ ve gıda sektöründe UN etiketli/etiketsiz kullanılır.', img: '/img/silindirik-sac-varil-cemberi.webp' },
          { name: 'Konik Sac Varil Çemberi', tag: 'Sac Varil Çemberi', desc: 'Konik yapılı variller için; kimya, petrokimya, madeni yağ ve gıda sektöründe UN etiketli/etiketsiz kullanılır.', img: '/img/konik-sac-varil-cemberi.webp' },
          { name: 'Sac Bidon Çemberi', tag: 'Sac Varil Çemberi', desc: 'Bidon gövdeleri için; kimya, petrokimya, madeni yağ ve gıda sektöründe UN etiketli/etiketsiz kullanılır.', img: '/img/sac-bidon-cemberi.webp' },
          { name: 'Plastik Varil Çemberi', tag: 'Çemberler', desc: '30-60-120-150-175 Lt plastik varillerde; kimya, kozmetik ve gıda sektöründe UN etiketli kullanılır.', img: '/img/plastik-varil-cemberi.webp' },
          { name: 'Plastik Kova Çemberi', tag: 'Çemberler', desc: 'Plastik kovalarda; kimya, kozmetik ve gıda sektöründe UN etiketli kullanım için üretilir.', img: '/img/plastik-kova-cemberi.webp' },
          { name: 'Fiber Varil Çemberi', tag: 'Çemberler', desc: 'Ø280-360-400-500-600-650 ölçülerinde; kimya, ilaç ve gıda sektöründe UN\'li ve UN\'siz fiber varillerde kullanılır.', img: '/img/fiber-varil-cemberi.webp' },
          { name: "UN'li Kova Çemberi", tag: 'Teneke Kova Çemberi', desc: 'Boya, kimya, petrokimya ve madeni yağ sektöründe tehlikeli maddelerin ambalajlanmasında kullanılan UN belgeli teneke kova çemberi.', img: '/img/unli-kova-cemberi.webp' },
          { name: "UN'siz Kova Çemberi", tag: 'Teneke Kova Çemberi', desc: 'Boya, kimya, petrokimya ve madeni yağ sektöründe tehlikesiz maddelerin ambalajlanmasında kullanılan teneke kova çemberi.', img: '/img/unsiz-kova-cemberi.webp' },
          { name: 'Cıvatalı Çemberler', tag: 'Özel Amaçlı', desc: 'Çok tehlikeli maddeler ve kontamine atıkların bertarafında kullanılan variller için özel üretim çember.', img: '/img/civatali-cember.webp' },
          { name: 'Paslanmaz Çember', tag: 'Özel Amaçlı', desc: 'Sıvı temasının yüksek olduğu; özellikle gıda ve balıkçılık sektörü için özel üretim paslanmaz çember.', img: '/img/paslanmaz-cember.webp' },
          { name: 'Boyalı Çemberler', tag: 'Özel Amaçlı', desc: 'Müşteri talepleri doğrultusunda geliştirilen, özel renk ve kaplamada özel üretim çember.', img: '/img/boyali-cemberler.webp' },
        ],
      },
      {
        id: 'kulplar',
        kicker: 'Ürün Grubu',
        title: 'Kulplar',
        text: 'Varil ve bidonların taşınmasını ve elleçlenmesini kolaylaştıran metal ve fiber kulp çözümleri.',
        items: [
          { name: 'Metal Varil Kulpları', tag: 'Kulplar', desc: 'Bidon gövdesine veya kapağına montajlanan; boyalı, galvanizli ya da ham metal taşıma kulpları.', img: '/img/metal-kulplar.webp' },
          { name: 'Fiber Varil Kulpları', tag: 'Kulplar', desc: 'Fiber varil gövdesine montajlanan, farklı boyutlarda galvanizli metal kulplar.', img: '/img/fiber-kulplar.webp' },
        ],
      },
      {
        id: 'aksesuarlar',
        kicker: 'Ürün Grubu',
        title: 'Aksesuarlar',
        text: 'Varil garanti kapakları, kelepçeler, plastik tapalar ve emniyet pimleri.',
        items: [
          { name: 'Metal Garanti Kapakları', tag: 'Aksesuar', desc: '2" ve 3/4" boyutlarında; logolu, logosuz, contalı, contasız ve laklı seçeneklerle üretilir.', img: '/img/metal-garanti-kapaklari.webp' },
          { name: 'Kelepçeler', tag: 'Aksesuar', desc: 'Çemberlerin açılıp kapanmasını sağlayan kilit mekanizması; talebe göre ayrı olarak da üretilip satılabilir.', img: '/img/kelepceler.webp' },
          { name: 'Plastik Tapalar', tag: 'Aksesuar', desc: 'L-Ring tapa ve garanti kapakları; 220 L tapalı plastik varillerde sızdırmazlığı garantiler.', img: '/img/plastik-tapalar.webp' },
          { name: 'Emniyet Pimleri', tag: 'Aksesuar', desc: 'Kelepçenin istemsiz açılmasını önleyen ve ürünün kullanılmadığını gösteren plastik/metal pimler.', img: '/img/emniyet-pimleri.webp' },
        ],
      },
    ],
    ctaBand: 'Tüm ürün gamımızı kataloğumuzdan inceleyebilirsiniz.',
  },

  catalog: {
    lead: 'Çemberler, kulplar ve varil aksesuarlarımızın teknik ölçü, malzeme ve kilit mekanizması detaylarını içeren güncel ürün kataloğumuz.',
    kicker: 'PDF Katalog',
    title: 'Ürün Kataloğumuzu İndirin',
    body: 'Tüm ürün gamımızın teknik detaylarını PDF olarak indirebilir, teknik dosya ve fiyat teklifi için bizimle doğrudan iletişime geçebilirsiniz.',
    downloads: [
      { label: 'Türkçe Katalog', sub: 'PDF · 22 sayfa', href: '/katalog/silverring-urun-katalogu-tr.pdf' },
      { label: 'English Catalogue', sub: 'PDF · 22 pages', href: '/katalog/silverring-product-catalogue-en.pdf' },
    ],
    downloadCta: 'İndir',
    previewKicker: 'Kataloğun İçeriği',
    previewTitle: 'Kataloğumuzda Neler Var',
    previewText: 'Katalog; sac, plastik ve fiber varil çemberlerinden metal kulplara, garanti kapaklarından emniyet pimlerine kadar tüm ürün ailemizi kapsar.',
    cta: 'Teklif Talep Et',
  },

  services: {
    lead: 'Müşteri ihtiyaçlarına özel çözümler ve özelleştirilmiş ürünler, yüksek kalite ve hızlı teslimat garantisiyle özenle üretilir.',
    blocks: [
      {
        id: 'danismanlik',
        kicker: 'Teknik Hizmet',
        title: 'Danışmanlık',
        paras: [
          'Mevcut ve potansiyel müşterilerin taleplerine göre ihtiyaçları teknik, kullanılabilirlik ve sektörel standartlar açısından değerlendirilir. Değerlendirme sonrasında mevcut ürünlerimizden gereklilikleri karşılayanların müşteriye sunulması sağlanır. Mevcut ürünlerimizin gereksinimleri karşılamaması durumunda, müşteriye özel alternatif yeni ürünlerin teknik çalışmaları yapılır ve müşteriye sunulur.',
          'Müşterinin tercihleri doğrultusunda AR-GE çalışmaları tamamlanır, numune üretimi ve testler gerçekleştirilerek deneme uygulamaları yapılır. Uygulamaların müşteri tarafından değerlendirmesi sonrası onaylanan ürünlerin müşteriye temini sağlanır.',
        ],
        img: '/img/consulting.webp',
        imgAlt: 'Danışmanlık',
      },
      {
        id: 'urun-tasarimi',
        kicker: 'Teknik Hizmet',
        title: 'Ürün Tasarımı',
        paras: [
          'Mevcut veya potansiyel müşterilerimizden herhangi bir talep gelmese dahi; SilverRing AR-GE faaliyetleri kapsamında sektörel değerlendirmeler sürekli gerçekleştirilir. Yeni ürün tasarımları, mevcut ürünlerimizde teknik özellik değişimleri yapılarak farklı ihtiyaçlara cevap verecek veya sektörde uygulama kolaylığı sağlayacak yeni ürünlerin bünyemize kazandırılması sağlanır.',
        ],
        img: '/img/product-design.webp',
        imgAlt: 'Ürün Tasarımı',
      },
      {
        id: 'urun-gelistirme',
        kicker: 'Teknik Hizmet',
        title: 'Ürün Geliştirme',
        paras: [
          'Mevcut müşterilerimize üretilen ve kendi proseslerinde kullanılmakta olan ürünlerimizle ilgili; müşterinin kullanım tecrübeleri, karşılaşılması muhtemel sorunlar, üretim ve teslimat uygulamalarımızda gerçekleştirilen gözlemlerden elde edilen verilere göre ürünlerimizde iyileştirme yönünde AR-GE çalışmaları yürütülmektedir.',
          'Sürekli iyileştirme felsefesi ile gerçekleştirilen AR-GE faaliyetlerimizde müşteri memnuniyeti, kalite, maliyet ve sürdürülebilirlik unsurları ön planda tutulmaktadır.',
        ],
        img: '/img/product-development.webp',
        imgAlt: 'Ürün Geliştirme',
      },
      {
        id: 'test',
        kicker: 'Teknik Hizmet',
        title: 'Test',
        paras: [
          'Ürünlerimizde kullanılan tüm hammadde, yarı mamul ve yardımcı malzemeler için gerekli kriterler belirlenmiş, alternatifli onaylı tedarikçilerimizin belirlenmesi sağlanmıştır. SilverRing teknik ekibi veya müşterisi tarafından tanımlanmış kritik değerlerin doğrulanması için tedarikçilerimizden test raporları istenmekte veya SilverRing tarafından testleri yapılarak/yaptırılarak doğrulanması, kayıt altına alınması sağlanmaktadır.',
          'Tüm ürünlerimiz ilk tasarım, iyileştirmeler ve seri üretim aşamalarında sektörel kabul görmüş standartlara ve müşteri beklentilerine uygun olarak test edilir ve sonuçları kayıt altında tutulur.',
          'Müşterilerimizin kendilerine özel kriterlerin karşılanması ve gerçekleştirecekleri testlerin başarılı sonuçlanması için gerekli AR-GE faaliyetleri ile numune, lojistik, teknik doküman ve personel desteği sağlanmaktadır.',
        ],
        img: '/img/test.webp',
        imgAlt: 'Test',
      },
    ],
    process: {
      kicker: 'Çalışma Sürecimiz',
      title: 'İhtiyaçtan Çözüme',
      steps: [
        { no: '01', title: 'Danışmanlık', text: 'Müşteri ile teknik görüşme ve ihtiyacın netleştirilmesi.' },
        { no: '02', title: 'Ürün Tasarımı', text: 'AR-GE ve tasarım çalışmaları ile çözüm önerisinin geliştirilmesi.' },
        { no: '03', title: 'Ürün Geliştirme', text: 'Numune üretimi ve sürekli iyileştirme çalışmaları.' },
        { no: '04', title: 'Test ve Doğrulama', text: 'Standartlara uygunluğun test edilmesi ve onaylanması.' },
      ],
    },
  },

  quality: {
    lead: 'Çember, kilit mekanizması, garanti kapağı, plastik tapalar, bidon kulpları… "Müşteri Odaklılık" vizyonuyla her aşamada kalite.',
    control: {
      id: 'kalite-kontrol',
      kicker: 'Süreç',
      title: 'Kalite Kontrol',
      paras: [
        'Organizasyon yapısı içerisinde yüksek derecede önem verdiği Kalite Kontrol süreçlerini oluşturmuştur. Müşteri Memnuniyetinin sürekliliğinin vazgeçilmez unsuru olan kalite kontrol faaliyetleri, proaktif yaklaşım esas alınarak "ÖNLEME" mantığı çerçevesinde ele alınmaktadır.',
        'Müşterilere özel üretilen ürünlerde; seri üretim faaliyetleri başlamadan önce karşılıklı mutabakat, test ve raporlama süreçleri yürütülerek, ürünün beklenen tüm fonksiyonlarını kapsayacak şekilde özellikleri belirlenir ve Numune Üretim aşamasına geçilir.',
        'Üretilen numuneler reel uygulamalarla kabul kriterlerine göre kontrollerden geçirilir. Bu sayede, müşterinin ürünlerimizi kullanımı esnasında sorun yaşamasının önlenmesi amaçlanmaktadır. Elde edilen çıktılarda mutabakat sağlanması durumunda müşteri onayı alınır.',
        'Seri üretime geçilen ürünlerde; Kalite Yönetim Sistemlerimiz içerisinde tanımlanmış talimatlara göre, Teknik Kontrol Kriterleri uygulanarak her aşamada kontroller gerçekleştirilir ve kayıt altına alınır.',
        'Sevk edilen ürünlerle ilgili müşterilerimizden gelen geri bildirimler sınıflandırılarak kayıt edilir. Gerekli değerlendirmeler yapılarak Kök-Neden araştırması yapılır. Gerçekleştirilen incelemeler sonucunda elde edilen verilere göre sorunun kaynağı tespit edilir ve çözüm önerileri üretilir. Bu aşamalarda müşterilerimize ayrıntılı bir şekilde raporlamalar yapılır. Karşılıklı mutabakatla belirlenen Düzeltici-Önleyici Faaliyetler gerçekleştirilerek, etkinlikleri kontrol edilir ve onaylanır.',
        'Kalite kontrol faaliyetlerimiz; hammadde ve yarı mamul girdi kontrolü, üretim aşamaları, stoklama, ambalajlama ve sevkiyat süreçlerimizin tamamını kapsamaktadır.',
      ],
      img: '/img/kalite-2.webp',
      imgAlt: 'Kalite Kontrol',
    },
    certsBlock: {
      id: 'sertifikalar',
      kicker: 'Belgeler',
      title: 'Sertifikalarımız',
      intro: 'Kalite yönetim sistemlerimiz ve ürün uygunluğumuz, bağımsız kuruluşlarca belgelendirilmiştir.',
      items: [
        { code: 'ISO 9001', name: 'Kalite Yönetim Sistemi', desc: 'Ürün ve hizmet kalitesinde sürekli iyileştirmeyi standartlaştıran uluslararası kalite yönetim sistemi.', img: '/img/iso9001.webp' },
        { code: 'ISO 10002', name: 'Müşteri Memnuniyeti YS', desc: 'Müşteri şikayet ve taleplerinin şeffaf ve adil şekilde ele alınmasını sağlayan yönetim sistemi.', img: '/img/iso10002.webp' },
        { code: 'ISO 45001', name: 'İş Sağlığı ve Güvenliği YS', desc: 'Çalışan sağlığı ve güvenliği risklerinin proaktif olarak yönetildiğini belgeleyen uluslararası standart.', img: '/img/iso45001.webp' },
        { code: 'CE', name: 'Geri Dönüşür Kafes', desc: 'Avrupa Birliği teknik düzenlemelerine uygunluğu belgeleyen ürün işareti.', img: '/img/ce-geri-donusum.webp' },
        { code: 'CE', name: 'Rijit Kafes', desc: 'Avrupa Birliği teknik düzenlemelerine uygunluğu belgeleyen ürün işareti.', img: '/img/ce-rijit.webp' },
        { code: 'CE', name: 'Katlanabilir Kafes', desc: 'Avrupa Birliği teknik düzenlemelerine uygunluğu belgeleyen ürün işareti.', img: '/img/ce-katlanabilir.webp' },
        { code: 'ISO 14001', name: 'Çevre Yönetim Sistemi', desc: 'Üretim süreçlerindeki çevresel etkilerin sistematik şekilde yönetildiğini gösteren çevre yönetim standardı.', img: '/img/iso14001.webp' },
        { code: 'I-REC', name: 'Yeşil Enerji (Merkez)', desc: 'Kullanılan enerjinin yenilenebilir kaynaklardan sağlandığını uluslararası düzeyde belgeleyen sertifika.', img: '/img/irec-merkez.webp' },
        { code: 'I-REC', name: 'Yeşil Enerji (Şube)', desc: 'Kullanılan enerjinin yenilenebilir kaynaklardan sağlandığını uluslararası düzeyde belgeleyen sertifika.', img: '/img/irec-sube.webp' },
      ],
    },
    membership: {
      id: 'uyelikler',
      kicker: 'Üyelik',
      title: 'İhracatçılar Birliği Üyeliği',
      body: 'SilverRing Metal Sanayi A.Ş., ihracat faaliyetlerini kurumsal ve şeffaf bir yapı içinde yürütmek amacıyla ilgili ihracatçılar birliğine üyedir.',
    },
    trademark: {
      id: 'marka-tescil',
      kicker: 'Fikri Mülkiyet',
      title: 'Marka - Patent',
      body: 'SilverRing markası, Türk Patent ve Marka Kurumu nezdinde tescillidir.',
      img: '/img/marka-tescil.webp',
      imgAlt: 'Marka Tescil Belgesi',
    },
  },

  news: {
    lead: "SilverRing'den güncel gelişmeler, duyurular ve sektör haberleri.",
    kicker: 'Yakında',
    title: 'Haber Akışımız Hazırlanıyor',
    body: 'Şirket haberlerimizi ve duyurularımızı yakında bu sayfada paylaşacağız. Güncel gelişmelerden haberdar olmak için bizimle iletişime geçebilirsiniz.',
    cta: 'İletişime Geç',
    posts: [
      {
        slug: 'guclu-urun-yelpazesi-kalite-ve-guven',
        date: '26 Ocak',
        title: 'SilverRing: Güçlü Ürün Yelpazesi, Kalite ve Güven',
        img: '/img/haber-uretim-hatti.webp',
        paras: [
          'SilverRing olarak yurtiçi ve yurtdışı pazarlarında iş ortaklarımıza, UN standartlarına uygun, çeşitli çap ve kalınlıklarda 300 çeşit çember ve varil aksesuarı üretimi yapmaktayız. Ürün yelpazemiz, geniş bir seçenek sunarak her türlü ihtiyaca hitap etmekte ve sektördeki yüksek talepleri karşılamaktadır.',
          'Ürünlerimiz arasında; metal, plastik, fiber varil ve bidon çemberleri, paslanmaz saçtan varil çemberleri, teneke kova çemberleri, varil garanti kapakları, bidon kulpları, plastik tapalar, boya koruma tapaları ve metal ve plastik pimler gibi birçok farklı aksesuar yer almaktadır. Bu ürünler, endüstriyel kullanım için yüksek dayanıklılığa sahip olup, müşterilerimizin güvenli ve verimli bir şekilde depolama ve taşıma yapmalarını sağlar.',
          'Firmamız, müşteri taleplerine göre özelleştirilmiş çözümler sunma konusunda yetkin olup, her türlü özel üretim ihtiyacını karşılayabilecek esnekliğe sahiptir. Üretim süreçlerimizde kaliteyi, verimliliği ve müşteri memnuniyetini ön planda tutarak, her zaman en iyi sonuçları hedeflemekteyiz.',
          'Uzun yıllara dayanan sektörel tecrübemiz ve profesyonel kadromuz ile güçlü mali yapımız, her yıl büyümemize katkı sağlamaktadır. Fiyat, performans ve kaliteyi en yüksek standartlarda sunacak şekilde üretim yaparız.',
          'Her zaman müşteri memnuniyetini ön planda tutarak, ihtiyacınıza özel çözümler sunuyor ve sektördeki en kaliteli ürünleri sağlamaktayız. Web sitemiz üzerinden ürünlerimizi keşfedin ve ihtiyaçlarınıza en uygun çözüme ulaşmak için bizimle iletişime geçin. SilverRing, sektörün lideri olarak, her zaman yanınızda!',
        ],
      },
    ],
  },

  responsibility: {
    lead: 'Faaliyetlerini sadece karlılık üzerine kurmayan şirketimiz, insanlığa borçlu olduğu sosyal sorumluluk projelerini özenle yerine getirmektedir.',
    blocks: [
      {
        id: 'egitim',
        kicker: 'Proje',
        title: 'Eğitime Destek Projelerimiz',
        list: [
          'Pandemi sebebiyle uzaktan eğitime erişimi olmayan öğrenciler için bilgisayar alarak eğitime destek olunması,',
          'Okul inşaat ve tadilat projelerine destek olunması,',
          'Deprem ve diğer afet bölgelerine çeşitli eğitim desteklerinde bulunulması,',
          'İhtiyacı olan öğrencilere burs vermek gibi alanlarda topluma katkı sağlanması.',
        ],
        outro: [],
        img: '/img/egitim-destek.webp',
        imgAlt: 'Eğitime Destek',
      },
      {
        id: 'hayvan',
        kicker: 'Proje',
        title: 'Sokak Hayvanlarına Destek',
        list: [
          'Sokak hayvanlarının sahiplenilmesi için bilinçlendirme çalışmaları yapıyoruz.',
          'Barınma ihtiyaçlarına destek sağlayarak, güvenli alanlar oluşturulmasına katkı sağlıyoruz.',
          'Mama desteği sunarak, aç kalan sokak hayvanlarının beslenmesine yardımcı oluyoruz.',
          'Veteriner hekim tedavi desteği vererek, sağlık sorunlarını çözmeye yönelik adımlar atıyoruz.',
        ],
        outro: [
          'Amacımız, sokak hayvanlarının daha iyi bir yaşam sürmelerine yardımcı olmak ve onları koruyarak toplumda duyarlı bir bilinç oluşturmak.',
        ],
        img: '/img/sokak-hayvanlari-1.webp',
        imgAlt: 'Sokak Hayvanlarına Destek',
      },
    ],
  },

  careers: {
    headTitle: 'İnsan Kaynakları ve Kariyer',
    lead: 'SilverRing ekibine katılmak ve kariyerinize güçlü bir adım atmak için başvurularınızı bekliyoruz.',
    kicker: 'Bize Katılın',
    title: 'Sizinle tanışmak için sabırsızlanıyoruz!',
    body: 'SilverRing ekibine katılmak ve kariyerinize güçlü bir adım atmak için başvurularınızı e-posta ile gönderebilirsiniz.',
    cta: 'Başvuru Gönder',
    whyKicker: 'Neden SilverRing',
    whyTitle: 'Sektörün lider tedarikçisinde kariyer',
    cards: [
      { title: 'Global Ölçek', text: 'Yaklaşık 30 ülkeye ihracat yapan, uluslararası müşterilerle çalışma deneyimi sunan bir organizasyon.' },
      { title: 'Kalite Kültürü', text: 'ISO 9001, 14001, 45001 ve 10002 sertifikalı yönetim sistemleri ile disiplinli bir çalışma ortamı.' },
      { title: 'Gelişim Odaklı', text: 'AR-GE ve sürekli iyileştirme kültürüyle, çalışanlarına gelişim fırsatı sunan bir yapı.' },
    ],
  },

  contact: {
    lead: 'Numune talebi, teknik doküman veya fiyat teklifi için üretim ve satış ekibimize doğrudan ulaşabilirsiniz.',
    directTitle: 'Doğrudan İletişim',
    emailLabel: 'E-posta',
    phoneLabel: 'Telefon',
    infoKicker: 'İletişim Bilgilerimiz',
    infoTitle: 'Bize ulaşın',
    infoLead: 'Merkez fabrikamıza veya şubemize doğrudan ulaşmak isterseniz aşağıdaki telefon ve e-posta bilgilerini kullanabilir, ya da haritadan konumumuzu görüntüleyebilirsiniz.',
    openInMaps: 'Haritada Aç',
    formKicker: 'İletişim Formu',
    formTitle: 'Bize Ulaşın',
    formHeading: 'Talebinizi bizimle paylaşın',
    formLead: 'Ürün numunesi, teknik doküman ya da fiyat teklifi talebinizi aşağıdaki formla iletin; ilgili ekibimiz talebinizi inceleyip en kısa sürede size dönüş yapar.',
    form: {
      name: 'Ad Soyad',
      company: 'Şirket',
      email: 'E-posta',
      phone: 'Telefon (opsiyonel)',
      subject: 'Konu',
      subjectPlaceholder: 'Bir konu seçin',
      subjectOptions: ['Ürün Bilgisi ve Numune', 'Fiyat Teklifi', 'Teknik Destek', 'Bayilik / İş Ortaklığı', 'Diğer'],
      message: 'Mesajınız',
      consent: 'Kişisel verilerimin iletişim talebimi yanıtlamak amacıyla işlenmesini kabul ediyorum.',
      submit: 'Mesajı Gönder',
      success: 'Mesajınız için teşekkürler. En kısa sürede size dönüş yapacağız.',
      note: 'Form gönderimi için sunucu tarafı entegrasyonu (e-posta servisi) canlıya alınırken bağlanmalıdır.',
    },
    mapTitle: 'SilverRing Konum',
  },

  legal: {
    privacy: {
      kicker: 'Yasal',
      title: 'Gizlilik Politikası',
      paras: [
        'SilverRing Metal Sanayi A.Ş. ("SilverRing" veya "Şirketimiz") olarak, www.silverring.com.tr internet sitesini ("Site") ziyaret eden kullanıcılarımızın gizliliğine önem veriyoruz. Bu Gizlilik Politikası, Site üzerinden hangi bilgilerin toplandığını, bu bilgilerin nasıl kullanıldığını ve korunduğunu açıklamaktadır.',
      ],
      sections: [
        {
          heading: 'Toplanan Bilgiler',
          paras: [
            'Site\'yi ziyaret ettiğinizde herhangi bir kişisel bilginizi otomatik olarak toplamıyoruz. İletişim formumuzu doldurarak bize ulaştığınızda; ad soyad, şirket, e-posta adresi, telefon numarası ve mesajınızda paylaştığınız bilgiler tarafımıza iletilir.',
          ],
        },
        {
          heading: 'Bilgilerin Kullanım Amacı',
          paras: [
            'Paylaştığınız bilgiler yalnızca talebinizi değerlendirmek, sizinle iletişime geçmek ve talep ettiğiniz ürün/hizmet bilgisi, numune veya fiyat teklifini sunmak amacıyla kullanılır. Bilgileriniz üçüncü taraflarla pazarlama amacıyla paylaşılmaz veya satılmaz.',
          ],
        },
        {
          heading: 'Veri Güvenliği',
          paras: ['Tarafımıza ulaşan bilgilerin güvenliğini sağlamak için makul teknik ve idari önlemler alınmaktadır.'],
        },
        {
          heading: 'Üçüncü Taraf Bağlantılar',
          paras: [
            'Site içerisinde yer alan harita (Google Haritalar) gibi üçüncü taraf hizmetleri kendi gizlilik politikalarına tabidir; bu hizmetlerin gizlilik uygulamalarından Şirketimiz sorumlu değildir.',
          ],
        },
        {
          heading: 'Haklarınız ve İletişim',
          paras: [
            'Kişisel verilerinizle ilgili sorularınız için info@silverring.com.tr adresinden bizimle iletişime geçebilirsiniz. Detaylı bilgi için KVKK Aydınlatma Metni\'ni inceleyebilirsiniz.',
          ],
        },
      ],
      outro: ['Bu politika, Site içeriğinde veya yasal düzenlemelerde değişiklik olması halinde güncellenebilir.'],
      signOff: 'SilverRing Metal Sanayi A.Ş.',
    },
    kvkk: {
      kicker: 'Yasal',
      title: 'KVKK Aydınlatma Metni',
      paras: [
        '6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, veri sorumlusu sıfatıyla SilverRing Metal Sanayi A.Ş. tarafından aşağıda açıklanan kapsamda kişisel verileriniz işlenmektedir.',
      ],
      sections: [
        {
          heading: 'Veri Sorumlusu',
          paras: [
            'SilverRing Metal Sanayi A.Ş., Gebze Güzeller O.S.B, İnönü Mah. Aşık Veysel Sok. No:2/1, Kocaeli / Türkiye adresinde faaliyet göstermektedir.',
          ],
        },
        {
          heading: 'İşlenen Kişisel Veriler ve Toplama Yöntemi',
          paras: [
            'İletişim formu aracılığıyla tarafımıza ilettiğiniz ad-soyad, şirket unvanı, e-posta adresi, telefon numarası ve mesaj içeriğinize ait bilgiler, Site üzerindeki iletişim formunun doldurulması yoluyla elektronik ortamda toplanmaktadır.',
          ],
        },
        {
          heading: 'İşleme Amaçları',
          list: [
            'Tarafınızca iletilen talep, soru ve önerilerin değerlendirilmesi ve yanıtlanması,',
            'Ürün bilgisi, numune veya fiyat teklifi taleplerinin karşılanması,',
            'Müşteri ilişkileri süreçlerinin yürütülmesi.',
          ],
        },
        {
          heading: 'Hukuki Sebep',
          paras: [
            'Kişisel verileriniz, KVKK\'nın 5. maddesinde belirtilen "ilgili kişinin talebi üzerine bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması" ve "veri sorumlusunun meşru menfaati" hukuki sebeplerine dayanılarak işlenmektedir.',
          ],
        },
        {
          heading: 'Kişisel Verilerin Aktarılması',
          paras: [
            'Kişisel verileriniz, yasal yükümlülüklerimiz dışında, açık rızanız olmaksızın üçüncü kişilerle paylaşılmaz veya pazarlama amacıyla aktarılmaz.',
          ],
        },
        {
          heading: 'İlgili Kişinin Hakları',
          paras: [
            'KVKK\'nın 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme, KVKK\'da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme ve bu işlemlerin aktarıldığı üçüncü kişilere bildirilmesini isteme haklarına sahipsiniz.',
          ],
        },
      ],
      outro: ['Bu haklarınızı kullanmak için info@silverring.com.tr adresinden veya Merkez Fabrika adresimize yazılı olarak başvurabilirsiniz.'],
      signOff: 'SilverRing Metal Sanayi A.Ş.',
    },
    cookies: {
      kicker: 'Yasal',
      title: 'Çerez Politikası',
      paras: [
        'Bu Site, ziyaretçi deneyimini iyileştirmek amacıyla teknik olarak zorunlu olanlar dışında herhangi bir izleme, analiz veya pazarlama çerezi kullanmamaktadır.',
      ],
      sections: [
        {
          heading: 'Üçüncü Taraf Hizmetler',
          paras: [
            'Site üzerinde yer alan Google Haritalar gömülü haritası gibi üçüncü taraf hizmetleri, kendi çerez politikaları kapsamında çerez kullanabilir. Bu çerezler Şirketimizin kontrolünde değildir; ilgili hizmetin kendi gizlilik ve çerez politikasına tabidir.',
          ],
        },
        {
          heading: 'İleride Yapılacak Değişiklikler',
          paras: [
            'İleride Site\'ye analiz (ör. ziyaretçi istatistikleri) veya pazarlama amaçlı çerezler eklenmesi durumunda, bu politika güncellenecek ve gerekli görüldüğü hallerde ziyaretçilerden onay alınacaktır.',
          ],
        },
      ],
      outro: ['Çerez tercihleriniz hakkında sorularınız için info@silverring.com.tr adresinden bize ulaşabilirsiniz.'],
      signOff: 'SilverRing Metal Sanayi A.Ş.',
    },
  },
};

export default tr;
export type SiteContent = typeof tr;
