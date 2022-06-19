// Veamos lo que es break y continue
// break cortará la ejecución del for loop
// mientras que continue nos permitirá interceptar digamos un elemento y continuar su ejecución...


for(let i = 0; i <= 10; i++){
    console.log(`Numero:  ${i} `);
    if( i === 5) {
        console.log('Estamos en el 5... FIN.');
        break;
    }
}


for(let i = 0; i <= 10; i++) {
    if( i === 5) {
        console.log('Estamos en el 5... CONTINUAR....');
        continue;
    }
    console.log(`Numero:  ${i} `);
}

//  ¿Y en que casos puedes utilizar el continue?

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300, descuento: true},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50, descuento: true},
    { nombre: 'Celular', precio: 500},
]

for(let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} Tiene descuento... `);
        continue;
    }
    console.log(carrito[i].nombre);
}