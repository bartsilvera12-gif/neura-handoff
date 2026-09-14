// Hero — "NEURA" gigante con las letras del logo; al scrollear, la cámara entra por la E
// hasta el contenido.
import React, { useEffect, useState } from 'react';
import GlyphPortal from './glyph-portal.jsx';
import { NEURA_GLYPHS, NEURA_DOTS } from './neura-glyphs.js';
import './glyph-hero.css';

const WORD = 'NEURA';

// Caja de la palabra en las unidades de las letras: el SVG de los puntos usa la misma, así
// cae justo sobre la N (el portal publica el alto real en --gp-word-top/--gp-word-bottom).
const BOX = (() => {
  const x0 = Math.min(...NEURA_GLYPHS.map((g) => g.box.x));
  const y0 = Math.min(...NEURA_GLYPHS.map((g) => g.box.y));
  const x1 = Math.max(...NEURA_GLYPHS.map((g) => g.box.x + g.box.width));
  const y1 = Math.max(...NEURA_GLYPHS.map((g) => g.box.y + g.box.height));
  return { x: x0, y: y0, width: x1 - x0, height: y1 - y0 };
})();

// Cada tarjeta toma el color de su zona en la palabra: verde, teal, azul.
const SERVICES = [
  {
    t: 'Sitios web profesionales', color: '#22D3A0',
    s: 'Rápidos y pensados para convertir.',
    features: ['Diseño a medida', 'Velocidad <1.5s', 'Hosting gestionado'],
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M8 14h2"/></svg>,
  },
  {
    t: 'Zentra ERP', color: '#4FAEB2',
    s: 'Todo tu negocio en un solo sistema.',
    features: ['Ventas e inventario', 'Facturación electrónica', 'CRM de clientes'],
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  },
  {
    t: 'Asesoría contable', color: '#2F7BFF',
    s: 'Tu contabilidad e impuestos, al día.',
    features: ['IVA y IRE al día', 'Liquidación mensual', 'Reportes contables'],
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h8M8 15h5"/></svg>,
  },
];

const Check = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Arrow = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M2 6h7M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Tamaño y posición de la palabra según la pantalla:
// - Alto: lo más grande posible (hasta el 90% del ancho) dejando lugar, arriba, para el
//   header, el texto chico y los puntos del logo, y abajo para el texto, el botón y
//   "Deslizá para entrar".
// - En pantallas más altas que anchas (tablet vertical) el bloque se centra en el alto.
const DOTS_ABOVE = (() => { // cuánto suben los puntos sobre la palabra, en fracción de su alto
  const top = Math.min(...NEURA_DOTS.map((d) => d.cy - d.r));
  return Math.max(0, (BOX.y - top) / BOX.height);
})();

const useHeroFit = () => {
  const [fit, setFit] = useState(null);
  useEffect(() => {
    const measure = () => {
      const nav = document.querySelector('nav.nav');
      const navH = nav ? nav.offsetHeight : 80;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const ABOVE = 46 + 20;  // texto chico (18) + separaciones
      const BELOW = 136;      // texto + botón debajo de la palabra
      const HINT = h * 0.06 + 26; // "Deslizá para entrar"
      const byWidth = w * 0.9 * (BOX.height / BOX.width);
      const byHeight = (h - HINT - BELOW - navH - ABOVE) / (1 + DOTS_ABOVE);
      const size = Math.round(Math.max(120, Math.min(byWidth, byHeight)));
      let top = navH + ABOVE + DOTS_ABOVE * size;
      if (h > w * 0.8) {
        const block = ABOVE + DOTS_ABOVE * size + size + BELOW;
        top = Math.max(top, navH + (h - HINT - navH - block) / 2 + ABOVE + DOTS_ABOVE * size);
      }
      setFit({ top: Math.round(top), size });
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);
  return fit;
};

const GlyphHero = () => {
  const fit = useHeroFit();

  if (fit == null) return <section className="glyph-hero glyph-hero--loading" aria-label={WORD} />;

  return (
    <GlyphPortal
      className="glyph-hero"
      word={WORD}
      glyphs={NEURA_GLYPHS}
      focusChar="E"
      scrollLength={2.4}
      wordTop={fit.top}
      wordMaxHeight={fit.size}
      overlay
      interactive={false}
      enterLabel="Conocé cómo trabajamos"
      style={{
        '--gp-paper': 'var(--ice)',
        '--gp-ink': 'var(--ink)',
        '--gp-field': '#213046',
        '--gp-foreground': '#F4F7FB',
        fontFamily: 'var(--font-body)',
      }}
      background={<div className="gh-field" />}
      front={
        <>
          {/* Los puntos turquesa del logo sobre la N; se van con el resto al empezar el zoom */}
          <svg
            className="gh-dots"
            viewBox={`${BOX.x} ${BOX.y} ${BOX.width} ${BOX.height}`}
            style={{ aspectRatio: `${BOX.width} / ${BOX.height}` }}
            aria-hidden="true"
          >
            {NEURA_DOTS.map((d, i) => <circle key={i} cx={d.cx} cy={d.cy} r={d.r} />)}
          </svg>
          <p className="gh-eyebrow">
            <span className="gh-dot" />
            Ecosistemas digitales · Fernando de la Mora, Paraguay
          </p>
          <p className="gh-support">Soluciones digitales para que tu negocio venda más y crezca con orden.</p>
          <span className="gh-scroll">Deslizá para entrar ↓</span>
        </>
      }
    >
      <div className="gh-content">
        <div className="gh-head">
          <div>
            <p className="gh-kicker"><span className="gh-dot" />Lo que hacemos</p>
            <h2>
              Vendé más, trabajá mejor y <span className="gh-hl">crecé con orden</span>.
            </h2>
          </div>
          <div className="gh-head-side">
            <div className="gh-ctas">
              <a href="#contacto" className="gh-btn gh-btn--primary">
                Quiero digitalizar mi negocio
                <span className="gh-btn-arrow"><Arrow /></span>
              </a>
              <a href="#servicios" className="gh-btn gh-btn--ghost">Ver soluciones</a>
            </div>
          </div>
        </div>

        <div className="gh-cards">
          {SERVICES.map((item) => (
            <article className="gh-card" key={item.t} style={{ '--c': item.color }}>
              <span className="gh-card-icon">{item.icon}</span>
              <h3>{item.t}</h3>
              <p>{item.s}</p>
              <ul>
                {item.features.map((f) => <li key={f}><span className="gh-check"><Check /></span>{f}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </GlyphPortal>
  );
};

export default GlyphHero;
