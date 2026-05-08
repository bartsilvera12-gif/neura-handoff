// Clients / Portfolio section — uploadable websites + testimonials with people images

import React from 'react';

const Clients = () => {
  const sites = [
    { id: 'site1', label: 'Tienda online · Moda', cat: 'E-COMMERCE', result: '+184% ventas' },
    { id: 'site2', label: 'Sitio institucional', cat: 'WEB CORPORATIVA', result: '3.2x leads' },
    { id: 'site3', label: 'Sistema de gestión', cat: 'SISTEMA INTERNO', result: '-67% manuales' },
    { id: 'site4', label: 'Tienda de productos', cat: 'E-COMMERCE', result: '+92% conversión' },
    { id: 'site5', label: 'Landing de servicios', cat: 'LANDING', result: '4.8% CTR' },
    { id: 'site6', label: 'Plataforma reservas', cat: 'AUTOMATIZACIÓN', result: '24/7 sin equipo' },
  ];

  const testimonials = [
    {
      id: 't1',
      quote: 'En 3 meses pasamos de pedidos por WhatsApp desordenados a una tienda con stock real, pagos integrados y reportes diarios. Hoy vendemos el doble con menos esfuerzo.',
      name: 'María Benítez',
      role: 'Fundadora · Boutique online',
      stars: 5,
    },
    {
      id: 't2',
      quote: 'NEURA nos armó un sistema interno hecho a medida. Lo que antes hacíamos en 4 planillas distintas ahora lo controlamos desde un panel. Cambió cómo trabajamos.',
      name: 'Carlos Riveros',
      role: 'Gerente · Distribuidora',
      stars: 5,
    },
    {
      id: 't3',
      quote: 'No solo nos hicieron la web. Entendieron el negocio, propusieron flujos y conectaron WhatsApp con el sistema. Es un equipo que piensa, no que solo ejecuta.',
      name: 'Andrea López',
      role: 'CEO · Agencia inmobiliaria',
      stars: 5,
    },
  ];

  // simple logo names — wordmark placeholders (user can replace)
  const logos = [
    'ALMACENA', 'NORTE & CO', 'VIVALDI', 'PUERTO 14', 'KAMBÁ', 'MERIDIEN',
    'TORINO', 'NIDO', 'VERTEX', 'CASA AZUL',
  ];

  return (
    <section className="clients-section" id="clientes">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow"><span className="dot"/>Nuestros clientes satisfechos</div>
          <h2>Empresas que ya están <span style={{color: 'var(--accent-blue)'}}>creciendo con orden</span>.</h2>
          <p>Más de 50 negocios confiaron en nosotros para digitalizar su operación. Estos son algunos de los proyectos que transformaron cómo trabajan y venden.</p>
        </div>

        {/* Logo marquee */}
        <div className="logo-marquee reveal">
          <div className="logo-track">
            {[...logos, ...logos].map((l, i) => (
              <div key={i} className="logo-item">{l}</div>
            ))}
          </div>
        </div>

        {/* Sites grid — image slots */}
        <div className="sites-header reveal">
          <h3>Proyectos que entregamos</h3>
          <span className="sites-hint">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" strokeLinecap="round"/></svg>
            Arrastrá imágenes para reemplazar
          </span>
        </div>

        <div className="sites-grid">
          {sites.map((s, i) => (
            <div key={s.id} className="site-card reveal" data-delay={(i % 3) + 1}>
              <div className="site-frame">
                <div className="site-browser-bar">
                  <i/><i/><i/>
                  <span>tucliente.com.py</span>
                </div>
                <image-slot
                  id={`neura-${s.id}`}
                  shape="rect"
                  placeholder={`Subí la captura de ${s.label.toLowerCase()}`}
                  style={{width:'100%', aspectRatio:'16/10', display:'block'}}
                ></image-slot>
              </div>
              <div className="site-meta">
                <div className="site-cat">
                  <span className="tag tag-green">{s.cat}</span>
                  <span className="site-result">{s.result}</span>
                </div>
                <h4>{s.label}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials with people */}
        <div className="testimonials-header reveal">
          <h3>Lo que dicen los que ya trabajan con NEURA</h3>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={t.id} className="testimonial-card reveal" data-delay={i+1}>
              <div className="testimonial-stars">
                {Array.from({length: t.stars}).map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8l-6.2 3.2L7 14.2 2 9.3l6.9-1L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-person">
                <image-slot
                  id={`neura-person-${t.id}`}
                  shape="circle"
                  placeholder="Foto del cliente"
                  style={{width:'48px', height:'48px', flexShrink:0}}
                ></image-slot>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team / business in action — full bleed strip with people */}
        <div className="team-strip reveal">
          <div className="team-strip-bg">
            <image-slot
              id="neura-team-1"
              shape="rect"
              placeholder="Foto del equipo trabajando"
              style={{width:'100%', height:'100%', display:'block'}}
            ></image-slot>
          </div>
          <div className="team-strip-content">
            <span className="tag tag-green" style={{marginBottom:'14px'}}>NUESTRO EQUIPO</span>
            <h3 style={{color:'white', fontSize:'32px', marginBottom:'14px'}}>
              Detrás de cada proyecto, un equipo que se involucra.
            </h3>
            <p style={{color:'rgba(255,255,255,0.85)', fontSize:'16px', maxWidth:'480px'}}>
              Diseñadores, desarrolladores, marketers y contadores que entienden tu negocio antes
              de proponer una solución. No tercerizamos lo importante.
            </p>
            <div className="team-mini">
              {['neura-mini-1', 'neura-mini-2', 'neura-mini-3', 'neura-mini-4'].map((id, i) => (
                <image-slot
                  key={id}
                  id={id}
                  shape="circle"
                  placeholder=""
                  style={{width:'44px', height:'44px', marginLeft: i === 0 ? 0 : '-12px'}}
                ></image-slot>
              ))}
              <div className="team-count">+8 personas</div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="trust-strip reveal">
          <div className="trust-item">
            <div className="trust-num" data-count="50">+50</div>
            <div className="trust-label">empresas digitalizadas</div>
          </div>
          <div className="trust-item">
            <div className="trust-num" data-count="184">184%</div>
            <div className="trust-label">crecimiento promedio en ventas online</div>
          </div>
          <div className="trust-item">
            <div className="trust-num" data-count="3">3.2x</div>
            <div className="trust-label">más leads calificados</div>
          </div>
          <div className="trust-item">
            <div className="trust-num" data-count="97">97%</div>
            <div className="trust-label">de clientes renueva con NEURA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Clients };
