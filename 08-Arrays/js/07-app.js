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
const producto4 = {
    name: "Mouse",
    precio: 1500
}
const producto5 = {
    name: "Webcam",
    precio: 1200
}

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);
carrito.push(producto4);
carrito.push(producto5);

console.table(carrito);

// Eliminar último elemento del arreglo
carrito.pop();
console.table(carrito);

// Eliminar primer elemento del arreglo
carrito.shift();
console.table(carrito);

// Eliminar de cualquier lugar del arreglo
let uno = carrito.splice(1,1);
console.table(carrito);
console.table(uno);