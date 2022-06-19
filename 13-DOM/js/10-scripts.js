const enlace = document.createElement("a");
enlace.textContent = "HDSPM";
enlace.href = "/hdspm";
console.log(enlace);

enlace.onclick = miFuncion;

const navegacion = document.querySelector(".navegacion");
navegacion.insertBefore(enlace, navegacion.children[1]);

function miFuncion(){
    alert("Hiciste click hdspm");
}

// Crear un card de forma dinamica
const parrafo1 = document.createElement("p");
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria", "concierto");
console.log(parrafo1);

const parrafo2 = document.createElement("p");
parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add("titulo");
console.log(parrafo2);

const parrafo3 = document.createElement("p");
parrafo3.textContent = "$800 por persona";
parrafo3.classList.add("precio");
console.log(parrafo3);

// Crear div con la clase info
const info = document.createElement("div");
info.classList.add("info");
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);
console.log(info);

// Crear la imagen
const imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg";

// Crear el card
const card = document.createElement("div");
card.classList.add("card");

// Asiganar la imagen
card.appendChild(imagen);

// Asignar la info
card.appendChild(info);

// Insertar en el html
const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.insertBefore(card, contenedor.children[1]);