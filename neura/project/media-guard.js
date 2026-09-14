// Protección básica de fotos y videos: sin menú de clic derecho ("Guardar imagen/video
// como"), sin arrastrarlos fuera de la página. Junto con media-guard.css (celular) y los
// atributos de los <video> (sin botón de descarga, imagen en imagen ni transmitir).
// No es infalible: lo que se muestra en pantalla siempre se puede capturar. Evita la
// descarga fácil del visitante común.
const isMedia = (el) => el instanceof Element && !!el.closest('img, video, picture, svg image');

document.addEventListener('contextmenu', (e) => {
  if (isMedia(e.target)) e.preventDefault();
});

document.addEventListener('dragstart', (e) => {
  if (isMedia(e.target)) e.preventDefault();
});
