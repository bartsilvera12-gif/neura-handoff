// Problem, Pillars, Method, Differential, CTA, Footer (Servicios: services.jsx)

import React from 'react';

const Problem = () => (
  <section className="dark problem-section" data-cursor-glow>
    <div className="cursor-glow" />
    <div className="bg-grid-dark" style={{position:'absolute', inset:0, opacity: 0.5, maskImage:'radial-gradient(ellipse 70% 60% at 50% 50%, black 40%, transparent 80%)'}}/>
    <div className="container" style={{position:'relative', zIndex:1}}>
      <div className="problem-grid">
        <div>
          <div className="eyebrow reveal"><span className="dot"/>El problema</div>
          <h2 className="reveal" data-delay="1" style={{marginTop:'20px', maxWidth:'620px', fontSize:'34px', lineHeight:1.15}}>
            Cuando tu negocio crece <span style={{color:'var(--accent-green)'}}>sin estrategia digital</span>,
            <br/>también crecen los problemas.
          </h2>
        </div>
        <div className="reveal" data-delay="2">
          <p style={{fontSize:'15px', lineHeight:1.65, maxWidth:'520px'}}>
            Ventas que no se miden, mensajes sin seguimiento, redes sociales sin estrategia,
            páginas que no convierten, procesos manuales y números poco claros. NEURA ordena
            cada parte de tu presencia digital y operativa para convertirla en
            <strong style={{color:'var(--text-on-dark)'}}> crecimiento real</strong>.
          </p>
        </div>
      </div>

      <div className="problem-cards">
        {[
          {icon:'📩', t:'Oportunidades sin seguimiento', s:'Consultas por WhatsApp, redes o formularios que no se atienden a tiempo terminan convirtiéndose en ventas perdidas.'},
          {icon:'📋', t:'Información desordenada', s:'Datos repartidos entre Excel, chats y notas hacen que nadie tenga una visión clara del negocio.'},
          {icon:'🔁', t:'Procesos manuales', s:'Tu equipo pierde tiempo en tareas que podrían automatizarse, medirse y ejecutarse de forma más eficiente.'},
          {icon:'📉', t:'Crecimiento sin control', s:'Sin métricas, estrategia y seguimiento, es difícil saber qué está funcionando y dónde se está perdiendo dinero.'},
        ].map((c,i)=>(
          <div key={i} className="card-dark reveal" data-delay={i+1}>
            <div className="prob-icon">{c.icon}</div>
            <h4 style={{marginBottom:'8px', fontSize:'15px'}}>{c.t}</h4>
            <p style={{fontSize:'13px', lineHeight:1.5}}>{c.s}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pillars = () => {
  const pillars = [
    {n:'01', t:'Páginas web y tiendas online', s:'Diseñamos sitios modernos, rápidos y orientados a conversión. No hacemos páginas decorativas: creamos presencia digital pensada para vender, captar clientes y generar confianza.', tag:'WEB · E-COMMERCE', color:'green'},
    {n:'02', t:'Sistemas y automatización', s:'Creamos sistemas internos, paneles administrativos, flujos automatizados e integraciones para que tu equipo trabaje con menos tareas manuales y más control operativo.', tag:'SISTEMAS · API', color:'blue'},
    {n:'03', t:'Marketing digital', s:'Desarrollamos estrategias, campañas, contenido y embudos comerciales para atraer clientes, mejorar la comunicación y convertir mejor cada oportunidad.', tag:'GROWTH · ADS', color:'green'},
    {n:'04', t:'Asesoría contable y gestión', s:'Acompañamos a empresas y emprendedores con una visión ordenada de sus obligaciones, números y procesos administrativos.', tag:'CONTABLE · LEGAL', color:'blue'},
  ];
  return (
    <section className="pillars-section">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow"><span className="dot"/>Pilares</div>
          <h2>Cuatro frentes que <em style={{fontStyle:'normal', color:'var(--accent-blue)'}}>conectan</em> entre sí.</h2>
          <p>No vendemos servicios sueltos. Diseñamos un ecosistema donde la web alimenta al sistema, el sistema alimenta al marketing, y todo termina en datos que usás para decidir.</p>
        </div>
        <div className="pillars-grid">
          {pillars.map((p,i)=>(
            <div key={i} className="pillar-card reveal" data-delay={i+1}>
              <div className={`pillar-num pillar-${p.color}`}>{p.n}</div>
              <span className={`tag tag-${p.color}`}>{p.tag}</span>
              <h3 style={{marginTop:'14px', marginBottom:'12px'}}>{p.t}</h3>
              <p>{p.s}</p>
              <div className="pillar-arrow">
                <svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Method = () => {
  const steps = [
    {n:'01', t:'Diagnóstico profundo', s:'Analizamos tu operación, tus canales de venta, tus procesos y tus puntos de fuga. No trabajamos con suposiciones: buscamos dónde se pierde tiempo, dinero y oportunidades.', icon:(
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
    )},
    {n:'02', t:'Diseño de solución', s:'Definimos qué necesita tu negocio: web, tienda online, sistema, automatización, marketing, control interno o una combinación de todo.', icon:(
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4"/></svg>
    )},
    {n:'03', t:'Implementación inteligente', s:'Construimos soluciones modernas, escalables y conectadas. Cada herramienta se diseña para resolver un problema real, no solo para verse bonita.', icon:(
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    )},
    {n:'04', t:'Medición y mejora', s:'Medimos resultados, detectamos oportunidades y seguimos optimizando para que tu empresa no solo funcione, sino que crezca con orden.', icon:(
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/></svg>
    )},
  ];
  return (
    <section className="method-section">
      <div className="container" style={{position:'relative', zIndex:1}}>
        <div className="section-head reveal">
          <div className="eyebrow"><span className="dot"/>Método NEURA</div>
          <h2>Primero entendemos tu negocio. Después construimos la solución.</h2>
          <p>Un proceso de cuatro fases que evita el desperdicio de tiempo y dinero en tecnología que no resuelve nada.</p>
        </div>
        <div className="method-track">
          <div className="method-line"/>
          {steps.map((s,i)=>(
            <div key={i} className="method-step reveal" data-delay={i+1}>
              <div className="method-step-num">
                <span>{s.n}</span>
                <div className="method-step-icon">{s.icon}</div>
              </div>
              <h3>{s.t}</h3>
              <p>{s.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Differential = () => (
  <section className="diff-section" data-cursor-glow>
    <div className="cursor-glow"/>
    <div className="container">
      <div className="diff-grid">
        <div>
          <div className="eyebrow reveal"><span className="dot"/>Diferencial</div>
          <h2 className="reveal" data-delay="1" style={{marginTop:'20px'}}>
            No hacemos soluciones aisladas.
            <br/><span style={{color:'var(--text-mute)'}}>Creamos estrategias digitales para que tu empresa crezca con orden.</span>
          </h2>
          <p className="reveal" data-delay="2" style={{marginTop:'24px', fontSize:'18px', maxWidth:'520px'}}>
            Unimos páginas web, sistemas, marketing digital, automatización y gestión para
            construir soluciones que no solo se ven bien, sino que ayudan a vender, ordenar y escalar.
          </p>
        </div>
        <div className="diff-quotes">
          {[
            'Una presencia digital sin estrategia no genera resultados.',
            'La tecnología sin dirección no transforma un negocio.',
            'Un negocio sin control no puede escalar con seguridad.',
          ].map((q,i)=>(
            <div key={i} className="diff-quote reveal" data-delay={i+1}>
              <span className="diff-quote-mark">"</span>
              <p>{q}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="dark cta-section" data-cursor-glow>
    <div className="cursor-glow"/>
    <div className="cta-glow"/>
    <div className="container" style={{position:'relative', zIndex:1}}>
      <div className="cta-card reveal">
        <div className="eyebrow" style={{borderColor:'rgba(34,211,160,0.3)', background:'rgba(34,211,160,0.08)', color:'var(--accent-green)'}}>
          <span className="dot"/> Diagnóstico sin costo
        </div>
        <h2 style={{margin:'24px 0 20px', maxWidth:'780px'}}>
          ¿Tu negocio está listo para trabajar con <span style={{color:'var(--accent-green)'}}>más orden</span>?
        </h2>
        <p style={{fontSize:'18px', maxWidth:'620px', margin:'0 auto 40px'}}>
          Hablemos de tu empresa, revisemos tu situación actual y veamos qué solución digital
          puede ayudarte a crecer.
        </p>
        <a href={`https://wa.me/595973989068?text=${encodeURIComponent('Hola NEURA 👋 Quiero solicitar el diagnóstico gratuito para mi negocio.')}`} target="_blank" rel="noopener noreferrer" className="btn btn-accent" style={{padding:'18px 28px', fontSize:'16px'}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1l-.9 1.1c-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.5.1-.2 0-.3 0-.5-.1-.1-.7-1.5-.9-2.1-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-1 .9-1.2 2-.7 3.6.6 1.7 1.7 3.3 3 4.6 2.2 2.2 4.6 2.6 5.5 2.5.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"/><path d="M20.5 3.5C18.3 1.2 15.3 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.3-1.2-6.3-3.5-8.3zM12 22c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-3.7 1 1-3.7-.2-.4C2.5 15.7 2 13.9 2 12 2 6.5 6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/></svg>
          Solicitar diagnóstico por WhatsApp
        </a>
        <div className="cta-meta">
          <span>Respuesta en menos de 2h hábiles</span>
          <span className="dot"/>
          <span>Fernando de la Mora · Paraguay</span>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer" id="contacto">
    <div className="container">
      <div className="footer-grid">
        <div>
          <div className="nav-logo" style={{marginBottom:'18px'}}>
            <span className="mark"/>
            <span>NEURA</span>
          </div>
          <p style={{fontSize:'14px', maxWidth:'280px', marginBottom:'24px'}}>
            Construimos ecosistemas digitales para que las empresas vendan mejor y crezcan con orden.
          </p>
          <p style={{fontSize:'13px', opacity:0.7, marginTop:'8px'}}>Desarrollado por Neura</p>
        </div>
        <div>
          <h5>Servicios</h5>
          <ul>
            <li><a href="#servicios">Sitios web</a></li>
            <li><a href="#servicios">Sistemas a medida</a></li>
            <li><a href="#servicios">Asesoría contable</a></li>
          </ul>
        </div>
        <div>
          <h5>Empresa</h5>
          <ul>
            <li><a href="#metodo">Método</a></li>
            <li><a href="#trabajo">Casos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h5>Contacto</h5>
          <ul>
            <li><a href="mailto:neurautomations@gmail.com">neurautomations@gmail.com</a></li>
            <li>Fernando de la Mora · Paraguay</li>
          </ul>
          <div className="footer-social">
            <a href="https://instagram.com/neura_py" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg></a>
            <a href="https://facebook.com/neura" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9V15h-2.5v-3h2.5V9.8c0-2.5 1.5-3.8 3.7-3.8 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 3h-2.3v6.9A10 10 0 0 0 22 12z"/></svg></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 NEURA · Crecimiento con orden.</span>
        <div className="footer-bottom-links">
          <a href="#/privacidad">Política de privacidad</a>
        </div>
      </div>
    </div>
  </footer>
);

export {
  Problem,
  Pillars,
  Method,
  Differential,
  CTA,
  Footer,
};
