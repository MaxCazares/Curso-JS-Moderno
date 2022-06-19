const carrito = [
    {nombre: "monitor", precio: 2000},
    {nombre: "mouse", precio: 3000},
    {nombre: "celular", precio: 4000},
    {nombre: "pc", precio: 5000},
    {nombre: "audifonos", precio: 6000}
]

// forEach no regresa un arreglo
const mapa = carrito.forEach(function(producto){
    return `Nombre: ${producto.nombre} - precio: ${producto.precio}`;
});

// map regresa un arreglo
const mapa2 = carrito.map(function(producto){
    return `Nombre: ${producto.nombre} - precio: ${producto.precio}`;
});

console.log(mapa);
console.log(mapa2);