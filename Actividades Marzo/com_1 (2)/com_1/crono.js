// Creamos la variable para mostrar en la página los segundos que van pasando
var segundos = document.getElementById("segundos");
// Creamos la función que cuenta
var crono = function () {
  // Cambiamos el contenido del elemento #segundos a número de coma flotante y le sumamos 1. 
  segundos.textContent = parseFloat(segundos.textContent) + 1;
};
// Creamos la función para detener la cuenta
var pararCrono = function () {
  window.clearInterval(contador);
};
// Añadimos un escuchador de eventos para cuando se pulse el botón detener
var parar = document.getElementById("parar");
parar.addEventListener("click", pararCrono);
// Creamos la variable que establece el intervalo a 1 segundo (1000 milisegundos)
var contador = window.setInterval(crono, 1000);