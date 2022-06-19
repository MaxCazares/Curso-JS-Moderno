const cliente = {
    nombre: 'Max',
    saldo: 20000
}
console.log(cliente);

function Cliente(nombre,  saldo){
    this.nombre = nombre; 
    this.saldo = saldo;
}

const max = new Cliente('Max', 200);
console.log(max);