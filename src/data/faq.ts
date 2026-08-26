export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'Kompanzasyon neden önemlidir?',
    answer:
      'Kompanzasyon, tesisin şebekeden çektiği reaktif gücü dengeleyerek güç faktörünü hedeflenen seviyede tutar. Bu sayede reaktif enerji bedeli riski azalır ve şebeke üzerindeki yük daha verimli kullanılır.',
  },
  {
    question: 'Reaktif ceza nasıl oluşur?',
    answer:
      'Tesisin güç faktörü, dağıtım şirketinin belirlediği sınır değerin altına düştüğünde faturaya reaktif enerji bedeli yansıtılır. Doğru boyutlandırılmış bir kompanzasyon sistemiyle bu risk önemli ölçüde azaltılabilir.',
  },
  {
    question: 'Harmonik ölçüm neden yapılır?',
    answer:
      'Doğrusal olmayan yükler şebekeye harmonik bileşenler enjekte eder. Bu bileşenlerin seviyesini ölçmek, ekipmanların erken yıpranmasını önleyecek filtreleme ihtiyacının doğru belirlenmesini sağlar.',
  },
  {
    question: 'Enerji kalitesi nasıl ölçülür?',
    answer:
      'Enerji kalitesi; gerilim dengesizliği, çökme/yükselme olayları, flicker, harmonik distorsiyon ve frekans sapması gibi parametrelerin saha ölçüm cihazlarıyla belirli bir süre kayıt altına alınmasıyla değerlendirilir.',
  },
  {
    question: 'Topraklama ölçümü ne sıklıkla yapılmalıdır?',
    answer:
      'Periyodik kontrol aralığı tesisin niteliğine ve ilgili mevzuata göre değişir. Düzenli aralıklarla tekrarlanan ölçüm, topraklama sistemindeki olası bozulmaların zamanında tespit edilmesini sağlar.',
  },
  {
    question: 'Enerji izleme işletmelere ne sağlar?',
    answer:
      'Enerji izleme sistemleri, tüketim verilerini anlık ve geçmişe dönük olarak görünür kılarak verimlilik fırsatlarının ve anormal tüketimlerin erken fark edilmesini sağlar.',
  },
  {
    question: 'Hizmet almak için nasıl başvurabilirim?',
    answer:
      'İletişim formunu doldurarak veya doğrudan iletişim bilgilerimiz üzerinden bize ulaşarak teknik görüşme talebinde bulunabilirsiniz. İhtiyacınızı değerlendirip size uygun bir saha ziyareti planlarız.',
  },
];
