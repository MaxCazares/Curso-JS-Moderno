const suma = (a,b,c) => a + b + c;

const parcial = a => b => c => suma(a,b,c);

const resultado = parcial(4)(5)(6);

console.log(resultado);