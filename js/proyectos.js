

document.addEventListener('DOMContentLoaded', () => {
  // 1. Rotación del logo
  const logo = document.querySelector('#encabezado .logo img');
  logo.addEventListener('mouseenter', () => logo.style.transform = 'rotate(360deg)');
  logo.addEventListener('mouseleave', () => logo.style.transform = 'rotate(0deg)');


  // 3. Toggle de detalles en cada proyecto
  document.querySelectorAll('.proyecto').forEach(proy => {
    const btn = proy.querySelector('.toggle-info');
    btn.addEventListener('click', () => {
      const abierto = proy.classList.toggle('open');
      btn.setAttribute('aria-expanded', abierto);
      if (abierto) {
        btn.textContent = 'Ocultar detalles';
        btn.insertAdjacentText('beforeend', ' ▲');
      } else {
        btn.textContent = 'Mostrar detalles';
        btn.insertAdjacentText('beforeend', ' ▼');
      }
    });
  });
});
