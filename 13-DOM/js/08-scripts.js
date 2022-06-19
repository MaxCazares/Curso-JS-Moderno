const navegacion = document.querySelector(".navegacion");
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

// Los espacios en blanco son considerados elementos
console.log(navegacion.childNodes);

// Te va a listar elementos reales
console.log(navegacion.children);

// Selecciona el hijo el la posición del índice
console.log(navegacion.children[1]);

const card = document.querySelector(".card");
card.children[1].children[1].textContent = "nuevo titulo desde traversing the dom"
console.log(card.children[1].children[1].textContent);

card.children[0].src = "img/hacer3.jpg"
console.log(card.children[0].src);

// Traversing de hijo al padre
console.log(card.parentElement.parentElement.parentElement);

// Traversing de hijo a hermano
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector(".card:nth-child(4)");
console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling);