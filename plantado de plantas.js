document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("show-menu");
    });
}); 








function mostrarImagen() {
    var imagenContainer = document.getElementById("imagenContainer");
    var imagen = document.getElementById("imagen");
    imagenContainer.style.opacity = 0;
    setTimeout(function() {
        var nuevaImagenURL = imagen.getAttribute("src");
        imagen.src = nuevaImagenURL;
        imagenContainer.style.opacity = 1;
    }, 500);
}
