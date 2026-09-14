// Galería de "Nuestro trabajo": filas justificadas. En cada fila todas las piezas tienen
// la misma altura y conservan su proporción, así que nada se recorta y las capturas
// horizontales salen mucho más grandes que las de celular.
// Solo CSS: ancho = (100% - huecos) × (proporción de la pieza / suma de la fila).
import React from 'react';
import LazyVideo from './lazy-video.jsx';
import './work-gallery.css';

const WorkGallery = ({ rows, gap = 12, shortLabels = false }) => (
  <div className="wg" style={{ '--wg-gap': `${gap}px` }}>
    {rows.map((row, r) => {
      const total = row.reduce((sum, it) => sum + it.w / it.h, 0);
      return (
        <div key={r} className="wg-row reveal">
          {row.map((it) => {
            const label = shortLabels ? it.short : it.label;
            return (
              <a
                key={it.id}
                href={it.url}
                className="wg-item"
                aria-label={it.label}
                style={{
                  width: `calc((100% - ${(row.length - 1) * gap}px) * ${(it.w / it.h) / total})`,
                  aspectRatio: `${it.w} / ${it.h}`,
                }}
              >
                {it.video
                  ? <LazyVideo className="wg-media" src={it.video} poster={it.poster} />
                  : <img className="wg-media" src={it.img} alt="" loading="lazy" decoding="async" />}
                <span className="wg-label" aria-hidden="true">{label}</span>
              </a>
            );
          })}
        </div>
      );
    })}
  </div>
);

export default WorkGallery;
