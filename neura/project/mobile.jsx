// NEURA — Mobile version (separate component tree)
import React, { useState, useEffect, useRef } from 'react';
import './mobile.css';
import logoUrl from './neura-logo.jpeg?url';
import Services from './services.jsx';
import { Clients } from './clients.jsx';
import ZentraSection from './zentra-section.jsx';
import DeckShowcase from './deck-showcase.jsx';
import { WORK_COLUMNS, WORK_COLUMNS_MOBILE, WORK_HERO } from './work-items.js';
import BrandClosing from './brand-closing.jsx';

const WA = '595973989068';

/* ---------- NAV ---------- */
const MNav = ({ open, setOpen, scrolled }) => {
  const close = () => setOpen(false);
  return (
    <>
      <nav className={`m-nav${scrolled ? ' scrolled' : ''}${open ? ' open' : ''}`}>
        <div className="m-nav-inner">
          <a href="#top" className="m-nav-logo" onClick={close}>
            <span className="m-nav-mark" style={{ backgroundImage: `url(${logoUrl})` }} />
            <span>NEURA</span>
          </a>
          <button
            type="button"
            className="m-nav-burger"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`m-drawer${open ? ' open' : ''}`}>
        <a href="#servicios" onClick={close}>Servicios</a>
        <a href="#metodo" onClick={close}>Método</a>
        <a href="#contacto" onClick={close}>Contacto</a>
        <a href="#contacto" className="m-drawer-cta" onClick={close}>Diagnóstico gratis</a>
      </div>
    </>
  );
};

