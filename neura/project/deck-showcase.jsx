// Vitrina animada de "Nuestro trabajo" (inspirada en una animación de referencia):
// una tarjeta sola → se abre en mazo → se reparte en columnas que suben sin parar →
// la columna del medio se acomoda hasta dejar la tarjeta principal (`heroId`) en el
// centro → se vuelve a juntar en el mazo sobre ella, y otra vez. Con GSAP.
// Las piezas conservan su proporción (nada recortado): las horizontales ocupan todo el
// ancho de la columna y los teléfonos van de a dos.
// Con "reducir movimiento": columnas quietas, sin animación.
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import LazyVideo from './lazy-video.jsx';
import './deck-showcase.css';

const SPEED = 32;        // px por segundo de las columnas
const MARQUEE_TIME = 11; // segundos de columnas en movimiento por ciclo
const SETTLE = 1.2;      // segundos que tarda la columna del medio en centrar la principal
const HOLD = 0.7;        // pausa con el mazo cerrado
const COPIES = 3;        // copias de la lista en cada columna (recorrido sin corte)

// Con dominio real abre el sitio en otra pestaña
const linkProps = (it) => (/^https?:/.test(it.url)
  ? { href: it.url, target: '_blank', rel: 'noopener noreferrer' }
  : { href: it.url });

const Media = ({ it }) => (it.video
  ? <LazyVideo className="ds-media" src={it.video} poster={it.poster} />
  : <img className="ds-media" src={it.img} alt="" loading="lazy" decoding="async" />);

// Una pieza (horizontal) o un par de teléfonos. Las copias quedan fuera del teclado
// y de los lectores de pantalla (solo están para que el recorrido no tenga corte).
const Tile = ({ tile, heroId, copy }) => {
  const items = Array.isArray(tile) ? tile : [tile];
  const hidden = copy > 0;
  return (
    <div
      className={`ds-tile${items.length > 1 ? ' ds-tile--pair' : ''}`}
      data-hero={items.some((it) => it.id === heroId) || undefined}
      aria-hidden={hidden || undefined}
    >
      {items.map((it) => (
        <a
          key={it.id}
          {...linkProps(it)}
          className="ds-card"
          aria-label={it.label}
          tabIndex={hidden ? -1 : undefined}
          style={{ aspectRatio: `${it.w} / ${it.h}` }}
        >
          <Media it={it} />
          <span className="ds-label" aria-hidden="true">{items.length > 1 ? it.short : it.label}</span>
        </a>
      ))}
    </div>
  );
};

