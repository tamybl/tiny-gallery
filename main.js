document.addEventListener('DOMContentLoaded', () => {
    const current = document.querySelector('#current');
    const images = document.querySelectorAll('.thumbnails img');
    const opacity = 0.5;

    images.forEach(img => img.addEventListener('click', imageClick));

    function imageClick(e) {
        // Resetear la opacidad en la imagenes de miniatura
        images.forEach(img => img.style.opacity = 1);
        // Se cambio el src de la imagen principal por la que ha sido seleccionada
        current.src = e.target.src;
        current.alt = e.target.alt;

        // Se agrega clase fade-in
        current.classList.add('fade-in');

        // Se elimina clase 
        setTimeout(() => current.classList.remove('fade-in'), 500);
        // Se cambia la opacidad
        e.target.style.opacity = opacity;
    }
})