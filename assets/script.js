// menú: mostrar solo la sección seleccionada
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.content-section');
const mailBtn = document.querySelector('.mail-btn');
const player = document.getElementById('player');
const videoButtons = document.querySelectorAll('.video-btn');

function showSection(id) {
  sections.forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    // mover un poco hacia abajo para que el encabezado no oculte el inicio
    const y = Math.max(0, target.getBoundingClientRect().top + window.scrollY - 110);
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

// botón menú principal
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-section');
    showSection(id);
  });
});

// videos: cargar en iframe al pulsar
videoButtons.forEach(b => {
  b.addEventListener('click', () => {
    const src = b.getAttribute('data-src');
    if (player) player.src = src + "?rel=0&showinfo=0";
    // mostrar la sección videos si no está visible
    showSection('videos');
  });
});

// al entrar a la página, dejamos visible solo "inicio" (ya por defecto)
// si el usuario quiere, puede volver al inicio con el primer botón
// boton mail ya es enlace mailto (no necesita script)
