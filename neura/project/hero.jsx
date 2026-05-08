// Hero — animated ecosystem dashboard
import React from 'react';
import logoUrl from './neura-logo.svg?url';
import showcase1 from './assets/uploads/1.svg?url';
import showcase2 from './assets/uploads/2.svg?url';
import showcase3 from './assets/uploads/3.svg?url';
import showcase4 from './assets/uploads/4.svg?url';

const webShowcaseSlides = [showcase1, showcase2, showcase3, showcase4];

const Hero = () => {
  const [chatStep, setChatStep] = React.useState(0);
  const [pedidos, setPedidos] = React.useState(0);
  const [conversion, setConversion] = React.useState(0);
  const [swapped, setSwapped] = React.useState(false);
  const userClicked = React.useRef(false);
  const autoInterval = React.useRef(null);
  const resumeTimer = React.useRef(null);

  // Live typing chat
  const messages = [
    { from: 'cliente', text: 'Hola, ¿tienen stock del producto?' },
    { from: 'bot',     text: '¡Hola! Sí, disponible. ¿Te paso el link?' },
    { from: 'cliente', text: 'Sí por favor 🙌' },
    { from: 'bot',     text: 'Aquí: neura.com.py/p/123' },
  ];

  React.useEffect(() => {
    const t = setInterval(() => setChatStep(s => (s + 1) % (messages.length + 2)), 1800);
    return () => clearInterval(t);
  }, []);

  // Auto-swap: start after 10s, toggle every 20s; pauses on click until full video cycle (16s)
  const startAutoInterval = React.useCallback(() => {
    clearInterval(autoInterval.current);
    autoInterval.current = setInterval(() => {
      if (!userClicked.current) setSwapped(s => !s);
    }, 10000);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (!userClicked.current) setSwapped(true);
      startAutoInterval();
    }, 10000);
    return () => {
      clearTimeout(timer);
      clearInterval(autoInterval.current);
      clearTimeout(resumeTimer.current);
    };
  }, [startAutoInterval]);

  // Animated counters in dashboard
  React.useEffect(() => {
    let raf, start;
    const target1 = 184, target2 = 32;
    const dur = 1800;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setPedidos(Math.round(target1 * e));
      setConversion(parseFloat((target2 * e).toFixed(1)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
      </div>

      <div className="container hero-container">
        <div className="hero-copy">
          <div className="eyebrow reveal" data-delay="0">
            <span className="dot"></span>
            Ecosistemas digitales · Asunción, Paraguay
          </div>
          <h1 className="reveal" data-delay="1">
            Creamos <span className="hl">soluciones digitales</span> para que tu negocio venda más, trabaje mejor y <span className="hl-2">crezca con orden</span>.
          </h1>
          <p className="hero-sub reveal" data-delay="2">
            Creamos sitios web, tiendas online, sistemas internos, automatizaciones, marketing
            digital y soluciones contables para que tu empresa <strong>venda mejor</strong>,
            <strong> trabaje con más orden</strong> y tome decisiones con datos reales.
          </p>

          <div className="hero-pill reveal" data-delay="3">
            <span>Menos caos.</span>
            <span className="sep">·</span>
            <span>Más control.</span>
            <span className="sep">·</span>
            <span className="strong">Más ventas.</span>
          </div>

          <div className="hero-ctas reveal" data-delay="4">
            <a href="#contacto" className="btn btn-primary">
              Quiero digitalizar mi negocio
              <span className="arrow">
                <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6h7M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </a>
            <a href="#servicios" className="btn btn-ghost">Ver soluciones</a>
          </div>

          <div className="hero-stats reveal" data-delay="5">
            <div className="stat">
              <div className="stat-num">+50</div>
              <div className="stat-label">empresas con orden digital</div>
            </div>
            <div className="stat-sep" />
            <div className="stat">
              <div className="stat-num">6</div>
              <div className="stat-label">áreas integradas</div>
            </div>
            <div className="stat-sep" />
            <div className="stat">
              <div className="stat-num">24/7</div>
              <div className="stat-label">automatización</div>
            </div>
          </div>
        </div>

        {/* ECOSYSTEM MOCKUP */}
        <div className={`hero-mockup${swapped ? ' swapped' : ''}`}>
          {/* connection lines */}
          <svg className="hero-lines" viewBox="0 0 600 600" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#22D3A0" stopOpacity="0.6"/>
                <stop offset="1" stopColor="#2F7BFF" stopOpacity="0.2"/>
              </linearGradient>
              <linearGradient id="lg2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#2F7BFF" stopOpacity="0.5"/>
                <stop offset="1" stopColor="#22D3A0" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
            <path d="M 300 300 Q 200 180 80 100" stroke="url(#lg1)" strokeWidth="1.5" fill="none" strokeDasharray="4 4">
              <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1.5s" repeatCount="indefinite"/>
            </path>
            <path d="M 300 300 Q 480 180 520 80" stroke="url(#lg2)" strokeWidth="1.5" fill="none" strokeDasharray="4 4">
              <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1.8s" repeatCount="indefinite"/>
            </path>
            <path d="M 300 300 Q 200 460 90 520" stroke="url(#lg1)" strokeWidth="1.5" fill="none" strokeDasharray="4 4">
              <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="2s" repeatCount="indefinite"/>
            </path>
            <path d="M 300 300 Q 480 480 540 520" stroke="url(#lg2)" strokeWidth="1.5" fill="none" strokeDasharray="4 4">
              <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1.6s" repeatCount="indefinite"/>
            </path>
          </svg>

          {/* Center: Animated NEURA logo (clickable to swap) */}
          <div className="m-card m-logo-card m-swap-target" onClick={() => setSwapped(s => !s)} role="button" tabIndex="0">
            <div className="logo-anim">
              <svg className="logo-orbits" viewBox="0 0 320 320">
                <defs>
                  <radialGradient id="logoGlow" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#22D3A0" stopOpacity="0.4"/>
                    <stop offset="60%" stopColor="#22D3A0" stopOpacity="0"/>
                  </radialGradient>
                </defs>
                <circle cx="160" cy="160" r="120" fill="url(#logoGlow)"/>
                <circle className="orb orb-1" cx="160" cy="160" r="80" fill="none" stroke="rgba(47,123,255,0.25)" strokeWidth="1" strokeDasharray="2 6"/>
                <circle className="orb orb-2" cx="160" cy="160" r="110" fill="none" stroke="rgba(34,211,160,0.25)" strokeWidth="1" strokeDasharray="3 5"/>
                <circle className="orb orb-3" cx="160" cy="160" r="140" fill="none" stroke="rgba(7,16,31,0.08)" strokeWidth="1"/>
                {[...Array(8)].map((_,i)=>{
                  const a = (i*45)*Math.PI/180;
                  return <circle key={i} className={`node node-${i}`} cx={160 + Math.cos(a)*110} cy={160 + Math.sin(a)*110} r="3" fill="#22D3A0"/>;
                })}
                {[...Array(6)].map((_,i)=>{
                  const a = (i*60 + 30)*Math.PI/180;
                  return <circle key={i} className={`node node-b-${i}`} cx={160 + Math.cos(a)*80} cy={160 + Math.sin(a)*80} r="2" fill="#2F7BFF"/>;
                })}
              </svg>
              <div className="logo-img-wrap">
                <img src={logoUrl} alt="NEURA Consultora estratégica" className="logo-img"/>
              </div>
              <div className="logo-pulse"></div>
            </div>
            <div className="m-logo-foot">
              <span className="m-pulse"/>
              <span>Consultora estratégica · en marcha</span>
            </div>
          </div>

          {/* TL: Web — animated cycling showcase */}
          <div
            className="m-card m-tl m-swap-target"
            onClick={() => {
              userClicked.current = true;
              clearInterval(autoInterval.current);
              clearTimeout(resumeTimer.current);
              setSwapped(true);
              // Resume auto-swap after full video cycle (16s × 4 slides)
              resumeTimer.current = setTimeout(() => {
                userClicked.current = false;
                startAutoInterval();
              }, 16000);
            }}
          >
            <div className="m-mini-head">
              <span className="m-tag">SITIO WEB</span>
              <span className="m-swap-hint">{swapped ? '← clic en logo para volver' : 'clic para ampliar'}</span>
            </div>
            <div className="m-web-mock">
              <div className="m-web-bar"><i/><i/><i/></div>
              <div className="m-web-showcase">
                {[0,1,2,3].map(i => (
                  <div key={i} className={`m-web-slide m-web-slide-${i}`}>
                    <img className="m-web-img" src={webShowcaseSlides[i]} alt="" />
                  </div>
                ))}
                <div className="m-web-progress"><span/></div>
              </div>
            </div>
            <div className="m-foot">+312 visitas hoy</div>
          </div>

          {/* TR: WhatsApp */}
          <div className="m-card m-tr">
            <div className="m-mini-head">
              <span className="m-tag m-tag-green">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12S18.6 0 12 0z"/></svg>
                WHATSAPP
              </span>
              <span className="m-pulse"/>
            </div>
            <div className="m-chat">
              {messages.slice(0, Math.min(chatStep + 1, messages.length)).map((m, i) => (
                <div key={i} className={`m-msg m-msg-${m.from}`}>{m.text}</div>
              ))}
              {chatStep >= messages.length && (
                <div className="m-msg m-msg-bot m-typing"><i/><i/><i/></div>
              )}
            </div>
          </div>

          {/* BL: Automatización */}
          <div className="m-card m-bl">
            <div className="m-mini-head"><span className="m-tag m-tag-blue">AUTOMATIZACIÓN</span></div>
            <div className="m-flow">
              <div className="m-node"><span>📩</span></div>
              <div className="m-flow-line"><span/></div>
              <div className="m-node m-node-active"><span>⚡</span></div>
              <div className="m-flow-line"><span/></div>
              <div className="m-node"><span>📊</span></div>
            </div>
            <div className="m-foot">142 tareas hoy · 0 manuales</div>
          </div>

          {/* BR: Contabilidad */}
          <div className="m-card m-br">
            <div className="m-mini-head"><span className="m-tag">CONTABILIDAD</span></div>
            <div className="m-acc">
              <div className="m-acc-row">
                <span>Facturado</span>
                <strong>Gs. 48.2M</strong>
              </div>
              <div className="m-acc-row">
                <span>Pendiente</span>
                <strong className="warn">Gs. 6.1M</strong>
              </div>
              <div className="m-acc-row">
                <span>IVA al día</span>
                <strong className="ok">✓ OK</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
