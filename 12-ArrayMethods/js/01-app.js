const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valo existe en un arreglo
meses.forEach(mes => mes == "Enero" ?  console.log("Enero existe"): "");

// Includes solo soporta arreglos de indices
console.log(meses.includes("Diciembre"));

// Comprobar si un valor existe en un arreglo de objetos
console.log(carrito.some(producto => producto.nombre === "Celular"));

// En un arreglo de indices
console.log(meses.some(mes => mes === "Febrero"));