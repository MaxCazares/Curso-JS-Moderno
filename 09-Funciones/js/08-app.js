// Funciones que regresan un valor

function suma(a, b){
    return a + b;
}

const resul = suma(12, 34);
console.log(resul);

// otro ejemplo

let total = 0;
function agregarCarrito(precio){
    return total += precio;
}
function calcularImpuesto(total){
    return total *= 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

let totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de: ${totalPagar}`)
console.log(total)