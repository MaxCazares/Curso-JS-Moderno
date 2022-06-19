const carrito = [
    {nombre: "monitor", precio: 2000},
    {nombre: "mouse", precio: 3000},
    {nombre: "celular", precio: 4000},
    {nombre: "pc", precio: 5000},
    {nombre: "audifonos", precio: 6000}
]

// forEach no regresa un arreglo
carrito.forEach(producto => 
    console.log(`Nombre: ${producto.nombre} - precio: ${producto.precio}`));

// map regresa un arreglo
const mapa2 = carrito.map(producto => 
    `Nombre: ${producto.nombre} - precio: ${producto.precio}`);

const mapa3 = carrito.map(producto => `${producto.nombre} -- ${producto.precio}`);

console.log(mapa2);
console.log(mapa3);