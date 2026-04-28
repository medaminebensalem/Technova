// ══════════════════════════════════
// ⚙️  CONFIGURATION — MODIFIEZ ICI
// ══════════════════════════════════
const SELLER = {
  name:     "TechNova Store",
  phone:    "212706717887",    // ← Votre numéro WhatsApp sans + ni espaces (ex: 212612345678)
  city:     "Zgora, Maroc",
  desc:     "Votre boutique de confiance pour l'électronique à Zagora. Produits authentiques, garantie constructeur, livraison rapide.",
  initials: "T",
  avatar:   null,              // ← URL ou chemin vers photo du vendeur, ex: "images/vendeur.jpg"
};

// ══════════════════════════════════
// 🛍️  PRODUITS — MODIFIEZ ICI
// image: chemin vers votre image, ex: "images/iphone.jpg"
//        URL externe: "https://..."
//        null = affiche l'emoji à la place
// ══════════════════════════════════
const PRODUCTS = [
  {
    id: 1, name: "25W PD Adapter", brand: "SAMSUNG",
    description: "USB-C 25W Power Delivery charger, compact design, compatible with all USB-C devices for fast charging.",
    price: 120, oldPrice: null,
    image: "img/3.jpeg",
    category: "accessory", badge: "new", rating: 5,
    //specs: [
     // { key: "Processeur", val: "Apple M3 8 cœurs" }, { key: "Mémoire",   val: "8 Go RAM" },
      //{ key: "Stockage",   val: "256 Go SSD" },        { key: "Écran",    val: "13.6\" Liquid Retina" },
      //{ key: "Autonomie",  val: "18 heures" },         { key: "Garantie", val: "1 an Apple" },
    //],
  },
  {
    id: 2, name: "cik 02", brand: "CIK",
    description: "Écouteurs sans fil à conduction aérienne (Open Ear Air Conduction) avec tour de cou. ",
    price: 160, oldPrice: null,
    image: "img/2.jpeg", emoji: "🎧",
    category: "accessory", badge: "sale", rating: 5,
    //specs: [
      //{ key: "Puce",     val: "Apple A18 Pro" },    { key: "Écran",    val: "6.1\" Super Retina XDR" },
      //{ key: "Caméra",   val: "Triple 48 MP" },     { key: "Stockage", val: "128 Go" },
      //{ key: "Batterie", val: "22h vidéo" },        { key: "Garantie", val: "1 an Apple" },
    //],
  },
  {
    id: 3, name: "CIK T8", brand: "CIK",
    description: "Écouteurs sans fil tour de cou (Hanging Neck Wireless Earphone).",
    price: 130, oldPrice: null,
    image: "img/1.jpeg", emoji: "🎧",
    category: "audio", badge: "sale", rating: 4,
    specs: [
      { key: "Autonomie",       val: "30 heures" },     { key: "Batterie",       val: "200 mAh" },
      { key: "Bluetooth",       val: "5.2" },           { key: "Charge",    val: "USB-C rapide" },
      { key: "Poids",           val: "250 g" },         { key: "Garantie",  val: "1 an Sony" },
    ],
  },
  {
    id: 4, name: "45W Power Adapter", brand: "Samsung",
    description: "Adaptateur secteur (Chargeur mural) Ultra Rapide.",
    price: 170, oldPrice: null,
    image: "img/4.jpeg",
    category: "accessory", badge: "new", rating: 5,
    specs: [
      { key: "Puissance",    val: "45W" },            { key: "Technologie", val: "Super Fast Charging 2.0" },
      { key: "Câble",        val: "USB-C vers USB-C 5A" }, { key: "Longueur câble", val: "1,8 mètre" },
      { key: "Low Standby",  val: "Oui" },            { key: "Compatibilité", val: "Universelle USB-C" },
    ],
  },
  {
    id: 5, name: "Xiaomi 67W Hyper Charge Combo", brand: "Xiaomi",
    description: "Chargeur haute performance GaN 67W avec dual ports USB-A et USB-C, charge rapide jusqu'à 100% en ~40 minutes pour Xiaomi.",
    price: 170, oldPrice: null,
    image: "img/5.jpeg", emoji: "🔌",
    category: "accessory", badge: null, rating: 5,
    specs: [
      { key: "Puissance", val: "67W" },                  { key: "Technologie", val: "GaN (Nitrure de Gallium)" },
      { key: "Ports", val: "USB-A + USB-C" },           { key: "Câble inclus", val: "Oui (connecteur orange)" },
      { key: "Compatibilité", val: "Xiaomi & universelle" }, { key: "Temps charge", val: "~40 min (0-100%)" },
    ],
  },
  {
    id: 6, name: "AirPods Pro 3", brand: "BON-TECH",
    description: "Écouteurs ANC adaptatif, audio spatial personnalisé, boîtier MagSafe, 30h autonomie totale.",
    price: 400, oldPrice: null,
    image: "img/6.jpeg",
    category: "accessory", badge: null, rating: 5,
    specs: [
      { key: "ANC",       val: "Actif adaptatif" },   { key: "Audio",    val: "Spatial personnalisé" },
      { key: "Boîtier",   val: "MagSafe + USB-C" },  { key: "Autonomie",val: "6h + 24h boîtier" },
      { key: "Résistance",val: "IP54" },              { key: "Garantie", val: "1 an Apple" },
    ],
  },
  {
    id: 7, name: "Logitech MX Keys", brand: "Logitech",
    description: "Clavier sans fil premium, rétroéclairage intelligent, connexion multi-appareils jusqu'à 3 devices.",
    price: 130, oldPrice: null,
    image: "img/7.jpeg", emoji: "⌨️",
    category: "accessory", badge: "sale", rating: 5,
    specs: [
      { key: "Connexion",    val: "Bluetooth + Unifying" }, { key: "Multi-device", val: "3 appareils" },
      { key: "Éclairage",   val: "Intelligent adaptatif" }, { key: "Autonomie",    val: "10 jours" },
      { key: "Charge",      val: "USB-C" },                 { key: "Garantie",     val: "1 an" },
    ],
  },
  {
    id: 8, name: "Razer DeathAdder V3", brand: "Razer",
    description: "Souris gaming ultra-légère 63g, capteur 30 000 DPI, switches optiques, design ergonomique.",
    price: 799, oldPrice: 999,
    image: "img/8.jpeg", emoji: "🖱️",
    category: "accessory", badge: "sale", rating: 5,
    specs: [
      { key: "Poids",    val: "63 grammes" },         { key: "Capteur",  val: "30 000 DPI" },
      { key: "Switches", val: "Optiques Gen-3" },     { key: "Connexion",val: "Filaire + Sans fil" },
      { key: "Batterie", val: "90 heures" },          { key: "Garantie", val: "2 ans Razer" },
    ],
  },
  {
    id: 9, name: "iPad Pro M4", brand: "Apple",
    description: "Tablette la plus fine au monde, puce M4, écran Ultra Retina XDR 11\", Wi-Fi 6E.",
    price: 10999, oldPrice: null,
    image: "img/9.jpeg", emoji: "📱",
    category: "phone", badge: "new", rating: 5,
    specs: [
      { key: "Puce",      val: "Apple M4" },            { key: "Écran",    val: "11\" Ultra Retina XDR" },
      { key: "Stockage",  val: "256 Go" },              { key: "Wi-Fi",    val: "Wi-Fi 6E" },
      { key: "Épaisseur", val: "5.3 mm" },              { key: "Garantie", val: "1 an Apple" },
    ],
  },
  {
    id: 10, name: "iPhone 15 Pro", brand: "Apple",
    description: "Puce A17 Pro, caméra 48 MP Fusion, écran Super Retina XDR 6.1\", Titane.",
    price: 8999, oldPrice: 9999,
    image: "img/10.jpeg", emoji: "📱",
    category: "phone", badge: "sale", rating: 5,
    specs: [
      { key: "Puce",      val: "Apple A17 Pro" },       { key: "Écran",    val: "6.1\" Super Retina XDR" },
      { key: "Caméra",    val: "48 MP Fusion" },        { key: "Stockage", val: "128 Go" },
      { key: "Batterie",  val: "20h vidéo" },           { key: "Garantie", val: "1 an Apple" },
    ],
  },
  {
    id: 11, name: "Samsung Galaxy S24 Ultra", brand: "Samsung",
    description: "Écran 6.8\" AMOLED, puce Snapdragon 8 Gen 3, caméra 200 MP, batterie 5000 mAh.",
    price: 7999, oldPrice: 8999,
    image: "img/11.jpeg", emoji: "📱",
    category: "phone", badge: "sale", rating: 5,
    specs: [
      { key: "Processeur", val: "Snapdragon 8 Gen 3" },  { key: "Écran",    val: "6.8\" AMOLED" },
      { key: "Caméra",     val: "200 MP OIS" },          { key: "RAM",      val: "12 Go" },
      { key: "Batterie",   val: "5000 mAh" },            { key: "Garantie", val: "1 an Samsung" },
    ],
  },
  {
    id: 12, name: "MacBook Pro 14\" M4", brand: "Apple",
    description: "Écran Liquid Retina XDR, puce M4 Pro, 16 Go RAM, 512 Go SSD, 17h autonomie.",
    price: 14999, oldPrice: null,
    image: "img/12.jpeg", emoji: "💻",
    category: "laptop", badge: "new", rating: 5,
    specs: [
      { key: "Puce",       val: "Apple M4 Pro" },        { key: "Écran",    val: "14\" Liquid Retina XDR" },
      { key: "RAM",        val: "16 Go" },               { key: "Stockage", val: "512 Go SSD" },
      { key: "Autonomie",  val: "17 heures" },           { key: "Garantie", val: "1 an Apple" },
    ],
  },
  {
    id: 13, name: "Dell XPS 15", brand: "Dell",
    description: "Écran OLED 4K 15.6\", Intel Core i9, RTX 4070, 32 Go RAM, design premium.",
    price: 12999, oldPrice: 14999,
    image: "img/13.jpeg", emoji: "💻",
    category: "laptop", badge: "sale", rating: 5,
    specs: [
      { key: "Processeur", val: "Intel Core i9-14900HX" }, { key: "Écran", val: "15.6\" OLED 4K" },
      { key: "GPU",        val: "RTX 4070" },             { key: "RAM",      val: "32 Go DDR5" },
      { key: "Stockage",   val: "1 To SSD NVMe" },        { key: "Garantie", val: "2 ans Dell" },
    ],
  },
  {
    id: 14, name: "Sony WH-1000XM5", brand: "Sony",
    description: "Casque sans fil ANC premium, 30h autonomie, son studio, confort supérieur.",
    price: 1999, oldPrice: 2299,
    image: "img/14.jpeg", emoji: "🎧",
    category: "audio", badge: "sale", rating: 5,
    specs: [
      { key: "ANC",        val: "Leader secteur" },       { key: "Autonomie", val: "30 heures" },
      { key: "Bluetooth",  val: "5.3" },                  { key: "Son",       val: "LDAC Premium" },
      { key: "Confort",    val: "Surouï légèr 250g" },    { key: "Garantie",  val: "1 an Sony" },
    ],
  },
  {
    id: 15, name: "Bose QuietComfort Ultra", brand: "Bose",
    description: "Casque ANC léger 234g, technologie Immersion, contrôle tactile, 24h autonomie.",
    price: 1699, oldPrice: 1999,
    image: "img/15.jpeg", emoji: "🎧",
    category: "audio", badge: "sale", rating: 5,
    specs: [
      { key: "Poids",       val: "234 grammes" },        { key: "ANC",      val: "Immersion Bose" },
      { key: "Autonomie",   val: "24 heures" },          { key: "Bluetooth", val: "5.3" },
      { key: "Charge",      val: "USB-C rapide" },        { key: "Garantie", val: "1 an Bose" },
    ],
  },
  {
    id: 16, name: "Google Pixel 8 Pro", brand: "Google",
    description: "Écran 6.7\" OLED 120Hz, puce Tensor G4, caméra IA avancée, batterie 5000 mAh.",
    price: 6999, oldPrice: null,
    image: "img/16.jpeg", emoji: "📱",
    category: "phone", badge: "new", rating: 5,
    specs: [
      { key: "Puce",       val: "Tensor G4" },            { key: "Écran",    val: "6.7\" OLED 120Hz" },
      { key: "Caméra",     val: "50 MP Fusion" },         { key: "RAM",      val: "12 Go" },
      { key: "Batterie",   val: "5000 mAh" },             { key: "Garantie", val: "3 ans Google" },
    ],
  },
  {
    id: 17, name: "Lenovo ThinkPad X1 Carbon", brand: "Lenovo",
    description: "Ultraportable 14\", Intel Core Ultra 7, 16 Go RAM, 512 Go SSD, 17h autonomie.",
    price: 8999, oldPrice: null,
    image: "img/17.jpeg", emoji: "💻",
    category: "laptop", badge: "new", rating: 5,
    specs: [
      { key: "Processeur", val: "Intel Core Ultra 7" },   { key: "Écran",    val: "14\" WUXGA OLED" },
      { key: "RAM",        val: "16 Go LPDDR5" },         { key: "Stockage", val: "512 Go SSD" },
      { key: "Autonomie",  val: "17 heures" },            { key: "Garantie", val: "3 ans Lenovo" },
    ],
  },
  {
    id: 18, name: "ASUS ROG Ally", brand: "ASUS",
    description: "Console gaming portable 7\", processeur Ryzen Z1, 512 Go SSD, 80 FPS Cyberpunk.",
    price: 3999, oldPrice: null,
    image: "img/18.jpeg", emoji: "🎮",
    category: "phone", badge: "new", rating: 5,
    specs: [
      { key: "Écran",      val: "7\" IPS 120Hz" },        { key: "Processeur", val: "Ryzen Z1" },
      { key: "RAM",        val: "16 Go LPDDR5X" },        { key: "Stockage",  val: "512 Go" },
      { key: "Batterie",   val: "80 Wh" },                { key: "Garantie",  val: "1 an ASUS" },
    ],
  },
  {
    id: 19, name: "Oculus Quest 3", brand: "Meta",
    description: "Casque VR/AR haute résolution, Snapdragon Gen 2, 128 Go, tracking main avancé.",
    price: 2999, oldPrice: null,
    image: "img/19.jpeg", emoji: "🥽",
    category: "accessory", badge: "new", rating: 5,
    specs: [
      { key: "Résolution",  val: "2064x2208" },          { key: "Processeur", val: "Snapdragon Gen 2" },
      { key: "Stockage",    val: "128 Go" },             { key: "Batterie",   val: "2-2.5h" },
      { key: "Tracking",    val: "Main avancé" },         { key: "Garantie",  val: "2 ans Meta" },
    ],
  },
  {
    id: 20, name: "Apple Watch Ultra 2", brand: "Apple",
    description: "Montre sport robuste 49mm, batterie 36h, écran Retina, GPS + Cellular.",
    price: 3999, oldPrice: null,
    image: "img/20.jpeg", emoji: "⌚",
    category: "accessory", badge: "new", rating: 5,
    specs: [
      { key: "Écran",      val: "49mm Retina" },         { key: "Batterie", val: "36 heures" },
      { key: "GPS",        val: "Dual Frequency" },      { key: "Connectivity", val: "GPS+Cellular" },
      { key: "Résistance", val: "100m étanche" },        { key: "Garantie", val: "1 an Apple" },
    ],
  },
  {
    id: 21, name: "DJI Mini 3 Pro", brand: "DJI",
    description: "Drone ultra-compact 249g, caméra 4K 48 MP, transmission vidéo 10 km, 31 min vol.",
    price: 2999, oldPrice: 3999,
    image: "img/21.jpeg", emoji: "🚁",
    category: "phone", badge: "sale", rating: 5,
    specs: [
      { key: "Poids",      val: "249 grammes" },         { key: "Caméra", val: "4K 48 MP" },
      { key: "Autonomie",  val: "31 minutes" },          { key: "Portée",    val: "10 km" },
      { key: "Résolution", val: "4K DCI" },              { key: "Garantie",  val: "1 an DJI" },
    ],
  },
  {
    id: 22, name: "Canon EOS R8", brand: "Canon",
    description: "Reflex mirrorless full-frame 24.2 MP, AF 1053 zones, 4K 60p, écran tactile.",
    price: 9999, oldPrice: null,
    image: "img/22.jpeg", emoji: "📷",
    category: "phone", badge: "new", rating: 5,
    specs: [
      { key: "Capteur",     val: "Full-Frame 24.2 MP" },  { key: "AF",    val: "1053 zones" },
      { key: "Vidéo",       val: "4K 60p 8-bit" },        { key: "Écran", val: "Tactile articulé" },
      { key: "Batterie",    val: "410 shots" },           { key: "Garantie", val: "2 ans Canon" },
    ],
  },
  {
    id: 23, name: "Sony A6700", brand: "Sony",
    description: "Caméra mirrorless APS-C 26 MP, AF révolutionnaire, 4K 120p, compact léger.",
    price: 8999, oldPrice: null,
    image: "img/23.jpeg", emoji: "📷",
    category: "phone", badge: "new", rating: 5,
    specs: [
      { key: "Capteur",     val: "APS-C 26 MP" },         { key: "AF",      val: "759 zones" },
      { key: "Vidéo",       val: "4K 120p 10-bit" },      { key: "Écran",   val: "3\" OLED" },
      { key: "Batterie",    val: "520 shots" },           { key: "Garantie", val: "2 ans Sony" },
    ],
  },
  {
    id: 24, name: "GoPro Hero 12 Black", brand: "GoPro",
    description: "Caméra d'action ultra-compacte 5.3K 60p, Hypersmooth, écran 2\" tactile, étanche.",
    price: 1999, oldPrice: 2499,
    image: "img/24.jpeg", emoji: "🎥",
    category: "phone", badge: "sale", rating: 5,
    specs: [
      { key: "Résolution",  val: "5.3K 60p" },           { key: "Stabilisation", val: "Hypersmooth 6" },
      { key: "Écran",       val: "2\" tactile" },         { key: "Batterie",   val: "2h 29min" },
      { key: "Étanchéité",  val: "10m sans boîtier" },   { key: "Garantie",  val: "1 an GoPro" },
    ],
  },
  {
    id: 25, name: "Soundbar LG OLED B4", brand: "LG",
    description: "Barre de son 3.1.3 Dolby Atmos, HDMI eARC, subwoofer sans fil, design élégant.",
    price: 2999, oldPrice: null,
    image: "img/25.jpeg", emoji: "🔊",
    category: "audio", badge: "new", rating: 5,
    specs: [
      { key: "Canaux",      val: "3.1.3 Atmos" },         { key: "Puissance", val: "420W" },
      { key: "Subwoofer",   val: "Sans fil inclus" },     { key: "HDMI",      val: "eARC/HDMI 2.1" },
      { key: "Connectivité",val: "WiFi + Bluetooth" },   { key: "Garantie",  val: "2 ans LG" },
    ],
  },
  {
    id: 26, name: "Denon AVR-X3700H", brand: "Denon",
    description: "Ampli home cinema 7.2, Dolby Atmos, 4K 120Hz, 105 dB SPL, calibrage YPAO automatique.",
    price: 4999, oldPrice: null,
    image: "img/26.jpeg", emoji: "🎵",
    category: "audio", badge: "new", rating: 5,
    specs: [
      { key: "Canaux",      val: "7.2 Atmos-ready" },     { key: "Puissance", val: "105 dB SPL" },
      { key: "4K",          val: "120Hz passthrough" },   { key: "Calibrage", val: "YPAO auto" },
      { key: "WiFi",        val: "AirPlay + HEOS" },      { key: "Garantie",  val: "2 ans Denon" },
    ],
  },
  {
    id: 27, name: "Samsung 55\" QN95C OLED", brand: "Samsung",
    description: "TV OLED 4K 120Hz, Quantum AI processor, MiniLED backlighting, Gaming Hub.",
    price: 19999, oldPrice: null,
    image: "img/27.jpeg", emoji: "📺",
    category: "phone", badge: "new", rating: 5,
    specs: [
      { key: "Taille",      val: "55\" OLED 4K" },        { key: "Hz",        val: "120Hz" },
      { key: "Processeur",  val: "Quantum AI" },          { key: "Gaming",    val: "Hub Gaming" },
      { key: "HDR",         val: "HDR10+/Dolby Vision" }, { key: "Garantie",  val: "3 ans Samsung" },
    ],
  },
  {
    id: 28, name: "LG 48\" OLED C4", brand: "LG",
    description: "TV OLED gamers 4K 144Hz, AI Super Upscaling, temps réponse 0.03ms, HDMI 2.1.",
    price: 17999, oldPrice: null,
    image: "img/28.jpeg", emoji: "📺",
    category: "phone", badge: "new", rating: 5,
    specs: [
      { key: "Taille",      val: "48\" OLED 4K" },        { key: "Hz",        val: "144Hz" },
      { key: "Gaming",      val: "0.03ms Réponse" },      { key: "Upscaling", val: "AI Super" },
      { key: "Connecteurs", val: "HDMI 2.1x4" },          { key: "Garantie",  val: "3 ans LG" },
    ],
  },
  {
    id: 29, name: "Sony Bravia XR Z95L", brand: "Sony",
    description: "TV Mini-LED QD-OLED 77\" 4K 120Hz, XR Cognitive processor, Calman Ready.",
    price: 29999, oldPrice: null,
    image: "img/29.jpeg", emoji: "📺",
    category: "phone", badge: "new", rating: 5,
    specs: [
      { key: "Taille",      val: "77\" QD-OLED" },        { key: "Hz",        val: "120Hz" },
      { key: "Processeur",  val: "XR Cognitive" },        { key: "Couleur",   val: "Billions colors" },
      { key: "Connecteurs", val: "HDMI 2.1x4" },          { key: "Garantie",  val: "3 ans Sony" },
    ],
  },
  {
    id: 30, name: "Nvidia RTX 5090", brand: "Nvidia",
    description: "Carte graphique ultra-performance, 32 Go GDDR7, CUDA cores 21120, ray tracing gen 6.",
    price: 29999, oldPrice: null,
    image: "img/30.jpeg", emoji: "🎮",
    category: "phone", badge: "new", rating: 5,
    specs: [
      { key: "VRAM",        val: "32 Go GDDR7" },         { key: "CUDA Cores", val: "21120" },
      { key: "Memory Bus",  val: "576-bit" },             { key: "TDP",       val: "500W" },
      { key: "Ray Tracing", val: "Gen 6" },               { key: "Garantie",  val: "3 ans Nvidia" },
    ],
  },
  {
    id: 31, name: "AMD Ryzen 9 9950X", brand: "AMD",
    description: "Processeur 16 cœurs Zen 5, socket AM5, boost 5.7 GHz, TDP 170W, cache 64 MB.",
    price: 8999, oldPrice: null,
    image: "img/31.jpeg", emoji: "⚙️",
    category: "laptop", badge: "new", rating: 5,
    specs: [
      { key: "Cœurs",       val: "16 cœurs/32 threads" }, { key: "Boost",     val: "5.7 GHz" },
      { key: "Cache",       val: "64 MB L3" },            { key: "TDP",       val: "170W" },
      { key: "Socket",      val: "AM5" },                 { key: "Garantie",  val: "3 ans AMD" },
    ],
  },
  {
    id: 32, name: "Intel Core i9-14900KS", brand: "Intel",
    description: "Processeur flagship 24 cœurs, turbo 6.2 GHz, socket LGA1700, TDP 253W.",
    price: 7999, oldPrice: null,
    image: "img/32.jpeg", emoji: "⚙️",
    category: "laptop", badge: "new", rating: 5,
    specs: [
      { key: "Cœurs",       val: "24 cœurs/32 threads" }, { key: "Boost",     val: "6.2 GHz" },
      { key: "Cache",       val: "36 MB Smart" },         { key: "TDP",       val: "253W" },
      { key: "Socket",      val: "LGA1700" },             { key: "Garantie",  val: "3 ans Intel" },
    ],
  },
  {
    id: 33, name: "Samsung 870 QVO 2TB SSD", brand: "Samsung",
    description: "SSD SATA 2.5\", 560 Mo/s lecture, technologie QLC, durabilité 5 ans.",
    price: 1299, oldPrice: null,
    image: "img/33.jpeg", emoji: "💾",
    category: "accessory", badge: "new", rating: 5,
    specs: [
      { key: "Capacité",    val: "2 To" },               { key: "Vitesse",   val: "560 MB/s" },
      { key: "Interface",   val: "SATA 2.5\"" },          { key: "MTBF",      val: "5 ans" },
      { key: "Chiffrement", val: "AES 256-bit" },        { key: "Garantie",  val: "5 ans Samsung" },
    ],
  },
  {
    id: 34, name: "Kingston Fury Beast 16GB", brand: "Kingston",
    description: "RAM DDR4 3600 MHz, 16 Go, temps réaction 16-18-18, RGB personnalisable.",
    price: 599, oldPrice: null,
    image: "img/34.jpeg", emoji: "💾",
    category: "accessory", badge: null, rating: 5,
    specs: [
      { key: "Capacité",    val: "16 Go" },              { key: "Vitesse",   val: "3600 MHz" },
      { key: "Latence",     val: "CAS 16-18-18-36" },    { key: "Tension",   val: "1.35V" },
      { key: "RGB",         val: "Controllable" },        { key: "Garantie",  val: "Lifetime Kingston" },
    ],
  },
  {
    id: 35, name: "Corsair MP600 GEN 5 1TB", brand: "Corsair",
    description: "SSD NVMe M.2 PCIe 5.0, 12 400 Mo/s lecture, 10 600 Mo/s écriture, heatsink intégré.",
    price: 1899, oldPrice: null,
    image: "img/35.jpeg", emoji: "💾",
    category: "accessory", badge: "new", rating: 5,
    specs: [
      { key: "Capacité",    val: "1 To" },               { key: "Interface", val: "NVMe PCIe 5.0" },
      { key: "Vitesse",     val: "12 400 MB/s" },        { key: "MTBF",      val: "1.8 million" },
      { key: "Heatsink",    val: "Intégré" },             { key: "Garantie",  val: "5 ans Corsair" },
    ],
  },
  {
    id: 36, name: "Seagate FireCuda 2TB", brand: "Seagate",
    description: "Disque dur hybride pour gaming, 7200 rpm, 256 Mo cache, ultra-rapide.",
    price: 1299, oldPrice: null,
    image: "img/36.jpeg", emoji: "💾",
    category: "accessory", badge: null, rating: 5,
    specs: [
      { key: "Capacité",    val: "2 To" },               { key: "RPM",       val: "7200" },
      { key: "Cache",       val: "256 Mo" },             { key: "Interface", val: "SATA 3.5\"" },
      { key: "Performance", val: "Hybrid Gaming" },       { key: "Garantie",  val: "5 ans Seagate" },
    ],
  },
  {
    id: 37, name: "Logitech MX Master 3S", brand: "Logitech",
    description: "Souris professionnelle sans fil, 8K DPI, charge magnétique, 70 jours autonomie.",
    price: 1299, oldPrice: null,
    image: "img/37.jpeg", emoji: "🖱️",
    category: "accessory", badge: null, rating: 5,
    specs: [
      { key: "DPI",         val: "8000 Max" },            { key: "Autonomie", val: "70 jours" },
      { key: "Bluetooth",   val: "Multi-device" },       { key: "Charge",    val: "USB-C magnétique" },
      { key: "Boutons",     val: "8 programmables" },     { key: "Garantie",  val: "2 ans Logitech" },
    ],
  },
  {
    id: 38, name: "Corsair K100 RGB Mechanical", brand: "Corsair",
    description: "Clavier mécanique ultra-premium, switches OPX, écran OLED intégré, stabilisateurs.",
    price: 2499, oldPrice: null,
    image: "img/38.jpeg", emoji: "⌨️",
    category: "accessory", badge: "new", rating: 5,
    specs: [
      { key: "Switches",    val: "OPX optiques" },       { key: "Écran",     val: "OLED intégré" },
      { key: "Connexion",   val: "Filaire + Wireless" }, { key: "Rétroéclairage", val: "RGB per-key" },
      { key: "Stabilisateurs", val: "Screw-in" },        { key: "Garantie",  val: "2 ans Corsair" },
    ],
  },
  {
    id: 39, name: "SteelSeries Apex Pro OmniPoint", brand: "SteelSeries",
    description: "Clavier gaming avec switches ajustables 0.1-4mm, OLED smart display, magnétique.",
    price: 1999, oldPrice: 2399,
    image: "img/39.jpeg", emoji: "⌨️",
    category: "accessory", badge: "sale", rating: 5,
    specs: [
      { key: "Switches",    val: "OmniPoint ajustables" }, { key: "Écran", val: "Smart Display OLED" },
      { key: "Connectivité",val: "Filaire + 2.4GHz" },   { key: "Éclairage", val: "RGB per-key" },
      { key: "Batterie",    val: "40h Wireless" },        { key: "Garantie",  val: "2 ans SteelSeries" },
    ],
  },
];



