import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let numbers= ["A","2","3","4","5","6","7","8","9","10","K","Q","J"];
  let figures= [ "♦","♥","♠","♣"];
  
  let container= document.getElementById("card");
  let figuraSup= document.getElementById("figureUp");
  let numero= document.getElementById("number");
  let figuraInf= document.getElementById("figureButtom");
  let boton= document.getElementById("btn");

  function showCard(){
  let onlyNumber= numbers[Math.floor(Math.random() * numbers.length)];
  let onlyFigures= figures[Math.floor(Math.random() * figures.length)];

  figuraSup.textContent = onlyFigures;
  numero.textContent = onlyNumber;
  figuraInf.textContent = onlyFigures;
  container.style.color= (onlyFigures === "♦" || onlyFigures === "♥")? "red" : "black";
  }

//  Agregar el evento click para que al presionar el botón se cambie la tarjeta
  boton.addEventListener("click", showCard);

// Llamar a la función para que se ejecute
 showCard();

//Código para que cada 10 segundos se cambie la carta
setInterval(showCard, 10000);

//Función para cambiar el tamaño de la carta
let anch= document.getElementById("ancho");
let alt= document.getElementById("alto");
let send= document.getElementById("enviar");

function cambiarTamaño(){
let width = anch.value;
let height= alt.value;
if(width) card.style.width= width;
if(height) card.style.height= height;

}

send.addEventListener("click", cambiarTamaño);
}
