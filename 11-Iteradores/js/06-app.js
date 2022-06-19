// Bueno veamos otros iteradores que existen en JavaScript
// previamente ya habiamos visto forEach y Map, vamos a verlos en este video y sus diferencias...

let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// Recorrer por un Foreach
pendientes.forEach( (pendiente, index) => console.log(`${index} : ${pendiente}`));

// Recorrer arreglo de objetos
const carrito = [
    {id: 1, producto: 'Libro' },
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Disco'}
];

carrito.forEach( producto => console.log(`Agregaste ${producto.producto}`));