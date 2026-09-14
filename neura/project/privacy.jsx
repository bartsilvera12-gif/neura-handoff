// Política de privacidad — se muestra en /#/privacidad
import React, { useEffect } from 'react';
import logoUrl from './neura-logo.jpeg?url';

// Completá estos datos. Los campos vacíos ('') no se muestran en la página.
const DATOS = {
  nombreComercial: 'NEURA',
  razonSocial: '',            // ej: 'NEURA S.A.'
  ruc: '',                    // ej: '80000000-0'
  direccion: 'Fernando de la Mora, Paraguay',
  email: 'neurautomations@gmail.com',
  whatsapp: '+595 973 989 068',
  actualizada: '10 de septiembre de 2026',
};

const Section = ({ n, title, children }) => (
  <section className="pv-section">
    <h2><span className="pv-num">{n}</span>{title}</h2>
    {children}
  </section>
);

const Privacy = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `Política de privacidad | ${DATOS.nombreComercial}`;
    return () => { document.title = prevTitle; };
  }, []);

  const responsable = [
    DATOS.razonSocial && `Razón social: ${DATOS.razonSocial}`,
    DATOS.ruc && `RUC: ${DATOS.ruc}`,
    DATOS.direccion && `Domicilio: ${DATOS.direccion}`,
  ].filter(Boolean);

  return (
    <div className="pv">
      <header className="pv-top">
        <div className="pv-wrap pv-top-inner">
          <a href="#" className="pv-brand">
            <img src={logoUrl} alt="" />
            <span>{DATOS.nombreComercial}</span>
          </a>
          <a href="#" className="pv-back">← Volver al sitio</a>
        </div>
      </header>

      <main className="pv-wrap pv-main">
        <p className="pv-eyebrow">Legal</p>
        <h1>Política de privacidad</h1>
        <p className="pv-updated">Última actualización: {DATOS.actualizada}</p>

        <p className="pv-lead">
          En {DATOS.nombreComercial} respetamos tu privacidad. Esta política explica qué datos personales
          recopilamos cuando visitás este sitio o te comunicás con nosotros, para qué los usamos y cuáles
          son tus derechos sobre ellos.
        </p>

        <Section n="1" title="Responsable del tratamiento">
          <p>
            El responsable de los datos personales recopilados a través de este sitio es{' '}
            <strong>{DATOS.nombreComercial}</strong>.
          </p>
          {responsable.length > 0 && (
            <ul>{responsable.map(l => <li key={l}>{l}</li>)}</ul>
          )}
          <p>
            Para cualquier consulta sobre esta política podés escribirnos a{' '}
            <a href={`mailto:${DATOS.email}`}>{DATOS.email}</a>.
          </p>
        </Section>

        <Section n="2" title="Qué datos recopilamos">
          <p>Recopilamos únicamente los datos necesarios para atenderte:</p>
          <ul>
            <li>
              <strong>Datos que nos brindás al contactarnos</strong> por WhatsApp, correo electrónico o redes
              sociales: nombre, teléfono, correo, empresa y el contenido de tu consulta.
            </li>
            <li>
              <strong>Datos de clientes</strong>: si contratás nuestros servicios, los datos necesarios para
              prestarlos y facturarlos (por ejemplo, datos fiscales y de contacto).
            </li>
            <li>
              <strong>Datos técnicos de navegación</strong>: como cualquier sitio web, nuestro proveedor de
              hosting registra información básica como la dirección IP, el tipo de navegador y la fecha de
              la visita, con fines de seguridad y funcionamiento.
            </li>
          </ul>
          <p>Este sitio no tiene formularios que guarden información: el contacto se inicia desde tu propia aplicación de WhatsApp o de correo.</p>
        </Section>

        <Section n="3" title="Para qué usamos tus datos">
          <ul>
            <li>Responder tus consultas y preparar propuestas o diagnósticos.</li>
            <li>Prestar los servicios contratados y darles seguimiento.</li>
            <li>Emitir facturas y cumplir obligaciones legales, contables y tributarias.</li>
            <li>Enviarte información sobre nuestros servicios, solo si nos diste tu consentimiento. Podés pedir que dejemos de hacerlo en cualquier momento.</li>
          </ul>
          <p>No vendemos ni alquilamos tus datos personales.</p>
        </Section>

        <Section n="4" title="Con quién los compartimos">
          <p>Solo compartimos datos cuando es necesario para operar:</p>
          <ul>
            <li>Proveedores tecnológicos que nos dan servicio, como el hosting del sitio, WhatsApp (Meta) y el correo electrónico.</li>
            <li>Google Fonts, que sirve las tipografías del sitio y recibe la dirección IP de tu dispositivo al cargarlas.</li>
            <li>Autoridades competentes, cuando la ley lo exija.</li>
          </ul>
        </Section>

        <Section n="5" title="Datos de nuestros clientes en sistemas que desarrollamos">
          <p>
            Cuando desarrollamos o administramos sistemas, tiendas online o servicios contables para una
            empresa, los datos que esa empresa gestiona (por ejemplo, de sus propios clientes) le pertenecen.
            {' '}{DATOS.nombreComercial} los trata solo según sus instrucciones y para prestar el servicio, con
            confidencialidad, y no los usa para fines propios.
          </p>
        </Section>

        <Section n="6" title="Cookies">
          <p>
            Actualmente este sitio no utiliza cookies propias de analítica ni de publicidad. Si en el futuro
            incorporamos herramientas de este tipo, vamos a actualizar esta política.
          </p>
        </Section>

        <Section n="7" title="Cuánto tiempo los conservamos">
          <p>
            Conservamos tus datos mientras sean necesarios para la finalidad por la que los recopilamos y,
            en el caso de clientes, durante los plazos que exige la normativa contable y tributaria. Luego
            los eliminamos o anonimizamos.
          </p>
        </Section>

        <Section n="8" title="Seguridad">
          <p>
            Aplicamos medidas técnicas y organizativas razonables para proteger tus datos contra accesos no
            autorizados, pérdida o alteración. Ningún sistema es completamente infalible, pero trabajamos
            para mantener tu información segura.
          </p>
        </Section>

        <Section n="9" title="Tus derechos">
          <p>En cualquier momento podés solicitarnos:</p>
          <ul>
            <li>Acceder a los datos personales que tenemos sobre vos.</li>
            <li>Rectificarlos o actualizarlos si son inexactos.</li>
            <li>Eliminarlos cuando ya no sean necesarios, salvo que debamos conservarlos por obligación legal.</li>
            <li>Retirar tu consentimiento para recibir comunicaciones.</li>
          </ul>
          <p>
            Para ejercer estos derechos escribinos a <a href={`mailto:${DATOS.email}`}>{DATOS.email}</a>.
            Estos derechos se ejercen conforme a la Constitución Nacional (art. 135, hábeas data) y la
            normativa vigente en la República del Paraguay.
          </p>
        </Section>

        <Section n="10" title="Menores de edad">
          <p>
            Nuestros servicios están dirigidos a empresas y personas mayores de edad. No recopilamos
            intencionalmente datos de menores.
          </p>
        </Section>

        <Section n="11" title="Enlaces a otros sitios">
          <p>
            Este sitio contiene enlaces a WhatsApp, Instagram, Facebook y a proyectos de nuestros clientes.
            Esos sitios tienen sus propias políticas de privacidad, que te recomendamos revisar.
          </p>
        </Section>

        <Section n="12" title="Cambios en esta política">
          <p>
            Podemos actualizar esta política cuando cambien nuestros servicios o la normativa aplicable. La
            fecha de la última actualización figura al inicio de esta página.
          </p>
        </Section>

        <Section n="13" title="Contacto">
          <ul>
            <li>Correo: <a href={`mailto:${DATOS.email}`}>{DATOS.email}</a></li>
            {DATOS.whatsapp && <li>WhatsApp: {DATOS.whatsapp}</li>}
            {DATOS.direccion && <li>{DATOS.direccion}</li>}
          </ul>
        </Section>
      </main>

      <footer className="pv-foot">
        <div className="pv-wrap">
          <span>© 2026 {DATOS.nombreComercial} · Crecimiento con orden.</span>
          <a href="#">Volver al sitio</a>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
