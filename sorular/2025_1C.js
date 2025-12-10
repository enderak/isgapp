// Bu satır standarttır, her dosyanın başında olmalı:
window.SoruHavuzu = window.SoruHavuzu || [];

// Soruları havuza ekle
window.SoruHavuzu = window.SoruHavuzu.concat([
    // --- 2025-1C SORULARI (PDF'ten) ---
    {
        category: "Mevzuat",
        text: "1. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre işveren, çalışanları ve çalışan temsilcilerini hangi konularda bilgilendirir? I-Riskler II-Haklar III-Acil Durum Ekipleri",
        options: ["I, II ve III", "I ve II", "II ve III", "I ve III", "Yalnız I"],
        correct: 0,
        source: "2025-1C", // <-- Bu isim Menüde görünecek
        explanation: "İşveren; riskler, tedbirler, haklar ve acil durum ekipleri konularında bilgilendirme yapar.",
        profile: "igu",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "2. Destek elemanının asli görevinin yanında İSG ile ilgili görevlerinden hangisi yoktur?",
        options: ["Önleme", "Koruma", "Tahliye", "Çalışmaları denetleme", "Yangınla mücadele"],
        correct: 3,
        source: "2025-1C",
        explanation: "Destek elemanının denetleme yetkisi yoktur.",
        profile: "igu"
    },
    // ... Buraya diğer 48 soruyu ekleyebilirsin ...
    {
        category: "Hukuk",
        text: "3. 6331 öncesinde İSG ile ilgili özel hukuk uyuşmazlıklarında hangi kanunlara başvurulmaktaydı?",
        options: ["Borçlar-Ticaret", "Ceza-Ticaret", "İş-Ticaret", "Borçlar Kanunu-İş Kanunu", "Anayasa-Medeni"],
        correct: 3,
        source: "2025-1C",
        explanation: "6331 öncesinde İş Kanunu (4857) ve Borçlar Kanunu (6098) esas alınıyordu.",
        profile: "igu"
    },
    // (Örnek amaçlı kısaltıldı, PDF'teki tüm soruları buraya bu formatta dizebilirsin)
]);