// ══ WhatsApp SVG icon ══
const WA_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`;

// ══ STATE ══
let cart = [];

// ══ INIT SELLER ══
function initSeller() {
  document.getElementById('sellerName').textContent = SELLER.name;
  document.getElementById('sellerDesc').textContent = SELLER.desc;
  document.getElementById('sellerCity').textContent = SELLER.city;
  const av = document.getElementById('sellerAvatar');
  if (SELLER.avatar) av.innerHTML = `<img src="${SELLER.avatar}" alt="${SELLER.name}" />`;
  else av.textContent = SELLER.initials;
  const waUrl = `https://wa.me/${SELLER.phone}`;
  document.getElementById('sellerWaLink').href = waUrl;
  document.getElementById('footerWa').href = waUrl;
  document.getElementById('footerWa').textContent = 'WhatsApp · ' + SELLER.phone;
}

// ══ RENDER PRODUCTS ══
function renderProducts(filter = 'all') {
  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  document.getElementById('productCount').textContent = `${filtered.length} produit${filtered.length > 1 ? 's' : ''}`;

  // counts
  ['all','laptop','phone','audio','accessory'].forEach(c => {
    const el = document.getElementById('count-' + c);
    if (el) { const n = c === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === c).length; el.textContent = n + ' produit' + (n > 1 ? 's' : ''); }
  });

  document.getElementById('productsGrid').innerHTML = filtered.map(p => {
    const imgHtml = p.image
      ? `<img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" /><div class="product-img-placeholder" style="display:none;">${p.emoji}</div>`
      : `<div class="product-img-placeholder">${p.emoji}</div>`;
    return `
    <div class="product-card" onclick="openModal(${p.id})">
      <div class="product-img-wrap">
        ${imgHtml}
        ${p.badge ? `<div class="badge ${p.badge}">${p.badge==='new'?'Nouveau':'Promo'}</div>` : ''}
        <button class="quick-view-btn" onclick="event.stopPropagation();openModal(${p.id})">👁 Voir détails</button>
      </div>
      <div class="product-body">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.description}</div>
        <div class="product-rating">${'★'.repeat(p.rating)}${'☆'.repeat(5-p.rating)}</div>
        <div class="product-footer">
          <div class="price-wrap">
            <span class="product-price">${p.price.toLocaleString('fr-FR')} DH</span>
            ${p.oldPrice ? `<span class="product-old">${p.oldPrice.toLocaleString('fr-FR')} DH</span>` : ''}
          </div>
          <button class="wa-order-btn" onclick="event.stopPropagation();orderOnWhatsApp(${p.id})">
            ${WA_SVG} Commander
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterProducts(cat, el) {
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
  if (el) el.classList.add('active');
  renderProducts(cat);
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// ══ MODAL ══
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const imgHtml = p.image
    ? `<img class="modal-img" src="${p.image}" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" /><div class="modal-img-placeholder" style="display:none;">${p.emoji}</div>`
    : `<div class="modal-img-placeholder">${p.emoji}</div>`;
  const specsHtml = p.specs?.length
    ? `<div class="modal-specs"><h4>Caractéristiques</h4><div class="specs-grid">${p.specs.map(s=>`<div class="spec-item"><div class="spec-key">${s.key}</div><div class="spec-val">${s.val}</div></div>`).join('')}</div></div>` : '';

  document.getElementById('modalContent').innerHTML = `
    ${imgHtml}
    <div class="modal-body">
      <div class="modal-brand">${p.brand}</div>
      <div class="modal-name">${p.name}</div>
      <div class="modal-desc">${p.description}</div>
      <div class="modal-price-row">
        <span class="modal-price">${p.price.toLocaleString('fr-FR')} DH</span>
        ${p.oldPrice ? `<span class="modal-old">${p.oldPrice.toLocaleString('fr-FR')} DH</span>` : ''}
        ${p.badge ? `<div class="badge ${p.badge}" style="position:static;">${p.badge==='new'?'Nouveau':'Promo'}</div>` : ''}
      </div>
      <div class="modal-actions">
        <button class="modal-wa-btn" onclick="orderOnWhatsApp(${p.id})">${WA_SVG} Commander sur WhatsApp</button>
        <button class="btn-ghost" style="padding:12px 22px;" onclick="addToCart(${p.id});closeModal()">+ Ajouter au panier</button>
      </div>
      ${specsHtml}
    </div>`;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() { document.getElementById('modalOverlay').classList.remove('open'); document.body.style.overflow = ''; }
function closeModalOnOverlay(e) { if (e.target === document.getElementById('modalOverlay')) closeModal(); }

// ══ WHATSAPP ══
function orderOnWhatsApp(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const stars = '★'.repeat(p.rating) + '☆'.repeat(5-p.rating);
  const promo = p.oldPrice ? `\n💥 Ancien prix : ${p.oldPrice.toLocaleString('fr-FR')} DH` : '';
  const badge = p.badge === 'new' ? '\n🆕 Nouveau produit' : p.badge === 'sale' ? '\n🔥 En promotion' : '';
  const specs = p.specs?.length ? '\n\n📋 *Caractéristiques :*\n' + p.specs.map(s=>`• ${s.key} : ${s.val}`).join('\n') : '';
  const msg = `Bonjour ! Je souhaite commander ce produit 👇\n\n`
    + `🛍️ *${p.name}*\n🏷️ Marque : ${p.brand}\n`
    + `💰 Prix : *${p.price.toLocaleString('fr-FR')} DH*${promo}${badge}\n`
    + `⭐ Note : ${stars}\n📝 ${p.description}${specs}\n\n`
    + `Merci de confirmer la disponibilité et les détails de livraison !`;
  window.open(`https://wa.me/${SELLER.phone}?text=${encodeURIComponent(msg)}`, '_blank');
  showToast(`Ouverture WhatsApp pour ${p.name} ✓`);
}

function sendCartWhatsApp() {
  if (!cart.length) return;
  const lines = cart.map(i => `• ${i.name} × ${i.qty}  →  ${(i.price*i.qty).toLocaleString('fr-FR')} DH`).join('\n');
  const total = cart.reduce((a,i) => a + i.price*i.qty, 0);
  const msg = `Bonjour ${SELLER.name} ! Je souhaite commander :\n\n${lines}\n\n💰 *Total : ${total.toLocaleString('fr-FR')} DH*\n\nMerci de confirmer la disponibilité et la livraison !`;
  window.open(`https://wa.me/${SELLER.phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

function contactSellerWhatsApp(e) {
  e.preventDefault();
  const msg = `Bonjour ${SELLER.name} ! Je visite votre boutique et j'aimerais avoir plus d'informations sur vos produits. 😊`;
  window.open(`https://wa.me/${SELLER.phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ══ CART ══
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const ex = cart.find(i => i.id === id);
  if (ex) ex.qty++; else cart.push({...p, qty:1});
  updateCartCount();
  showToast(`${p.name} ajouté au panier ✓`);
}
function removeFromCart(id) { cart = cart.filter(i => i.id !== id); updateCartCount(); renderCart(); }
function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id); else { updateCartCount(); renderCart(); }
}
function updateCartCount() { document.getElementById('cartCount').textContent = cart.reduce((a,i)=>a+i.qty,0); }

function renderCart() {
  const el = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if (!cart.length) {
    el.innerHTML = `<div class="empty-cart"><div class="empty-icon">🛒</div><p>Votre panier est vide</p></div>`;
    footer.innerHTML = ''; return;
  }
  el.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">${item.image ? `<img src="${item.image}" alt="${item.name}" onerror="this.outerHTML='<span style=font-size:26px>${item.emoji}</span>'">` : `<span style="font-size:26px">${item.emoji}</span>`}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price.toLocaleString('fr-FR')} DH</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
        </div>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑</button>
    </div>`).join('');
  const total = cart.reduce((a,i)=>a+i.price*i.qty,0);
  footer.innerHTML = `
    <div class="cart-total"><span style="color:var(--muted)">Total</span><span>${total.toLocaleString('fr-FR')} DH</span></div>
    <button class="cart-wa-btn" onclick="sendCartWhatsApp()">${WA_SVG} Commander tout via WhatsApp</button>`;
}

function openCart()  { renderCart(); document.getElementById('cartOverlay').classList.add('open'); document.getElementById('cartDrawer').classList.add('open'); document.body.style.overflow='hidden'; }
function closeCart() { document.getElementById('cartOverlay').classList.remove('open'); document.getElementById('cartDrawer').classList.remove('open'); document.body.style.overflow=''; }

// ══ TOAST ══
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 2600);
}

document.addEventListener('keydown', e => { if (e.key==='Escape') { closeModal(); closeCart(); } });

// ══ BOOT ══
initSeller();
renderProducts();