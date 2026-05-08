// Problem, Pillars, Method, Differential, Services, Cases, CTA, Footer

import React from 'react';

import projectShot1 from './assets/uploads/1.svg?url';
import projectShot2 from './assets/uploads/2.svg?url';
import projectShot3 from './assets/uploads/3.svg?url';
import projectShot4 from './assets/uploads/4.svg?url';
import projectShot5 from './assets/uploads/5.svg?url';
import projectShot6 from './assets/uploads/6.svg?url';

const Problem = () => (
  <section className="dark problem-section" data-cursor-glow>
    <div className="cursor-glow" />
    <div className="bg-grid-dark" style={{position:'absolute', inset:0, opacity: 0.5, maskImage:'radial-gradient(ellipse 70% 60% at 50% 50%, black 40%, transparent 80%)'}}/>
    <div className="container" style={{position:'relative', zIndex:1}}>
      <div className="problem-grid">
        <div>
          <div className="eyebrow reveal"><span className="dot"/>El problema</div>
          <h2 className="reveal" data-delay="1" style={{marginTop:'20px', maxWidth:'620px'}}>
            Cuando tu negocio crece <span style={{color:'var(--accent-green)'}}>sin estrategia digital</span>,
            <br/>también crecen los problemas.
          </h2>
        </div>
        <div className="reveal" data-delay="2">
          <p style={{fontSize:'18px', lineHeight:1.7, maxWidth:'520px'}}>
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
            <h4 style={{marginBottom:'8px'}}>{c.t}</h4>
            <p style={{fontSize:'14px'}}>{c.s}</p>
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
    <section className="dark method-section" data-cursor-glow>
      <div className="cursor-glow"/>
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
  <section className="diff-section">
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

const Services = () => {
  const [active, setActive] = React.useState(0);
  const services = [
    {t:'Sitios web profesionales', short:'Web', s:'Sitios institucionales rápidos, accesibles y orientados a conversión. SEO técnico, diseño premium y formularios conectados a tu CRM o WhatsApp.',
      features:['Diseño a medida', 'SEO técnico incluido', 'Velocidad <1.5s', 'Hosting gestionado'],
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M8 14h2"/></svg>},
    {t:'Tiendas online', short:'E-commerce', s:'Tiendas conectadas a stock, pagos locales y logística. Diseño limpio que vende, panel de control real y reportes de ventas en tiempo real.',
      features:['Pagos PY integrados', 'Stock en tiempo real', 'Carrito recuperado', 'Analítica de ventas'],
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3h2l2 14h12l2-9H7"/><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/></svg>},
    {t:'Sistemas personalizados', short:'Sistemas', s:'Paneles administrativos, CRM internos, gestión de clientes, inventario o agendamientos. Hechos a medida, no plantillas reutilizadas.',
      features:['Roles y permisos', 'Reportes a medida', 'API conectada', 'Soporte continuo'],
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>},
    {t:'Automatizaciones', short:'Automation', s:'Flujos que conectan WhatsApp, formularios, planillas, CRM y emails. Tu equipo deja de copiar y pegar, los datos se mueven solos.',
      features:['WhatsApp Business API', 'Triggers y webhooks', 'Integración con planillas', 'Notificaciones smart'],
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></svg>},
    {t:'Marketing digital', short:'Marketing', s:'Estrategia, contenido, campañas en Meta y Google, embudos de venta y gestión de redes. Marketing pensado para resultados medibles.',
      features:['Estrategia 360', 'Campañas pagadas', 'Embudos de venta', 'Reportes mensuales'],
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 11v3l11 5V6L3 11zm14-1v5"/><path d="M14 19c0 1.1.9 2 2 2s2-.9 2-2"/></svg>},
    {t:'Asesoría contable', short:'Contable', s:'Acompañamiento contable y administrativo para empresas y emprendedores. IVA, IRE, presentaciones y orden financiero al día.',
      features:['IVA y IRE al día', 'Liquidación mensual', 'Reportes contables', 'Asesoría fiscal'],
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h8M8 15h5"/></svg>},
  ];
  const a = services[active];

  return (
    <section className="services-section" id="servicios">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow"><span className="dot"/>Servicios</div>
          <h2>Todo lo que necesita tu operación, en un solo equipo.</h2>
          <p>Hacé clic en cada servicio para ver cómo funciona en tu negocio.</p>
        </div>

        <div className="services-tabs reveal">
          {services.map((s,i)=>(
            <button key={i} className={`services-tab ${i===active?'active':''}`} onClick={()=>setActive(i)}>
              <span className="services-tab-icon">{s.icon}</span>
              <span className="services-tab-label">{s.short}</span>
            </button>
          ))}
        </div>

        <div className="services-detail" key={active}>
          <div className="services-detail-copy">
            <span className="tag tag-green" style={{marginBottom:'16px'}}>{`0${active+1} · SERVICIO NEURA`}</span>
            <h3 style={{fontSize:'36px', marginBottom:'18px'}}>{a.t}</h3>
            <p style={{fontSize:'17px', marginBottom:'28px', lineHeight:1.6}}>{a.s}</p>
            <ul className="features-list">
              {a.features.map((f,i)=>(
                <li key={i}>
                  <span className="check">
                    <svg width="10" height="10" viewBox="0 0 12 12"><path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contacto" className="btn btn-primary" style={{marginTop:'32px'}}>
              Cotizar este servicio
              <span className="arrow">
                <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6h7M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </a>
          </div>
          <div className="services-detail-visual">
            <ServiceVisual idx={active}/>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceVisual = ({idx}) => {
  const visuals = [
    // Web
    <div className="sv2-browser">
      <div className="sv2-bar"><span className="sv2-dots"><i/><i/><i/></span><span className="sv2-url">tucliente.com.py</span></div>
      <div className="sv2-hero-area">
        <div className="sv2-nav"><div className="sv2-logo-mark"/><div className="sv2-nav-links"><div/><div/><div/></div><div className="sv2-nav-btn"/></div>
        <div className="sv2-headline">
          <div className="sv2-eyebrow">Bienvenido</div>
          <div className="sv2-h1">Tu tienda online,<br/>lista para vender.</div>
          <div className="sv2-sub">Productos, pagos y entregas en un solo lugar.</div>
          <div className="sv2-hero-btn">Empezar ahora →</div>
        </div>
        <div className="sv2-hero-card">
          <div className="sv2-hero-card-img"/>
          <div className="sv2-hero-card-body"><div/><div/></div>
        </div>
      </div>
      <div className="sv2-strip">
        {['Diseño premium','SEO incluido','Hosting rápido'].map((t,i)=>(
          <div key={i} className="sv2-strip-item"><span className="sv2-check">✓</span>{t}</div>
        ))}
      </div>
    </div>,

    // E-commerce
    <div className="sv2-ecom">
      <div className="sv2-ecom-top">
        <span className="sv2-ecom-title">Tienda · Mayo 2026</span>
        <span className="sv2-badge green">+184% ventas</span>
      </div>
      <div className="sv2-ecom-grid">
        {[
          {name:'Producto Premium',price:'Gs. 145.000',bg:'linear-gradient(135deg,#1a1a2e,#16213e)'},
          {name:'Edición limitada',price:'Gs. 89.000',bg:'linear-gradient(135deg,#0d3b2e,#22D3A0)'},
          {name:'Kit básico',price:'Gs. 45.000',bg:'linear-gradient(135deg,#1a1050,#2F7BFF)'},
          {name:'Pack pro',price:'Gs. 220.000',bg:'linear-gradient(135deg,#2d1b00,#f59e0b)'},
        ].map((p,i)=>(
          <div key={i} className="sv2-product">
            <div className="sv2-product-img" style={{background:p.bg}}/>
            <div className="sv2-product-name">{p.name}</div>
            <div className="sv2-product-footer">
              <span className="sv2-price">{p.price}</span>
              <button className="sv2-add">+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="sv2-cart-bar">
        <span>🛒 3 items seleccionados</span>
        <strong>Gs. 279.000</strong>
        <button>Comprar</button>
      </div>
    </div>,

    // Sistemas
    <div className="sv2-sys">
      <div className="sv2-sys-sidebar">
        <div className="sv2-sys-logo"/>
        {[{icon:'▣',label:'Dashboard',active:true},{icon:'◎',label:'Clientes'},{icon:'▦',label:'Inventario'},{icon:'◈',label:'Ventas'},{icon:'◷',label:'Reportes'}].map((item,i)=>(
          <div key={i} className={`sv2-sys-item${item.active?' active':''}`}>
            <span>{item.icon}</span><span>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="sv2-sys-main">
        <div className="sv2-sys-kpis">
          {[{l:'Clientes',v:'1,284',d:'+8%'},{l:'Pedidos hoy',v:'47',d:'+3'},{l:'Facturado',v:'48.2M',d:'Gs.'},{l:'Pendientes',v:'12',d:'↓4'}].map((k,i)=>(
            <div key={i} className="sv2-kpi"><span>{k.l}</span><strong>{k.v}</strong><em>{k.d}</em></div>
          ))}
        </div>
        <div className="sv2-sys-table">
          <div className="sv2-table-head"><span>Cliente</span><span>Estado</span><span>Monto</span></div>
          {[{c:'Empresa A',s:'Activo',m:'Gs. 4.2M'},{c:'Cliente B',s:'Pendiente',m:'Gs. 1.8M'},{c:'Empresa C',s:'Activo',m:'Gs. 6.1M'}].map((r,i)=>(
            <div key={i} className="sv2-table-row">
              <span>{r.c}</span>
              <span className={`sv2-status ${r.s==='Activo'?'ok':'warn'}`}>{r.s}</span>
              <span>{r.m}</span>
            </div>
          ))}
        </div>
      </div>
    </div>,

    // Automatización
    <div className="sv2-auto">
      <div className="sv2-auto-header"><span>Flujo activo</span><span className="sv2-badge green">● En ejecución</span></div>
      <div className="sv2-auto-canvas">
        <div className="sv2-flow-node trigger"><div className="sv2-node-icon">💬</div><div className="sv2-node-label">Mensaje<br/>WhatsApp</div></div>
        <div className="sv2-flow-arrow"><svg viewBox="0 0 40 12"><path d="M0 6h32M28 2l8 4-8 4" stroke="#22D3A0" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg></div>
        <div className="sv2-flow-node process"><div className="sv2-node-icon">⚡</div><div className="sv2-node-label">Flujo<br/>NEURA</div></div>
        <div className="sv2-flow-arrow"><svg viewBox="0 0 40 12"><path d="M0 6h32M28 2l8 4-8 4" stroke="#22D3A0" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg></div>
        <div className="sv2-flow-branches">
          {[{icon:'📊',label:'Planilla'},{icon:'📧',label:'Email'},{icon:'🔔',label:'Notif.'}].map((b,i)=>(
            <div key={i} className="sv2-flow-node output"><div className="sv2-node-icon">{b.icon}</div><div className="sv2-node-label">{b.label}</div></div>
          ))}
        </div>
      </div>
      <div className="sv2-auto-stats">
        {[{l:'Hoy',v:'142 tareas'},{l:'Sin manual',v:'100%'},{l:'Tiempo ahorrado',v:'4.2h'}].map((s,i)=>(
          <div key={i} className="sv2-auto-stat"><span>{s.l}</span><strong>{s.v}</strong></div>
        ))}
      </div>
    </div>,

    // Marketing
    <div className="sv2-mkt">
      <div className="sv2-mkt-header"><span>Campaña Mayo 2026</span><span className="sv2-badge green">Activa</span></div>
      <div className="sv2-mkt-kpis">
        {[{l:'Alcance',v:'48.2K',t:'+12%',c:'green'},{l:'CTR',v:'4.8%',t:'+0.6%',c:'blue'},{l:'Leads',v:'820',t:'+18%',c:'green'},{l:'Conversión',v:'3.2x',t:'↑',c:'blue'}].map((k,i)=>(
          <div key={i} className="sv2-mkt-kpi">
            <span>{k.l}</span>
            <strong>{k.v}</strong>
            <em className={k.c}>{k.t}</em>
          </div>
        ))}
      </div>
      <div className="sv2-mkt-chart">
        <div className="sv2-chart-label">Embudo de conversión</div>
        {[{l:'Impresiones',v:100,n:'120K'},{l:'Clics',v:68,n:'5.7K'},{l:'Leads',v:38,n:'820'},{l:'Ventas',v:16,n:'92'}].map((s,i)=>(
          <div key={i} className="sv2-funnel-row">
            <span>{s.l}</span>
            <div className="sv2-funnel-bar"><div style={{width:`${s.v}%`}}/></div>
            <strong>{s.n}</strong>
          </div>
        ))}
      </div>
    </div>,

    // Contable
    <div className="sv2-acc">
      <div className="sv2-acc-header"><span>Resumen · Mayo 2026</span><span className="sv2-badge green">✓ Al día</span></div>
      <div className="sv2-acc-kpis">
        {[{l:'Facturado',v:'Gs. 124.5M',c:''},{l:'IVA débito',v:'Gs. 12.4M',c:''},{l:'IRE estimado',v:'Gs. 6.2M',c:'warn'},{l:'Próx. vencimiento',v:'15 jun',c:''}].map((k,i)=>(
          <div key={i} className="sv2-acc-kpi"><span>{k.l}</span><strong className={k.c}>{k.v}</strong></div>
        ))}
      </div>
      <div className="sv2-acc-obligations">
        <div className="sv2-obl-label">Obligaciones presentadas</div>
        {[{l:'IVA Mensual',pct:100,ok:true},{l:'IRE Anual',pct:100,ok:true},{l:'Retenciones',pct:85,ok:false}].map((o,i)=>(
          <div key={i} className="sv2-obl-row">
            <span>{o.l}</span>
            <div className="sv2-obl-bar"><div style={{width:`${o.pct}%`, background: o.ok ? 'var(--accent-green)' : '#f59e0b'}}/></div>
            <span className={o.ok?'sv2-ok':'sv2-warn'}>{o.ok?'✓ OK':'85%'}</span>
          </div>
        ))}
      </div>
    </div>,
  ];
  return <div className="sv-frame">{visuals[idx]}</div>;
};


const Projects = () => {
  const projects = [
    {img: projectShot1, cat:'E-COMMERCE',      catColor:'green', metric:'+184% ventas',    t:'Tienda online · Moda'},
    {img: projectShot2, cat:'WEB CORPORATIVA',  catColor:'blue',  metric:'3.2x leads',      t:'Sitio institucional'},
    {img: projectShot3, cat:'SISTEMA INTERNO',  catColor:'blue',  metric:'-67% manuales',   t:'Sistema de gestión'},
    {img: projectShot4, cat:'E-COMMERCE',       catColor:'green', metric:'+92% conversión', t:'Tienda de productos'},
    {img: projectShot5, cat:'LANDING',          catColor:'green', metric:'4.8% CTR',        t:'Landing de servicios'},
    {img: projectShot6, cat:'AUTOMATIZACIÓN',   catColor:'blue',  metric:'24/7 sin equipo', t:'Plataforma reservas'},
  ];
  return (
    <section className="projects-section" id="casos">
      <div className="container">
        <div className="projects-head reveal">
          <h2>Proyectos que entregamos</h2>
        </div>
        <div className="projects-grid">
          {projects.map((p,i) => (
            <div key={i} className="project-card reveal" data-delay={i % 3 + 1}>
              <div className="project-browser">
                <div className="project-dots"><i/><i/><i/></div>
                <span className="project-url">tucliente.com.py</span>
              </div>
              <div className="project-img-wrap">
                <img src={p.img} alt={p.t} className="project-img"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="dark cta-section" id="contacto" data-cursor-glow>
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
        <a href="https://wa.me/595" target="_blank" className="btn btn-accent" style={{padding:'18px 28px', fontSize:'16px'}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1l-.9 1.1c-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.5.1-.2 0-.3 0-.5-.1-.1-.7-1.5-.9-2.1-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-1 .9-1.2 2-.7 3.6.6 1.7 1.7 3.3 3 4.6 2.2 2.2 4.6 2.6 5.5 2.5.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"/><path d="M20.5 3.5C18.3 1.2 15.3 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.3-1.2-6.3-3.5-8.3zM12 22c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-3.7 1 1-3.7-.2-.4C2.5 15.7 2 13.9 2 12 2 6.5 6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/></svg>
          Solicitar diagnóstico por WhatsApp
        </a>
        <div className="cta-meta">
          <span>Respuesta en menos de 2h hábiles</span>
          <span className="dot"/>
          <span>Asunción, Paraguay</span>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
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
          <a href="https://wa.me/595" target="_blank" className="footer-wa">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12S18.6 0 12 0z"/></svg>
            WhatsApp directo
          </a>
        </div>
        <div>
          <h5>Servicios</h5>
          <ul>
            <li><a href="#servicios">Sitios web</a></li>
            <li><a href="#servicios">Tiendas online</a></li>
            <li><a href="#servicios">Sistemas a medida</a></li>
            <li><a href="#servicios">Automatizaciones</a></li>
            <li><a href="#servicios">Marketing digital</a></li>
            <li><a href="#servicios">Asesoría contable</a></li>
          </ul>
        </div>
        <div>
          <h5>Empresa</h5>
          <ul>
            <li><a href="#metodo">Método</a></li>
            <li><a href="#casos">Casos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h5>Contacto</h5>
          <ul>
            <li><a href="mailto:hola@neura.com.py">hola@neura.com.py</a></li>
            <li><a href="https://wa.me/595">+595 (placeholder)</a></li>
            <li>Asunción, Paraguay</li>
          </ul>
          <div className="footer-social">
            <a href="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg></a>
            <a href="#" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.3 18.3H5.7v-8h2.6v8zM7 9.2a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11.3 9.1h-2.6v-4.2c0-1 0-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2v4.3H10v-8h2.5v1.1h.1c.4-.7 1.2-1.3 2.5-1.3 2.6 0 3.1 1.7 3.1 4v4.2z"/></svg></a>
            <a href="#" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9V15h-2.5v-3h2.5V9.8c0-2.5 1.5-3.8 3.7-3.8 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 3h-2.3v6.9A10 10 0 0 0 22 12z"/></svg></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 NEURA · Crecimiento con orden.</span>
        <div className="footer-bottom-links">
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
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
  Services,
  Projects,
  CTA,
  Footer,
};
