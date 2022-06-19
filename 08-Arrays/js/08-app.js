// Destructuring con arreglos

const numeros = [10, 20, 30, 40, 50, 60, 70];

const [uno, dos, tres] = numeros;
console.log(tres);

const [,,,cuatro] = numeros;
console.log(cuatro);

const [,,,,...cinco] = numeros;
console.log(cinco);