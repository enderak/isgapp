// Bu satır standarttır, her dosyanın başında olmalı:
window.SoruHavuzu = window.SoruHavuzu || [];

// Soruları havuza ekle
window.SoruHavuzu = window.SoruHavuzu.concat([
    {
        category: "Hukuk",
        text: "1. 1982 Anayasası'na göre aşağıdakilerin hangisi Yüksek Seçim Kuruluna üye seçen mercilerden biridir?",
        options: ["Cumhurbaşkanı", "Yargıtay", "Hâkimler ve Savcılar Kurulu", "Anayasa Mahkemesi", "Türkiye Büyük Millet Meclisi"],
        correct: 1,
        source: "2025-2-C",
        explanation: "Yargıtay, YSK'ya üye seçen kurumlardan biridir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Hukuk",
        text: "2. 4857 sayılı İş Kanunu'nda işçi ücretlerinden ceza olarak yapılacak kesintilerin bir ayda en fazla kaç gündelik kadar olabileceği düzenlenmiştir?",
        options: ["1", "2", "3", "4", "5"],
        correct: 1,
        source: "2025-2-C",
        explanation: "Ücret kesme cezası ayda 2 gündelikle sınırlıdır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Hukuk",
        text: "3. 4857 sayılı İş Kanunu'na göre 50 ve daha yukarı yaştaki işçilere verilecek yıllık ücretli izin süresi kural olarak kaç günden az olamaz?",
        options: ["14", "20", "26", "30", "40"],
        correct: 1,
        source: "2025-2-C",
        explanation: "Bu yaş grubundaki işçiler için asgari izin süresi 20 gündür.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "4. Aşağıdakilerden hangileri ILO Meslek Hastalıkları Listesi'nde hedef organ sistemlerinden kaynaklanan meslek hastalıkları arasında sayılmıştır?\n\nI. Deri hastalıkları\nII. Ruhsal ve davranışsal hastalıklar\nIII. Biyolojik ajanlar ve bulaşıcı veya parazitik hastalıklar",
        options: ["Yalnız I", "Yalnız III", "I ve II", "II ve III", "I, II ve III"],
        correct: 2,
        source: "2025-2-C",
        explanation: "Deri ile ruhsal/davranışsal hastalıklar hedef organ sistemi kaynaklıdır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Genel İSG Konuları",
        text: "5. Aşağıdakilerden hangisi iş sağlığı ve güvenliği eğitiminin başarısını artırmak için çalışanların motivasyonunu geliştirmek üzere başvurulan uygulamalardan biri değildir?",
        options: ["Eğitimin kişisel faydalarını vurgulamak", "Eğitimin amaçlarını ve hedeflerini açıklamak", "Eğitimin çalışma kaynaklı riskleri azaltacağını vurgulamak", "Eğitimin işverene sağlayacağı üretim maliyeti avantajını vurgulamak", "Eğitimle çalışanların ilgileri, becerileri ve deneyimleri arasında ilişki kurmak"],
        correct: 3,
        source: "2025-2-C",
        explanation: "Eğitimin işverene sağlayacağı mali avantajlar, çalışanların motivasyonunu artırmaya yönelik doğrudan bir uygulama değildir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "6. İşyerlerinde Acil Durumlar Hakkında Yönetmelik'e göre az tehlikeli iş yerleri ile çok tehlikeli iş yerlerinin acil durum planlarının yenileneceği azami süreler arasındaki fark kaç yıldır?",
        options: ["1", "2", "3", "4", "5"],
        correct: 3,
        source: "2025-2-C",
        explanation: "Süre farkı 4 yıldır (az tehlikeli: 6 yıl, çok tehlikeli: 2 yıl, fark: 4 yıl).",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "7. Aşağıdakilerden hangilerine İşyerlerinde Acil Durumlar Hakkında Yönetmelik'te acil durum planını hazırlama yükümlülüğü verilmiştir?\n\nI. İşveren\nII. İş yeri hekimi\nIII. İş güvenliği uzmanı",
        options: ["Yalnız I", "Yalnız II", "I ve III", "II ve III", "I, II ve III"],
        correct: 0,
        source: "2025-2-C",
        explanation: "Yönetmeliğe göre acil durum planını hazırlama yükümlülüğü sadece işverene aittir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "8. Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği'ne göre aşağıdakilerden hangisi yüksekte çalışmalarda öncelikli olarak kullanılan toplu koruma tedbirlerinden biri değildir?",
        options: ["Sapanlar", "Kapaklar", "Bariyerler", "Hava yastıkları", "Çalışma iskeleleri"],
        correct: 0,
        source: "2025-2-C",
        explanation: "Sapanlar bir toplu koruma tedbiri değil, yük kaldırma aparatıdır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "9. Çocuk ve Genç İşçilerin Çalıştırılma Usul ve Esasları Hakkında Yönetmelik'e göre aşağıdakilerden hangisi genç işçilerin çalıştırılabilecekleri işlerden biri değildir?",
        options: ["Büro iş yerlerinde büro işleri ve yardımcı işler", "Büyükbaş hayvan besiciliğinde yardımcı işler", "Meyve ve sebze kurutmacılığı ve işlenmesi işleri", "İlaçlama ve gübreleme hariç çiçek yetiştirme işleri", "Şeker fabrikalarında üretime hazırlamaya yardımcı işler"],
        correct: 1,
        source: "2025-2-C",
        explanation: "Büyükbaş hayvan besiciliği genç işçilerin çalışabileceği hafif işler arasında değildir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Hukuk",
        text: "10. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre ölümlü iş kazası meydana gelen bir maden iş yerinde kusuru yargı kararıyla tespit edilen işveren, kamu ihalelerine kaç yıl katılamaz?",
        options: ["1", "2", "3", "4", "5"],
        correct: 1,
        source: "2025-2-C",
        explanation: "Bu durumdaki işveren 2 yıl boyunca kamu ihalelerine katılamaz.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "11. Çalışma ve Sosyal Güvenlik Bakanlığı tarafından kişisel koruyucu donanımların piyasa gözetim ve denetimleri aşağıdaki kanunların hangisinin kapsamında gerçekleştirilir?",
        options: ["4857 sayılı İş Kanunu", "6098 sayılı Türk Borçlar Kanunu", "6331 sayılı İş Sağlığı ve Güvenliği Kanunu", "7223 sayılı Ürün Güvenliği ve Teknik Düzenlemeler Kanunu", "5510 sayılı Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu"],
        correct: 3,
        source: "2025-2-C",
        explanation: "KKD denetimleri 7223 sayılı kanun hükümlerince yürütülür.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "12. İşyerlerinde Acil Durumlar Hakkında Yönetmelik'e göre az tehlikeli sınıfta yer alan bir iş yerinde oluşturulacak söndürme ekibinde en fazla kaç çalışana kadar bir personelin görevlendirilmesi gerekir?",
        options: ["20", "30", "40", "50", "60"],
        correct: 3,
        source: "2025-2-C",
        explanation: "Az tehlikeli yerlerde her 50 çalışan için 1 söndürme personeli görevlendirilir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "13. İş Sağlığı ve Güvenliği Kurulları Hakkında Yönetmelik'te kurulun üyelerine verilecek iş sağlığı ve güvenliği eğitimlerinin kapsadığı konular arasında aşağıdakilerden hangisi sayılmamıştır?",
        options: ["Güvenlik kültürü", "İletişim teknikleri", "Acil durum önlemleri", "İş hijyeninin temel ilkeleri", "İş yerlerine ait özel riskler"],
        correct: 0,
        source: "2025-2-C",
        explanation: "Güvenlik kültürü, yönetmelikte belirtilen kurul üyeleri eğitim konuları arasında sayılmamıştır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "14. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre 80 çalışanın bulunduğu bir iş yerinde iş sağlığı ve güvenliği kurulu oluşturma yükümlülüğünün doğması için sürekli işlerin asgari kaç aydan fazla sürmesi gerekir?",
        options: ["3", "6", "9", "12", "15"],
        correct: 1,
        source: "2025-2-C",
        explanation: "Kurul kurma yükümlülüğü için işin 6 aydan fazla sürmesi şarttır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "15. Maden İşyerlerinde İş Sağlığı ve Güvenliği Yönetmeliği'ne göre bür aşağıdakilerden hangisini ifade eder?",
        options: ["Maden içerisinden sürülen galeri", "Ocak havasının giriş ve çıkış yolu", "Yer üstüyle bağlantısı olmayan kuyu", "Ana kütleden ayrılmış, her an düşebilecek parçalar", "Maden içerisinde iki galeri arasında cephe hâlinde üretim yapılan yer"],
        correct: 2,
        source: "2025-2-C",
        explanation: "Bür, maden içerisinde yer üstüyle doğrudan bağlantısı olmayan kuyuya denir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "16. Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği'ne göre esnek ve dikey yaşam hatlarında\n\nI. çelik tel halat,\nII. dokuma şerit,\nIII. sentetik lifli halat\n\nekipmanlarından hangileri kullanılabilir?",
        options: ["Yalnız I", "Yalnız II", "I ve III", "II ve III", "I, II ve III"],
        correct: 2,
        source: "2025-2-C",
        explanation: "Dikey yaşam hatları için çelik tel veya sentetik lifli halat tercih edilebilir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "17. Ekranlı Araçlarla Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik'te aşağıdakilerden hangisi ekranlı araçlarla çalışanlara işe başlamadan önce verilmesi gereken eğitimin özellikle içermesi gereken konular arasında sayılmamıştır?",
        options: ["Doğru oturuş", "Gözlerin korunması", "Ara dinlenmeleri ve egzersizler", "Gözleri en az yoran yazı karakterleri ve renkler", "Ekranlı araçlarla çalışmalarda oluşan hastalıklar ve tedavi yolları"],
        correct: 4,
        source: "2025-2-C",
        explanation: "Hastalıklar ve tedavi yolları, işe başlamadan önce verilmesi gereken özel eğitim konuları arasında sayılmamıştır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "18. Kişisel Koruyucu Donanımların İşyerlerinde Kullanılması Hakkında Yönetmelik'te tozluklar aşağıdakilerden hangisinin kapsamında sayılmıştır?",
        options: ["Vücut koruyucuları", "El ve kol koruyucuları", "Göz ve yüz koruyucuları", "Ayak ve bacak koruyucuları", "Solunum sistemi koruyucuları"],
        correct: 3,
        source: "2025-2-C",
        explanation: "Tozluklar ayak ve bacak koruyucu ekipmanlardandır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "19. Sağlık ve Güvenlik İşaretleri Yönetmeliği'ne göre aşağıdakilerin hangisinde geçici işaretler kullanılır?",
        options: ["Tehlike sinyali verilmesi", "Konteyner ve boruların işaretlenmesi", "Düşme riski olan yerlerin belirlenmesi", "Engellere çarpma riski olan yerlerin belirlenmesi", "Acil kaçış yolları ve ilk yardım bölümlerinin yerlerinin belirtilmesi"],
        correct: 0,
        source: "2025-2-C",
        explanation: "Tehlike sinyalleri geçici işaret kategorisindedir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "20. Kişisel Koruyucu Donanımların İşyerlerinde Kullanılması Hakkında Yönetmelik'te aşağıdakilerden hangisi yalıtkan tabanlı koruyucu ayakkabı kullanılmasının gerekli olabileceği işler arasında sayılmıştır?",
        options: ["Kumlama işleri", "Cıvatalama işleri", "İskelelerde çalışmalar", "Talaş çıkaran makinelerde yapılan talaş toplama işleri", "Çok sıcak veya soğuk malzemelerle yapılan çalışmalar"],
        correct: 4,
        source: "2025-2-C",
        explanation: "Uç sıcaklıklardaki malzemelerle çalışırken yalıtkan tabanlı ayakkabı gereklidir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "21. Sağlık ve Güvenlik İşaretleri Yönetmeliği'ne göre aşağıdakilerin hangisi yangınla mücadele işaretlerinden biridir?",
        options: ["Sarı üçgen işaret", "Mavi daire işaret", "Yeşil dikdörtgen işaret", "Çapraz kırmızı çizgili yuvarlak", "Kırmızı kare/dikdörtgen piktogram (Telefon vb.)"],
        correct: 4,
        source: "2025-2-C",
        explanation: "Yangınla mücadele işaretleri kırmızı zemin üzerine beyaz piktogramlıdır.",
        profile: "isg_c",
        image: "img/yangin_tel.jpg"
    },
    {
        category: "Mevzuat",
        text: "22. Ekranlı Araçlarla Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik'e göre klavyelerle ilgili aşağıdaki ifadelerden hangileri doğrudur?\n\nI. Yüzeyi mat olmalıdır.\nII. Ekrana bitişik ve sabit olmalıdır.\nIII. Ön tarafında bilek desteği bulunmalıdır.",
        options: ["Yalnız I", "Yalnız II", "I ve III", "II ve III", "I, II ve III"],
        correct: 2,
        source: "2025-2-C",
        explanation: "Klavyelerin yüzeyi mat olmalı ve ön tarafında bilek desteği bulunmalıdır; ekrana sabit olmamalıdır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "23. Çalışanların Titreşimle İlgili Risklerden Korunmalarına Dair Yönetmelik'te bir iş yerinde mekanik titreşimden kaynaklanabilecek riskler değerlendirilirken işveren tarafından özel önem verilecek hususlar arasında aşağıdakilerden hangisine yer verilmemiştir?",
        options: ["İş ekipmanlarının mekanik titreşim düzeyi hakkında ilgili mevzuat uyarınca imalatçılardan sağlanan bilgiler", "Düşük sıcaklık gibi özel çalışma koşulları", "Sağlık gözetiminden elde edilen uygun en güncel bilgiler", "Kaza riskini azaltmak için kullanılan ve çalışanlar tarafından algılanması gereken uyarı sinyalleri", "Bütün vücut titreşimine maruziyetin, işverenin sorumluluğundaki normal çalışma saatleri dışında da devam edip etmediği"],
        correct: 3,
        source: "2025-2-C",
        explanation: "Kaza riski uyarı sinyalleri titreşim risk değerlendirmesinin özel odak noktaları arasında belirtilmemiştir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "24. Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik'e göre kurşun ve iyonik kurşun bileşiklerinin biyolojik sınır değerleri ve sağlık gözetimi önlemleriyle ilgili hangileri doğrudur?\n\nI. Biyolojik izleme, kanda kurşun seviyesinin ölçümünü kapsar.\nII. Bağlayıcı biyolojik sınır değer 40 µg Pb/100 mL kandır.\nIII. Çalışanlardan herhangi birinin kanındaki kurşun seviyesi 40 µg Pb/100 mL kandan fazla ise tıbbi gözetim yapılır.",
        options: ["Yalnız I", "Yalnız II", "I ve II", "I ve III", "I, II ve III"],
        correct: 3,
        source: "2025-2-C",
        explanation: "Kandaki kurşun ölçümü ve 40 µg seviyesindeki tıbbi gözetim şartı doğrudur; bağlayıcı sınır değer ifadesi ise yanlıştır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "25. Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi Hakkında Yönetmelik'e göre çalışanların maruziyet düzeyinin en aza indirilmesi için özellikle alınması gereken önlemlerle ilgili aşağıdakilerden hangisi yanlıştır?",
        options: ["Maruz kalan veya kalabilecek çalışan sayısı mümkün olan en az sayıda tutulur.", "Çalışma prosesleri ve teknik kontrol önlemleri, biyolojik etkenlerin ortama yayılmasını önleyecek veya ortamda en az düzeyde bulunmasını sağlayacak şekilde düzenlenir.", "Toplu koruma önlemlerinden önce kişisel korunma önlemleri alınır ve çalışanlara kişisel koruyucu donanım sağlanır.", "Hijyen önlemleri, biyolojik etkenlerin çalışma yerlerinden kazara dışarıya taşınması veya sızmasının önlenmesi veya azaltılmasını sağlamaya uygun olur.", "Biyolojik etkenleri içeren kazaların önlenmesine yönelik plan hazırlanır."],
        correct: 2,
        source: "2025-2-C",
        explanation: "İSG hiyerarşisinde toplu koruma her zaman kişisel korunmadan önceliklidir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Hukuk",
        text: "26. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre sağlık gözetimiyle ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        options: ["İşveren, çalışanların iş yerinde maruz kalacakları sağlık ve güvenlik risklerini dikkate alarak sağlık gözetimine tabi tutulmalarını sağlar.", "İşveren, iş değişikliğinde çalışanların sağlık muayenelerinin yapılmasını sağlamak zorundadır.", "Sağlık gözetiminden doğan maliyet ve bu gözetimden kaynaklı her türlü ek maliyet işverence karşılanır, çalışana yansıtılamaz.", "İş yerinin tehlike sınıfı ne olursa olsun çocuk ve genç çalışanlar için en geç on iki ayda bir defa olmak üzere periyodik muayene tekrarlanır.", "Tehlikeli ve çok tehlikeli sınıfta yer alan işlerde çalışacaklar, yapacakları işe uygun olduklarını belirten sağlık raporu olmadan işe başlatılamaz."],
        correct: 3,
        source: "2025-2-C",
        explanation: "Çocuk ve genç çalışanların periyodik muayeneleri için belirtilen süre ifadesi yanlıştır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "27. Aşağıdakilerden hangisi çalışanların sağlık gözetimi kapsamında değerlendirilmez?",
        options: ["Bağışıklama çalışmalarının yapılması", "Sağlık eğitimi yapılması", "Sağlık kayıtlarının tutulması", "İşe giriş ve periyodik muayenelerin yapılması", "Çalışanların kendi periyodik sağlık muayene sonuçlarını muhafaza etmesi"],
        correct: 4,
        source: "2025-2-C",
        explanation: "Sonuçların muhafazası çalışanın değil, işverenin sorumluluğundadır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "28. Çalışma Gücü ve Meslekte Kazanma Gücü Kaybı Oranı Tespit İşlemleri Yönetmeliği'nde kimyasal maddelerle olan meslek hastalıkları aşağıdaki grupların hangisinde yer alır?",
        options: ["A Grubu", "B Grubu", "C Grubu", "D Grubu", "E Grubu"],
        correct: 0,
        source: "2025-2-C",
        explanation: "Kimyasal maddelerle meydana gelen meslek hastalıkları A Grubu kapsamında değerlendirilir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "29. Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul ve Esasları Hakkında Yönetmelik'e göre eğitim programlarının planlanması ve düzenlenmesiyle ilgili aşağıdaki ifadelerden hangisi doğrudur?",
        options: ["Eğitim programlarının hazırlanmasında çalışanların veya temsilcilerinin görüşleri alınır.", "Eğitim sonunda yapılan ölçme değerlendirme sonucunda başarılı olamayan çalışanın işine son verilir.", "Eğitimler çalışanlara bireysel olarak verilemez, gruplar hâlinde uygulanmak zorundadır.", "Eğitim konularının planlanmasında Yönetmelik'te belirlenen konuların dışına çıkılamaz.", "Eğitimlerin amacı bilgi düzeyinin artırılmasıdır, davranış değişikliği sağlamak değildir."],
        correct: 0,
        source: "2025-2-C",
        explanation: "Yönetmelik uyarınca eğitim programları hazırlanırken çalışanların veya temsilcilerinin görüşleri alınmalıdır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "30. Sağlık ve Güvenlik İşaretleri Yönetmeliği'ne göre renklerin anlamı veya amacıyla ilgili aşağıdakilerden hangisi yanlıştır?",
        options: ["Sarı renk: Uyarı işareti", "Mavi renk: Zorunluluk işareti", "Parlak turuncu renk: Tehlike yok", "Kırmızı renk: Tehlike alarmı", "Yeşil renk: Acil çıkış"],
        correct: 2,
        source: "2025-2-C",
        explanation: "Parlak turuncu rengin 'tehlike yok' anlamı taşıdığı ifadesi yanlıştır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "31. Aşağıdaki hastalıklardan hangisinin nedeni biyolojik etken değildir?",
        options: ["Şarbon", "Riketsiyoz", "Tetanos", "Tüberküloz", "Siderozis"],
        correct: 4,
        source: "2025-2-C",
        explanation: "Siderozis metalik tozlara bağlı gelişen bir durumdur, biyolojik etken kaynaklı değildir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "32. Karayolları Trafik Yönetmeliği'ne göre römorksuz bir lastik tekerlekli traktörü kullanan tarım işçisinin aksine bir işaret bulunmadıkça yerleşim yeri içinde uyması gereken azami hız sınırı kaç km/s'tir?",
        options: ["20", "30", "40", "50", "60"],
        correct: 0,
        source: "2025-2-C",
        explanation: "Traktörler için yerleşim yerindeki hız sınırı 20 km/s olarak belirlenmiştir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "33. Çalışanların Titreşimle İlgili Risklerden Korunmalarına Dair Yönetmelik'e göre yukarıdakilerden hangileri el-kol titreşiminin ölçümünde dikkate alınması gereken hususlardandır?\n\nI. Kullanılan yöntemler mekanik titreşime maruz kalan çalışanların kişisel maruziyetini belirleyebilecek nitelikte olacaktır.\nII. Kullanılan cihazlar ve yöntemler, ölçülecek mekanik titreşimin karakteristiğine, çevresel etkilere ve ölçüm aygıtlarının özelliklerine uyumlu olacaktır.\nIII. Çift elle kullanılan aygıtlarda, ölçümler her el için ayrı ayrı yapılacaktır.\nIV. Çift elle kullanılan aygıtlarda maruziyet, her iki eldeki ölçüm değerlerinin ortalaması esas alınarak belirlenecektir.",
        options: ["I ve II", "I, II ve III", "I, III ve IV", "II, III ve IV", "I, II, III ve IV"],
        correct: 1,
        source: "2025-2-C",
        explanation: "Ölçümlerin niteliği, uyumu ve çift eldeki ayrı ölçüm gerekliliği temeldir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "34. Radyasyon Güvenliği Yönetmeliği'ne göre kapalı radyoaktif kaynaklarla ilgili hangileri doğrudur?\n\nI. Hiçbir şekilde radyoaktif atık olarak çevreye verilemezler.\nII. Lisans sahipleri bu kaynakları ilgili kuruma önceden yazılı bilgi vermeden bir başka kişiye devredemez.\nIII. Kullanımından vazgeçilen ve bir daha kullanılması düşünülmeyen kaynaklar mahrecine veya radyoaktif atık işleme tesisine gönderilir.",
        options: ["Yalnız I", "Yalnız III", "I ve II", "II ve III", "I, II ve III"],
        correct: 4,
        source: "2025-2-C",
        explanation: "Verilen tüm öncüller kapalı radyoaktif kaynakların güvenliği için doğrudur.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "35. Elektrik ark kaynağında elektrik çarpmasına engel olmak için aşağıdaki tedbirlerden hangileri alınmalıdır?\n\nI. İyi izole edilmiş kuru eldivenler kullanılmalıdır.\nII. Kaynak pensleri akım geçmeyecek şekilde izole edilmelidir.\nIII. Kaynak kablosu takılırken veya kutupları değiştirilirken makine boşta çalıştırılmalıdır.",
        options: ["Yalnız I", "Yalnız III", "I ve II", "II ve III", "I, II ve III"],
        correct: 2,
        source: "2025-2-C",
        explanation: "Kuru eldiven ve izole pensler doğrudan elektriksel koruma sağlar.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "36. Elektrik İç Tesisleri Yönetmeliği'ne göre insanları ve evcil hayvanları 50 voltun üzerindeki dokunma gerilimlerinin neden olacağı tehlikelerden korumak için kullanılacak düzenler arasında aşağıdakilerden hangisi yer almaz?",
        options: ["Koruyucu yalıtma kullanmak", "Küçük gerilim kullanmak", "Üzerinde durulan yeri yalıtmak", "Doğru akım besleme sistemi kullanmak", "Koruma topraklaması kullanmak"],
        correct: 3,
        source: "2025-2-C",
        explanation: "Doğru akım sistemi tek başına bir dokunma gerilimi koruma düzeni değildir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "37. Kaldırma amacıyla kaldırma makinesi veya kaldırma aksesuarlarının bir parçası olarak tasarlanıp imal edilen halatların bütünü ve uçları, yeterli güvenlik düzeyi sağlayacak şekilde seçilmiş bir çalışma katsayısına sahip olmalıdır.\n\nMakina Emniyeti Yönetmeliği'ne göre genel bir kural olarak bu katsayı kaçtır?",
        options: ["3", "4", "5", "6", "7"],
        correct: 2,
        source: "2025-2-C",
        explanation: "Genel kural olarak bu katsayı 5'tir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "38. TS 748 Standardı'na göre aşağıdakilerden hangisi balta, nacak ve satır gibi el aletlerinin kesmeyi yapan kenarını ifade eder?",
        options: ["Ağız", "Sap", "Göz", "Sırt", "Kama"],
        correct: 0,
        source: "2025-2-C",
        explanation: "Kesme kenarı 'ağız' olarak tanımlanır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "39. İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği'ne göre aşağıdaki tanımlardan hangileri doğrudur?\n\nI. İş ekipmanı: İşin yapılmasında kullanılan herhangi bir makine, alet, cihaz, teçhizat, tesis ve tesisat\nII. Maruz kişi: İş kazası sonucu mağdur olmuş kişi\nIII. Operatör: İş ekipmanlarının teknik özelliklerinin gerektirdiği ve EKİPNET'e kayıtlı ilgili branşlardan mühendis, teknik öğretmen, tekniker ve yüksek teknikerler",
        options: ["Yalnız I", "Yalnız II", "I ve III", "II ve III", "I, II ve III"],
        correct: 0,
        source: "2025-2-C",
        explanation: "Sadece birinci tanımdaki iş ekipmanı ifadesi doğrudur.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "40. Basit Basınçlı Kaplar Yönetmeliği kapsamındaki bir kap üzerinde görülen PS değeri aşağıdakilerden hangisini ifade eder?",
        options: ["Akma dayanımı", "Tasarım basıncı", "Azami çalışma basıncı", "Asgari çalışma sıcaklığı", "Zorlama mukavemeti"],
        correct: 2,
        source: "2025-2-C",
        explanation: "PS değeri azami çalışma basıncını temsil eder.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "41. Hidrojen sülfür gazıyla ilgili aşağıdaki ifadelerden hangileri doğrudur?\n\nI. Yanıcıdır.\nII. Zehirlidir.\nIII. Basit boğucu gaz olarak sınıflandırılır.",
        options: ["Yalnız I", "Yalnız II", "Yalnız III", "I ve II", "I ve III"],
        correct: 3,
        source: "2025-2-C",
        explanation: "Hidrojen sülfür hem yanıcı hem de zehirli bir gazdır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "42. Formaldehit, dioksin ve benzen ile ilgili aşağıdaki ifadelerden hangileri doğrudur?\n\nI. Formaldehit kanserojen olarak sınıflandırılır.\nII. Dioksin kalıcı organik kirletici olarak sınıflandırılır.\nIII. Benzen buharı basit boğucu gaz olarak sınıflandırılır.",
        options: ["Yalnız I", "Yalnız II", "I ve II", "I ve III", "II ve III"],
        correct: 2,
        source: "2025-2-C",
        explanation: "Formaldehit kanserojen, dioksin ise kalıcı organik kirleticidir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "43. Karbon içeren maddelerin tam yanmaması sonucu oluşan bir gazın bazı özellikleri şunlardır:\n\n• Maruz kalındığında nörolojik hasara ve ölüme neden olabilir.\n• Renksiz ve kokusuzdur.\n• Kimyasal boğucu olarak sınıflandırılır.\n\nBu gaz aşağıdakilerden hangisidir?",
        options: ["Karbon monoksit", "Hidrojen sülfür", "Karbon dioksit", "Hidrojen siyanür", "Kükürt dioksit"],
        correct: 0,
        source: "2025-2-C",
        explanation: "Tanımlanan gaz karbon monoksittir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "44. Aşağıdakilerden hangisi pil, termometre ve elektrikli aletlerde kullanılabilen ve oda koşullarında sıvı hâlde bulunan metaldir?",
        options: ["Kurşun", "Civa", "Bakır", "Mangan", "Kobalt"],
        correct: 1,
        source: "2025-2-C",
        explanation: "Oda koşullarında sıvı halde bulunan metal civadır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "45. Binaların Yangından Korunması Hakkında Yönetmelik'e göre 2022 yılında inşa edilen bir binadaki yangın güvenlik holleriyle ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        options: ["Yangın güvenlik hollerinin taban alanı 10 m² den az olamaz.", "Yangına en az 120 dakika dayanıklı duvar ve en az 90 dakika dayanıklı duman sızdırmaz kapı ile diğer bölümlerden ayrılması gerekir.", "Yangın güvenlik hollerinin duvar, tavan ve tabanında hiçbir yanıcı malzeme kullanılamaz.", "Yangın güvenlik hollerinin kaçış yönündeki boyutu 1,8 m'den az olamaz.", "Yangın güvenlik hollerinin kullanmaya uygun şekilde boş bulundurulmasından bina veya iş yeri sahibi ve yöneticileri sorumludur."],
        correct: 0,
        source: "2025-2-C",
        explanation: "Yangın güvenlik hollerinin taban alanı için belirtilen 10 m² şartı yanlıştır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "46. LPG tüplerinin depolanmasıyla ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        options: ["LPG depolanacak binalar müstakil ve tek katlı olmalıdır.", "LPG depolanacak binaların çatısında hafif malzemeler kullanılmış olmalıdır.", "LPG depolanacak binaların depo kapıları yangına en az 90 dakika dayanıklı malzemeden yapılmış olmalıdır.", "Havalandırma fan ile yapılıyorsa patlama ve kıvılcım güvenlikli (ex-proof) malzeme kullanılmalıdır.", "Depoların döşemeleri tabii veya tesviye zemin seviyesinden aşağıda olmalıdır."],
        correct: 4,
        source: "2025-2-C",
        explanation: "Zemin seviyesinden aşağıda depolama yapmak gaz birikmesi riski nedeniyle yanlıştır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "47. Kadın ve erkek çalışanların bulunduğu bir ofiste oda kapısının minimum yüksekliği antropometrik olarak aşağıdakilerden hangisinin boy değerlerine göre tasarlanmalıdır?",
        options: ["%5'lik erkek", "%5'lik kadın", "%95'lik kadın", "%50'lik erkek", "%95'lik erkek"],
        correct: 4,
        source: "2025-2-C",
        explanation: "Kapı yüksekliği en büyük boy dilimi olan %95'lik erkeğe göre belirlenir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "48. Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği'ne göre aşağıdakilerden hangisi ön yapımlı bileşenlerden oluşan cephe iskeleleri için iskele platformunun taşıması gereken asgari özelliklerden biri değildir?",
        options: ["Üzerine gelebilecek muhtemel yükleri taşıyabilecek kapasitede olması", "Çalışanların işlerini yaparken rahatça hareket edebilecekleri genişlikte olması", "Platform birimleri ile iskele düşey elemanları arasında en az 5 cm boşluk olması", "Hareket etmeyecek şekilde iskele sistemine sabitlenmiş olması", "Güvenli çalışmayı sağlayacak şekilde kaymaz olması"],
        correct: 2,
        source: "2025-2-C",
        explanation: "Platform ile düşey elemanlar arasında 5 cm boşluk olması istenen bir asgari özellik değildir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "49. Aşağıdaki antropometrik verilerden hangisi hem ayakta hem de oturarak yapılan işlerde iş alanı tasarımı için kullanılır?",
        options: ["Ayak boşluğu", "Bacak boşluğu", "Ayak desteği yüksekliği", "Yüksek oturma yüksekliği", "Çalışma yüzeyi yüksekliği"],
        correct: 4,
        source: "2025-2-C",
        explanation: "Çalışma yüzeyi yüksekliği her iki pozisyon için ortak bir tasarım verisidir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "50. Aşağıda tam vücut koruma sisteminin arkadan görünüşünün bir örneği verilmiş ve bileşenleri numaralandırılmıştır.\n\nŞekle göre düşmeyi durdurma bağlantı elemanının numarası kaçtır?",
        options: ["1", "2", "3", "4", "5"],
        correct: 0,
        source: "2025-2-C",
        explanation: "Şekildeki 1 numara düşmeyi durdurma bağlantı noktasını gösterir.",
        profile: "isg_c",
        image: "img/vucut_koruma.jpg"
    }
]);
