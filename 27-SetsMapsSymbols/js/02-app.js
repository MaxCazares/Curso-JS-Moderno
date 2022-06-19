const ws = new WeakSet();

const cliente = {
    nombre: 'Max',
    saldo: 5000
}

const max = 'max';

ws.add(cliente);
// ws.add(max);

console.log(ws);
console.log(ws.has(cliente));
ws.delete(cliente);