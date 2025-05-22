const questions = [
  {
    "eng": "apple",
    "hint": "Ağaçta yetişen bir meyvedir.",
    "correct": "elma",
    "choices": [
      "yıldız",
      "satmak",
      "ağaç",
      "elma"
    ]
  },
  {
    "eng": "banana",
    "hint": "Sarı renkte, eğri şekilli bir meyvedir.",
    "correct": "muz",
    "choices": [
      "satmak",
      "muz",
      "doktor",
      "gömlek"
    ]
  },
  {
    "eng": "car",
    "hint": "İnsanları ve eşyaları kara yolunda taşır.",
    "correct": "araba",
    "choices": [
      "uçak",
      "yazmak",
      "araba",
      "para"
    ]
  },
  {
    "eng": "water",
    "hint": "Yaşamak için içmemiz gereken sıvıdır.",
    "correct": "su",
    "choices": [
      "su",
      "muz",
      "hemşire",
      "bilgisayar"
    ]
  },
  {
    "eng": "book",
    "hint": "Okumak için kullanılan şeydir.",
    "correct": "kitap",
    "choices": [
      "kitap",
      "ekmek",
      "göl",
      "tren"
    ]
  },
  {
    "eng": "house",
    "hint": "İçinde yaşadığımız yapıdır.",
    "correct": "ev",
    "choices": [
      "televizyon",
      "ağaç",
      "ev",
      "şapka"
    ]
  },
  {
    "eng": "dog",
    "hint": "Sadık bir evcil hayvandır.",
    "correct": "köpek",
    "choices": [
      "yazmak",
      "dükkan",
      "köpek",
      "ağaç"
    ]
  },
  {
    "eng": "cat",
    "hint": "Miyavlayan evcil bir hayvandır.",
    "correct": "kedi",
    "choices": [
      "banka",
      "kedi",
      "sandalye",
      "yağmur"
    ]
  },
  {
    "eng": "truck",
    "hint": "Büyük eşyaları taşımak için kullanılan araçtır.",
    "correct": "tır",
    "choices": [
      "tır",
      "anahtar",
      "yağmur",
      "kaşık"
    ]
  },
  {
    "eng": "license",
    "hint": "Araç kullanmak için gerekli resmi belgedir.",
    "correct": "ehliyet",
    "choices": [
      "koşmak",
      "balık",
      "ehliyet",
      "kar"
    ]
  },
  {
    "eng": "road",
    "hint": "Arabaların üzerinde gittiği zemindir.",
    "correct": "yol",
    "choices": [
      "yol",
      "rüzgar",
      "ev",
      "kedi"
    ]
  },
  {
    "eng": "tree",
    "hint": "Toprağa bağlı, dalları ve yaprakları olan canlıdır.",
    "correct": "ağaç",
    "choices": [
      "bardak",
      "öğretmen",
      "ofis",
      "ağaç"
    ]
  },
  {
    "eng": "sun",
    "hint": "Dünyamıza ışık ve ısı veren gök cismidir.",
    "correct": "güneş",
    "choices": [
      "göl",
      "güneş",
      "çanta",
      "gömlek"
    ]
  },
  {
    "eng": "moon",
    "hint": "Gece gökyüzünde gördüğümüz beyaz uydudur.",
    "correct": "ay",
    "choices": [
      "anahtar",
      "tuz",
      "gökyüzü",
      "ay"
    ]
  },
  {
    "eng": "school",
    "hint": "Çocukların eğitim aldığı yerdir.",
    "correct": "okul",
    "choices": [
      "ofis",
      "araba",
      "bilgisayar",
      "okul"
    ]
  },
  {
    "eng": "pen",
    "hint": "Yazı yazmak için kullanılan alettir.",
    "correct": "kalem",
    "choices": [
      "kapatmak",
      "kalem",
      "çatal",
      "gömlek"
    ]
  },
  {
    "eng": "paper",
    "hint": "Üzerine yazı yazılan ince düz malzemedir.",
    "correct": "kağıt",
    "choices": [
      "yıldız",
      "telefon",
      "kağıt",
      "kapı"
    ]
  },
  {
    "eng": "phone",
    "hint": "Sesli iletişim kurmamızı sağlayan cihazdır.",
    "correct": "telefon",
    "choices": [
      "pantolon",
      "yastık",
      "telefon",
      "sürmek"
    ]
  },
  {
    "eng": "chair",
    "hint": "Üzerine oturduğumuz mobilyadır.",
    "correct": "sandalye",
    "choices": [
      "uyumak",
      "ayakkabı",
      "sandalye",
      "kalem"
    ]
  },
  {
    "eng": "table",
    "hint": "Yemek yemek veya yazı yazmak için kullanılır.",
    "correct": "masa",
    "choices": [
      "ofis",
      "güneş",
      "satın almak",
      "masa"
    ]
  },
  {
    "eng": "window",
    "hint": "Duvara açılan, camlı açıklıktır.",
    "correct": "pencere",
    "choices": [
      "yemek",
      "nehir",
      "pantolon",
      "pencere"
    ]
  },
  {
    "eng": "door",
    "hint": "Bir odaya girip çıkmak için açılır.",
    "correct": "kapı",
    "choices": [
      "uçak",
      "tavuk",
      "dağ",
      "kapı"
    ]
  },
  {
    "eng": "bread",
    "hint": "Fırında pişirilip yenen temel gıdadır.",
    "correct": "ekmek",
    "choices": [
      "uçak",
      "ekmek",
      "park",
      "tır"
    ]
  },
  {
    "eng": "milk",
    "hint": "İnekten sağılır, kahvaltılarda içilir.",
    "correct": "süt",
    "choices": [
      "ayakkabı",
      "süt",
      "bıçak",
      "yağmur"
    ]
  },
  {
    "eng": "cheese",
    "hint": "Sütün mayalanmasıyla yapılan yiyecektir.",
    "correct": "peynir",
    "choices": [
      "peynir",
      "telefon",
      "kar",
      "yıldız"
    ]
  },
  {
    "eng": "coffee",
    "hint": "Sıcak içilen, uyanık tutan içecektir.",
    "correct": "kahve",
    "choices": [
      "kahve",
      "şeker",
      "hastane",
      "uçak"
    ]
  },
  {
    "eng": "tea",
    "hint": "Demlenerek hazırlanan sıcak içecektir.",
    "correct": "çay",
    "choices": [
      "çalışmak",
      "ay",
      "çay",
      "yemek"
    ]
  },
  {
    "eng": "train",
    "hint": "Raylarda giden uzun ulaşım aracıdır.",
    "correct": "tren",
    "choices": [
      "köy",
      "uçak",
      "tren",
      "yemek"
    ]
  },
  {
    "eng": "bus",
    "hint": "Toplu taşıma aracı olarak şehir içinde gider.",
    "correct": "otobüs",
    "choices": [
      "televizyon",
      "telefon",
      "kar",
      "otobüs"
    ]
  },
  {
    "eng": "plane",
    "hint": "Uçak ile aynı anlama gelir.",
    "correct": "uçak",
    "choices": [
      "köpek",
      "uçak",
      "restoran",
      "yemek yemek"
    ]
  },
  {
    "eng": "river",
    "hint": "Sürekli akan tatlı su yoludur.",
    "correct": "nehir",
    "choices": [
      "masa",
      "nehir",
      "yıldız",
      "pencere"
    ]
  },
  {
    "eng": "lake",
    "hint": "Karada bulunan durgun su kütlesidir.",
    "correct": "göl",
    "choices": [
      "bıçak",
      "yemek yemek",
      "göl",
      "kol saati"
    ]
  },
  {
    "eng": "mountain",
    "hint": "Yerden yüksek, büyük doğal oluşumdur.",
    "correct": "dağ",
    "choices": [
      "saat",
      "gömlek",
      "dağ",
      "hemşire"
    ]
  },
  {
    "eng": "computer",
    "hint": "Veri işlemek için kullanılan elektronik alettir.",
    "correct": "bilgisayar",
    "choices": [
      "satın almak",
      "süt",
      "yumurta",
      "bilgisayar"
    ]
  },
  {
    "eng": "tv",
    "hint": "Görüntülü yayınları izlemek için kullanılır.",
    "correct": "televizyon",
    "choices": [
      "kitap",
      "sürmek",
      "televizyon",
      "yemek yemek"
    ]
  },
  {
    "eng": "bed",
    "hint": "Uyumak için kullanılır.",
    "correct": "yatak",
    "choices": [
      "pencere",
      "bardak",
      "sürmek",
      "yatak"
    ]
  },
  {
    "eng": "pillow",
    "hint": "Başımızı üzerine koyarak yattığımız şeydir.",
    "correct": "yastık",
    "choices": [
      "televizyon",
      "yastık",
      "tren",
      "satmak"
    ]
  },
  {
    "eng": "blanket",
    "hint": "Soğuktan korunmak için üzerimize örteriz.",
    "correct": "battaniye",
    "choices": [
      "battaniye",
      "açmak",
      "tavuk",
      "para"
    ]
  },
  {
    "eng": "shirt",
    "hint": "Üst vücuda giyilen giysidir.",
    "correct": "gömlek",
    "choices": [
      "banka",
      "ayakta durmak",
      "gömlek",
      "okul"
    ]
  },
  {
    "eng": "pants",
    "hint": "Bacaklara giyilen giysidir.",
    "correct": "pantolon",
    "choices": [
      "pantolon",
      "yemek yemek",
      "saat",
      "iş"
    ]
  },
  {
    "eng": "shoes",
    "hint": "Ayağa giyilen dış giysidir.",
    "correct": "ayakkabı",
    "choices": [
      "polis",
      "uçak",
      "ayakkabı",
      "battaniye"
    ]
  },
  {
    "eng": "hat",
    "hint": "Başımıza taktığımız giysidir.",
    "correct": "şapka",
    "choices": [
      "restoran",
      "madeni para",
      "şapka",
      "açmak"
    ]
  },
  {
    "eng": "glasses",
    "hint": "Gözleri daha iyi görmek için kullanırız.",
    "correct": "gözlük",
    "choices": [
      "saat",
      "anahtar",
      "kalem",
      "gözlük"
    ]
  },
  {
    "eng": "money",
    "hint": "Alışverişte kullanılan değişim aracıdır.",
    "correct": "para",
    "choices": [
      "para",
      "satın almak",
      "pantolon",
      "okumak"
    ]
  },
  {
    "eng": "coin",
    "hint": "Yuvarlak, metal para birimidir.",
    "correct": "madeni para",
    "choices": [
      "madeni para",
      "telefon",
      "açmak",
      "göl"
    ]
  },
  {
    "eng": "key",
    "hint": "Kapı kilidini açmak için kullanılır.",
    "correct": "anahtar",
    "choices": [
      "yumurta",
      "pazar",
      "anahtar",
      "kahve"
    ]
  },
  {
    "eng": "bag",
    "hint": "Eşyalarımızı taşımak için kullanılır.",
    "correct": "çanta",
    "choices": [
      "yağmur",
      "pazar",
      "çanta",
      "kol saati"
    ]
  },
  {
    "eng": "box",
    "hint": "İçine bir şeyler koyabildiğimiz kapalı nesnedir.",
    "correct": "kutu",
    "choices": [
      "koşmak",
      "kutu",
      "ay",
      "yemek"
    ]
  },
  {
    "eng": "food",
    "hint": "Yemek kelimesinin genel halidir.",
    "correct": "yemek",
    "choices": [
      "yemek",
      "şehir",
      "restoran",
      "peynir"
    ]
  },
  {
    "eng": "meat",
    "hint": "Hayvansal protein kaynağıdır, genelde kırmızı renklidir.",
    "correct": "et",
    "choices": [
      "bulut",
      "kapı",
      "et",
      "ayakta durmak"
    ]
  },
  {
    "eng": "fish",
    "hint": "Denizde veya nehirde yaşayan, yüzgeçli hayvandır.",
    "correct": "balık",
    "choices": [
      "köpek",
      "balık",
      "öğrenci",
      "muz"
    ]
  },
  {
    "eng": "chicken",
    "hint": "Hem yumurta veren hem de eti yenen hayvandır.",
    "correct": "tavuk",
    "choices": [
      "banka",
      "rüzgar",
      "tavuk",
      "yemek"
    ]
  },
  {
    "eng": "egg",
    "hint": "Tavukların yaptığı, kahvaltıda yenilen yuvarlak şeydir.",
    "correct": "yumurta",
    "choices": [
      "balık",
      "yumurta",
      "bulut",
      "yürümek"
    ]
  },
  {
    "eng": "salt",
    "hint": "Yemeklere tat katmak için kullanılır, beyaz tozdur.",
    "correct": "tuz",
    "choices": [
      "kutu",
      "kapatmak",
      "ev",
      "tuz"
    ]
  },
  {
    "eng": "sugar",
    "hint": "Tatlılık veren, kahvede çayda kullanılan maddedir.",
    "correct": "şeker",
    "choices": [
      "şeker",
      "satmak",
      "pantolon",
      "ekmek"
    ]
  },
  {
    "eng": "fork",
    "hint": "Yemek yerken özellikle makarna için kullanılır.",
    "correct": "çatal",
    "choices": [
      "hemşire",
      "hastane",
      "ayakkabı",
      "çatal"
    ]
  },
  {
    "eng": "spoon",
    "hint": "Çorba içerken kullanılır.",
    "correct": "kaşık",
    "choices": [
      "tavuk",
      "çatal",
      "kaşık",
      "sandalye"
    ]
  },
  {
    "eng": "knife",
    "hint": "Yemekleri kesmek için kullanılır.",
    "correct": "bıçak",
    "choices": [
      "otobüs",
      "koşmak",
      "bıçak",
      "yürümek"
    ]
  },
  {
    "eng": "plate",
    "hint": "Yemeklerin üzerine konulduğu düz yüzeyli nesnedir.",
    "correct": "tabak",
    "choices": [
      "ateş",
      "tabak",
      "bulut",
      "yemek yemek"
    ]
  },
  {
    "eng": "cup",
    "hint": "Kahve gibi sıcak içecekleri koymak için kullanılır.",
    "correct": "fincan",
    "choices": [
      "fincan",
      "kol saati",
      "süt",
      "çatal"
    ]
  },
  {
    "eng": "glass",
    "hint": "Soğuk içecekleri içmek için kullanılır.",
    "correct": "bardak",
    "choices": [
      "hastane",
      "sürmek",
      "ofis",
      "bardak"
    ]
  },
  {
    "eng": "clock",
    "hint": "Zamanı gösteren duvara asılan alettir.",
    "correct": "saat",
    "choices": [
      "gökyüzü",
      "saat",
      "tır",
      "çay"
    ]
  },
  {
    "eng": "watch",
    "hint": "Kola takılan saat türüdür.",
    "correct": "kol saati",
    "choices": [
      "tavuk",
      "kol saati",
      "yağmur",
      "tır"
    ]
  },
  {
    "eng": "student",
    "hint": "Okula gidip ders alan kişidir.",
    "correct": "öğrenci",
    "choices": [
      "sürmek",
      "ağaç",
      "öğrenci",
      "kahve"
    ]
  },
  {
    "eng": "teacher",
    "hint": "Bilgi veren, ders anlatan kişidir.",
    "correct": "öğretmen",
    "choices": [
      "kutu",
      "ayakta durmak",
      "öğretmen",
      "yürümek"
    ]
  },
  {
    "eng": "doctor",
    "hint": "Hastaları iyileştiren kişidir.",
    "correct": "doktor",
    "choices": [
      "okul",
      "açmak",
      "ateş",
      "doktor"
    ]
  },
  {
    "eng": "nurse",
    "hint": "Doktora yardım eden sağlık görevlisidir.",
    "correct": "hemşire",
    "choices": [
      "hemşire",
      "nehir",
      "çalışmak",
      "gökyüzü"
    ]
  },
  {
    "eng": "police",
    "hint": "Toplumun güvenliğini sağlayan görevlidir.",
    "correct": "polis",
    "choices": [
      "gömlek",
      "polis",
      "hastane",
      "fincan"
    ]
  },
  {
    "eng": "fire",
    "hint": "Yanma sonucu oluşan ısı ve ışık.",
    "correct": "ateş",
    "choices": [
      "dağ",
      "yürümek",
      "ateş",
      "pantolon"
    ]
  },
  {
    "eng": "rain",
    "hint": "Gökten düşen su damlalarıdır.",
    "correct": "yağmur",
    "choices": [
      "satmak",
      "yağmur",
      "hemşire",
      "şapka"
    ]
  },
  {
    "eng": "snow",
    "hint": "Kışın yağan beyaz ve soğuk şeydir.",
    "correct": "kar",
    "choices": [
      "kol saati",
      "kar",
      "oturmak",
      "tır"
    ]
  },
  {
    "eng": "wind",
    "hint": "Havada hissedilen hareketli akımdır.",
    "correct": "rüzgar",
    "choices": [
      "televizyon",
      "rüzgar",
      "yazmak",
      "bıçak"
    ]
  },
  {
    "eng": "cloud",
    "hint": "Gökyüzünde yüzen beyaz kümelerdir.",
    "correct": "bulut",
    "choices": [
      "bulut",
      "yumurta",
      "et",
      "araba"
    ]
  },
  {
    "eng": "sky",
    "hint": "Yukarı baktığımızda gördüğümüz mavi alan.",
    "correct": "gökyüzü",
    "choices": [
      "bilgisayar",
      "köy",
      "kapı",
      "gökyüzü"
    ]
  },
  {
    "eng": "star",
    "hint": "Gece gökyüzünde parlayan küçük ışıklardır.",
    "correct": "yıldız",
    "choices": [
      "ağaç",
      "koşmak",
      "kalem",
      "yıldız"
    ]
  },
  {
    "eng": "city",
    "hint": "Kalabalık, büyük yerleşim yeri.",
    "correct": "şehir",
    "choices": [
      "yıldız",
      "pazar",
      "şehir",
      "para"
    ]
  },
  {
    "eng": "village",
    "hint": "Küçük, sakin yerleşim yeri.",
    "correct": "köy",
    "choices": [
      "köy",
      "yazmak",
      "masa",
      "tren"
    ]
  },
  {
    "eng": "market",
    "hint": "Sebze, meyve ve yiyeceklerin satıldığı açık yer.",
    "correct": "pazar",
    "choices": [
      "yıldız",
      "pazar",
      "okul",
      "bilgisayar"
    ]
  },
  {
    "eng": "store",
    "hint": "Alışveriş yapılan kapalı yerdir.",
    "correct": "dükkan",
    "choices": [
      "gömlek",
      "köy",
      "dükkan",
      "yastık"
    ]
  },
  {
    "eng": "restaurant",
    "hint": "Yemek siparişi verilen ve yenilen yerdir.",
    "correct": "restoran",
    "choices": [
      "uçak",
      "şapka",
      "restoran",
      "gömlek"
    ]
  },
  {
    "eng": "hospital",
    "hint": "Hastaların tedavi edildiği yerdir.",
    "correct": "hastane",
    "choices": [
      "hastane",
      "gömlek",
      "göl",
      "telefon"
    ]
  },
  {
    "eng": "park",
    "hint": "Ağaçlar, çimenler olan dinlenme alanıdır.",
    "correct": "park",
    "choices": [
      "köy",
      "bıçak",
      "çanta",
      "park"
    ]
  },
  {
    "eng": "bank",
    "hint": "Parayla ilgili işlemlerin yapıldığı kurumdur.",
    "correct": "banka",
    "choices": [
      "saat",
      "ehliyet",
      "öğretmen",
      "banka"
    ]
  },
  {
    "eng": "office",
    "hint": "İş yapılan masa ve sandalyeli yerdir.",
    "correct": "ofis",
    "choices": [
      "otobüs",
      "ofis",
      "yıldız",
      "tır"
    ]
  },
  {
    "eng": "job",
    "hint": "Para kazanmak için yapılan faaliyet.",
    "correct": "iş",
    "choices": [
      "tuz",
      "iş",
      "hemşire",
      "elma"
    ]
  },
  {
    "eng": "work",
    "hint": "Günlük olarak yapılan meslek faaliyeti.",
    "correct": "çalışmak",
    "choices": [
      "balık",
      "öğrenci",
      "doktor",
      "çalışmak"
    ]
  },
  {
    "eng": "walk",
    "hint": "Yavaş tempolu ileriye doğru hareket.",
    "correct": "yürümek",
    "choices": [
      "dükkan",
      "yürümek",
      "balık",
      "iş"
    ]
  },
  {
    "eng": "run",
    "hint": "Koşarak hızlı şekilde ilerlemek.",
    "correct": "koşmak",
    "choices": [
      "koşmak",
      "anahtar",
      "saat",
      "bıçak"
    ]
  },
  {
    "eng": "sleep",
    "hint": "Dinlenmek için yapılan doğal durum.",
    "correct": "uyumak",
    "choices": [
      "ekmek",
      "okumak",
      "ateş",
      "uyumak"
    ]
  },
  {
    "eng": "eat",
    "hint": "Besinleri çiğneyip yutmak.",
    "correct": "yemek yemek",
    "choices": [
      "yemek yemek",
      "ekmek",
      "su",
      "battaniye"
    ]
  },
  {
    "eng": "drink",
    "hint": "Sıvı alımı yapmak.",
    "correct": "içmek",
    "choices": [
      "yürümek",
      "içmek",
      "kol saati",
      "kutu"
    ]
  },
  {
    "eng": "sit",
    "hint": "Sandalyeye oturma durumu.",
    "correct": "oturmak",
    "choices": [
      "fincan",
      "kapatmak",
      "oturmak",
      "yemek yemek"
    ]
  },
  {
    "eng": "stand",
    "hint": "Ayakta durma hali.",
    "correct": "ayakta durmak",
    "choices": [
      "kapı",
      "ayakta durmak",
      "saat",
      "hemşire"
    ]
  },
  {
    "eng": "read",
    "hint": "Kitap, gazete gibi şeylere bakarak anlama.",
    "correct": "okumak",
    "choices": [
      "çatal",
      "okumak",
      "yemek yemek",
      "yağmur"
    ]
  },
  {
    "eng": "write",
    "hint": "Kalemle kağıda bir şeyler yazmak.",
    "correct": "yazmak",
    "choices": [
      "yürümek",
      "battaniye",
      "balık",
      "yazmak"
    ]
  },
  {
    "eng": "open",
    "hint": "Kapalı bir şeyi açmak.",
    "correct": "açmak",
    "choices": [
      "çanta",
      "pencere",
      "açmak",
      "muz"
    ]
  },
  {
    "eng": "close",
    "hint": "Açık bir şeyi kapatmak.",
    "correct": "kapatmak",
    "choices": [
      "koşmak",
      "kağıt",
      "kapı",
      "kapatmak"
    ]
  },
  {
    "eng": "buy",
    "hint": "Para vererek bir şey almak.",
    "correct": "satın almak",
    "choices": [
      "ayakta durmak",
      "et",
      "satın almak",
      "elma"
    ]
  },
  {
    "eng": "sell",
    "hint": "Bir şeyi para karşılığı vermek.",
    "correct": "satmak",
    "choices": [
      "bardak",
      "süt",
      "kol saati",
      "satmak"
    ]
  },
  {
    "eng": "drive",
    "hint": "Araba ya da tır kullanmak.",
    "correct": "sürmek",
    "choices": [
      "uçak",
      "ehliyet",
      "sürmek",
      "muz"
    ]
  }
];

let scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 10, 10);
scene.add(light);

// Sonsuz zemin
let grounds = [];
for (let i = 0; i < 5; i++) {
  let g = new THREE.Mesh(
    new THREE.BoxGeometry(10, 1, 200),
    new THREE.MeshStandardMaterial({ color: 0x444444 })
  );
  g.position.set(0, -1, i * 200);
  scene.add(g);
  grounds.push(g);
}

let player = new THREE.Mesh(
  new THREE.BoxGeometry(1, 2, 1),
  new THREE.MeshStandardMaterial({ color: 0x0000ff })
);
player.position.y = 1;
scene.add(player);

let chaser = new THREE.Mesh(
  new THREE.BoxGeometry(1, 2, 1),
  new THREE.MeshStandardMaterial({ color: 0xff0000 })
);
chaser.position.y = 1;
chaser.position.z = -5;
scene.add(chaser);

let lane = 0;
let speed = 0.3;
let jumpVelocity = 0;
let isSliding = false;
let slideTimer = 0;
let coins = [];
let obstacles = [];
let coinCount = 0;
let health = 3;
let questionIndex = 0;
let gamePaused = false;
let animationId;

function updateHUD() {
  document.getElementById("coinCount").innerText = coinCount;
  document.getElementById("healthCount").innerText = health;
}

