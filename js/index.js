// index.js
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

  // 2. Foto de perfil: ligero zoom y sombra al pasar el cursor
  const photo = document.querySelector('#contenedor img');
  photo.style.transition = 'transform 0.4s, box-shadow 0.4s';
  photo.addEventListener('mouseenter', () => {
    photo.style.transform = 'scale(1.05)';
    photo.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
  });
  photo.addEventListener('mouseleave', () => {
    photo.style.transform = 'scale(1)';
    photo.style.boxShadow = 'none';
  });

  // 3. Efecto borde de imagen dentro de la tarjeta
  document.querySelectorAll('.tarjeta img').forEach(img => {
    img.style.transition = 'border-color 0.3s';
    img.addEventListener('mouseenter', () => {
      img.style.borderColor = 'var(--melocoton)';
    });
    img.addEventListener('mouseleave', () => {
      img.style.borderColor = 'var(--verde-menta)';
    });
  });

  // 4. Fondo cíclico en degradado
  const gradients = [
    'linear-gradient(135deg,rgb(227, 235, 243) 0%,rgb(213, 228, 224) 100%)',  // azul → verde menta
    'linear-gradient(135deg,rgb(218, 223, 222) 0%,rgb(207, 221, 226) 100%)',  // verde menta → melocotón claro
    'linear-gradient(135deg,rgb(214, 231, 240) 0%, #F4F6F8 100%)',  // melocotón claro → gris suave
    'linear-gradient(135deg, #F4F6F8 0%,rgb(182, 192, 201) 100%)'   // gris suave → azul claro
  ];
  let idx = 0;
  setInterval(() => {
    document.body.style.transition = 'background-image 1s';
    document.body.style.backgroundImage = gradients[idx];
    idx = (idx + 1) % gradients.length;
  }, 5000);
});
