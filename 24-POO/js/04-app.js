class Cliente{
    // Métodos privados
    #nombre;

    constructor(nombre, salario){
        this.#nombre = nombre;
        this.salario = salario;
    }

    mostrarInformaion(){
        return `Cliente: ${this.#nombre} Salario: ${this.salario}`;
    }

    static bienvenida(){
        return 'Bienvenid@ a la empresa';
    }
}

const max = new Cliente('Max', 3000);
// console.log(max.#nombre);
console.log(max.mostrarInformaion());