function movePlayer(dir) {
  lane += dir;
  if (lane < -1) lane = -1;
  if (lane > 1) lane = 1;
  player.position.x = lane * 2;
}

function spawnCoin() {
  let coin = new THREE.Mesh(
    new THREE.SphereGeometry(0.3, 16, 16),
    new THREE.MeshStandardMaterial({ color: 0xffff00 })
  );
  coin.position.set((Math.floor(Math.random() * 3) - 1) * 2, 0.4, player.position.z + 30);
  scene.add(coin);
  coins.push(coin);
}

function spawnObstacle() {
  const isJump = Math.random() > 0.5;
  const height = isJump ? 3 : 1;
  const yPos = isJump ? 1.5 : 0.5;

  let obs = new THREE.Mesh(
    new THREE.BoxGeometry(1, height, 1),
    new THREE.MeshStandardMaterial({ color: 0xaa0000 })
  );
  obs.position.set((Math.floor(Math.random() * 3) - 1) * 2, yPos, player.position.z + 30);
  scene.add(obs);
  obstacles.push(obs);
}

function askQuestion() {
  if (questionIndex >= questions.length) {
    alert("Tebrikler! Tüm kelimeleri öğrendin!");
    window.location.reload();
    return;
  }

  gamePaused = true;
  cancelAnimationFrame(animationId);

  const q = questions[questionIndex];
  const box = document.getElementById("questionBox");
  box.classList.remove("hidden");
  document.getElementById("questionText").innerText = `${q.eng} - ${q.hint}`;
  const choiceBox = document.getElementById("choices");
  choiceBox.innerHTML = "";

  q.choices.forEach(c => {
    let btn = document.createElement("button");
    btn.innerText = c;
    btn.onclick = () => {
      box.classList.add("hidden");
      if (c === q.correct) health++;
      else spawnObstacle();
      questionIndex++;
      updateHUD();
      gamePaused = false;
      animate();
    };
    choiceBox.appendChild(btn);
  });
}

