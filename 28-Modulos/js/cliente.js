export const nombreCliente = 'Max';
export const ahorro = 200;

export function mostrarInformacion(nombre, ahorro){
    return `Cliente: ${nombreCliente} Ahorro: ${ahorro}`;
}

export function tienesSaldo(ahorro){
    if(ahorro > 0){
        console.log('si tienes saldo');
    }else{
        console.log('no tienes saldo');
    }
}

export class Cliente{
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre} Ahorro: ${this.ahorro}`;
    }
}

export default function(){
    console.log('este es el export default');
}