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

function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;
const pedro = new Persona('Pedro', 5000, 234567)
console.log(pedro);
console.log(pedro.infoCliente());

Persona.prototype.mostrarTelefono = function(){
    return `El telefono de esta persona es ${this.telefono}`;
};

console.log(pedro.mostrarTelefono());