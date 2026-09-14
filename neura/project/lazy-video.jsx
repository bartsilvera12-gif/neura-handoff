// Video en bucle y sin sonido (reemplazo liviano de un GIF): se descarga y reproduce
// solo mientras está en pantalla. Con "reducir movimiento" queda la imagen fija.
// Sin opciones de descarga, imagen en imagen ni transmitir (ver media-guard.js).
import React, { useEffect, useRef } from 'react';

// `controls`: muestra la barra del reproductor (pausa, adelantar, pantalla completa).
const LazyVideo = ({ src, poster, label, className, style, controls = false }) => {
  const ref = useRef(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // Como propiedades: React no conoce todos estos atributos
    v.disablePictureInPicture = true;
    v.disableRemotePlayback = true;
    // Con controles se deja cambiar la velocidad; descargar nunca
    v.setAttribute('controlslist', controls ? 'nodownload noremoteplayback' : 'nodownload noremoteplayback noplaybackrate');
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {});
      else v.pause();
    }, { threshold: 0.2 });
    io.observe(v);
    return () => io.disconnect();
  }, [controls]);
  return (
    <video
      ref={ref}
      className={className}
      style={style}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload={controls ? 'metadata' : 'none'}
      controls={controls}
      draggable={false}
      aria-label={label}
    />
  );
};

export default LazyVideo;
