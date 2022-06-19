const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Encontrar el índice en un arreglo
meses.forEach( (mes, i) => {
    if(mes === "Abril")
        console.log(`Encontrado en el índice ${i}`);
});

// Encontrar el índice de Abril
console.log(indice = meses.findIndex(mes => mes === "Abril"));

console.log(indice2 = carrito.findIndex(
    producto => producto.nombre === "Televisión"));