/*
Document object model(DOM)
querySelector sirve para seleccionar elementos de un archivo html.

*/

/* let titulo = document.querySelector("h1");
  titulo.innerHTML = "Juego del numero secreto";
  let parrafo = document.querySelector("p");
  parrafo.innerHTML = "Ingrese un valor por favor";
   */
let numeroSecreto = generarNumeroAleatorio();
console.log(numeroSecreto);
function AsignarElementos(elementos, texto) {
  let ElementoHTML = document.querySelector(elementos);
  ElementoHTML.innerHTML = texto;
  return;
}

function VerificarIntento() {
  alert("Click desde el boton.");
  return;
}
function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 10) + 1;
}

AsignarElementos("h1", "Juego del numero secreto");
AsignarElementos("p", "Ingrese un valor entre 1 y 100");
