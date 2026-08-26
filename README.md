# Mega Elektrik — Kurumsal Web Sitesi

React + Vite + TypeScript + Tailwind CSS ile geliştirilmiş, herhangi bir barındırma sağlayıcısına bağımlı olmayan, taşınabilir kurumsal web sitesi.

## Teknoloji Yığını

- React 18
- Vite 5
- TypeScript
- Tailwind CSS
- React Router v6
- lucide-react (ikonlar)

Proje; Vercel, Hostinger, GoDaddy veya herhangi bir başka sağlayıcıya özel kod içermez. `npm run build` komutuyla oluşan `dist/` klasörü, statik dosya servis edebilen her ortama taşınabilir.

## Kurulum

```bash
npm install
```

## Geliştirme Sunucusu

```bash
npm run dev
```

Varsayılan olarak `http://localhost:5173` adresinde çalışır.

## Production Build

```bash
npm run build
```

Çıktı `dist/` klasörüne yazılır. Build sonrası önizleme için:

```bash
npm run preview
```

## Görsel (Fotoğraf) Ekleme — ÖNEMLİ

**5 gerçek fotoğraf projeye eklenmiştir:**

| Konum | Kaynak |
|---|---|
| `hero/hero-main.jpg` | Ana sayfa hero görseli |
| `compensation/nedir.jpg` | Kompanzasyon panosu (Kompanzasyon Nedir? sayfası + ana sayfa Kompanzasyon bölümü) |
| `services/kompanzasyon-panosu-bakimi.jpg` | Kompanzasyon Panosu Bakımı hizmet sayfası |
| `services/hizmetler-genel.jpg` | Hizmetler listeleme sayfası üst görseli |
| `field/saha-calismasi-1.jpg` | Ana sayfa Saha Çalışmaları galerisi |

> **Not — çözünürlük:** Hero görseli (Gemini ile üretilmiş referans) yüksek çözünürlüklü olduğu için büyük kullanımda net görünür. Diğer 4 fotoğraf tarafınızca ekran görüntüsü olarak paylaşıldığından kaynak çözünürlükleri düşüktü (~360–450px); büyütülüp yumuşatılarak yerleştirildi, bu nedenle özellikle geniş ekranlarda hafif yumuşak/pikselli görünebilirler. Orijinal, yüksek çözünürlüklü halleri elinize geçtiğinde aynı dosya adlarıyla üzerine yazmanız yeterli.
>
> **Not — görünür marka:** İki fotoğrafta (`services/kompanzasyon-panosu-bakimi.jpg` ve `field/saha-calismasi-1.jpg`) pano üzerinde/personel montunda eski "MYT Enerji" ibaresi görünüyor. Siteniz artık Mega Elektrik olarak yayında olacağı için, yayına almadan önce bu görselleri kırpma/retuş ile güncellemenizi ya da eski logonun görünmediği alternatif fotoğraflarla değiştirmenizi öneririm.

Geri kalan tüm diğer görsel alanları (kalan 8 hizmet, kalan 4 kompanzasyon konusu, ekip, iletişim, referanslar, saha galerisinin 2-4. kareleri) henüz yer tutucu durumda ve `ImagePlaceholder` bileşeni üzerinden otomatik olarak nötr bir görünüm gösteriyor.

Yeni bir fotoğraf eklemek için:

1. `public/assets/README.md` dosyasındaki tabloyu açın — her görsel alanının beklenen dosya adı ve oranı burada listelenir.
2. İlgili fotoğrafı, belirtilen dosya adıyla birebir aynı isimde ilgili `public/assets/[kategori]/` klasörüne ekleyin.
3. Kod tarafında hiçbir değişiklik gerekmez — sayfa yenilendiğinde görsel otomatik olarak görünür.

## Logo

Mega Elektrik'in gerçek kurumsal logosu kullanılmaktadır. Logo, ikon (M harfi + yıldırım) ve "MEGA ELEKTRİK" yazısının birleşik olduğu tek bir görsel olarak iki varyantta bulunur:

- `public/assets/logo/logo-light.png` — koyu (lacivert) yazılı versiyon; beyaz/açık zeminli header, footer ve mobil menüde kullanılır.
- `public/assets/logo/logo-dark.png` — beyaz yazılı versiyon; header hero görselinin üzerinde şeffaf durduğunda kullanılır.
- `public/assets/logo/favicon.png` — logodaki ikon işaretinin favicon için kare kırpılmış hali.

`src/components/Logo.tsx` bu iki varyantı `variant="light" | "dark"` prop'una göre otomatik seçer. Logo güncellenmek istendiğinde bu dosyaların üzerine aynı adla yazmanız yeterlidir, kod tarafında değişiklik gerekmez.