const DeckShowcase = ({ columns, heroId, className = '' }) => {
  const stageRef = useRef(null);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ctx;
    let visible = false;
    let resizeTimer;

    const build = () => {
      ctx?.revert();
      ctx = gsap.context((self) => {
        const cols = [...stage.querySelectorAll('.ds-col')];
        const tracks = cols.map((c) => c.querySelector('.ds-track'));
        const midIndex = Math.floor(cols.length / 2);
        const mid = cols[midIndex];
        const midTrack = tracks[midIndex];
        const stageH = stage.clientHeight;

        // Alto de una copia de la lista; la posición útil de cada pista va de -half a 0
        const halves = tracks.map((t) => t.scrollHeight / COPIES);
        const wraps = halves.map((h) => gsap.utils.wrap(-h, 0));

        // Columna del medio: posición que deja la tarjeta principal en el centro
        const heroTile = midTrack.querySelector('.ds-tile[data-hero]');
        const midHome = heroTile
          ? wraps[midIndex](stageH / 2 - (heroTile.offsetTop + heroTile.offsetHeight / 2))
          : 0;
        tracks.forEach((t, i) => {
          gsap.set(t, { y: i === midIndex ? midHome : -halves[i] * ((i * 0.37 + 0.2) % 1) });
        });

        // Columnas en movimiento: se crean desde donde estén y suben sin fin
        let marquees = [];
        const startMarquee = () => {
          marquees = tracks.map((track, i) => gsap.to(track, {
            y: `-=${halves[i]}`,
            duration: halves[i] / SPEED,
            ease: 'none',
            repeat: -1,
            modifiers: { y: (y) => `${wraps[i](parseFloat(y))}px` },
          }));
        };
        const stopMarquee = () => { marquees.forEach((m) => m.kill()); marquees = []; };

        // Mazo: se calcula en cada ciclo con las posiciones del momento
        const makeDeck = () => {
          const sr = stage.getBoundingClientRect();
          const cx = sr.left + sr.width / 2;
          const cy = sr.top + sr.height / 2;
          const mr = mid.getBoundingClientRect();
          const midX = mr.left + mr.width / 2;

          const tiles = [...stage.querySelectorAll('.ds-tile')];
          const info = tiles.map((el) => {
            const r = el.getBoundingClientRect();
            const cr = el.closest('.ds-col').getBoundingClientRect();
            return {
              el,
              inView: r.bottom > sr.top && r.top < sr.bottom,
              dxDeck: cx - (r.left + r.width / 2),
              dyDeck: cy - (r.top + r.height / 2),
              dxCol: midX - (cr.left + cr.width / 2),
              dist: Math.hypot(cx - (r.left + r.width / 2), cy - (r.top + r.height / 2)),
            };
          });
          const shown = info.filter((t) => t.inView);
          const hidden = info.filter((t) => !t.inView).map((t) => t.el);
          const byDist = (a, b) => a.dist - b.dist;
          // Arriba del mazo: la principal si está a la vista; si no, la del medio más centrada
          const hero = shown.filter((t) => t.el.dataset.hero && mid.contains(t.el)).sort(byDist)[0]
            || shown.filter((t) => mid.contains(t.el)).sort(byDist)[0]
            || shown[0];
          const rest = shown.filter((t) => t !== hero).sort(byDist);

          cols.forEach((c) => { c.style.zIndex = c.contains(hero.el) ? 2 : 1; });
          tiles.forEach((el) => { el.style.zIndex = ''; });
          hero.el.style.zIndex = 5;

          const tl = gsap.timeline({ paused: true });
          // 1. La tarjeta sola crece un poco
          tl.fromTo(hero.el, { x: hero.dxDeck, y: hero.dyDeck, scale: 0.9 },
            { scale: 1, duration: 0.55, ease: 'power2.out' }, 0);
          // 2. Aparece el mazo: las demás asoman por arriba
          rest.forEach((t, k) => {
            tl.fromTo(t.el, { x: t.dxDeck, y: t.dyDeck, scale: 0.94, autoAlpha: 0 },
              { y: t.dyDeck - Math.min(k + 1, 6) * 9, autoAlpha: 1, duration: 0.45, ease: 'power2.out' }, 0.35 + k * 0.025);
          });
          // 3. El mazo se despliega en una columna (la del medio)
          const unfold = 1.05;
          tl.to(hero.el, { x: hero.dxCol, y: 0, duration: 0.85, ease: 'power3.inOut' }, unfold);
          rest.forEach((t, k) => {
            tl.to(t.el, { x: t.dxCol, y: 0, scale: 1, duration: 0.85, ease: 'power3.inOut' }, unfold + k * 0.02);
          });
          // 4. La columna se reparte en todas
          const spread = unfold + 0.95;
          tl.to(shown.map((t) => t.el), { x: 0, duration: 0.7, ease: 'power3.inOut' }, spread);
          if (hidden.length) {
            tl.fromTo(hidden, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.01 }, spread + 0.7);
          }
          return tl;
        };

        let tl = makeDeck();
        tl.progress(0); // arranca con la tarjeta sola

        // Los callbacks corren fuera del contexto: self.add() los ata a él, así un
        // rebuild (resize) también mata los temporizadores del ciclo anterior.
        const close = () => self.add(() => {
          stopMarquee();
          // La columna del medio va (por el camino corto) a dejar la principal en el centro;
          // las demás frenan suave.
          const cur = wraps[midIndex](gsap.getProperty(midTrack, 'y'));
          const target = [midHome, midHome - halves[midIndex]]
            .sort((a, b) => Math.abs(a - cur) - Math.abs(b - cur))[0];
          gsap.fromTo(midTrack, { y: cur }, { y: target, duration: SETTLE, ease: 'power2.inOut' });
          tracks.forEach((t, i) => {
            if (i !== midIndex) gsap.to(t, { y: `-=${SPEED * 0.4}`, duration: 0.8, ease: 'power2.out' });
          });
          gsap.delayedCall(SETTLE + 0.05, () => self.add(() => {
            // Se cierra: el mazo de la posición actual, recorrido al revés
            tl.kill();
            tl = makeDeck();
            tl.progress(1);
            tl.eventCallback('onReverseComplete', () => self.add(() => {
              gsap.delayedCall(HOLD, () => { tl.play(); cycle(); });
            }));
            tl.reverse();
          }));
        });

        const cycle = () => {
          tl.eventCallback('onComplete', () => self.add(() => {
            startMarquee();
            gsap.delayedCall(MARQUEE_TIME, close);
          }));
        };
        cycle();
        if (visible) tl.play();

        // Pasar el mouse frena las columnas para poder mirar
        const slow = (to) => marquees.forEach((m) => gsap.to(m, { timeScale: to, duration: 0.5, overwrite: true }));
        const onEnter = () => slow(0);
        const onLeave = () => slow(1);
        stage.addEventListener('mouseenter', onEnter);
        stage.addEventListener('mouseleave', onLeave);

        stage._dsStart = () => { if (tl.progress() === 0 && !tl.isActive() && !tl.reversed()) tl.play(); };

        return () => {
          stage.removeEventListener('mouseenter', onEnter);
          stage.removeEventListener('mouseleave', onLeave);
          cols.forEach((c) => { c.style.zIndex = ''; });
          stage.querySelectorAll('.ds-tile').forEach((el) => { el.style.zIndex = ''; });
        };
      }, stage);
    };

    build();

    // Arranca la primera vez que se ve
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) stage._dsStart?.();
    }, { threshold: 0.25 });
    io.observe(stage);

    const onResize = () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(build, 250); };
    window.addEventListener('resize', onResize);

    return () => {
      io.disconnect();
      window.removeEventListener('resize', onResize);
      clearTimeout(resizeTimer);
      ctx?.revert();
    };
  }, [columns, heroId]);

  return (
    <div ref={stageRef} className={`ds-stage ${className}`}>
      {columns.map((col, i) => (
        <div key={i} className="ds-col">
          <div className="ds-track">
            {Array.from({ length: COPIES }, (_, copy) => col.map((tile, j) => (
              <Tile key={`${copy}-${j}`} tile={tile} heroId={heroId} copy={copy} />
            )))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeckShowcase;
