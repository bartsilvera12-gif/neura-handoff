// Main App
import React, { useState, useEffect } from 'react';
import {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRadio,
  TweakToggle,
} from './tweaks-panel.jsx';
import { Hero } from './hero.jsx';
import {
  Problem,
  Pillars,
  Method,
  Differential,
  Services,
  Projects,
  CTA,
  Footer,
} from './sections.jsx';
import { Clients } from './clients.jsx';

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "green",
  "density": "spacious",
  "darkSections": true,
  "showBlueprint": false
}/*EDITMODE-END*/;

const ACCENT_PRESETS = {
  green:  { primary: '#22D3A0', primaryDark: '#0c8a64', secondary: '#2F7BFF' },
  blue:   { primary: '#2F7BFF', primaryDark: '#1e54bf', secondary: '#22D3A0' },
  violet: { primary: '#8B5CF6', primaryDark: '#6d28d9', secondary: '#22D3A0' },
  amber:  { primary: '#F59E0B', primaryDark: '#b45309', secondary: '#2F7BFF' },
};

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <span className="mark"/>
            <span>NEURA</span>
          </a>
          <div className="nav-links">
            <a href="#servicios">Servicios</a>
            <a href="#metodo">Método</a>
<a href="#contacto">Contacto</a>
          </div>
          <a href="#contacto" className="nav-cta">Diagnóstico gratis</a>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply accent variables
  useEffect(() => {
    const preset = ACCENT_PRESETS[tweaks.accent] || ACCENT_PRESETS.green;
    const root = document.documentElement;
    root.style.setProperty('--accent-green', preset.primary);
    root.style.setProperty('--accent-blue', preset.secondary);
    root.style.setProperty('--accent-glow', preset.primary + '59');
    root.dataset.density = tweaks.density;
    root.dataset.dark = tweaks.darkSections ? 'on' : 'off';
    root.dataset.blueprint = tweaks.showBlueprint ? 'on' : 'off';
  }, [tweaks]);

  // Reveal on scroll
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Cursor gradient on dark sections
  useEffect(() => {
    const sections = document.querySelectorAll('[data-cursor-glow]');
    const handlers = [];
    sections.forEach(sec => {
      const onMove = (e) => {
        const r = sec.getBoundingClientRect();
        const glow = sec.querySelector('.cursor-glow');
        if (!glow) return;
        glow.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        glow.style.setProperty('--my', (e.clientY - r.top) + 'px');
      };
      sec.addEventListener('mousemove', onMove);
      handlers.push([sec, onMove]);
    });
    return () => handlers.forEach(([sec, h]) => sec.removeEventListener('mousemove', h));
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Pillars />
      <div id="metodo"><Method /></div>
      <Differential />
      <Services />
      <Clients />
      <Projects />
      <CTA />
      <Footer />

      <TweaksPanel title="Tweaks NEURA">
        <TweakSection label="Acento de marca">
          <TweakRadio
            label="Color principal"
            value={tweaks.accent}
            options={[
              {value: 'green', label: 'Verde'},
              {value: 'blue', label: 'Azul'},
              {value: 'violet', label: 'Violeta'},
              {value: 'amber', label: 'Ámbar'},
            ]}
            onChange={v => setTweak('accent', v)}
          />
        </TweakSection>

        <TweakSection label="Densidad">
          <TweakRadio
            label="Espaciado de secciones"
            value={tweaks.density}
            options={[
              {value: 'cozy', label: 'Cómodo'},
              {value: 'spacious', label: 'Amplio'},
            ]}
            onChange={v => setTweak('density', v)}
          />
        </TweakSection>

        <TweakSection label="Estilo">
          <TweakToggle
            label="Secciones oscuras alternadas"
            value={tweaks.darkSections}
            onChange={v => setTweak('darkSections', v)}
          />
          <TweakToggle
            label="Modo blueprint (dev)"
            value={tweaks.showBlueprint}
            onChange={v => setTweak('showBlueprint', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

export const WhatsAppBubble = () => (
  <a
    href="https://wa.me/595"
    target="_blank"
    rel="noopener noreferrer"
    className="wa-bubble"
    aria-label="Contactar por WhatsApp"
  >
    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1l-.9 1.1c-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.5.1-.2 0-.3 0-.5-.1-.1-.7-1.5-.9-2.1-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-1 .9-1.2 2-.7 3.6.6 1.7 1.7 3.3 3 4.6 2.2 2.2 4.6 2.6 5.5 2.5.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"/>
      <path d="M20.5 3.5C18.3 1.2 15.3 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.3-1.2-6.3-3.5-8.3zM12 22c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-3.7 1 1-3.7-.2-.4C2.5 15.7 2 13.9 2 12 2 6.5 6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/>
    </svg>
    <span className="wa-bubble-label">¿Hablamos?</span>
  </a>
);

export default App;
