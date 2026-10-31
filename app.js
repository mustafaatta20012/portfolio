/* ============================================================
   APP.JS — Shared script for all pages
   Plain vanilla JS, no build step, GitHub Pages compatible
   ============================================================ */

'use strict';

/* ── HELPERS ──────────────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const on = (el, ev, fn) => el && el.addEventListener(ev, fn);

/* ── THEME (dark / light) ──────────────────────────────────── */
function initTheme() {
  const saved = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(saved);
}
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  $$('[data-theme-icon]').forEach(el => {
    el.textContent = theme === 'dark' ? '☀️' : '🌙';
    el.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  });
}
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

/* ── LANGUAGE (EN / AR + RTL) ─────────────────────────────── */
function initLang() {
  const saved = localStorage.getItem('lang') || 'en';
  applyLang(saved, false);
}
function applyLang(lang, animate = true) {
  const isAr = lang === 'ar';
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');
  localStorage.setItem('lang', lang);

  // Update toggle buttons
  $$('[data-lang-btn]').forEach(el => {
    el.textContent = isAr ? 'EN' : 'عر';
    el.setAttribute('aria-label', isAr ? 'Switch to English' : 'التبديل إلى العربية');
  });

  // Swap visible content
  $$('[data-en]').forEach(el => {
    const enText = el.getAttribute('data-en');
    const arText = el.getAttribute('data-ar');
    if (enText !== null && arText !== null) {
      el.textContent = isAr ? arText : enText;
    }
  });

  // Show/hide blocks
  $$('[data-lang-en]').forEach(el => el.classList.toggle('hidden', isAr));
  $$('[data-lang-ar]').forEach(el => el.classList.toggle('hidden', !isAr));

  // Update placeholder text on inputs
  $$('[data-ph-en]').forEach(el => {
    el.placeholder = isAr ? (el.getAttribute('data-ph-ar') || '') : el.getAttribute('data-ph-en');
  });
}
function toggleLang() {
  const current = localStorage.getItem('lang') || 'en';
  applyLang(current === 'en' ? 'ar' : 'en');
}

