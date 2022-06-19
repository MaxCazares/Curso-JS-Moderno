// En este video estaremos viendo Object.keys y
// object.values y entries, estos son más conocidos 
// como iteradores de objetos, 

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true  
}

// nos devolverá un arreglo con los keys del objeto
console.log(Object.keys(producto));

// nos devolverá un arreglo con los valores del objeto
console.log(Object.values(producto)); 

// Entries nos va a retornar una matriz de llaves y valores
console.log(Object.entries(producto)); 