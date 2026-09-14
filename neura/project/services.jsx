// Servicios (#servicios): los tres a la vista, en tarjetas (antes eran pestañas que
// escondían dos de los tres). Lo usan app.jsx (escritorio) y mobile.jsx.
import React from 'react';
import LazyVideo from './lazy-video.jsx';
import './services.css';

import papuVideo from './uploads/paginas/papu.mp4?url';
import papuPoster from './uploads/paginas/papu-poster.webp?url';
import mgstore from './uploads/paginas/mgstore.webp?url';
// Fragmento de 10 s (sin sonido) del video de demostración de Zentra
import zentraVideo from './uploads/zentra/zentra-loop.mp4?url';
import zentraPoster from './uploads/zentra/zentra-loop-poster.webp?url';

const wa = (phone, text) => `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
const WA_NEURA = '595973989068';
const WA_CONTABLE = '595976748048';

const Check = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const Arrow = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 6h7M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const Features = ({ items }) => (
  <ul className="svc-features">
    {items.map((f) => <li key={f}><span className="svc-check"><Check /></span>{f}</li>)}
  </ul>
);

// Los links a WhatsApp abren otra pestaña; los internos (#zentra) no
const Cta = ({ href, children, light }) => (
  <a href={href} {...(href.startsWith('#') ? {} : { target: '_blank', rel: 'noopener noreferrer' })} className={`svc-btn${light ? ' svc-btn--light' : ''}`}>
    {children}<span className="svc-btn-arrow"><Arrow /></span>
  </a>
);

const Bar = ({ label }) => (
  <div className="svc-bar" aria-hidden="true">
    <span className="svc-dots"><i /><i /><i /></span>
    <span className="svc-url">{label}</span>
  </div>
);

const PLANS = [
  { n: 'Planes de IVA', p: 'Gs. 150.000' },
  { n: 'Planes empresariales', p: 'Gs. 440.000' },
  { n: 'Inscripción de persona física', note: 'Incluye talonario o factura virtual/electrónica', p: 'Gs. 200.000' },
  { n: 'Constitución de EAS, S.A. o SRL', note: 'Incluye apertura de cuenta bancaria', p: 'Gs. 660.000' },
];

const Services = ({ mobile = false }) => (
  <section className={`svc ${mobile ? 'm-section' : 'services-section'}`} id="servicios">
    <div className={mobile ? 'm-container' : 'container'}>
      <div className="svc-head">
        {mobile
          ? <div className="m-eyebrow reveal"><span className="m-dot" /> Servicios</div>
          : <div className="eyebrow reveal"><span className="dot" />Servicios</div>}
        <h2 className={mobile ? 'm-h2 reveal' : 'reveal'} data-delay="1">
          Todo lo que necesita tu operación, <span className="svc-accent">en un solo equipo</span>.
        </h2>
        <p className={mobile ? 'm-p reveal' : 'reveal'} data-delay="2">
          Web, sistema de gestión y contabilidad: tres servicios que trabajan conectados.
        </p>
      </div>

      <div className="svc-grid">
        {/* Web: la tarjeta grande, con un sitio real del portafolio */}
        <article className="svc-card svc-card--web reveal">
          <div className="svc-copy">
            <span className="svc-tag">01 · Web</span>
            <h3>Sitios web y tiendas online</h3>
            <p>Sitios rápidos, accesibles y pensados para vender, con formularios conectados a tu WhatsApp.</p>
            <Features items={['Diseño a medida', 'Carga en menos de 1,5 s', 'Hosting gestionado']} />
            <Cta href={wa(WA_NEURA, 'Hola NEURA 👋 Quiero cotizar mi página web. ¿Me pueden pasar info?')}>Cotizar mi web</Cta>
          </div>
          <div className="svc-web-visual">
            <div className="svc-browser">
              <Bar label="elpapustore.com.py" />
              <LazyVideo className="svc-media" src={papuVideo} poster={papuPoster} label="Tienda online de El Papu Store" style={{ aspectRatio: '1280 / 622' }} />
            </div>
            <div className="svc-phone" aria-hidden="true">
              <img src={mgstore} alt="" loading="lazy" decoding="async" />
            </div>
          </div>
        </article>

        {/* Zentra */}
        <article className="svc-card svc-card--zentra reveal" data-delay="1">
          <div className="svc-copy">
            <span className="svc-tag svc-tag--blue">02 · Sistema</span>
            <h3>Zentra ERP</h3>
            <p>Nuestro sistema propio: ventas, compras, inventario, clientes, facturación y reportes en un solo lugar.</p>
            <Features items={['Ventas e inventario', 'Facturación electrónica', 'CRM de clientes', 'Reportes en tiempo real']} />
            <Cta href="#zentra">Ver Zentra en video</Cta>
          </div>
          <div className="svc-browser svc-browser--zentra">
            <Bar label="Zentra ERP · Panel" />
            <LazyVideo className="svc-media" src={zentraVideo} poster={zentraPoster} label="Panel de Zentra ERP" style={{ aspectRatio: '1280 / 598' }} />
          </div>
        </article>

        {/* Contable: los planes con precio */}
        <article className="svc-card svc-card--acc reveal" data-delay="2">
          <div className="svc-copy">
            <span className="svc-tag">03 · Contabilidad</span>
            <h3>Asesoría contable</h3>
            <p>IVA, IRE, presentaciones y orden financiero al día, para empresas y emprendedores.</p>
          </div>
          <ul className="svc-plans">
            {PLANS.map((pl) => (
              <li key={pl.n} className="svc-plan">
                <div>
                  <span className="svc-plan-name">{pl.n}</span>
                  {pl.note && <span className="svc-plan-note">{pl.note}</span>}
                </div>
                <span className="svc-plan-price"><small>Desde</small>{pl.p}</span>
              </li>
            ))}
          </ul>
          <Cta href={wa(WA_CONTABLE, 'Hola NEURA 👋 Quiero asesoría contable para mi empresa. ¿Me cuentan cómo trabajan?')}>Cotizar asesoría</Cta>
        </article>
      </div>
    </div>
  </section>
);

export default Services;
