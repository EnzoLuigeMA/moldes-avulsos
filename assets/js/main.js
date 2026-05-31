/* ============================================================
   MOLDES AVULSOS — lógica de interface
   - Renderiza o catálogo a partir de products.js
   - Filtro por categoria
   - Animações on-scroll
   - Estado da navbar
   - Eventos de Meta Pixel (PageView + InitiateCheckout)
   ============================================================ */

// >>> COLE AQUI O ID DO SEU PIXEL para ativar o rastreamento. <<<
const PIXEL_ID = ""; // ex: "1234567890"

(function () {
  "use strict";

  /* ---------- Meta Pixel (opcional) ---------- */
  function initPixel() {
    if (!PIXEL_ID) return;
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", PIXEL_ID);
    fbq("track", "PageView");
  }
  function trackCheckout(product) {
    if (window.fbq) {
      fbq("track", "InitiateCheckout", {
        content_name: product.name,
        content_category: product.cat,
        value: parseFloat(product.price.replace(",", ".")),
        currency: "BRL",
      });
    }
  }

  /* ---------- Render catálogo ---------- */
  function buildCatalog() {
    const root = document.getElementById("catalog");
    const filters = document.getElementById("filters");
    if (!root || typeof PRODUCTS === "undefined") return;

    // Botões de filtro a partir das categorias
    CATEGORIES.forEach((c) => {
      const b = document.createElement("button");
      b.className = "filter";
      b.dataset.filter = c.id;
      b.setAttribute("role", "tab");
      b.textContent = c.label;
      filters.appendChild(b);
    });

    // Grupos por categoria
    CATEGORIES.forEach((cat) => {
      const items = PRODUCTS.filter((p) => p.cat === cat.id);
      if (!items.length) return;

      const group = document.createElement("section");
      group.className = "cat-group reveal";
      group.dataset.cat = cat.id;

      const ativos = items.filter((p) => p.active).length;
      group.innerHTML =
        '<h3 class="cat-group__title">' + cat.label +
        ' <span>' + items.length + " modelos" +
        (ativos < items.length ? " · " + ativos + " disponíveis" : "") +
        "</span></h3>";

      const carousel = document.createElement("div");
      carousel.className = "carousel";
      carousel.dataset.carousel = "";

      const track = document.createElement("div");
      track.className = "carousel__track";
      track.tabIndex = 0;
      track.setAttribute("role", "region");
      track.setAttribute("aria-label", "Moldes — " + cat.label);
      items.forEach((p) => track.appendChild(card(p)));

      carousel.innerHTML =
        '<button class="carousel__nav carousel__nav--prev" aria-label="Modelos anteriores">&#8249;</button>' +
        '<button class="carousel__nav carousel__nav--next" aria-label="Próximos modelos">&#8250;</button>' +
        '<div class="carousel__dots" aria-hidden="true"></div>';
      carousel.insertBefore(track, carousel.querySelector(".carousel__dots"));

      group.appendChild(carousel);
      root.appendChild(group);
    });

    initCarousels();
    revealInit();
  }

  /* ---------- Carrossel ---------- */
  function initCarousels() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelectorAll("[data-carousel]").forEach((c) => {
      const track = c.querySelector(".carousel__track");
      const prev = c.querySelector(".carousel__nav--prev");
      const next = c.querySelector(".carousel__nav--next");
      const dotsWrap = c.querySelector(".carousel__dots");
      const INTERVAL = 5000;
      let timer = null;

      const pageW = () => track.clientWidth;
      const pages = () => Math.max(1, Math.round(track.scrollWidth / pageW()));
      const current = () => Math.round(track.scrollLeft / pageW());
      const atEnd = () => track.scrollLeft + pageW() >= track.scrollWidth - 2;

      function buildDots() {
        const n = pages();
        dotsWrap.innerHTML = "";
        if (n <= 1) { prev.disabled = true; next.disabled = true; return; }
        for (let i = 0; i < n; i++) {
          const d = document.createElement("button");
          d.className = "carousel__dot" + (i === 0 ? " is-active" : "");
          d.setAttribute("aria-label", "Ir para página " + (i + 1));
          d.addEventListener("click", () => { track.scrollTo({ left: i * pageW(), behavior: "smooth" }); reset(); });
          dotsWrap.appendChild(d);
        }
      }
      function syncUI() {
        const cur = current();
        dotsWrap.querySelectorAll(".carousel__dot").forEach((d, i) => d.classList.toggle("is-active", i === cur));
        if (pages() > 1) {
          prev.disabled = track.scrollLeft <= 2;
          next.disabled = atEnd();
        }
      }
      function go(dir) {
        if (dir > 0 && atEnd()) { track.scrollTo({ left: 0, behavior: "smooth" }); }
        else if (dir < 0 && track.scrollLeft <= 2) { track.scrollTo({ left: track.scrollWidth, behavior: "smooth" }); }
        else { track.scrollBy({ left: dir * pageW(), behavior: "smooth" }); }
      }
      function auto() { if (pages() > 1) go(1); }
      function start() { if (!reduce && !timer) timer = setInterval(auto, INTERVAL); }
      function stop() { if (timer) { clearInterval(timer); timer = null; } }
      function reset() { stop(); start(); }

      prev.addEventListener("click", () => { go(-1); reset(); });
      next.addEventListener("click", () => { go(1); reset(); });
      track.addEventListener("scroll", syncUI, { passive: true });
      track.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") { e.preventDefault(); go(1); reset(); }
        if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); reset(); }
      });

      // Pausa em interação
      ["pointerenter", "focusin", "touchstart"].forEach((ev) => c.addEventListener(ev, stop, { passive: true }));
      ["pointerleave", "focusout"].forEach((ev) => c.addEventListener(ev, start));

      // Só roda quando visível
      if ("IntersectionObserver" in window) {
        new IntersectionObserver((entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              // Carrega todas as imagens deste carrossel para navegação sem "pop-in"
              c.querySelectorAll('img[loading="lazy"]').forEach((img) => { img.loading = "eager"; });
              start();
            } else { stop(); }
          });
        }, { threshold: 0.3 }).observe(c);
      } else {
        c.querySelectorAll('img[loading="lazy"]').forEach((img) => { img.loading = "eager"; });
        start();
      }

      buildDots(); syncUI();
      window.addEventListener("resize", debounce(() => { buildDots(); syncUI(); }, 200));
    });
  }

  function debounce(fn, ms) {
    let t; return function () { clearTimeout(t); t = setTimeout(fn, ms); };
  }

  function card(p) {
    const el = document.createElement("article");
    el.className = "card";

    const badge = p.active
      ? '<span class="card__badge">Disponível</span>'
      : '<span class="card__badge card__badge--soon">Em breve</span>';

    const cta = p.active
      ? '<a class="btn btn--block card__cta" href="' + p.link +
        '" target="_blank" rel="noopener" data-buy>Comprar molde</a>'
      : '<button class="btn btn--block is-soon card__cta" disabled>Em breve</button>';

    el.innerHTML =
      '<div class="card__media">' +
        '<img src="' + p.img + '" alt="Molde ' + p.name + '" loading="lazy">' +
        badge +
      "</div>" +
      '<div class="card__body">' +
        '<h4 class="card__name">' + p.name + "</h4>" +
        '<p class="card__meta">Kit do PP ao GG · Formato: PDF</p>' +
        '<p class="card__price"><small>R$</small> ' + p.price + "</p>" +
        cta +
      "</div>";

    if (p.active) {
      el.querySelector("[data-buy]").addEventListener("click", () => trackCheckout(p));
    }
    // Fallback defensivo: tenta recarregar a imagem 1x se falhar
    const img = el.querySelector(".card__media img");
    img.addEventListener("error", function onErr() {
      if (!img.dataset.retried) {
        img.dataset.retried = "1";
        img.src = p.img + "?r=" + Date.now();
      } else {
        img.removeEventListener("error", onErr);
        img.closest(".card__media").classList.add("card__media--fallback");
        img.style.display = "none";
      }
    });
    return el;
  }

  /* ---------- Filtro ---------- */
  function initFilters() {
    const bar = document.getElementById("filters");
    if (!bar) return;
    bar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter");
      if (!btn) return;
      bar.querySelectorAll(".filter").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const f = btn.dataset.filter;
      document.querySelectorAll(".cat-group").forEach((g) => {
        g.style.display = f === "all" || g.dataset.cat === f ? "" : "none";
      });
    });
  }

  /* ---------- Reveal on scroll ---------- */
  function revealInit() {
    const els = document.querySelectorAll(".reveal:not(.is-in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en, i) => {
          if (en.isIntersecting) {
            setTimeout(() => en.target.classList.add("is-in"), (i % 4) * 70);
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
  }

  /* ---------- Navbar scroll + menu mobile ---------- */
  function initNav() {
    const nav = document.querySelector(".nav");
    if (!nav) return;
    const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");
    if (toggle && menu) {
      const setOpen = (open) => {
        nav.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      };
      toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
      menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
      document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
    }
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    initPixel();
    buildCatalog();
    initFilters();
    initNav();
    revealInit();
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  });
})();
