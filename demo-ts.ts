/* Funcion antigua

$(function() {

var imagenes = [
"assets/imgs/1.png", "assets/imgs/2.png", "assets/imgs/3.png", "assets/imgs/4.png",... ];

function obtenerImagenAleatoria() {
return imagenes[Math.floor(Math.random() * imagenes.length)];
}

function cambiarImagen() {
$('#imagen').attr('src', obtenerImagenAleatoria());
}

// Imagen inicial
cambiarImagen();

// Eventos
$('#boton').on('click', cambiarImagen);
});

*/

let imagenes: string[] = ["assets/imgs/1.png", "assets/imgs/2.png", "assets/imgs/3.png"];

let  obtenerImagenAleatoria = (): string => {
  return imagenes[Math.floor(Math.random() * imagenes.length)];
}

let cambiarImagen = (): void => {
  $('#imagen').attr('src', obtenerImagenAleatoria());
}


// Listener
$('#boton').on('click', cambiarImagen);

// On document ready
$(document).ready( () => {
  cambiarImagen();
})
