// object literal
// Este método es más estático pero más usado
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

// object constructor
// Este método es más dinámico pero menos usado
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("Smartphone", 3000);
console.log(producto2);

const producto3 = new Producto("PC", 20000);
console.log(producto3);