function endGame() {
  alert("Oyun bitti! Toplam coin: " + coinCount);
  window.location.reload();
}

document.addEventListener("dblclick", () => togglePause());
document.getElementById("resumeBtn").addEventListener("click", () => togglePause());

function togglePause() {
  gamePaused = !gamePaused;
  document.getElementById("resumeBtn").classList.toggle("hidden", !gamePaused);
  if (!gamePaused) animate();
}

window.addEventListener("keydown", e => {
  if (gamePaused) return;
  if (e.key === "ArrowLeft") movePlayer(-1);
  if (e.key === "ArrowRight") movePlayer(1);
  if (e.key === "ArrowUp" && player.position.y <= 1) jumpVelocity = 0.2;
  if (e.key === "ArrowDown" && !isSliding) {
    isSliding = true;
    slideTimer = 30;
    player.scale.y = 0.5;
    player.position.y = 0.5;
  }
});

let startX = 0, startY = 0;
window.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});
window.addEventListener("touchend", e => {
  if (gamePaused) return;
  let dx = e.changedTouches[0].clientX - startX;
  let dy = e.changedTouches[0].clientY - startY;
  if (Math.abs(dx) > Math.abs(dy)) {
    if (dx > 30) movePlayer(-1);
    if (dx < -30) movePlayer(1);
  } else {
    if (dy < -30 && player.position.y <= 1) jumpVelocity = 0.2;
    if (dy > 30 && !isSliding) {
      isSliding = true;
      slideTimer = 30;
      player.scale.y = 0.5;
      player.position.y = 0.5;
    }
  }
});

