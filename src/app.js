import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let numbers= ["A","2","3","4","5","6","7","8","9","10","K","Q","J"];
  let figures= [ "♦","♥","♠","♣"];
  
  function showCard(){
  let onlyNumber= numbers[Math.floor(Math.random() * numbers.length)];
  let onlyFigures= figures[Math.floor(Math.random() * figures.length)];
  let showMyCard=  `${onlyNumber} ${onlyFigures}`;
  // document.getElementById("cards").style.background = "red";
  // document.getElementById("cards").innerHTML = showMyCard; 
  }

