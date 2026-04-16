İSG Sınavmatik (isgapp)
İş Sağlığı ve Güvenliği (İSG) sınavlarına hazırlanan adaylar (A, B, C Sınıfı Uzmanlık ve İşyeri Hekimliği) için geliştirilmiş, modern ve kullanıcı dostu bir web tabanlı deneme sınavı uygulamasıdır.

🚀 Özellikler
Geniş Soru Havuzu: Farklı yıllara ait çıkmış soruları ve özel hazırlanan deneme sınavlarını içerir.

Kategori Bazlı Çalışma: Mevzuat, Teknik, Sağlık, Hukuk gibi kategorilerde özelleştirilmiş testler çözme imkanı.

Eğitim Modu: Soruyu çözerken anında doğru cevabı ve açıklamasını görebilme özelliği.

Akıllı İstatistikler: Radar grafik (Radar Chart) desteğiyle hangi konularda daha başarılı olduğunuzu görsel olarak analiz edin.

Karanlık Mod Desteği: Gece çalışmaları için göz yormayan karanlık tema seçeneği.

Mobil Uyumlu (PWA Hazır): Tamamen duyarlı (responsive) tasarım ve dokunmatik ekranlar için kaydırma (swipe) desteği.

AI Desteği: Takıldığınız sorularda yapay zeka tabanlı "Derin Analiz" butonu ile ek ipuçları ve açıklamalar alma.

🛠️ Teknik Altyapı
Uygulama, herhangi bir sunucu tarafı dili gerektirmeden tamamen istemci taraflı (client-side) çalışacak şekilde optimize edilmiştir:

Frontend: HTML5, Tailwind CSS, JavaScript (Vanilla ES6+).

Kütüphaneler:

Lucide: Modern ve sade ikonlar.

Chart.js: Başarı analiz grafikleri.

Veri Yönetimi: Sorular ./sorular/ dizini altındaki .js dosyalarında saklanır ve dinamik olarak yüklenir.

📁 Proje Yapısı
Plaintext
├── index.html          # Ana uygulama dosyası ve kullanıcı arayüzü
├── sorular/            # Soru bankasını içeren JS dosyaları (Örn: 2024-1-C.js)
├── scratch/
│   ├── audit.js        # Veri bütünlüğünü kontrol eden script
│   └── distribution.js # Soru dağılımını hesaplayan yardımcı araç
├── img/                # Soru içeriklerindeki görseller
└── audit_results.json  # Audit scripti çıktıları
🧪 Veri Kalite Kontrolü
Proje içerisinde yer alan audit.js aracı, soru havuzundaki verilerin doğruluğunu denetler:

Tekrarlanan (duplicate) soruları tespit eder.

Eksik kategori, metin veya hatalı cevap anahtarı içeren yapısal sorunları raporlar.

💻 Kurulum ve Kullanım
Uygulama yerel olarak veya herhangi bir statik web sunucusunda çalıştırılabilir:

Bu depoyu klonlayın:

Bash
git clone https://github.com/kullanici_adi/isgapp.git
index.html dosyasını herhangi bir modern tarayıcıda açın.

📝 Notlar
Versiyon Bilgisi: Soru içerikleri ve uygulama arayüzü 2026 yılı güncel sınav takvimine göre optimize edilmiştir.

Geliştirici Notu: React kodlamada Atomik Dizayn prensipleri benimsenmiş olsa da, bu repo hızlı erişim ve hafiflik için saf JavaScript ile yapılandırılmıştır.

Lisans: MIT
İletişim: isgapp@proton.me
