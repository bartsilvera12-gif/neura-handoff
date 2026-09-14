// Nuestro trabajo — galería con las páginas de uploads/paginas
import React from 'react';
// Galería en filas (versión anterior): import WorkGallery from './work-gallery.jsx'; + <WorkGallery rows={WORK_ROWS} gap={14} />
import DeckShowcase from './deck-showcase.jsx';
import { WORK_COLUMNS, WORK_HERO } from './work-items.js';
import './work.css';

const Work = () => (
  <section className="work-section" id="trabajo">
    <div className="container">
      <div className="section-head work-head">
        <div className="eyebrow reveal"><span className="dot" />Nuestro trabajo</div>
        <h2 className="reveal" data-delay="1">
          Proyectos que ya están <span className="work-accent">funcionando</span>.
        </h2>
        <p className="reveal" data-delay="2">
          Sitios web y tiendas online que construimos para marcas de Paraguay y la región.
        </p>
      </div>
    </div>
    {/* Fuera del .container: ocupa todo el ancho y el alto de la pantalla */}
    <DeckShowcase columns={WORK_COLUMNS} heroId={WORK_HERO} className="ds-stage--full" />
  </section>
);

export default Work;
