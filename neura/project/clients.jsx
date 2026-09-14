// Clientes (#clientes): título + dos filas de clientes que se desplazan en sentidos
// opuestos. Lo usan app.jsx (escritorio) y mobile.jsx.
import React from 'react';

const CLIENTS = [
  'Mevo', 'Ferrecolor', 'Ferretodo', 'Ferretería República', 'La Caribeña Fast Food', 'Asunhome',
  'Noktum', 'El Papu Store', 'Tradexpar', 'Lucía Rojas Studio', 'Triple7', 'Elevate',
];

// Copias de cada fila: con 3 siempre cubren el ancho de la pantalla al desplazarse
const COPIES = 3;

const Row = ({ items, reverse }) => (
  <div className={`cl-row${reverse ? ' cl-row--reverse' : ''}`}>
    <div className="cl-track">
      {/* La lista repetida para que el desplazamiento no tenga corte; las copias no se leen */}
      {Array.from({ length: COPIES }, (_, copy) => items.map((name) => (
        <div
          key={`${copy}-${name}`}
          className="cl-chip"
          role={copy === 0 ? 'listitem' : undefined}
          aria-hidden={copy > 0 || undefined}
        >
          <span className="cl-name">{name}</span>
        </div>
      )))}
    </div>
  </div>
);

const Clients = ({ mobile = false }) => {
  const half = Math.ceil(CLIENTS.length / 2);
  return (
    <section className={`cl ${mobile ? 'm-section m-section--dark' : 'clients-section dark'}`} id="clientes">
      <div className={mobile ? 'm-container' : 'container'}>
        <div className="cl-head">
          {mobile
            ? <div className="m-eyebrow reveal"><span className="m-dot" /> Clientes que confían en NEURA</div>
            : <div className="eyebrow reveal"><span className="dot" />Clientes que confían en NEURA</div>}
          <h2 className={mobile ? 'm-h2 reveal' : 'reveal'} data-delay="1">
            Empresas que ya están <span className="cl-accent">creciendo con orden</span>.
          </h2>
          <p className={mobile ? 'm-p reveal' : 'reveal'} data-delay="2">
            Más de 50 negocios de Paraguay digitalizaron su operación con nosotros: tiendas,
            ferreterías, gastronomía, inmobiliarias y más.
          </p>
        </div>
      </div>

      <div className="cl-rows reveal" data-delay="2" role="list" aria-label="Algunos de nuestros clientes">
        <Row items={CLIENTS.slice(0, half)} />
        <Row items={CLIENTS.slice(half)} reverse />
      </div>
    </section>
  );
};

export { Clients };
