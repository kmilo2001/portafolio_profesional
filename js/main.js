// main.js
// Toggle de “Mostrar más” / “Mostrar menos” y reposición junto a repositorio
// Control de cambio de tema (claro, medio, oscuro)

document.addEventListener('DOMContentLoaded', () => {
  // Mover el botón Mostrar más al pie junto a 'Ver repositorio'
  document.querySelectorAll('.proyecto').forEach(proyecto => {
    const toggleBtn = proyecto.querySelector('.toggle-info');
    const footer = proyecto.querySelector('.pie-proyecto');
    if (toggleBtn && footer) {
      footer.appendChild(toggleBtn);
    }
  });

  // Funcionalidad de toggle en cada botón
  document.querySelectorAll('.toggle-info').forEach(btn => {
    btn.addEventListener('click', () => {
      const proyecto = btn.closest('.proyecto');
      const expanded = proyecto.getAttribute('aria-expanded') === 'true';
      proyecto.setAttribute('aria-expanded', String(!expanded));
      btn.setAttribute('aria-expanded', String(!expanded));
      const texto = btn.querySelector('.texto');
      texto.textContent = expanded ? 'Mostrar más' : 'Mostrar menos';
    });
  });

});
