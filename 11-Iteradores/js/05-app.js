// Veamos otro iterador que es muy común en otros lenguajes y también en javascript, es el do while...
// a diferencia del for y del while, el do while se ejecuta al menos una vez
// y después verifica si la condición se cumple...

// Do While va a correr al menos una vez.
let i = 100; // probar con 1000

do {
    console.log(`Numero: ${i}`)
    i++;
} while( i < 10 );