// ══════════════════════════════════
// ⚙️  CONFIGURATION — MODIFIEZ ICI
// ══════════════════════════════════
const SELLER = {
  name:     "TechNova Store",
  phone:    "212706717887",    // ← Votre numéro WhatsApp sans + ni espaces (ex: 212612345678)
  city:     "Zgora, Maroc",
  desc:     "Votre boutique de confiance pour l'électronique à Marrakesh. Produits authentiques, garantie constructeur, livraison rapide.",
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
    category: "Accessoires", badge: "new", rating: 5,
    //specs: [
     // { key: "Processeur", val: "Apple M3 8 cœurs" }, { key: "Mémoire",   val: "8 Go RAM" },
      //{ key: "Stockage",   val: "256 Go SSD" },        { key: "Écran",    val: "13.6\" Liquid Retina" },
      //{ key: "Autonomie",  val: "18 heures" },         { key: "Garantie", val: "1 an Apple" },
    //],
  },
  {
    id: 2, name: "iPhone 16 Pro", brand: "Apple",
    description: "iPhone A18 Pro, caméra 48 MP, écran Super Retina XDR 6.1\", bouton Action personnalisable.",
    price: 11999, oldPrice: 13999,
    image: "img/2.jpeg", emoji: "📱",
    category: "phone", badge: "sale", rating: 5,
    specs: [
      { key: "Puce",     val: "Apple A18 Pro" },    { key: "Écran",    val: "6.1\" Super Retina XDR" },
      { key: "Caméra",   val: "Triple 48 MP" },     { key: "Stockage", val: "128 Go" },
      { key: "Batterie", val: "22h vidéo" },        { key: "Garantie", val: "1 an Apple" },
    ],
  },
  {
    id: 3, name: "Sony WH-1000XM5", brand: "Sony",
    description: "Casque premium avec réduction de bruit active, 30h autonomie, qualité audio Hi-Res certifiée.",
    price: 3499, oldPrice: 3999,
    image: "img/3.jpeg", emoji: "🎧",
    category: "audio", badge: "sale", rating: 4,
    specs: [
      { key: "Autonomie",       val: "30 heures" },     { key: "ANC",       val: "Actif premium" },
      { key: "Bluetooth",       val: "5.2" },           { key: "Charge",    val: "USB-C rapide" },
      { key: "Poids",           val: "250 g" },         { key: "Garantie",  val: "1 an Sony" },
    ],
  },
  {
    id: 4, name: "Samsung Galaxy S25", brand: "Samsung",
    description: "Flagship Android Snapdragon 8 Elite, IA Galaxy intégrée, triple caméra 200 MP, AMOLED 6.2\".",
    price: 8999, oldPrice: null,
    image: "img/4.jpeg", emoji: "📱",
    category: "phone", badge: "new", rating: 5,
    specs: [
      { key: "Puce",     val: "Snapdragon 8 Elite" }, { key: "Écran",    val: "6.2\" AMOLED 120Hz" },
      { key: "Caméra",   val: "200 + 50 + 12 MP" },  { key: "RAM",      val: "12 Go" },
      { key: "Batterie", val: "4 000 mAh" },          { key: "Garantie", val: "1 an Samsung" },
    ],
  },
  {
    id: 5, name: "Dell XPS 15", brand: "Dell",
    description: "PC portable pro Intel Core i9, RTX 4070, écran OLED 3.5K tactile, châssis aluminium ultra-fin.",
    price: 16999, oldPrice: null,
    image: "img/5.jpeg", emoji: "💻",
    category: "laptop", badge: null, rating: 4,
    specs: [
      { key: "Processeur", val: "Intel Core i9-13900H" }, { key: "GPU",     val: "NVIDIA RTX 4070" },
      { key: "RAM",        val: "32 Go DDR5" },           { key: "Stockage",val: "1 To SSD NVMe" },
      { key: "Écran",      val: "15.6\" OLED 3.5K" },    { key: "Garantie",val: "1 an Dell" },
    ],
  },
  {
    id: 6, name: "AirPods Pro 3", brand: "Apple",
    description: "Écouteurs ANC adaptatif, audio spatial personnalisé, boîtier MagSafe, 30h autonomie totale.",
    price: 2799, oldPrice: null,
    image: "img/6.jpeg", emoji: "🎧",
    category: "audio", badge: null, rating: 5,
    specs: [
      { key: "ANC",       val: "Actif adaptatif" },   { key: "Audio",    val: "Spatial personnalisé" },
      { key: "Boîtier",   val: "MagSafe + USB-C" },  { key: "Autonomie",val: "6h + 24h boîtier" },
      { key: "Résistance",val: "IP54" },              { key: "Garantie", val: "1 an Apple" },
    ],
  },
  {
    id: 7, name: "Logitech MX Keys", brand: "Logitech",
    description: "Clavier sans fil premium, rétroéclairage intelligent, connexion multi-appareils jusqu'à 3 devices.",
    price: 1099, oldPrice: 1299,
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