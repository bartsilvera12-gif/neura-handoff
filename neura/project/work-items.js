// Proyectos de "Nuestro trabajo" — los usan work.jsx (escritorio) y mobile.jsx.
// Solo lo que está en uploads/paginas (versiones livianas; originales en uploads/paginas-originales).
import vaderetro from './uploads/paginas/vaderetro.mp4?url';
import vaderetroPoster from './uploads/paginas/vaderetro-poster.webp?url';
import clothingstore from './uploads/paginas/clothingstore.mp4?url';
import clothingstorePoster from './uploads/paginas/clothingstore-poster.webp?url';
import ismodel from './uploads/paginas/ismodel.mp4?url';
import ismodelPoster from './uploads/paginas/ismodel-poster.webp?url';
import manastina from './uploads/paginas/manastina.mp4?url';
import manastinaPoster from './uploads/paginas/manastina-poster.webp?url';
import papu from './uploads/paginas/papu.mp4?url';
import papuPoster from './uploads/paginas/papu-poster.webp?url';
import luma from './uploads/paginas/luma.webp?url';
import actitud from './uploads/paginas/actitud.webp?url';
import lucia from './uploads/paginas/lucia.webp?url';
import promin from './uploads/paginas/promin.webp?url';
import stz from './uploads/paginas/stz.webp?url';
import tics from './uploads/paginas/tics.webp?url';
import charme from './uploads/paginas/charme.webp?url';
import eleva from './uploads/paginas/eleva.webp?url';
import mgstore from './uploads/paginas/mgstore.webp?url';
import santerra from './uploads/paginas/santerra.webp?url';
import tradexpar from './uploads/paginas/tradexpar.webp?url';
import vivavet from './uploads/paginas/vivavet.webp?url';

// `w` / `h`: medidas reales del archivo. La galería respeta esa proporción: nada se recorta.
const ITEMS = [
  { id: 'work-mgstore',       img: mgstore,                                        w: 900,  h: 1890, label: 'MG Store · Tienda online',          short: 'MG Store' },
  { id: 'work-papu',          video: papu, poster: papuPoster,                     w: 1280, h: 622,  label: 'El Papu Store · Productos urbanos', short: 'El Papu Store' },
  { id: 'work-eleva',         img: eleva,                                          w: 900,  h: 1890, label: 'Eleva · Tienda online',             short: 'Eleva' },
  { id: 'work-clothingstore', video: clothingstore, poster: clothingstorePoster,   w: 1280, h: 602,  label: 'My Clothing Store · Calzados',      short: 'My Clothing Store' },
  { id: 'work-tics',          img: tics,                                           w: 1600, h: 744,  label: "TIC'S Solutions · Software",        short: "TIC'S" },
  { id: 'work-actitud',       img: actitud,                                        w: 1600, h: 756,  label: 'Actitud · Moda',                    short: 'Actitud' },
  { id: 'work-lucia',         img: lucia,                                          w: 1600, h: 752,  label: 'Lucía Rojas Studio · Academia',     short: 'Lucía Rojas' },
  { id: 'work-tradexpar',     img: tradexpar,                                      w: 900,  h: 1902, label: 'Tradexpar · Distribuidora digital', short: 'Tradexpar' },
  { id: 'work-charme',        img: charme,                                         w: 900,  h: 1888, label: 'Academia Charme · Belleza',         short: 'Charme' },
  { id: 'work-ismodel',       video: ismodel, poster: ismodelPoster,               w: 1280, h: 604,  label: 'IS Model · Agencia de modelos',     short: 'IS Model' },
  { id: 'work-manastina',     video: manastina, poster: manastinaPoster,           w: 1280, h: 594,  label: 'Manastina · Carteras',              short: 'Manastina' },
  { id: 'work-vivavet',       img: vivavet,                                        w: 900,  h: 1886, label: 'Vivavet · Hospital veterinario',    short: 'Vivavet' },
  { id: 'work-santerra',      img: santerra,                                       w: 900,  h: 1648, label: 'Santerra · Inmobiliaria',           short: 'Santerra' },
  { id: 'work-stz',           img: stz,                                            w: 1600, h: 780,  label: 'STZ Autopartes · Repuestos',        short: 'STZ Autopartes' },
  { id: 'work-vaderetro',     video: vaderetro, poster: vaderetroPoster,           w: 1280, h: 604,  label: 'Vade Retro · Tienda online',        short: 'Vade Retro' },
  { id: 'work-luma',          img: luma,                                           w: 1600, h: 800,  label: 'Luma · Hogar y deco',               short: 'Luma' },
  { id: 'work-promin',        img: promin,                                         w: 1600, h: 754,  label: 'ProMin · Consultoría técnica',      short: 'ProMin' },
];

