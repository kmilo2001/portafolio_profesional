// ===== Rotación logo =====
const logo = document.querySelector('#encabezado .imagen img');
logo.addEventListener('mouseenter', () => logo.style.transform = 'rotate(360deg)');
logo.addEventListener('mouseleave', () => logo.style.transform = 'rotate(0deg)');

// ===== Sidebar responsive =====
const btn     = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
btn.addEventListener('click', () => sidebar.classList.toggle('open'));

