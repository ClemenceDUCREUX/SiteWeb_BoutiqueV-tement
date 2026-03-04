(() => {
  const PRODUCTS = [{"id": 1, "title": "Couple look #1", "cat": "couple", "price": 15, "img": "/assets/img/Couple/imgC/1.jpg", "sizes": ["XS", "S", "M", "L", "XL"], "color": "Beige"}, {"id": 2, "title": "Couple look #2", "cat": "couple", "price": 18, "img": "/assets/img/Couple/imgC/2.jpg", "sizes": ["XS", "S", "M", "L", "XL"], "color": "Bleu"}, {"id": 3, "title": "Couple look #3", "cat": "couple", "price": 21, "img": "/assets/img/Couple/imgC/3.jpg", "sizes": ["XS", "S", "M", "L", "XL"], "color": "Vert"}, {"id": 4, "title": "Couple look #4", "cat": "couple", "price": 12, "img": "/assets/img/Couple/imgC/4.jpg", "sizes": ["XS", "S", "M", "L", "XL"], "color": "Rouge"}, {"id": 5, "title": "Couple look #5", "cat": "couple", "price": 15, "img": "/assets/img/Couple/imgC/5.jpg", "sizes": ["XS", "S", "M", "L", "XL"], "color": "Blanc"}, {"id": 6, "title": "Couple look #6", "cat": "couple", "price": 18, "img": "/assets/img/Couple/imgC/6.jpg", "sizes": ["XS", "S", "M", "L", "XL"], "color": "Noir"}, {"id": 7, "title": "Enfant look #1", "cat": "enfant", "price": 15, "img": "/assets/img/Enfant/imgE/1.jpg", "sizes": ["3-4", "5-6", "7-8", "9-10", "11-12"], "color": "Beige"}, {"id": 8, "title": "Enfant look #2", "cat": "enfant", "price": 18, "img": "/assets/img/Enfant/imgE/2.jpg", "sizes": ["3-4", "5-6", "7-8", "9-10", "11-12"], "color": "Bleu"}, {"id": 9, "title": "Enfant look #3", "cat": "enfant", "price": 21, "img": "/assets/img/Enfant/imgE/3.png", "sizes": ["3-4", "5-6", "7-8", "9-10", "11-12"], "color": "Vert"}, {"id": 10, "title": "Enfant look #4", "cat": "enfant", "price": 12, "img": "/assets/img/Enfant/imgE/4.jpg", "sizes": ["3-4", "5-6", "7-8", "9-10", "11-12"], "color": "Rouge"}, {"id": 11, "title": "Enfant look #5", "cat": "enfant", "price": 15, "img": "/assets/img/Enfant/imgE/5.jpg", "sizes": ["3-4", "5-6", "7-8", "9-10", "11-12"], "color": "Blanc"}, {"id": 12, "title": "Enfant look #6", "cat": "enfant", "price": 18, "img": "/assets/img/Enfant/imgE/6.jpg", "sizes": ["3-4", "5-6", "7-8", "9-10", "11-12"], "color": "Noir"}, {"id": 13, "title": "Famille look #1", "cat": "famille", "price": 15, "img": "/assets/img/Famille/imgF/1.jpg", "sizes": ["XS", "S", "M", "L", "XL"], "color": "Beige"}, {"id": 14, "title": "Famille look #2", "cat": "famille", "price": 18, "img": "/assets/img/Famille/imgF/2.jpg", "sizes": ["XS", "S", "M", "L", "XL"], "color": "Bleu"}, {"id": 15, "title": "Famille look #3", "cat": "famille", "price": 21, "img": "/assets/img/Famille/imgF/3.png", "sizes": ["XS", "S", "M", "L", "XL"], "color": "Vert"}, {"id": 16, "title": "Famille look #4", "cat": "famille", "price": 12, "img": "/assets/img/Famille/imgF/4.jpg", "sizes": ["XS", "S", "M", "L", "XL"], "color": "Rouge"}, {"id": 17, "title": "Famille look #5", "cat": "famille", "price": 15, "img": "/assets/img/Famille/imgF/5.jpg", "sizes": ["XS", "S", "M", "L", "XL"], "color": "Blanc"}, {"id": 18, "title": "Famille look #6", "cat": "famille", "price": 18, "img": "/assets/img/Famille/imgF/6.jpg", "sizes": ["XS", "S", "M", "L", "XL"], "color": "Noir"}, {"id": 19, "title": "Femme look #1", "cat": "femme", "price": 15, "img": "/assets/img/Femme/imgF/1.jpg", "sizes": ["XS", "S", "M", "L", "XL"], "color": "Beige"}, {"id": 20, "title": "Femme look #2", "cat": "femme", "price": 18, "img": "/assets/img/Femme/imgF/2.jpg", "sizes": ["XS", "S", "M", "L", "XL"], "color": "Bleu"}, {"id": 21, "title": "Femme look #3", "cat": "femme", "price": 21, "img": "/assets/img/Femme/imgF/3.jpg", "sizes": ["XS", "S", "M", "L", "XL"], "color": "Vert"}, {"id": 22, "title": "Femme look #4", "cat": "femme", "price": 12, "img": "/assets/img/Femme/imgF/4.jpg", "sizes": ["XS", "S", "M", "L", "XL"], "color": "Rouge"}, {"id": 23, "title": "Femme look #5", "cat": "femme", "price": 15, "img": "/assets/img/Femme/imgF/5.jpg", "sizes": ["XS", "S", "M", "L", "XL"], "color": "Blanc"}, {"id": 24, "title": "Femme look #6", "cat": "femme", "price": 18, "img": "/assets/img/Femme/imgF/6.jpg", "sizes": ["XS", "S", "M", "L", "XL"], "color": "Noir"}, {"id": 25, "title": "Homme look #1", "cat": "homme", "price": 15, "img": "/assets/img/Homme/imgH/1.jpg", "sizes": ["XS", "S", "M", "L", "XL"], "color": "Beige"}, {"id": 26, "title": "Homme look #2", "cat": "homme", "price": 18, "img": "/assets/img/Homme/imgH/2.jpg", "sizes": ["XS", "S", "M", "L", "XL"], "color": "Bleu"}, {"id": 27, "title": "Homme look #3", "cat": "homme", "price": 21, "img": "/assets/img/Homme/imgH/3.jpg", "sizes": ["XS", "S", "M", "L", "XL"], "color": "Vert"}, {"id": 28, "title": "Homme look #4", "cat": "homme", "price": 12, "img": "/assets/img/Homme/imgH/4.jpg", "sizes": ["XS", "S", "M", "L", "XL"], "color": "Rouge"}, {"id": 29, "title": "Homme look #5", "cat": "homme", "price": 15, "img": "/assets/img/Homme/imgH/5.jpg", "sizes": ["XS", "S", "M", "L", "XL"], "color": "Blanc"}, {"id": 30, "title": "Homme look #6", "cat": "homme", "price": 18, "img": "/assets/img/Homme/imgH/6.jpg", "sizes": ["XS", "S", "M", "L", "XL"], "color": "Noir"}];

  const els = {
    grid: document.getElementById('products'),
    count: document.getElementById('product-count'),
    q: document.getElementById('q'),
    sort: document.getElementById('sort'),
    catChips: document.querySelectorAll('[data-cat]'),
    size: document.getElementById('size'),
    maxPrice: document.getElementById('maxPrice'),
    maxPriceLabel: document.getElementById('maxPriceLabel'),
    clear: document.getElementById('clearFilters'),
    openFilters: document.getElementById('openFilters'),
    filtersPanel: document.getElementById('filtersPanel')
  };

  const state = {
    q: '',
    cat: 'all',
    size: 'all',
    maxPrice: 50,
    sort: 'popular'
  };

  // On tablette/mobile, on démarre avec les filtres fermés
  if (window.matchMedia && window.matchMedia('(max-width: 980px)').matches) {
    if (els.filtersPanel) els.filtersPanel.hidden = true;
    if (els.openFilters) els.openFilters.setAttribute('aria-expanded','false');
  }
  const fmt = (n) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(n);

  const readQuery = () => {
    const params = new URLSearchParams(window.location.search);
    const cat = (params.get('cat') || '').toLowerCase();
    if (cat && ['femme','homme','couple','famille','enfant','all'].includes(cat)) {
      state.cat = cat;
    }
    const q = params.get('q');
    if (q) state.q = q;
    const mp = params.get('maxPrice');
    if (mp && !Number.isNaN(Number(mp))) state.maxPrice = Number(mp);
    const sort = params.get('sort');
    if (sort && ['popular','priceAsc','priceDesc','title'].includes(sort)) state.sort = sort;
  };

  const applyToUI = () => {
    if (els.q) els.q.value = state.q;
    if (els.size) els.size.value = state.size;
    if (els.sort) els.sort.value = state.sort;
    if (els.maxPrice) {
      els.maxPrice.value = String(state.maxPrice);
      els.maxPriceLabel.textContent = fmt(Number(state.maxPrice));
    }
    els.catChips.forEach((c) => {
      c.classList.toggle('is-on', c.getAttribute('data-cat') === state.cat);
    });
  };

  const matches = (p) => {
    const q = state.q.trim().toLowerCase();
    if (q) {
      const hay = `${p.title} ${p.color} ${p.cat}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    if (state.cat !== 'all' && p.cat !== state.cat) return false;
    if (state.size !== 'all' && !p.sizes.includes(state.size)) return false;
    if (Number(p.price) > Number(state.maxPrice)) return false;
    return true;
  };

  const sorters = {
    popular: (a,b) => a.id - b.id,
    priceAsc: (a,b) => a.price - b.price,
    priceDesc: (a,b) => b.price - a.price,
    title: (a,b) => a.title.localeCompare(b.title, 'fr')
  };

  const render = () => {
    const list = PRODUCTS.filter(matches).sort(sorters[state.sort] || sorters.popular);
    els.count.textContent = `${list.length} article(s)`;
    els.grid.innerHTML = list.map((p) => `
      <article class="product" data-id="${p.id}">
        <div class="product__media">
          <img src="${p.img}" alt="${p.title}" loading="lazy" />
        </div>
        <div class="product__body">
          <h3 class="product__title">${p.title}</h3>
          <div class="product__meta">
            <span class="price">${fmt(p.price)} / jour</span>
            <span class="small">${p.color}</span>
          </div>
          <div class="product__actions">
            <button class="btn btn--primary" type="button" data-add="${p.id}">Ajouter</button>
            <button class="btn" type="button" data-view="${p.id}">Voir</button>
          </div>
        </div>
      </article>
    `).join('');
  };

  const openFilters = (open) => {
    if (!els.filtersPanel) return;
    els.filtersPanel.hidden = !open;
    if (els.openFilters) els.openFilters.setAttribute('aria-expanded', String(open));
  };

  const bind = () => {
    els.q?.addEventListener('input', (e) => {
      state.q = e.target.value;
      render();
    });

    els.sort?.addEventListener('change', (e) => {
      state.sort = e.target.value;
      render();
    });

    els.size?.addEventListener('change', (e) => {
      state.size = e.target.value;
      render();
    });

    els.maxPrice?.addEventListener('input', (e) => {
      state.maxPrice = Number(e.target.value);
      els.maxPriceLabel.textContent = fmt(Number(state.maxPrice));
      render();
    });

    els.catChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        state.cat = chip.getAttribute('data-cat');
        applyToUI();
        render();
      });
    });

    els.clear?.addEventListener('click', () => {
      state.q = '';
      state.cat = 'all';
      state.size = 'all';
      state.maxPrice = 50;
      state.sort = 'popular';
      applyToUI();
      render();
    });

    els.openFilters?.addEventListener('click', () => {
      const open = els.openFilters.getAttribute('aria-expanded') !== 'true';
      openFilters(open);
    });

    // Close filter panel on outside click (mobile)
    document.addEventListener('click', (e) => {
      if (!els.filtersPanel || els.filtersPanel.hidden) return;
      const t = e.target;
      if (els.filtersPanel.contains(t) || els.openFilters?.contains(t)) return;
      openFilters(false);
    });

    // Demo: add to cart
    els.grid?.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;
      const id = btn.getAttribute('data-add') || btn.getAttribute('data-view');
      if (!id) return;

      if (btn.hasAttribute('data-add')) {
        // simple localStorage cart
        const cart = JSON.parse(localStorage.getItem('lll_cart') || '[]');
        const product = PRODUCTS.find((p) => String(p.id) === String(id));
        if (product) {
          cart.push({ id: product.id, title: product.title, price: product.price, img: product.img, qty: 1 });
          localStorage.setItem('lll_cart', JSON.stringify(cart));
          btn.textContent = 'Ajouté ✓';
          setTimeout(() => (btn.textContent = 'Ajouter'), 900);
        }
      } else {
        alert('Démo : fiche produit à venir 🙂');
      }
    });
  };

  readQuery();
  applyToUI();
  render();
  bind();
})();
