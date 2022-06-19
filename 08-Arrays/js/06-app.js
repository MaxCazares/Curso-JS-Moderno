// Forma declarativa

const carrito = [];

const producto = {
    name: "Monitor",
    precio: 2000
}
const producto2 = {
    name: "Celular",
    precio: 20000
}
const producto3 = {
    name: "Teclado",
    precio: 1000
}

let resultado = [...carrito, producto];
resultado = [...resultado, producto3]
resultado = [...resultado, producto2];

console.table(resultado);