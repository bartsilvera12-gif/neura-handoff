import './styles.css';
import './hero.css';
import './sections.css';
import './clients.css';
import './privacy.css';
import './media-guard.css';
import './media-guard.js';
import './image-slot.js';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App, { WhatsAppBubble } from './app.jsx';
import MobileApp from './mobile.jsx';
import Privacy from './privacy.jsx';

const MOBILE_BREAKPOINT = 820;
// Ruta con "#/" para no chocar con las anclas de sección (#servicios, #contacto...).
const PRIVACY_HASH = '#/privacidad';

const Root = () => {
  const getIsMobile = () =>
    typeof window !== 'undefined' && window.innerWidth <= MOBILE_BREAKPOINT;
  const [isMobile, setIsMobile] = useState(getIsMobile);
  const [hash, setHash] = useState(() => window.location.hash);
  const isPrivacy = hash.startsWith(PRIVACY_HASH);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    const onChange = (e) => setIsMobile(e.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Entrar o salir de la política es un cambio de página: arranca arriba, o en la sección
  // pedida, que recién existe después del render (el salto nativo ya pasó sin ella).
  // `behavior: 'instant'` explícito porque `html, body { scroll-behavior: smooth }` haría
  // de esto una animación larga que se corta con imágenes cargando.
  useLayoutEffect(() => {
    const target = !isPrivacy && hash.length > 1 && document.getElementById(hash.slice(1));
    try {
      if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
      else window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } catch {
      // Navegadores viejos que no aceptan 'instant'
      if (target) target.scrollIntoView();
      else window.scrollTo(0, 0);
    }
  }, [isPrivacy]);

  if (isPrivacy) return <Privacy />;
  if (isMobile) return <MobileApp />;
  return (
    <>
      <App />
      <WhatsAppBubble />
    </>
  );
};

createRoot(document.getElementById('app')).render(<Root />);
