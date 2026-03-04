(() => {
  const els = {
    summary: document.getElementById('orderSummary'),
    total: document.getElementById('orderTotal'),
    form: document.getElementById('checkoutForm')
  };

  const fmt = (n) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(n);
  const cart = JSON.parse(localStorage.getItem('lll_cart') || '[]');
  const subtotal = cart.reduce((s, it) => s + Number(it.price) * Number(it.qty || 1), 0);
  const shipping = subtotal > 0 ? 3.9 : 0;
  const total = subtotal + shipping;

  els.total.textContent = fmt(total);
  els.summary.innerHTML = cart.length
    ? cart
        .map(
          (it) => `
        <div class="summary-row">
          <span>${it.title} × ${Number(it.qty || 1)}</span>
          <strong>${fmt(Number(it.price) * Number(it.qty || 1))}</strong>
        </div>
      `
        )
        .join('') +
      `<div style="height:1px;background:var(--line);margin:12px 0;"></div>
       <div class="summary-row"><span>Livraison</span><strong>${fmt(shipping)}</strong></div>`
    : `<p class="small" style="margin:0;">Panier vide. <a href="/Sae/Boutique/boutique.html">Retour boutique</a></p>`;

  els.form?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!cart.length) {
      alert('Ton panier est vide.');
      return;
    }
    alert('Démo : commande validée ! ✅');
    localStorage.setItem('lll_cart', '[]');
    window.location.href = '/Sae/Accueil/accueil.html';
  });
})();
