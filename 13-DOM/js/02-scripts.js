// Seleccionar elementos por su clase

let header = document.getElementsByClassName("header");
console.log(header);

let hero = document.getElementsByClassName("hero");
console.log(hero);

// Si las clases existen más de 1 vez
let contenedores = document.getElementsByClassName("contenedor");
console.log(contenedores);

// Si una clase no existe
let noExiste = document.getElementsByClassName("noexiste");
console.log(noExiste);