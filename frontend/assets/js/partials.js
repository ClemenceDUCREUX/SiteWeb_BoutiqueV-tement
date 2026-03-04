(() => {
  const inject = async (selector, url) => {
    const host = document.querySelector(selector);
    if (!host) return;

    try {
      const res = await fetch(url, { cache: 'no-cache' });
      if (!res.ok) throw new Error(`Failed to load ${url} (${res.status})`);
      host.innerHTML = await res.text();
    } catch (e) {
      console.warn(e);
    }
  };

  const guessActive = () => {
    const p = window.location.pathname.toLowerCase();

    if (p.includes('/sae/accueil/')) return 'accueil';
    if (p.includes('/sae/boutique/')) return 'boutique';
    if (p.includes('/sae/solde/')) return 'solde';
    if (p.includes('/sae/apropos/')) return 'apropos';
    if (p.includes('/sae/compte/')) return 'compte';
    if (p.includes('/sae/panier/')) return 'panier';

    // anciennes pages catégorie -> boutique
    if (
      p.includes('/sae/femme/') ||
      p.includes('/sae/homme/') ||
      p.includes('/sae/enfant/') ||
      p.includes('/sae/famille/') ||
      p.includes('/sae/couple/')
    ) {
      return 'boutique';
    }

    return '';
  };

  const setActiveNav = () => {
    const active = guessActive();
    document.querySelectorAll('[data-nav]').forEach((a) => {
      a.classList.toggle('is-active', !!active && a.getAttribute('data-nav') === active);
    });
  };

  const bindBurger = () => {
    const header = document.querySelector('[data-navbar]') || document.querySelector('.site-header');
    const btn =
      document.querySelector('[data-nav-toggle]') || document.querySelector('.nav-toggle');

    const drawer =
      document.querySelector('[data-mobile-drawer]') || document.getElementById('mobile-drawer');

    const backdrop = document.querySelector('[data-nav-backdrop]') || document.querySelector('.nav-backdrop');

    if (!btn || !drawer) return;

    const isOpen = () => btn.getAttribute('aria-expanded') === 'true';

    const open = () => {
      btn.setAttribute('aria-expanded', 'true');
      btn.setAttribute('aria-label', 'Fermer le menu');

      drawer.hidden = false;
      if (backdrop) backdrop.hidden = false;

      document.body.classList.add('no-scroll');
      if (header) header.classList.add('nav-open');

      // focus premier lien (accessibilité)
      const firstLink = drawer.querySelector('a');
      if (firstLink) firstLink.focus();
    };

    const close = () => {
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Ouvrir le menu');

      document.body.classList.remove('no-scroll');
      if (header) header.classList.remove('nav-open');

      // On cache après un mini délai (permet une animation CSS si tu en mets)
      window.setTimeout(() => {
        if (!isOpen()) {
          drawer.hidden = true;
          if (backdrop) backdrop.hidden = true;
        }
      }, 120);
    };

    const toggle = () => {
      if (isOpen()) close();
      else open();
    };

    // état initial sûr
    btn.setAttribute('aria-expanded', 'false');
    drawer.hidden = true;
    if (backdrop) backdrop.hidden = true;

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggle();
    });

    // Fermer quand on clique sur un lien du drawer
    drawer.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (link) close();
    });

    // Backdrop click
    if (backdrop) backdrop.addEventListener('click', close);

    // Clic dehors (fallback si pas de backdrop)
    document.addEventListener('click', (e) => {
      if (!isOpen()) return;
      const target = e.target;
      if (drawer.contains(target) || btn.contains(target)) return;
      close();
    });

    // ESC
    document.addEventListener('keydown', (e) => {
      if (!isOpen()) return;
      if (e.key === 'Escape') close();
    });

    // Si on resize vers desktop (menu caché), on ferme proprement
    window.addEventListener('resize', () => {
      if (!isOpen()) return;
      const mobile = window.matchMedia('(max-width: 860px)').matches;
      if (!mobile) close();
    });
  };

  const boot = async () => {
    await inject('#navbar-host', '/partials/navbar.html');
    await inject('#footer-host', '/partials/footer.html');

    // Une fois injecté, on active + on bind
    setActiveNav();
    bindBurger();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();