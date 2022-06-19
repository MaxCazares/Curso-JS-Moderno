function creariterador(carrito){
    let i = 0;

    return{
        siguiente: () =>{
            const fin = (i >= carrito.lenght);
            const valor = !fin ? carrito[i++]: undefined;
            return{
                fin,
                valor
            }
        }
    }
}

const carrito = ['p1', 'p2', 'p3'];
const recorrerCarrito = creariterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());