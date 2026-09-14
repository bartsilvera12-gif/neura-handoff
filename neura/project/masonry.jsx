// Masonry — React Bits (reactbits.dev), variante JS + CSS.
// Cambios respecto del original:
//  - El contenedor toma el alto de la columna más alta (los ítems son absolutos y el
//    original lo dejaba en 0: la sección se superponía con la siguiente).
//  - Columnas configurables (`queries` / `columnValues`).
//  - Precarga y animación de entrada recién cuando la grilla entra en pantalla.
//  - Ítems como <a href> (accesibles y sin abrir pestañas vacías si no hay url).
//  - Ítems con `video` (+ `poster`): video en bucle que corre solo en pantalla.
//  - Ítems con `ratio` (alto / ancho): la tarjeta toma la proporción real de la imagen,
//    así se ve entera, sin recortes. Sin `ratio` se usa `height` como en el original.
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import LazyVideo from './lazy-video.jsx';

import './masonry.css';

const DEFAULT_QUERIES = ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'];
const DEFAULT_VALUES = [5, 4, 3, 2];
// Debe coincidir con el padding de .item-wrapper (masonry.css y mobile.css)
const ITEM_PAD = 6;

const useMedia = (queries, values, defaultValue) => {
  const get = () => {
    if (typeof window === 'undefined') return defaultValue;
    return values[queries.findIndex(q => matchMedia(q).matches)] ?? defaultValue;
  };

  const [value, setValue] = useState(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach(q => matchMedia(q).addEventListener('change', handler));
    return () => queries.forEach(q => matchMedia(q).removeEventListener('change', handler));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries]);

  return value;
};

const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size];
};

// Se activa una sola vez, cuando el elemento se acerca a la pantalla.
const useInView = (ref, rootMargin = '0px 0px -10% 0px') => {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (!('IntersectionObserver' in window)) { setInView(true); return; }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); io.disconnect(); }
    }, { rootMargin });
    io.observe(el);
    return () => io.disconnect();
  }, [ref, rootMargin, inView]);
  return inView;
};

const preloadImages = async urls => {
  await Promise.all(
    urls.map(
      src =>
        new Promise(resolve => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

const Masonry = ({
  items,
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.05,
  animateFrom = 'bottom',
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
  queries = DEFAULT_QUERIES,
  columnValues = DEFAULT_VALUES,
  className = ''
}) => {
  const columns = useMedia(queries, columnValues, 1);

  const [containerRef, { width }] = useMeasure();
  const inView = useInView(containerRef);
  const [imagesReady, setImagesReady] = useState(false);

  const getInitialPosition = item => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;

    if (animateFrom === 'random') {
      const directions = ['top', 'bottom', 'left', 'right'];
      direction = directions[Math.floor(Math.random() * directions.length)];
    }

    switch (direction) {
      case 'top':
        return { x: item.x, y: -200 };
      case 'bottom':
        return { x: item.x, y: window.innerHeight + 200 };
      case 'left':
        return { x: -200, y: item.y };
      case 'right':
        return { x: window.innerWidth + 200, y: item.y };
      case 'center':
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  };

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    preloadImages(items.map(i => i.poster || i.img)).then(() => { if (!cancelled) setImagesReady(true); });
    return () => { cancelled = true; };
  }, [items, inView]);

  const { grid, totalHeight } = useMemo(() => {
    if (!width) return { grid: [], totalHeight: 0 };

    const colHeights = new Array(columns).fill(0);
    const columnWidth = width / columns;

    const placed = items.map(child => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = columnWidth * col;
      const height = child.ratio
        ? (columnWidth - ITEM_PAD * 2) * child.ratio + ITEM_PAD * 2
        : child.height / 2;
      const y = colHeights[col];

      colHeights[col] += height;

      return { ...child, x, y, w: columnWidth, h: height };
    });

    return { grid: placed, totalHeight: Math.max(...colHeights) };
  }, [columns, items, width]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady) return;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animationProps = {
        x: item.x,
        y: item.y,
        width: item.w,
        height: item.h
      };

      if (!hasMounted.current) {
        const initialPos = getInitialPosition(item, index);
        const initialState = {
          opacity: 0,
          x: initialPos.x,
          y: initialPos.y,
          width: item.w,
          height: item.h,
          ...(blurToFocus && { filter: 'blur(10px)' })
        };

        gsap.fromTo(selector, initialState, {
          opacity: 1,
          ...animationProps,
          ...(blurToFocus && { filter: 'blur(0px)' }),
          duration: 0.8,
          ease: 'power3.out',
          delay: index * stagger
        });
      } else {
        gsap.to(selector, {
          ...animationProps,
          duration: duration,
          ease: ease,
          overwrite: 'auto'
        });
      }
    });

    hasMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

  const handleMouseEnter = (e, item) => {
    const element = e.currentTarget;
    const selector = `[data-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: hoverScale,
        duration: 0.3,
        ease: 'power2.out'
      });
    }

    if (colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay');
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0.3,
          duration: 0.3
        });
      }
    }
  };

  const handleMouseLeave = (e, item) => {
    const element = e.currentTarget;
    const selector = `[data-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }

    if (colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay');
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3
        });
      }
    }
  };

  return (
    <div ref={containerRef} className={`list ${className}`} style={{ height: totalHeight || undefined }}>
      {grid.map(item => {
        const Tag = item.url ? 'a' : 'div';
        const external = item.url && /^https?:/.test(item.url);
        return (
          <Tag
            key={item.id}
            data-key={item.id}
            className="item-wrapper"
            href={item.url}
            aria-label={item.label}
            {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
            onMouseEnter={e => handleMouseEnter(e, item)}
            onMouseLeave={e => handleMouseLeave(e, item)}
          >
            <div className="item-img" style={{ backgroundImage: `url(${item.poster || item.img})`, backgroundPosition: item.position }}>
              {item.video && (
                <LazyVideo src={item.video} poster={item.poster} className="item-video" style={{ objectPosition: item.position }} />
              )}
              {colorShiftOnHover && (
                <div
                  className="color-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(45deg, rgba(255,0,150,0.5), rgba(0,150,255,0.5))',
                    opacity: 0,
                    pointerEvents: 'none',
                    borderRadius: '8px'
                  }}
                />
              )}
              {item.label && <span className="item-label">{item.label}</span>}
            </div>
          </Tag>
        );
      })}
    </div>
  );
};

export default Masonry;
