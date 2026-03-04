(() => {
  const els = {
    list: document.getElementById('cartList'),
    empty: document.getElementById('cartEmpty'),
    subtotal: document.getElementById('subtotal'),
    shipping: document.getElementById('shipping'),
    total: document.getElementById('total'),
    checkout: document.getElementById('checkoutBtn'),
    clear: document.getElementById('clearCart')
  };

  const fmt = (n) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(n);

  const load = () => JSON.parse(localStorage.getItem('lll_cart') || '[]');
  const save = (cart) => localStorage.setItem('lll_cart', JSON.stringify(cart));

  const calc = (cart) => {
    const subtotal = cart.reduce((s, it) => s + Number(it.price) * Number(it.qty || 1), 0);
    const shipping = subtotal > 0 ? 3.9 : 0;
    return { subtotal, shipping, total: subtotal + shipping };
  };

  const render = () => {
    const cart = load();

    if (!cart.length) {
      els.list.innerHTML = '';
      els.empty.hidden = false;
      els.checkout.disabled = true;
      els.clear.disabled = true;
    } else {
      els.empty.hidden = true;
      els.checkout.disabled = false;
      els.clear.disabled = false;

      els.list.innerHTML = cart
        .map(
          (it, idx) => `
        <div class="cart-item" data-idx="${idx}">
          <div class="cart-item__img">
            <img src="${it.img}" alt="${it.title}" loading="lazy" />
          </div>
          <div class="cart-item__body">
            <div class="cart-item__top">
              <p class="cart-item__title">${it.title}</p>
              <strong>${fmt(Number(it.price))} / jour</strong>
            </div>

            <div class="cart-item__meta">
              <div class="qty" aria-label="Quantité">
                <button type="button" data-dec aria-label="Diminuer">−</button>
                <span>${Number(it.qty || 1)}</span>
                <button type="button" data-inc aria-label="Augmenter">+</button>
              </div>
              <button class="btn" type="button" data-remove>Retirer</button>
            </div>
          </div>
        </div>
      `
        )
        .join('');
    }

    const { subtotal, shipping, total } = calc(cart);
    els.subtotal.textContent = fmt(subtotal);
    els.shipping.textContent = fmt(shipping);
    els.total.textContent = fmt(total);
  };

  const updateQty = (idx, delta) => {
    const cart = load();
    if (!cart[idx]) return;
    cart[idx].qty = Math.max(1, Number(cart[idx].qty || 1) + delta);
    save(cart);
    render();
  };

  const remove = (idx) => {
    const cart = load();
    cart.splice(idx, 1);
    save(cart);
    render();
  };

  els.list?.addEventListener('click', (e) => {
    const row = e.target.closest('.cart-item');
    if (!row) return;
    const idx = Number(row.getAttribute('data-idx'));
    if (e.target.closest('[data-inc]')) updateQty(idx, +1);
    if (e.target.closest('[data-dec]')) updateQty(idx, -1);
    if (e.target.closest('[data-remove]')) remove(idx);
  });

  els.clear?.addEventListener('click', () => {
    if (!confirm('Vider le panier ?')) return;
    save([]);
    render();
  });

  els.checkout?.addEventListener('click', () => {
    window.location.href = '/Sae/Panier/commande.html';
  });

  render();
})();
