let encabezado = document.querySelector(".contenido-hero h1");
console.log(encabezado);

//si en el css -visibility:hidden; no lo va a encontrar
console.log(encabezado.innerText);    

//si en el css -visibility:hidden; si lo va a encontrar
console.log(encabezado.textContent);

//trae el html
console.log(encabezado.innerHTML);   

// Chaining
encabezado = document.querySelector(".contenido-hero h1").textContent;
console.log(encabezado);

document.querySelector(".contenido-hero h1").textContent = "hola jsjsjs";

const imagen = document.querySelector(".card img");
imagen.src = "img/hacer2.jpg"