Logoyu değiştirmek/güncellemek isterseniz tek yapmanız gereken `src/components/Logo.tsx` içindeki SVG içeriğini düzenlemek (veya kendi tasarım ekibinizden gelen bir SVG/PNG dosyasıyla değiştirmektir) — component'in kullanıldığı hiçbir yeri (Header, Footer, mobil menü) ayrıca düzenlemeniz gerekmez.


## Ortam Değişkenleri

`.env.example` dosyasını kopyalayarak `.env` oluşturun:

```bash
cp .env.example .env
```

| Değişken | Açıklama |
|---|---|
| `VITE_API_URL` | Backend API taban adresi. Boş bırakılırsa iletişim formu mock (sahte) gönderim ile çalışır. |
| `VITE_CONTACT_ENDPOINT` | İletişim formu gönderim endpoint'i (varsayılan: `/contact`). |
| `VITE_SITE_URL` | SEO/Open Graph etiketleri için kanonik site adresi. |

`.env` dosyası `.gitignore` içinde olduğundan GitHub'a gönderilmez; gizli bilgiler için her zaman `.env` kullanın, `.env.example` sadece örnek şablondur.

## Proje Klasör Yapısı

```
mega-elektrik/
├─ public/
│  ├─ assets/logo/logo.png   Marka logosu (değiştirilecek tek dosya)
│  ├─ robots.txt
│  └─ sitemap.xml
├─ src/
│  ├─ components/            Header, Footer, NavDropdown, MobileNavAccordion, Logo, ...
│  ├─ data/                  Merkezi içerik dosyaları (services.ts, compensation.ts, ...)
│  ├─ hooks/
│  ├─ lib/                   slugify.ts (Türkçe karakter → URL/anchor güvenli metin)
│  ├─ pages/                 Route'lara karşılık gelen sayfa bileşenleri
│  ├─ styles/                 Global CSS ve renk/tipografi tokenleri
│  ├─ App.tsx                 Route tanımları
│  └─ main.tsx                 Uygulama giriş noktası
├─ index.html
├─ tailwind.config.js
├─ vite.config.ts
└─ .env.example
```

## Sayfa Yapısı ve Routing

| Route | Açıklama |
|---|---|
| `/` | Ana sayfa |
| `/hizmetler` | Tüm hizmetlerin listesi |
| `/hizmetler/:slug` | 9 hizmetten her birinin ayrı detay sayfası |
| `/kompanzasyon` | Kompanzasyon konularının listesi |
| `/kompanzasyon/:slug` | 5 kompanzasyon konusundan her birinin ayrı detay sayfası |
| `/cozumler` | İhtiyaca göre gruplandırılmış çözümler |
| `/hakkimizda` | Kurumsal bilgi |
| `/sss` | Sıkça sorulan sorular |
| `/iletisim` | İletişim formu |
| `*` | 404 sayfası ("Aradığınız sayfa bulunamadı.") |

Her hizmet ve her kompanzasyon konusu **kendi URL'ine, kendi H1 başlığına ve kendi SEO meta bilgilerine** sahiptir; tek bir sayfada toplanmamıştır. Yeni bir hizmet veya kompanzasyon konusu eklemek için `src/data/services.ts` ya da `src/data/compensation.ts` içine yeni bir obje eklemeniz yeterlidir — sayfa ve route otomatik olarak oluşur, header'daki dropdown menüler de bu veriden otomatik beslenir (`src/data/headerMenu.ts`).

## Header Navigasyonu

