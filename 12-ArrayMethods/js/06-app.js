const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// every es para saber si todos los elementos de un arreglo cumplen la misma condición
let resultado = carrito.every(producto => producto.precio < 1000);
console.log(resultado);

// some para saber si alguno de los elementos de un arreglo cumple la condición
resultado = carrito.some(producto => producto.precio > 500);
console.log(resultado);