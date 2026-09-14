// Cierre de la página: el lema con el brillo de NEURA fluyendo dentro de las letras.
// Lo usan app.jsx (escritorio) y mobile.jsx.
import React from 'react';
import MaskedHeading from './masked-heading.jsx';
import './brand-closing.css';

// Relleno de las letras: todo en colores de marca (verde → teal → azul) con reflejos
// claros que se mueven. Sin zonas navy: sobre el fondo oscuro se perderían.
// SVG embebido: no descarga ningún archivo.
const FIELD = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 600" preserveAspectRatio="none">
<defs>
<linearGradient id="base" x1="0" y1="0" x2="1" y2="0.3"><stop offset="0" stop-color="#22D3A0"/><stop offset="0.5" stop-color="#4FAEB2"/><stop offset="1" stop-color="#2F7BFF"/></linearGradient>
<radialGradient id="h1" cx="28%" cy="35%" r="30%"><stop offset="0" stop-color="#B8FBE4" stop-opacity="0.85"/><stop offset="1" stop-color="#B8FBE4" stop-opacity="0"/></radialGradient>
<radialGradient id="h2" cx="74%" cy="68%" r="32%"><stop offset="0" stop-color="#BFD6FF" stop-opacity="0.75"/><stop offset="1" stop-color="#BFD6FF" stop-opacity="0"/></radialGradient>
</defs>
<rect width="1600" height="600" fill="url(#base)"/>
<rect width="1600" height="600" fill="url(#h1)"/>
<rect width="1600" height="600" fill="url(#h2)"/>
</svg>`)}`;

const BrandClosing = ({ textScale = 0.06 }) => (
  <section className="brand-closing">
    <div className="brand-closing__inner">
      <MaskedHeading
        text="¿Tu negocio está listo para trabajar con más orden?"
        src={FIELD}
        fillScale={1.3}
        parallax={30}
        drift={24}
        reveal="rise"
        trigger="view"
        weight={800}
        tracking={-0.04}
        lineHeight={1.05}
        textScale={textScale}
        style={{ fontFamily: 'var(--font-display)' }}
      />
    </div>
  </section>
);

export default BrandClosing;
