// ══════════════════════════════════
// ⚙️  CONFIGURATION — MODIFIEZ ICI
// ══════════════════════════════════
const SELLER = {
  name:     "TechNova Store",
  phone:    "212706717887",    // ← Votre numéro WhatsApp sans + ni espaces (ex: 212612345678)
  city:     "Zagora, Maroc",
  desc:     "Votre boutique de confiance pour l'électronique à Zagora. Produits authentiques, garantie constructeur, livraison rapide.",
  initials: "T",
  avatar:   null,              // ← URL ou chemin vers photo du vendeur, ex: "images/vendeur.jpg"
};

// ----------------------------------
// 🛍️  CATALOGUE — voir produits.js
// ➔ Ajoutez/modifiez les produits dans produits.js, PAS ici
// ----------------------------------

// ══ CATÉGORIES ══
const CATEGORIES = [
  { id: 'all',       label: 'Tous',            icon: '⚡' },
  { id: 'laptop',    label: 'Ordinateurs',    icon: '💻' },
  { id: 'phone',     label: 'Smartphones',    icon: '📱' },
  { id: 'audio',     label: 'Audio',          icon: '🎧' },
  { id: 'gaming',    label: 'Gaming',         icon: '🎮' },
  { id: 'photo',     label: 'Photo & Vidéo',  icon: '📷' },
  { id: 'tv',        label: 'TV & Home Cinéma', icon: '📺' },
  { id: 'accessory', label: 'Accessoires',    icon: '⌨️' },
];



