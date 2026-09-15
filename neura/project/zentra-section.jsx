// Zentra ERP (#zentra): el video de demostración del sistema (1:40, sin sonido; chats de clientes desenfocados),
// en bucle mientras se ve, con controles.
// Lo usan app.jsx (escritorio) y mobile.jsx.
import React from 'react';
import LazyVideo from './lazy-video.jsx';
import './zentra-section.css';

import demoVideo from './uploads/zentra/zentra-demo.mp4?url';
import demoPoster from './uploads/zentra/zentra-demo-poster.webp?url';

const MODULES = [
  'Ventas y caja', 'Clientes', 'CRM y embudo de ventas', 'Conversaciones', 'Sorteos',
  'Compras', 'Cobranzas', 'Inventario', 'Comandas y pedidos', 'Producción',
  'Facturación', 'RR. HH.', 'Reportes',
];

// Logo de Zentra (vector, blanco)
const ZentraLogo = (props) => (
  <svg viewBox="0 0 346 226" role="img" aria-label="Zentra" {...props}>
    <g fill="currentColor">
      <path d="M 269 131 L 207 104 L 223 60 L 118 132 Z"/>
      <path d="M 85 36 L 146 62 L 130 106 L 234 37 Z"/>
      <path d="M 237 166 L 237 198 L 245 198 L 245 188 L 246 187 L 256 187 L 265 198 L 274 198 L 273 195 L 266 187 L 269 186 L 273 182 L 274 179 L 273 171 L 269 167 L 266 166 Z"/>
      <path d="M 289 198 L 297 198 L 299 194 L 302 191 L 321 191 L 324 194 L 326 198 L 334 198 L 334 196 L 332 192 L 330 190 L 327 183 L 325 181 L 322 174 L 320 172 L 317 166 L 307 166 L 305 168 L 303 173 L 301 175 L 298 182 L 296 184 L 294 189 L 292 191 Z"/>
      <path d="M 127 166 L 127 198 L 134 198 L 134 178 L 135 177 L 158 198 L 166 198 L 166 166 L 158 166 L 158 185 L 157 186 L 148 179 L 135 166 Z"/>
      <path d="M 73 166 L 73 198 L 108 198 L 107 192 L 82 192 L 81 191 L 81 186 L 83 184 L 104 184 L 104 179 L 82 179 L 81 178 L 82 172 L 107 172 L 107 166 Z"/>
      <path d="M 18 166 L 18 172 L 40 172 L 41 173 L 18 193 L 18 198 L 55 198 L 55 193 L 54 192 L 32 192 L 31 191 L 54 171 L 54 166 Z"/>
      <path d="M 183 166 L 183 172 L 197 172 L 198 173 L 198 198 L 206 198 L 206 173 L 207 172 L 220 172 L 220 166 Z"/>
    </g>
  </svg>
);

// Sin sonido y en bucle: se reproduce solo mientras está en pantalla. Con controles para
// pausar, adelantar o verlo en pantalla completa.
const DemoVideo = () => (
  <div className="zs-player">
    <LazyVideo className="zs-video" src={demoVideo} poster={demoPoster} label="Demostración de Zentra ERP" controls />
  </div>
);

const ZentraSection = ({ mobile = false }) => (
  <section className={`zs ${mobile ? 'm-section' : 'zentra-section'}`} id="zentra">
    <div className={mobile ? 'm-container' : 'container'}>
      <div className="zs-head">
        <ZentraLogo className="zs-logo reveal" />
        <h2 className="reveal" data-delay="1">
          Un solo sistema para <span className="zs-accent">cualquier área de tu negocio</span>.
        </h2>
        <p className="reveal" data-delay="2">
          Zentra es nuestro ERP propio. Mirá cómo se usa por dentro: pedidos, producción, inventario,
          compras y reportes, todo conectado.
        </p>
      </div>

      <div className="reveal" data-delay="2">
        <DemoVideo />
      </div>

      <div className="zs-foot">
        <ul className="zs-modules" aria-label="Módulos de Zentra">
          {MODULES.map((m) => <li key={m}>{m}</li>)}
          <li className="zs-more">y mucho más</li>
        </ul>
      </div>
    </div>
  </section>
);

export default ZentraSection;