/* ── NAVBAR ────────────────────────────────────────────────── */
function initNavbar() {
  const navbar = $('#navbar');
  if (!navbar) return;

  // Scroll shadow
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
  on(window, 'scroll', onScroll);
  onScroll();

  // Mobile hamburger
  const hamburger = $('#nav-hamburger');
  const mobileNav = $('#nav-mobile');
  on(hamburger, 'click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile nav on link click
  $$('#nav-mobile a').forEach(a => {
    on(a, 'click', () => {
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });

  // Active page highlight
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  $$('.nav-link[data-page]').forEach(link => {
    const page = link.getAttribute('data-page');
    if (page === currentPage || (currentPage === '' && page === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Wire theme + lang toggles in navbar
  $$('[data-theme-toggle]').forEach(btn => on(btn, 'click', toggleTheme));
  $$('[data-lang-toggle]').forEach(btn => on(btn, 'click', toggleLang));
}

/* ── SCROLL REVEAL ─────────────────────────────────────────── */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  $$('.reveal').forEach(el => observer.observe(el));
}

/* ── ANIMATED COUNTERS ─────────────────────────────────────── */
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target') || '0', 10);
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 1800;
  const start = performance.now();

  const tick = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function initCounters() {
  const counters = $$('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

/* ── SKILL BAR ANIMATION ────────────────────────────────────── */
function initSkillBars() {
  const bars = $$('[data-skill-width]');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute('data-skill-width');
        entry.target.style.width = width + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  bars.forEach(el => observer.observe(el));
}

/* ── FAQ ACCORDION ─────────────────────────────────────────── */
function initFAQ() {
  $$('.faq-question').forEach(btn => {
    on(btn, 'click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // Close all
      $$('.faq-item.open').forEach(i => i.classList.remove('open'));
      // Toggle clicked
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ── PORTFOLIO / COURSES FILTER ────────────────────────────── */
function initFilter(filterClass, cardClass, allLabel = 'all') {
  const buttons = $$(`.${filterClass}`);
  const cards   = $$(`.${cardClass}`);
  if (!buttons.length) return;

  buttons.forEach(btn => {
    on(btn, 'click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        const show = cat === allLabel || cardCat === cat;
        card.style.display = show ? '' : 'none';
        // Re-trigger reveal
        if (show) {
          setTimeout(() => card.classList.add('visible'), 10);
        }
      });
    });
  });
}

/* ── CONTACT FORM ──────────────────────────────────────────── */
function initContactForm() {
  const form = $('#contact-form');
  if (!form) return;

  on(form, 'submit', async (e) => {
    const action = form.getAttribute('action') || '';
    // If placeholder action, prevent and show message
    if (action.includes('[ADD:') || action === '') {
      e.preventDefault();
      showFormMsg('info', 'Please configure Formspree first. See data.js → links.formspree.');
      return;
    }
    // Let Formspree handle it via fetch
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    btn.disabled = true;
    btn.textContent = '⏳ Sending…';

    try {
      const resp = await fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (resp.ok) {
        showFormMsg('success', '✅ Message sent! I will get back to you soon.');
        form.reset();
      } else {
        showFormMsg('error', '❌ Something went wrong. Please contact me via WhatsApp.');
      }
    } catch {
      showFormMsg('error', '❌ Network error. Please contact me via WhatsApp.');
    } finally {
      btn.disabled = false;
      btn.textContent = btn.getAttribute('data-label-en') || 'Send Message';
    }
  });
}

function showFormMsg(type, msg) {
  let el = $('#form-msg');
  if (!el) {
    el = document.createElement('p');
    el.id = 'form-msg';
    el.style.cssText = 'margin-top:12px;padding:12px 16px;border-radius:8px;font-size:.875rem;font-weight:600;';
    $('#contact-form').appendChild(el);
  }
  el.textContent = msg;
  el.style.background = type === 'success' ? 'rgba(34,197,94,.12)' :
                         type === 'error'   ? 'rgba(239,68,68,.12)' : 'rgba(13,148,136,.12)';
  el.style.color = type === 'success' ? '#16a34a' :
                   type === 'error'   ? '#dc2626' : '#0d9488';
}

/* ── RENDER FROM DATA.JS ───────────────────────────────────── */

function renderServices(container) {
  if (!container || !window.PORTFOLIO_DATA) return;
  const { services } = PORTFOLIO_DATA;
  container.innerHTML = services.map((s, i) => `
    <div class="service-card reveal reveal-delay-${(i % 4) + 1}" data-category="${s.category || 'general'}">
      <span class="service-icon" aria-hidden="true">${s.icon}</span>
      <h3 class="service-title">
        <span data-en="${s.titleEn}" data-ar="${s.titleAr}">${s.titleEn}</span>
      </h3>
      <p class="service-desc">
        <span data-en="${s.descEn}" data-ar="${s.descAr}">${s.descEn}</span>
      </p>
    </div>
  `).join('');
}

function renderSkills(container) {
  if (!container || !window.PORTFOLIO_DATA) return;
  const { skills } = PORTFOLIO_DATA;
  container.innerHTML = skills.map((group, gi) => `
    <div class="skill-group reveal reveal-delay-${gi + 1}">
      <div class="skill-group-title">
        <span data-en="${group.group}" data-ar="${group.groupAr}">${group.group}</span>
      </div>
      ${group.items.map(item => `
        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-name">
              <span data-en="${item.nameEn}" data-ar="${item.nameAr}">${item.nameEn}</span>
            </span>
            <span class="skill-pct">${item.pct}%</span>
          </div>
          <div class="skill-track" role="progressbar" aria-valuenow="${item.pct}" aria-valuemin="0" aria-valuemax="100" aria-label="${item.nameEn}">
            <div class="skill-fill" data-skill-width="${item.pct}"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

function renderTools(container) {
  if (!container || !window.PORTFOLIO_DATA) return;
  const { tools } = PORTFOLIO_DATA;
  container.innerHTML = tools.map((t, i) => `
    <div class="tool-card reveal reveal-delay-${(i % 5) + 1}">
      <div class="tool-icon" aria-hidden="true">${t.icon}</div>
      <div class="tool-name">
        <span data-en="${t.name}" data-ar="${t.nameAr}">${t.name}</span>
      </div>
    </div>
  `).join('');
}

function renderExperience(container) {
  if (!container || !window.PORTFOLIO_DATA) return;
  const { experience } = PORTFOLIO_DATA;
  container.innerHTML = experience.map((exp, i) => `
    <div class="timeline-item reveal">
      <div class="timeline-dot" aria-hidden="true"></div>
      <div class="timeline-period">${exp.period}</div>
      <div class="timeline-card">
        <div class="timeline-role">
          <span data-en="${exp.roleEn}" data-ar="${exp.roleAr}">${exp.roleEn}</span>
        </div>
        <div class="timeline-company">
          <span data-en="${exp.companyEn}" data-ar="${exp.companyAr}">${exp.companyEn}</span>
        </div>
        <ul class="timeline-tasks">
          ${exp.tasksEn.map((task, ti) => `
            <li>
              <span data-en="${escHtml(task)}" data-ar="${escHtml(exp.tasksAr[ti] || task)}">${escHtml(task)}</span>
            </li>
          `).join('')}
        </ul>
        <div class="timeline-tags">
          ${exp.tags.map(tag => `<span class="timeline-tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderCourses(container, filterCat = 'all') {
  if (!container || !window.PORTFOLIO_DATA) return;
  const { courses } = PORTFOLIO_DATA;
  const filtered = filterCat === 'all' ? courses : courses.filter(c => c.category === filterCat);

  const catColors = {
    'Excel': 'badge-teal', 'Data Entry': 'badge-navy', 'Typing': 'badge-amber',
    'English': 'badge-success', 'Freelancing': 'badge-teal', 'Digital Skills': 'badge-navy',
  };

  container.innerHTML = filtered.map((c, i) => `
    <div class="course-card reveal reveal-delay-${(i % 3) + 1}" data-category="${c.category}">
      <span class="course-cat badge ${catColors[c.category] || 'badge-teal'}">
        <span data-en="${c.category}" data-ar="${c.category}">${c.category}</span>
      </span>
      <div class="course-name">
        <span data-en="${escHtml(c.nameEn)}" data-ar="${escHtml(c.nameAr)}">${escHtml(c.nameEn)}</span>
      </div>
      <div class="course-provider">
        <span data-en="${escHtml(c.providerEn)}" data-ar="${escHtml(c.providerAr)}">${escHtml(c.providerEn)}</span>
      </div>
      <div class="course-meta">
        <span>📅 ${c.year}</span>
        <span>⏱ ${c.hours}</span>
      </div>
      ${c.certUrl && !c.certUrl.includes('[ADD:') ? `
        <a href="${c.certUrl}" target="_blank" rel="noopener" class="course-link">
          🏆 <span data-en="View Certificate" data-ar="عرض الشهادة">View Certificate</span> ↗
        </a>
      ` : `<span class="course-link" style="opacity:.4;cursor:default;">
          🏆 <span data-en="[Add certificate link]" data-ar="[أضف رابط الشهادة]">[Add certificate link]</span>
        </span>`}
    </div>
  `).join('');
}

function renderSamples(container, filterCat = 'all') {
  if (!container || !window.PORTFOLIO_DATA) return;
  const { samples } = PORTFOLIO_DATA;
  const filtered = filterCat === 'all' ? samples : samples.filter(s => s.category === filterCat);

  const catLabels = {
    'excel': 'Excel', 'presentations': 'Presentations',
    'documents': 'Documents', 'data-cleaning': 'Data Cleaning',
  };
  const catColors = {
    'excel': 'badge-teal', 'presentations': 'badge-amber',
    'documents': 'badge-navy', 'data-cleaning': 'badge-success',
  };

  container.innerHTML = filtered.map((s, i) => {
    const hasImage = s.image && !s.image.includes('[ADD:');
    const hasLink  = s.link  && !s.link.includes('[ADD:');
    return `
    <div class="sample-card ${s.featured ? 'featured' : ''} reveal reveal-delay-${(i % 3) + 1}" data-category="${s.category}">
      ${s.featured ? `<div class="sample-featured-badge" data-en="Featured" data-ar="مميز">Featured</div>` : ''}
      <div class="sample-img" aria-label="${s.titleEn}">
        ${hasImage ? `<img src="${s.image}" alt="${s.titleEn}" loading="lazy">` : `<span aria-hidden="true">${s.category === 'excel' ? '📊' : s.category === 'presentations' ? '📽️' : s.category === 'data-cleaning' ? '🧹' : '📄'}</span>`}
      </div>
      <div class="sample-body">
        <span class="sample-cat badge ${catColors[s.category] || 'badge-teal'}">
          ${catLabels[s.category] || s.category}
        </span>
        <div class="sample-title">
          <span data-en="${escHtml(s.titleEn)}" data-ar="${escHtml(s.titleAr)}">${escHtml(s.titleEn)}</span>
        </div>
        <p class="sample-desc">
          <span data-en="${escHtml(s.descEn)}" data-ar="${escHtml(s.descAr)}">${escHtml(s.descEn)}</span>
        </p>
        ${hasLink ? `
          <a href="${s.link}" target="_blank" rel="noopener" class="sample-link">
            <span data-en="View Sample" data-ar="عرض النموذج">View Sample</span> →
          </a>` : `
          <span class="sample-link" style="opacity:.4;cursor:default;">
            <span data-en="[Add sample link]" data-ar="[أضف رابط النموذج]">[Add sample link]</span>
          </span>`}
      </div>
    </div>
  `}).join('');
}

function renderTestimonials(container) {
  if (!container || !window.PORTFOLIO_DATA) return;
  const { testimonials } = PORTFOLIO_DATA;
  container.innerHTML = testimonials.map((t, i) => `
    <div class="testimonial-card reveal reveal-delay-${i + 1}">
      <div class="testimonial-stars" aria-label="${t.rating} stars">
        ${'★'.repeat(t.rating)}
      </div>
      <blockquote class="testimonial-quote">
        <span data-en="${escHtml(t.quoteEn)}" data-ar="${escHtml(t.quoteAr)}">${escHtml(t.quoteEn)}</span>
      </blockquote>
      <div class="testimonial-author">
        <div class="testimonial-name">
          <span data-en="${escHtml(t.nameEn)}" data-ar="${escHtml(t.nameAr)}">${escHtml(t.nameEn)}</span>
        </div>
        <div class="testimonial-role">
          <span data-en="${escHtml(t.roleEn)}" data-ar="${escHtml(t.roleAr)}">${escHtml(t.roleEn)}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderProcess(container) {
  if (!container || !window.PORTFOLIO_DATA) return;
  const { process } = PORTFOLIO_DATA;
  container.innerHTML = process.map((p, i) => `
    <div class="process-step reveal reveal-delay-${i + 1}">
      <div class="process-num" aria-hidden="true">${p.icon}</div>
      <div class="process-step-num">${p.step}</div>
      <div class="process-title">
        <span data-en="${p.titleEn}" data-ar="${p.titleAr}">${p.titleEn}</span>
      </div>
      <p class="process-desc">
        <span data-en="${escHtml(p.descEn)}" data-ar="${escHtml(p.descAr)}">${escHtml(p.descEn)}</span>
      </p>
    </div>
  `).join('');
}

function renderFAQ(container) {
  if (!container || !window.PORTFOLIO_DATA) return;
  const { faq } = PORTFOLIO_DATA;
  container.innerHTML = faq.map((f, i) => `
    <div class="faq-item">
      <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${i}" id="faq-q-${i}">
        <span data-en="${escHtml(f.qEn)}" data-ar="${escHtml(f.qAr)}">${escHtml(f.qEn)}</span>
        <span class="faq-icon" aria-hidden="true">+</span>
      </button>
      <div class="faq-answer" id="faq-answer-${i}" role="region" aria-labelledby="faq-q-${i}">
        <div class="faq-answer-inner">
          <span data-en="${escHtml(f.aEn)}" data-ar="${escHtml(f.aAr)}">${escHtml(f.aEn)}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderStats(container) {
  if (!container || !window.PORTFOLIO_DATA) return;
  const { stats } = PORTFOLIO_DATA;
  container.innerHTML = stats.map((s, i) => `
    <div class="stat-item reveal reveal-delay-${i + 1}">
      <div class="stat-value" data-counter data-target="${s.target}" data-suffix="${s.suffix}">
        ${s.target}${s.suffix}
      </div>
      <div class="stat-label">
        <span data-en="${s.labelEn}" data-ar="${s.labelAr}">${s.labelEn}</span>
      </div>
    </div>
  `).join('');
}

function renderContact(container) {
  if (!container || !window.PORTFOLIO_DATA) return;
  const { personal, links } = PORTFOLIO_DATA;
  container.innerHTML = `
    <div class="contact-detail-item" style="cursor:default;">
      <div class="contact-detail-icon" aria-hidden="true">📍</div>
      <div>
        <div class="contact-detail-label" data-en="Location" data-ar="الموقع">Location</div>
        <div class="contact-detail-value">
          <span data-en="${personal.location}" data-ar="${personal.locationAr}">${personal.location}</span>
        </div>
      </div>
    </div>
    <a href="tel:${personal.phone.replace(/\s/g,'')}" class="contact-detail-item">
      <div class="contact-detail-icon" aria-hidden="true">📞</div>
      <div>
        <div class="contact-detail-label" data-en="Phone / WhatsApp" data-ar="هاتف / واتساب">Phone / WhatsApp</div>
        <div class="contact-detail-value">${personal.phone}</div>
      </div>
    </a>
    <a href="mailto:${personal.email}" class="contact-detail-item">
      <div class="contact-detail-icon" aria-hidden="true">✉️</div>
      <div>
        <div class="contact-detail-label" data-en="Email" data-ar="البريد الإلكتروني">Email</div>
        <div class="contact-detail-value">${personal.email}</div>
      </div>
    </a>
    <a href="${personal.whatsapp}" target="_blank" rel="noopener" class="contact-detail-item">
      <div class="contact-detail-icon" aria-hidden="true">💬</div>
      <div>
        <div class="contact-detail-label" data-en="WhatsApp Chat" data-ar="محادثة واتساب">WhatsApp Chat</div>
        <div class="contact-detail-value" data-en="Message me on WhatsApp" data-ar="راسلني على واتساب">Message me on WhatsApp</div>
      </div>
    </a>
  `;
}

function renderPlatforms(container) {
  if (!container || !window.PORTFOLIO_DATA) return;
  const { links } = PORTFOLIO_DATA;
  const platforms = [
    { name: 'LinkedIn', nameAr: 'لينكد إن',   icon: '💼', url: links.linkedin },
    { name: 'Upwork',   nameAr: 'أب-ورك',      icon: '🔵', url: links.upwork   },
    { name: 'Khamsat',  nameAr: 'خمسات',        icon: '🟠', url: links.khamsat  },
    { name: 'Mostaql',  nameAr: 'مستقل',        icon: '🔷', url: links.mostaql  },
    { name: 'Fiverr',   nameAr: 'فايفر',        icon: '🟢', url: links.fiverr   },
  ];
  container.innerHTML = platforms.map(p => {
    const isPlaceholder = p.url.includes('[ADD:');
    const tag = isPlaceholder ? 'span' : 'a';
    const href = isPlaceholder ? '' : `href="${p.url}" target="_blank" rel="noopener"`;
    return `<${tag} ${href} class="platform-chip" ${isPlaceholder ? 'style="opacity:.5;cursor:default;"' : ''}>
      <span aria-hidden="true">${p.icon}</span>
      <span data-en="${p.name}" data-ar="${p.nameAr}">${p.name}</span>
    </${tag}>`;
  }).join('');
}

function renderHeroServicePreview(container) {
  if (!container || !window.PORTFOLIO_DATA) return;
  const { services } = PORTFOLIO_DATA;
  const preview = services.slice(0, 6);
  container.innerHTML = preview.map(s => `
    <div class="hero-service-tag">
      <span aria-hidden="true">${s.icon}</span>
      <span data-en="${s.titleEn}" data-ar="${s.titleAr}">${s.titleEn}</span>
    </div>
  `).join('');
}

/* ── ESCAPE HTML ────────────────────────────────────────────── */
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── PAGE-SPECIFIC INIT ─────────────────────────────────────── */
function initPage() {
  const page = window.location.pathname.split('/').pop() || 'index.html';

  if (page === 'index.html' || page === '') {
    renderHeroServicePreview($('#hero-services-preview'));
    renderStats($('#hero-stats'));
    initCounters();
  }
  if (page === 'services.html') {
    renderServices($('#services-grid'));
    renderSkills($('#skills-grid'));
    renderTools($('#tools-grid'));
    renderProcess($('#process-steps'));
    initSkillBars();
  }
  if (page === 'experience.html') {
    renderExperience($('#timeline'));
    renderCourses($('#courses-grid'));
    initFilter('course-filter-btn', 'course-card', 'all');
  }
  if (page === 'portfolio.html') {
    renderSamples($('#samples-grid'));
    renderTestimonials($('#testimonials-grid'));
    initFilter('sample-filter-btn', 'sample-card', 'all');
  }
  if (page === 'contact.html') {
    renderContact($('#contact-details'));
    renderPlatforms($('#platforms-row'));
    renderFAQ($('#faq-list'));
    initFAQ();
    initContactForm();

    // Set form action from data.js
    const form = $('#contact-form');
    if (form && window.PORTFOLIO_DATA) {
      const action = PORTFOLIO_DATA.links.formspree;
      if (!action.includes('[ADD:')) form.setAttribute('action', action);
    }
  }

  // Re-apply language after dynamic render
  const savedLang = localStorage.getItem('lang') || 'en';
  applyLang(savedLang, false);
}

/* ── BOOT ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initNavbar();
  initPage();
  initReveal();
});
