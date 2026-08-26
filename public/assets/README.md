# Görsel Ekleme Rehberi

Bu klasördeki her alt klasör, sitenin belirli bir bölümüne karşılık gelir. Gerçek fotoğraflarınız hazır olduğunda, aşağıdaki tabloda belirtilen **dosya adıyla birebir aynı isimde** dosyayı ilgili klasöre eklemeniz yeterlidir. Kod tarafında hiçbir değişiklik gerekmez; sayfa otomatik olarak gerçek görseli gösterir (görsel eklenene kadar o alanda kurumsal bir yer tutucu görünür).

Önerilen format: **JPG/WebP**, yatay/dikey oranına uygun (aşağıda belirtilmiştir), sıkıştırılmış (~150–400 KB civarı) dosya boyutu.

## Logo

| Dosya | Açıklama |
|---|---|
| `logo/logo.png` | Kurumsal logo. Kare/yakın kare, tercihen şeffaf arka planlı PNG veya SVG. |

## Hero (Ana Sayfa Üst Bölüm)

| Dosya | Oran | Açıklama |
|---|---|---|
| `hero/hero-main.jpg` | 21:8 (geniş) | Ana sayfa hero bölümündeki büyük saha/teknik görsel. |

## Hizmetler

| Dosya | Oran | Hizmet |
|---|---|---|
| `services/kompanzasyon-panosu-bakimi.jpg` | 4:3 | Kompanzasyon Panosu Bakımı |
| `services/kompanzasyon-bakim-1.jpg`, `-2.jpg`, `-3.jpg` | 4:3 | Kompanzasyon bakım süreci saha fotoğrafları (3 adet) |
| `services/ev-sarj-altyapisi-bakimi.jpg` | 4:3 | Elektrikli Araç Şarj Altyapısı Bakım Hizmetleri |
| `services/enerji-izleme-raporlama.jpg` | 4:3 | Enerji İzleme, Raporlama |
| `services/harmonik-olcum-raporlama.jpg` | 4:3 | Harmonik Ölçüm, Raporlama |
| `services/elektrik-enerjisi-guc-kalitesi.jpg` | 4:3 | Elektrik Enerjisi Güç Kalitesi |
| `services/topraklama-olcumu.jpg` | 4:3 | Topraklama Ölçümü |
| `services/yuksek-gerilim-isletme-sorumlulugu.jpg` | 4:3 | Yüksek Gerilim İşletme Sorumluluğu |
| `services/elektrik-ic-tesisati-uygunluk-kontrolu.jpg` | 4:3 | Elektrik İç Tesisatı Uygunluk Kontrolü |
| `services/ts-13912-standardi.jpg` | 4:3 | TS 13912 Standardı |

## Kompanzasyon Konuları

| Dosya | Oran | Konu |
|---|---|---|
| `compensation/nedir.jpg` | 16:7 | Kompanzasyon Nedir? |
| `compensation/pano-cesitleri.jpg` | 16:7 | Kompanzasyon Panosu Çeşitleri |
| `compensation/hesabi-nasil-yapilir.jpg` | 16:7 | Kompanzasyon Hesabı Nasıl Yapılır? |
| `compensation/kondansatoru.jpg` | 16:7 | Kompanzasyon Kondansatörü |
| `compensation/arizasi.jpg` | 16:7 | Kompanzasyon Arızası |

## Saha Çalışmaları (Ana Sayfa Galerisi)

| Dosya | Oran |
|---|---|
| `field/saha-calismasi-1.jpg` … `-4.jpg` | Kare (1:1), 4 adet |

## Ekip

| Dosya | Oran |
|---|---|
| `team/teknik-ekip.jpg` | 4:3 — Hakkımızda sayfası |

## İletişim

| Dosya | Oran |
|---|---|
| `contact/iletisim.jpg` | 16:6 (geniş) — İletişim sayfası üst görsel |

## Referanslar / Projeler

| Dosya | Oran |
|---|---|
| `projects/proje-1.jpg`, `-2.jpg`, `-3.jpg` | 4:3 — gerçek referans eklendiğinde `src/data/projects.ts` içindeki ilgili kayıtla birlikte güncellenir |

---

Tüm yolların merkezi tanımı: `src/data/imageAssets.ts`. Yeni bir görsel kategorisi eklemeniz gerekirse yalnızca bu dosyaya yeni bir yol eklemeniz yeterlidir.
