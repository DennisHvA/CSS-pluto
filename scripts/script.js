// JavaScript Document
var plutoCollar = document.querySelector("div.mouth");

plutoCollar.addEventListener("click", changeColor);

function changeColor(){
  plutoCollar.classList.toggle("red");
}