// ══ WhatsApp SVG icon ══
const WA_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`;

// ══ STATE ══
const CART_KEY = 'tecnova_cart';
let cart = [];
let currentFilter = 'all';
let searchQuery = '';
let sortBy = 'pertinence';

function saveCart() { try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {} }
function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (raw) cart = JSON.parse(raw);
  } catch (e) { cart = []; }
}

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
  document.getElementById('footerWa').textContent = 'WhatsApp · ' + SELLER.name;
}

// ══ HERO SHOWCASE (produit vedette) ══
function renderHeroShowcase() {
  const p = PRODUCTS.find(x => x.id === 4);
  if (!p) return;
  document.getElementById('heroShowcaseImg').innerHTML = p.image
    ? `<img src="${p.image}" alt="${p.name}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:12px;" onerror="this.outerHTML='<div style=font-size:72px>${p.emoji || '🖼️'}</div>'">`
    : `<div style="font-size:72px">${p.emoji || '🖼️'}</div>`;
  document.getElementById('heroShowcaseName').textContent = p.name;
  document.getElementById('heroShowcaseDesc').textContent = p.description;
  document.getElementById('heroShowcasePrice').textContent = p.price.toLocaleString('fr-FR') + ' DH';
}

// ══ RENDER CATEGORIES ══
function renderCategories() {
  const grid = document.getElementById('catGrid');
  if (!grid) return;
  grid.innerHTML = CATEGORIES.map(c => {
    const n = c.id === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === c.id).length;
    return `<button type="button" class="cat-card ${c.id === 'all' ? 'active' : ''}" onclick="filterProducts('${c.id}',this)"><div class="cat-icon">${c.icon}</div><div class="cat-name">${c.label}</div><div class="cat-count">${n} produit${n > 1 ? 's' : ''}</div></button>`;
  }).join('');
  revealChildren(grid, '.cat-card');
}

// ══ RENDER PRODUCTS ══
function renderProducts() {
  let filtered = currentFilter === 'all' ? PRODUCTS.slice() : PRODUCTS.filter(p => p.category === currentFilter);
  const q = searchQuery.trim().toLowerCase();
  if (q) {
    const catLabel = {};
    CATEGORIES.forEach(c => catLabel[c.id] = c.label.toLowerCase());
    filtered = filtered.filter(p =>
      (p.name || '').toLowerCase().includes(q) ||
      (p.brand || '').toLowerCase().includes(q) ||
      (p.description || '').toLowerCase().includes(q) ||
      (catLabel[p.category] || '').includes(q));
  }
  if (sortBy === 'prix-asc')          filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === 'prix-desc')    filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === 'nouveautes')   filtered.sort((a, b) => (b.badge === 'new') - (a.badge === 'new'));
  else if (sortBy === 'promos')       filtered.sort((a, b) => ((b.oldPrice ? 1 : 0) - (a.oldPrice ? 1 : 0)));
  else if (sortBy === 'note')         filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  document.getElementById('productCount').textContent = `${filtered.length} produit${filtered.length > 1 ? 's' : ''}`;

  const note = document.getElementById('searchResultNote');
  if (q) note.textContent = `Résultats pour « ${searchQuery.trim()} »`; else note.textContent = '';

  const grid = document.getElementById('productsGrid');
  if (!filtered.length) {
    grid.innerHTML = `<div class="no-results">🔍 Aucun produit ne correspond à votre recherche.</div>`;
    return;
  }
  grid.innerHTML = filtered.map(p => {
    const imgHtml = p.image
      ? `<img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" /><div class="product-img-placeholder" style="display:none;">${p.emoji || '🖼️'}</div>`
      : `<div class="product-img-placeholder">${p.emoji || '🖼️'}</div>`;
    return `
    <div class="product-card" onclick="openModal(${p.id})">
      <div class="product-img-wrap">
        ${imgHtml}
        ${p.badge ? `<div class="badge ${p.badge}">${p.badge==='new'?'Nouveau':'Promo'}</div>` : ''}
        <button type="button" class="quick-view-btn" onclick="event.stopPropagation();openModal(${p.id})">👁 Voir détails</button>
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
          <button type="button" class="wa-order-btn" onclick="event.stopPropagation();orderOnWhatsApp(${p.id})">
            ${WA_SVG} Commander
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  revealChildren(grid, '.product-card');
}

function filterProducts(cat, el) {
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
  if (el) el.classList.add('active');
  currentFilter = cat;
  renderProducts();
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function searchProducts(q) {
  searchQuery = q;
  document.getElementById('searchClear').style.display = q.trim() ? 'flex' : 'none';
  renderProducts();
}

function sortProducts(v) {
  sortBy = v;
  renderProducts();
}

function clearSearch() {
  const input = document.getElementById('searchInput');
  input.value = '';
  searchQuery = '';
  document.getElementById('searchClear').style.display = 'none';
  renderProducts();
  input.focus();
}

// ══ MODAL ══
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const imgHtml = p.image
    ? `<img class="modal-img" src="${p.image}" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" /><div class="modal-img-placeholder" style="display:none;">${p.emoji || '🖼️'}</div>`
    : `<div class="modal-img-placeholder">${p.emoji || '🖼️'}</div>`;
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
        <button type="button" class="modal-wa-btn" onclick="orderOnWhatsApp(${p.id})">${WA_SVG} Commander sur WhatsApp</button>
        <button type="button" class="btn-ghost" style="padding:12px 22px;" onclick="addToCart(${p.id});closeModal()">+ Ajouter au panier</button>
      </div>
      ${specsHtml}
    </div>`;
  document.getElementById('modalOverlay').classList.add('open');
  updateBodyScroll();
}
function closeModal() { document.getElementById('modalOverlay').classList.remove('open'); updateBodyScroll(); }
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
  window.open(`https://wa.me/${SELLER.phone}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  showToast(`Ouverture WhatsApp pour ${p.name} ✓`);
}

