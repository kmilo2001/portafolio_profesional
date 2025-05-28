document.addEventListener('DOMContentLoaded', () => {
  // 1. Logo: rotación suave al pasar el cursor
  const logo = document.querySelector('#encabezado .imagen img');
  logo.style.transition = 'transform 0.6s';
  logo.addEventListener('mouseenter', () => {
    logo.style.transform = 'rotate(360deg)';
  });
  logo.addEventListener('mouseleave', () => {
    logo.style.transform = 'rotate(0deg)';
  });
  let idx = 0;
  setInterval(() => {
    document.body.style.transition = 'background-image 1s';
    document.body.style.backgroundImage = gradients[idx];
    idx = (idx + 1) % gradients.length;
  }, 5000);
});
