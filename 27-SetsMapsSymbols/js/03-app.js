const cliente = new Map();

cliente.set('nombre', 'Max');
cliente.set('cuenta', 'premium');
cliente.set('saldo', 5000);
cliente.set('casa', 'mansion')

console.log(cliente);
console.log(cliente.size);
console.log(cliente.has('saldo'));
console.log(cliente.get('cuenta'));
cliente.delete('casa');
console.log(cliente.has('casa'));
console.log(cliente.get('casa'));
cliente.clear();
console.log(cliente);

const paciente = new Map([['nombre', 'Gerardo'], ['cuarto', 'sencillo']]);
paciente.set('Dr.', 'Antonio');
paciente.set('nombre', 'Benancio');

console.log(paciente);
paciente.forEach( (datos, index) =>{
    console.log(index, datos);
});