- **Sol grup:** Hizmetler (dropdown, 9 başlık) → Kompanzasyon (dropdown, 5 başlık) → Çözümler
- **Orta:** Mega Elektrik logosu (header'ın tam ortasında)
- **Sağ grup:** Hakkımızda → S.S.S. → İletişim
- Masaüstünde dropdown'lar hover/click ile aşağı açılır, dış tıklama ve ESC ile kapanır, ekran kenarından taşmaz.
- Mobilde hamburger menü içinde Hizmetler ve Kompanzasyon birer accordion olarak açılır; aynı anda yalnızca biri açık kalır.

## İçerik Güncelleme

Neredeyse tüm metinsel içerik `src/data/` klasöründeki dosyalardan yönetilir:

- `services.ts` — 9 hizmetin tamamı: başlık, açıklama, teknik içerik, avantajlar (Kompanzasyon Panosu Bakımı için ayrıca bakım süreci adımları ve kontrol edilen ekipmanlar listesi)
- `compensation.ts` — 5 kompanzasyon konusunun tamamı
- `headerMenu.ts` — header dropdown'larının veri kaynağı (services.ts ve compensation.ts'den otomatik türetilir)
- `solutions.ts` — çözümler sayfasındaki gruplamalar
- `process.ts` — çalışma modeli adımları
- `values.ts` — "Neden Mega Elektrik?" bölümü
- `stats.ts` — ana sayfadaki sayısal göstergeler (placeholder değerler, gerçek rakamlar geldiğinde güncellenir)
- `projects.ts` — referans/proje kartları (şu an açıkça işaretlenmiş placeholder kayıtlar; gerçek referanslar geldiğinde üzerine yazılır)
- `infoTopics.ts` — Bilgi Merkezi bölümündeki konu başlıkları
- `imageAssets.ts` — tüm görsellerin merkezi yol tanımı
- `faq.ts` — S.S.S. içerikleri
- `siteContent.ts` — hero metni, hakkımızda placeholder'ları, iletişim bilgileri

## Renk Sistemi

Tüm renkler `src/styles/global.css` içinde CSS custom property olarak tanımlıdır:

```css
--color-primary: #57faf1;       /* Ana turkuaz (talep edilen tam değer) */
--color-primary-dark: #0f9e97;  /* Erişilebilirlik için türetilmiş koyu ton */
--color-secondary: #6438b5;      /* Mor vurgu */
--color-background: #ffffff;
--color-surface: #f8f9fa;
--color-text: #10233f;
```

**Not:** `#57FAF1` çok açık bir ton olduğundan, üzerine beyaz veya kendisi metin/ikon rengi olarak kullanıldığında WCAG kontrast gereksinimini karşılamıyor. Bu nedenle metin/ikon/hover renklerinde `--color-primary-dark` (aynı turkuaz ailesinden, okunabilir koyu ton) kullanılmıştır; `--color-primary` ise talep edildiği gibi arka plan, buton, aktif durum ve küçük vurgu alanlarında birebir `#57FAF1` olarak kullanılır. Mega Elektrik'in resmi kurumsal renk kodları netleştiğinde yalnızca bu dosyadaki değerleri güncellemeniz, sitenin tamamına yansıması için yeterlidir.

## Deployment (Taşınabilirlik)

Proje herhangi bir sağlayıcıya bağımlı değildir. `dist/` klasörü:

- **Statik dosya barındıran her hosting** (cPanel, FTP tabanlı paylaşımlı hosting vb.) üzerine doğrudan yüklenebilir.
- **Vercel / Netlify gibi platformlarda**: build komutu `npm run build`, çıktı klasörü `dist`.
- **Nginx/Apache tabanlı sunucularda**: `dist/` içeriği sunucu kök dizinine kopyalanır.

### SPA Yönlendirme Notu

Bu proje istemci taraflı yönlendirme (React Router) kullanır. Sunucunun, `/hizmetler/kompanzasyon-panosu-bakimi` gibi doğrudan girilen adresleri `index.html`'e yönlendirecek şekilde yapılandırılması gerekir. Bu ayar sağlayıcıya göre değişir (Nginx `try_files`, Apache `.htaccess`, veya platforma özel `rewrites` ayarı); hosting sağlayıcısı netleştiğinde ilgili yönlendirme kuralı eklenmelidir.

## SEO Altyapısı

- Her sayfa (her hizmet ve her kompanzasyon konusu dahil) `src/components/Seo.tsx` üzerinden dinamik `title`, `meta description`, `canonical` ve Open Graph etiketleri alır.
- URL'ler Türkçe karaktersizdir (ör. `/hizmetler/elektrik-ic-tesisati-uygunluk-kontrolu`).
- `public/robots.txt` ve `public/sitemap.xml` hazır durumdadır; alan adı netleştiğinde `sitemap.xml` içindeki URL'ler ve `.env` içindeki `VITE_SITE_URL` güncellenmelidir.

## Son Kontrol Listesi (Yayına Almadan Önce)

- [ ] `npm run build` hatasız tamamlanıyor mu?
- [ ] Gerçek logo dosyası `public/assets/logo/logo.png` konumuna yerleştirildi mi?
- [ ] `.env` dosyasında gerçek `VITE_API_URL` tanımlı mı?
- [ ] `sitemap.xml` ve `VITE_SITE_URL` gerçek alan adıyla güncellendi mi?
- [ ] Firma telefon/e-posta/adres bilgileri `siteContent.ts` içinde güncellendi mi?
- [ ] Hosting sağlayıcısının SPA yönlendirme ayarı yapıldı mı?