function sendCartWhatsApp() {
  if (!cart.length) return;
  const lines = cart.map(i => `• ${i.name} × ${i.qty}  →  ${(i.price*i.qty).toLocaleString('fr-FR')} DH`).join('\n');
  const total = cart.reduce((a,i) => a + i.price*i.qty, 0);
  const msg = `Bonjour ${SELLER.name} ! Je souhaite commander :\n\n${lines}\n\n💰 *Total : ${total.toLocaleString('fr-FR')} DH*\n\nMerci de confirmer la disponibilité et la livraison !`;
  const win = window.open(`https://wa.me/${SELLER.phone}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  if (!win) { showToast('Autorisez les pop-ups pour ouvrir WhatsApp ⚠️'); return; }
  cart = [];
  saveCart();
  updateCartCount();
  renderCart();
  closeCart();
  showToast('Commande envoyée sur WhatsApp ✓');
}

function contactSellerWhatsApp(e) {
  e.preventDefault();
  const msg = `Bonjour ${SELLER.name} ! Je visite votre boutique et j'aimerais avoir plus d'informations sur vos produits. 😊`;
  window.open(`https://wa.me/${SELLER.phone}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
}

// ══ CART ══
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const ex = cart.find(i => i.id === id);
  if (ex) ex.qty++; else cart.push({...p, qty:1});
  saveCart();
  updateCartCount();
  showToast(`${p.name} ajouté au panier ✓`);
}
function removeFromCart(id) { cart = cart.filter(i => i.id !== id); saveCart(); updateCartCount(); renderCart(); }
function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id); else { saveCart(); updateCartCount(); renderCart(); }
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
      <div class="cart-item-img">${item.image ? `<img src="${item.image}" alt="${item.name}" onerror="this.outerHTML='<span style=font-size:26px>${item.emoji || '🖼️'}</span>'">` : `<span style="font-size:26px">${item.emoji || '🖼️'}</span>`}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price.toLocaleString('fr-FR')} DH</div>
        <div class="cart-item-qty">
          <button type="button" class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button type="button" class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
        </div>
      </div>
      <button type="button" class="remove-btn" onclick="removeFromCart(${item.id})">🗑</button>
    </div>`).join('');
  const total = cart.reduce((a,i)=>a+i.price*i.qty,0);
  footer.innerHTML = `
    <div class="cart-total"><span style="color:var(--muted)">Total</span><span>${total.toLocaleString('fr-FR')} DH</span></div>
    <button type="button" class="cart-wa-btn" onclick="sendCartWhatsApp()">${WA_SVG} Commander tout via WhatsApp</button>`;
}

function openCart()  { renderCart(); document.getElementById('cartOverlay').classList.add('open'); document.getElementById('cartDrawer').classList.add('open'); updateBodyScroll(); }
function closeCart() { document.getElementById('cartOverlay').classList.remove('open'); document.getElementById('cartDrawer').classList.remove('open'); updateBodyScroll(); }
function updateBodyScroll() {
  const modalOpen = document.getElementById('modalOverlay').classList.contains('open');
  const cartOpen  = document.getElementById('cartOverlay').classList.contains('open');
  document.body.style.overflow = (modalOpen || cartOpen) ? 'hidden' : '';
}

// ══ MOBILE MENU ══
function toggleMenu() {
  const links = document.getElementById('navLinks');
  const btn = document.getElementById('hamburger');
  const open = links.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
  btn.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
}
function closeMenu() {
  const links = document.getElementById('navLinks');
  const btn = document.getElementById('hamburger');
  if (links && links.classList.contains('open')) {
    links.classList.remove('open');
    if (btn) {
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Ouvrir le menu');
    }
  }
}

// ══ TOAST ══
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 2600);
}

document.addEventListener('keydown', e => { if (e.key==='Escape') { closeModal(); closeCart(); closeMenu(); } });

// ══ ANIMATIONS ══
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    const el = en.target;
    if (!en.isIntersecting) return;
    el.classList.add('visible');
    revealObserver.unobserve(el);
    const delay = parseFloat(el.style.transitionDelay) || 0;
    setTimeout(() => {
      el.style.transitionDelay = '';
      el.classList.remove('reveal', 'visible');
    }, delay * 1000 + 850);
  });
}, { threshold: 0.12 });

function revealChildren(root, selector) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { root.querySelectorAll(selector).forEach(el => el.classList.add('visible')); return; }
  root.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = Math.min(i * 0.05, 0.35) + 's';
    revealObserver.observe(el);
  });
}

function renderMarquee() {
  const brands = [...new Set(PRODUCTS.map(p => p.brand))];
  const items = brands.map(b => `<span>${b}</span>`).join('');
  const el = document.getElementById('marqueeTrack');
  if (el) el.innerHTML = items + items;
}

function animateCount(el, target, suffix = '', decimals = 0, duration = 1600) {
  if (!el) return;
  const t0 = performance.now();
  const fmt = v => decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString('fr-FR');
  function tick(now) {
    const t = Math.min((now - t0) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = fmt(target * eased) + suffix;
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// ══ BOOT ══
const statT = matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 250;
setTimeout(() => animateCount(document.getElementById('statProducts'), PRODUCTS.length, '', 0), statT);
setTimeout(() => animateCount(document.getElementById('statAvis'), 2400, '+', 0), statT + 200);
setTimeout(() => animateCount(document.getElementById('statRating'), 4.9, '★', 1), statT + 400);
loadCart();
initSeller();
renderHeroShowcase();
renderCategories();
renderProducts();
renderMarquee();
updateCartCount();