/* ---------- HERO ---------- */
const MHero = () => (
  <section className="m-hero" id="top">
    <div className="m-hero-grid-bg" />
    <div className="m-hero-inner">
      <div className="m-hero-logo-wrap">
        <span className="m-hero-logo-ring" />
        <div
          className="m-hero-logo-mark"
          style={{ backgroundImage: `url(${logoUrl})` }}
        />
      </div>
      <div className="m-eyebrow m-hero-eyebrow">
        <span className="m-dot" /> Fernando de la Mora · Paraguay
      </div>
      <h1 className="m-h1 m-hero-h1">
        Creamos <span className="m-hl-grad">soluciones digitales</span> para que tu negocio crezca con orden.
      </h1>
      <p className="m-hero-sub">
        Sitios web, tiendas online, sistemas internos y asesoría contable
        para vender mejor y trabajar con más control.
      </p>
      <div className="m-hero-pill">
        <span>Menos caos</span>
        <span className="m-sep">·</span>
        <span>Más control</span>
        <span className="m-sep">·</span>
        <span className="m-strong">Más ventas</span>
      </div>
      <div className="m-hero-ctas">
        <a href="#contacto" className="m-btn m-btn--primary">
          Quiero digitalizar mi negocio
          <span className="m-arrow">
            <svg width="11" height="11" viewBox="0 0 12 12"><path d="M2 6h7M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </a>
        <a href="#servicios" className="m-btn m-btn--ghost">Ver soluciones</a>
      </div>
      <div className="m-hero-stats">
        <div className="m-stat">
          <div className="m-stat-num">50+</div>
          <div className="m-stat-label">Negocios digitalizados</div>
        </div>
        <div className="m-stat">
          <div className="m-stat-num">3x</div>
          <div className="m-stat-label">Ventas promedio</div>
        </div>
        <div className="m-stat">
          <div className="m-stat-num">24/7</div>
          <div className="m-stat-label">Operación automática</div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- PROBLEM ---------- */
const MProblem = () => {
  const cards = [
    { icon: '📩', t: 'Oportunidades sin seguimiento', s: 'Consultas por WhatsApp o formularios que no se atienden se transforman en ventas perdidas.' },
    { icon: '📋', t: 'Información desordenada', s: 'Datos repartidos entre Excel, chats y notas. Nadie tiene visión clara del negocio.' },
    { icon: '🔁', t: 'Procesos manuales', s: 'Tu equipo pierde tiempo en tareas que podrían automatizarse y medirse.' },
    { icon: '📉', t: 'Crecimiento sin control', s: 'Sin métricas ni estrategia es difícil saber qué funciona y dónde se pierde dinero.' },
  ];
  return (
    <section className="m-section m-section--dark">
      <div className="m-container">
        <div className="m-eyebrow reveal"><span className="m-dot" /> El problema</div>
        <h2 className="m-h2 reveal">Cuando tu negocio crece <span className="m-hl-green">sin estrategia</span>, también crecen los problemas.</h2>
        <p className="m-p reveal">Ventas que no se miden, procesos manuales y datos dispersos. NEURA ordena cada parte de tu operación digital para convertirla en <strong style={{ color: 'var(--m-on-dark)' }}>crecimiento real</strong>.</p>
        <div className="m-problem-cards">
          {cards.map((c, i) => (
            <div key={i} className="m-prob-card reveal" data-delay={i + 1}>
              <div className="m-prob-icon">{c.icon}</div>
              <div className="m-prob-body">
                <h4>{c.t}</h4>
                <p>{c.s}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- NUESTRO TRABAJO ---------- */
// Reemplaza a MProblem en la página (MProblem queda arriba, sin usar).
// Teléfono angosto: una columna. Teléfono horizontal o tablet (600px o más): las 3 de escritorio,
// si no las piezas quedan enormes.
const useWide = () => {
  const query = '(min-width: 600px)';
  const [wide, setWide] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setWide(e.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);
  return wide;
};

const MWork = () => {
  const wide = useWide();
  return (
  <section className="m-section m-work" id="trabajo">
    <div className="m-container">
      <div className="m-eyebrow reveal"><span className="m-dot" /> Nuestro trabajo</div>
      <h2 className="m-h2 reveal">Proyectos que ya están <span className="m-hl-green">funcionando</span>.</h2>
      <p className="m-p reveal">Sitios web y tiendas online que construimos para marcas de Paraguay y la región.</p>
      <DeckShowcase columns={wide ? WORK_COLUMNS : WORK_COLUMNS_MOBILE} heroId={WORK_HERO} className="ds-stage--full" />
    </div>
  </section>
  );
};

/* ---------- METHOD ---------- */
const MMethod = () => {
  const steps = [
    { n: '01', t: 'Diagnóstico profundo', s: 'Analizamos tu operación, canales de venta y puntos de fuga. Buscamos dónde se pierde tiempo y dinero.' },
    { n: '02', t: 'Diseño de solución', s: 'Definimos qué necesita tu negocio: web, tienda, sistema, automatización o una combinación.' },
    { n: '03', t: 'Implementación inteligente', s: 'Construimos soluciones modernas, escalables y conectadas a problemas reales.' },
    { n: '04', t: 'Medición y mejora', s: 'Medimos resultados y optimizamos para que tu empresa crezca con orden.' },
  ];
  return (
    <section className="m-section m-method-light" id="metodo">
      <div className="m-container">
        <div className="m-eyebrow reveal"><span className="m-dot" /> Método NEURA</div>
        <h2 className="m-h2 reveal">Primero entendemos. Después construimos.</h2>
        <p className="m-p reveal">Cuatro fases para evitar gastar en tecnología que no resuelve nada.</p>
        <div className="m-method-list">
          {steps.map((s, i) => (
            <div key={i} className="m-method-step reveal" data-delay={i + 1}>
              <div className="m-method-num">{s.n}</div>
              <div className="m-method-body">
                <h3>{s.t}</h3>
                <p>{s.s}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- DIFFERENTIAL ---------- */
const MDifferential = () => {
  const quotes = [
    'Una presencia digital sin estrategia no genera resultados.',
    'La tecnología sin dirección no transforma un negocio.',
    'Un negocio sin control no puede escalar con seguridad.',
  ];
  return (
    <section className="m-section" style={{ background: 'white' }}>
      <div className="m-container">
        <div className="m-eyebrow reveal"><span className="m-dot" /> Diferencial</div>
        <h2 className="m-h2 reveal">No hacemos soluciones aisladas. <span style={{ color: 'var(--m-text-mute)' }}>Creamos estrategias para crecer con orden.</span></h2>
        <p className="m-p reveal">Unimos web, sistemas, marketing, automatización y gestión en soluciones que se ven bien y ayudan a vender, ordenar y escalar.</p>
        <div className="m-quotes">
          {quotes.map((q, i) => (
            <div key={i} className="m-quote reveal" data-delay={i + 1}>
              <span className="m-quote-mark">"</span>
              {q}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- CTA ---------- */
const MCTA = () => (
  <section className="m-section" style={{ background: 'var(--m-ice)' }}>
    <div className="m-container">
      <div className="m-cta-card reveal">
        <div className="m-eyebrow"><span className="m-dot" /> Diagnóstico sin costo</div>
        <h2>¿Tu negocio está listo para trabajar con <span className="m-hl-green">más orden</span>?</h2>
        <p>Hablemos de tu empresa y veamos qué solución digital puede ayudarte a crecer.</p>
        <a
          href={`https://wa.me/${WA}?text=${encodeURIComponent('Hola NEURA 👋 Quiero solicitar el diagnóstico gratuito para mi negocio.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="m-btn m-btn--accent"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1l-.9 1.1c-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.5.1-.2 0-.3 0-.5-.1-.1-.7-1.5-.9-2.1-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-1 .9-1.2 2-.7 3.6.6 1.7 1.7 3.3 3 4.6 2.2 2.2 4.6 2.6 5.5 2.5.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"/><path d="M20.5 3.5C18.3 1.2 15.3 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.3-1.2-6.3-3.5-8.3zM12 22c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-3.7 1 1-3.7-.2-.4C2.5 15.7 2 13.9 2 12 2 6.5 6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/></svg>
          Solicitar diagnóstico por WhatsApp
        </a>
        <div className="m-cta-meta">
          <span>Respuesta en menos de 2h hábiles</span>
          <span>Fernando de la Mora · Paraguay</span>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- FOOTER ---------- */
const MFooter = () => (
  <footer className="m-footer" id="contacto">
    <div className="m-container">
      <div className="m-footer-brand">
        <span className="m-nav-mark" style={{ backgroundImage: `url(${logoUrl})` }} />
        <span>NEURA</span>
      </div>
      <p className="m-footer-desc">
        Construimos ecosistemas digitales para que las empresas vendan mejor y crezcan con orden.
      </p>
      <div className="m-footer-sections">
        <div>
          <h5>Servicios</h5>
          <ul>
            <li><a href="#servicios">Sitios web</a></li>
            <li><a href="#servicios">Sistemas a medida</a></li>
            <li><a href="#servicios">Asesoría contable</a></li>
          </ul>
        </div>
        <div>
          <h5>Empresa</h5>
          <ul>
            <li><a href="#metodo">Método</a></li>
            <li><a href="#trabajo">Casos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <h5>Contacto</h5>
          <ul>
            <li><a href="mailto:neurautomations@gmail.com">neurautomations@gmail.com</a></li>
            <li>Fernando de la Mora · Paraguay</li>
          </ul>
          <div className="m-footer-social">
            <a href="https://instagram.com/neura_py" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg></a>
            <a href="https://facebook.com/neura" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9V15h-2.5v-3h2.5V9.8c0-2.5 1.5-3.8 3.7-3.8 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 3h-2.3v6.9A10 10 0 0 0 22 12z"/></svg></a>
          </div>
        </div>
      </div>
      <div className="m-footer-bottom">
        © 2026 NEURA · Crecimiento con orden.
        <a href="#/privacidad" className="m-footer-legal">Política de privacidad</a>
      </div>
    </div>
  </footer>
);

/* ---------- FLOATING ---------- */
const MFloating = () => {
  const [showTop, setShowTop] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // En el footer el botón tapa enlaces (ej. política de privacidad): se oculta.
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([e]) => setNearFooter(e.isIntersecting));
    io.observe(footer);
    return () => io.disconnect();
  }, []);
  return (
    <>
      <button
        type="button"
        className={`m-back${showTop ? ' visible' : ''}`}
        aria-label="Volver arriba"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
      </button>
      <a
        href={`https://wa.me/${WA}?text=${encodeURIComponent('Hola NEURA 👋 ¿Hablamos?')}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`m-wa${nearFooter ? ' is-hidden' : ''}`}
        aria-label="WhatsApp"
        aria-hidden={nearFooter || undefined}
        tabIndex={nearFooter ? -1 : undefined}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1l-.9 1.1c-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.5.1-.2 0-.3 0-.5-.1-.1-.7-1.5-.9-2.1-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-1 .9-1.2 2-.7 3.6.6 1.7 1.7 3.3 3 4.6 2.2 2.2 4.6 2.6 5.5 2.5.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"/><path d="M20.5 3.5C18.3 1.2 15.3 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.3-1.2-6.3-3.5-8.3zM12 22c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-3.7 1 1-3.7-.2-.4C2.5 15.7 2 13.9 2 12 2 6.5 6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/></svg>
      </a>
    </>
  );
};

/* ---------- MAIN MOBILE APP ---------- */
const MobileApp = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Reveal on scroll (con fallback: nunca deja contenido invisible)
  useEffect(() => {
    const els = document.querySelectorAll('.m-app .reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px 0px 0px' });
    els.forEach(el => io.observe(el));
    const fallback = setTimeout(() => {
      document.querySelectorAll('.m-app .reveal:not(.in)').forEach(el => el.classList.add('in'));
    }, 1500);
    return () => { io.disconnect(); clearTimeout(fallback); };
  }, []);

  return (
    <div className="m-app">
      <MNav open={menuOpen} setOpen={setMenuOpen} scrolled={scrolled} />
      <MHero />
      <MWork />
      <Services mobile />
      <ZentraSection mobile />
      <MMethod />
      <Clients mobile />
      <MDifferential />
      <BrandClosing textScale={0.085} />
      <MFooter />
      <MFloating />
    </div>
  );
};

export default MobileApp;
