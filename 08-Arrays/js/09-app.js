const carrito = [
    {nombre: "monitor", precio: 2000},
    {nombre: "mouse", precio: 3000},
    {nombre: "celular", precio: 4000},
    {nombre: "pc", precio: 5000},
    {nombre: "audifonos", precio: 6000}
]

for (productos in carrito){
    console.log(carrito[productos].nombre);
}

carrito.forEach(function(producto){
    console.log(`Nombre: ${producto.nombre} - precio: ${producto.precio}`);
});