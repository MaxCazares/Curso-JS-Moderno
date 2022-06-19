function Cliente(nombre,  saldo){
    this.nombre = nombre; 
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;
    if(this.saldo > 10000)
        tipo = 'Gold';
    else
        if(this.saldo > 5000)
            tipo = 'Platinum';
        else    
            tipo = 'Normal'
    
    return tipo;
}

Cliente.prototype.infoCliente = function() {
    return `Nombre: ${this.nombre} Saldo: ${this.saldo} Tipo: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraDinero = function(retiro){
    this.saldo -= retiro;
}

const gelacio = new Cliente('Gelacio', 40000);
console.log(gelacio.tipoCliente());
console.log(gelacio);
console.log(gelacio.infoCliente());
gelacio.retiraDinero(2000);
console.log(gelacio.infoCliente());