function updateGround() {
  grounds.forEach(g => {
    if (player.position.z - g.position.z > 200) {
      g.position.z += 200 * grounds.length;
    }
  });
}

function animate() {
  if (gamePaused) return;
  animationId = requestAnimationFrame(animate);

  if (player.position.y > 1 || jumpVelocity > 0) {
    player.position.y += jumpVelocity;
    jumpVelocity -= 0.01;
    if (player.position.y < 1) {
      player.position.y = 1;
      jumpVelocity = 0;
    }
  }

  if (isSliding) {
    slideTimer--;
    if (slideTimer <= 0) {
      isSliding = false;
      player.scale.y = 1;
      player.position.y = 1;
    }
  }

  player.position.z += speed;
  camera.position.set(player.position.x, 5, player.position.z - 8);
  camera.lookAt(player.position);

  chaser.position.z += speed * 0.97;
  if (chaser.position.distanceTo(player.position) < 1.5) endGame();

  updateGround();

  if (Math.random() < 0.03) spawnCoin();
  if (Math.random() < 0.004) spawnObstacle();

  coins.forEach((c, i) => {
    if (c.position.distanceTo(player.position) < 1.2) {
      scene.remove(c);
      coins.splice(i, 1);
      coinCount++;
      updateHUD();
      if (coinCount % 20 === 0) askQuestion();
    }
  });

  obstacles.forEach((o, i) => {
    if (o.position.distanceTo(player.position) < 1.5) {
      scene.remove(o);
      obstacles.splice(i, 1);
      health--;
      updateHUD();
      if (health <= 0) endGame();
    }
  });

  renderer.render(scene, camera);
}

updateHUD();
animate();
