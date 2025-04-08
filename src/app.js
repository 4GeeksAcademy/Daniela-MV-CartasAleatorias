import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J"];
  let figures = ["♦", "♥", "♠", "♣"];

  let container = document.getElementById("card");
  let figuraSup = document.getElementById("figureUp");
  let numero = document.getElementById("number");
  let figuraInf = document.getElementById("figureButtom");
  let boton = document.getElementById("btn");

  function aleatoryCard() {
    let aleatoryNumber = numbers[Math.floor(Math.random() * numbers.length)];
    let aleatoryFigures = figures[Math.floor(Math.random() * figures.length)];

    figuraSup.textContent = aleatoryFigures;
    numero.textContent = aleatoryNumber;
    figuraInf.textContent = aleatoryFigures;
    container.style.color = (aleatoryFigures === "♦" || aleatoryFigures === "♥") ? "red" : "black";
  }

  aleatoryCard();

  boton.addEventListener("click", aleatoryCard);

  setInterval(aleatoryCard, 10000);

  let callingWidth = document.getElementById("ancho");
  let callingheight = document.getElementById("alto");
  let send = document.getElementById("enviar");

  function changeSize() {
    let width = parseInt(callingWidth.value);
    let height = parseInt(callingheight.value);
    if (width < 200) {
      width = 200;
    }
    if (height < 200) {
      height = 200;
    }
    if (width) card.style.width = width + "px";
    if (height) card.style.height = height + "px";

  }

  send.addEventListener("click", changeSize);
}
