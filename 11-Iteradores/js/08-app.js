// el for in va a iterar sobretodas las propiedades de un objeto, 
// pero primero veamos como recorrer un arreglo con objetos...

const carrito = [
    {id: 1, producto: 'Libro' },
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Disco'}
];

// 'For of' itera sobre arreglos
for (producto of carrito)
    console.log(producto);

// 'For in' itera sobre objetos
for(producto in carrito)
    console.log(producto);


let automovil = {
    modelo: 'Camaro',
    motor: '6.0',
    anio: '1969',
    marca: 'Chevrolet'
}
for(parte in automovil)
    console.log(`${parte} : ${automovil[parte]}`);

for([llave, valor] of Object.entries(automovil))
    console.log(`${llave} -- ${valor}`);