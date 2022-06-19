const carrito = new Set();

carrito.add('camisa');
carrito.add('bermuda');
carrito.add('Bermuda');

console.log(carrito);
console.log(carrito.size);
console.log(carrito.has('bermuda'));
console.log(carrito.delete('camisa'));
// carrito.clear();

// carrito.forEach(item => {
//     console.log(item);
// });

const numeros = [10,20,30,40,50,50,60,60,70]
const numerosDuplicados = new Set(numeros);
console.log(numerosDuplicados);