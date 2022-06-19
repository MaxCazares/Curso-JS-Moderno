// Selecciona un elemento por su clase
const card = document.querySelector(".card");
console.log(card);

// Podemos tener selectores especificos como en CSS
const info = document.querySelector(".premium .info");
console.log(info);

// Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector(".hospedaje .card:nth-child(2)");
console.log(segundoCard);

// Seleccionar un formulario
const formulario = document.querySelector("#formulario");
console.log(formulario);

// Seleccionar un elemento HTML
const nav = document.querySelector("nav");
console.log(nav);