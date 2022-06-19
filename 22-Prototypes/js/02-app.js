function Cliente(nombre,  saldo){
    this.nombre = nombre; 
    this.saldo = saldo;
}

const max = new Cliente('Max', 200);

function formatearcliente(cliente){
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

console.log(formatearcliente(max));

function Empresa(nombre,  saldo, categoria){
    this.nombre = nombre; 
    this.saldo = saldo;
    this.categoria = categoria;
}

const EM = new Empresa('Lavanderia cheems', 25000, 'Servicios');

function formatearempresa(Empresa){
    const {nombre, saldo, categoria} = Empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y es de la categoria ${categoria}`;
}

console.log(formatearempresa(EM));