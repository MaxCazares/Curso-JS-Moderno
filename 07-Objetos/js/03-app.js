// Veamos como asignar variables hacia un objeto

let producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true, // el último elemento puede o no tener la ,
}

// const nombre = producto.nombre;

// Otra forma de hacerlo y que también es nueva, es con algo llamado object destructuring...
// Destructuring significa, sacar de una esctructura,

let { nombre } = producto;

// si deseas extraer más variables;
let { precio } = producto;

console.log(nombre)
console.log(precio)

// O puedes hacerlo mejor con 

// const {nombre, precio} = producto;