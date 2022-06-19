// Forma imperativa

const carrito = [];

// Definir un producto
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

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);

console.table(carrito);