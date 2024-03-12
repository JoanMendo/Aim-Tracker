let titulo = document.getElementById("Titulo");
let titulo2 = document.getElementById("Titulo2");
let fondo = document.getElementById("Fondo");
let num = 1;
let fallos = 1;
let timeoutId;
let timeoutId2;

let div = document.getElementById("Div");
let body = document.getElementById("Fondo");

div.addEventListener("click", myFunction);


function myFunction(Event) {
  let posicion = div.getBoundingClientRect();
  let x = Event.clientX;
  let y = Event.clientY;
  if ((x > posicion.left && x < posicion.right && y > posicion.top && y < posicion.bottom)) {
    changePosicion();
    var newRandomColor = Math.floor(Math.random() * 16777215).toString(16)
    div.style.backgroundColor = "#" + newRandomColor;
    titulo.innerHTML = "Numero de aciertos: " + num;
    num++;
    if (timeoutId)
      clearInterval(timeoutId);
    if (timeoutId2)
      clearInterval(timeoutId2);
  }
  let velocidad = document.getElementById("Velocidad").value;
  let epilepsia = document.getElementById("Epilepsia");
  var value = epilepsia.checked ? "Si" : "No";
  if (value === "Si") {
    velocidad *= 1000;
    timeoutId2 = setTimeout(function () {
      var newRandomColor = Math.floor(Math.random() * 16777215).toString(16)
      body.style.backgroundColor = "#" + newRandomColor;
      console.log("hola");
    }, 1);
  }
  timeoutId = setTimeout(function () {
    changePosicion();
    titulo2.innerHTML = "Numero de fallos: " + fallos;
    fallos++;
    console.log(velocidad);
    myFunction(Event);
  }, 1800 / (velocidad));
}
function Parar() {
  clearInterval(timeoutId);
  clearInterval(timeoutId2);
  body.style.backgroundColor = "white";
  titulo.innerHTML = "Numero de aciertos: 0";
  titulo2.innerHTML = "Numero de fallos: 0";
  div.style.left = "50%";
  div.style.top = "94%";
  num = 1;
  fallos = 1;
}
function changePosicion() {
  div.style.top = Math.random() * 750 + 100 + "px";
  div.style.left = Math.random() * 1500 + "px";
  let tamaño = Math.random() * 2.5 + 0.5;
  div.style.width = tamaño * 0.7 + "%";
  div.style.height = tamaño * 1.2 + "%";
}















