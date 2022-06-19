import alias, { ahorro, Cliente, mostrarInformacion, nombreCliente, tienesSaldo } from './cliente.js';
import { Empresa } from './empresa.js';

console.log(mostrarInformacion(nombreCliente, ahorro));
tienesSaldo(ahorro);
const c1 = new Cliente(nombreCliente, ahorro);
console.log(c1);
console.log(c1.mostrarInformacion());

const e1 = new Empresa('Lavanderia Cheems', 5000, 'Servicios');
console.log(e1);
console.log(e1.mostrarInformacion());

alias()