// Dominio de cada sitio: al hacer clic se abre en otra pestaña.
// Si alguno queda vacío, lleva a la sección de clientes (#clientes).
const DOMAINS = {
  mgstore: 'mgstorepy.com',
  papu: 'elpapustore.com.py',
  eleva: 'elevastorepy.com',
  clothingstore: 'myclothingstorepy.com',
  tics: 'tics-py.com',
  actitud: 'actitudytendencia.com',
  lucia: 'luciarojasstudio.com.py',
  tradexpar: 'tradexpar.com.py',
  charme: 'charmeacademia.com',
  ismodel: 'ismodelmanagement.com',
  manastina: 'manastina.com',
  vivavet: 'vivaveteas.com',
  santerra: 'santerra.com.py',
  stz: 'stzautopartes.com',
  vaderetro: 'vaderetro.org',
  luma: 'xn--lma-hoa.net', // lüma.net (con diéresis) escrito como lo entienden los navegadores
  promin: 'prominconsultoria.com',
};

export const WORK = ITEMS.map((item) => {
  const domain = DOMAINS[item.id.replace('work-', '')];
  return { ...item, url: domain ? `https://${domain.replace(/^https?:\/\//, '')}` : '#clientes' };
});

const byId = Object.fromEntries(WORK.map((item) => [item.id.replace('work-', ''), item]));
const rows = (spec) => spec.map((row) => row.map((id) => byId[id]));

// Filas de escritorio: todas las piezas de una fila tienen la misma altura, así que las
// horizontales quedan anchas y grandes y los teléfonos, angostos a los costados.
// Se alternan filas solo horizontales con filas "teléfono · horizontal · teléfono".
export const WORK_ROWS = rows([
  ['vaderetro', 'clothingstore'],
  ['mgstore', 'ismodel', 'eleva'],
  ['lucia', 'stz', 'actitud'],
  ['tradexpar', 'manastina', 'charme'],
  ['luma', 'tics', 'promin'],
  ['vivavet', 'papu', 'santerra'],
]);

// Celular: cada horizontal ocupa todo el ancho; los teléfonos van de a dos.
export const WORK_ROWS_MOBILE = rows([
  ['vaderetro'], ['clothingstore'], ['mgstore', 'eleva'],
  ['ismodel'], ['lucia'], ['stz'], ['tradexpar', 'charme'],
  ['manastina'], ['actitud'], ['luma'], ['vivavet', 'santerra'],
  ['papu'], ['tics'], ['promin'],
]);

// Vitrina animada (deck-showcase.jsx): columnas de piezas. Un id es una pieza horizontal
// a todo el ancho de la columna; un par [id, id] son dos teléfonos lado a lado.
const cols = (spec) => spec.map((col) => col.map((t) => (Array.isArray(t) ? t.map((id) => byId[id]) : byId[t])));

export const WORK_COLUMNS = cols([
  ['vaderetro', ['mgstore', 'eleva'], 'lucia', 'luma', 'stz'],
  ['papu', 'actitud', ['tradexpar', 'charme'], 'tics', 'promin'],
  [['vivavet', 'santerra'], 'clothingstore', 'manastina', 'ismodel'],
]);

// La tarjeta del medio: la que aparece sola al empezar y donde se cierra el mazo
export const WORK_HERO = 'work-papu';

// Celular: una sola columna con todo
export const WORK_COLUMNS_MOBILE = cols([
  ['vaderetro', ['mgstore', 'eleva'], 'ismodel', 'lucia', ['tradexpar', 'charme'], 'clothingstore',
   'actitud', 'luma', ['vivavet', 'santerra'], 'manastina', 'stz', 'tics', 'papu', 'promin'],
]);
