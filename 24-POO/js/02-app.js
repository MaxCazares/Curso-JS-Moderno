class Cliente{
    constructor(nombre, salario){
        this.nombre = nombre;
        this.salario = salario;
    }

    mostrarInformaion(){
        return `Cliente: ${this.nombre} Salario: ${this.salario}`;
    }

    static bienvenida(){
        return 'Bienvenid@ a la empresa';
    }
}

const max = new Cliente('Max', 5999);
console.log(max);
console.log(max.mostrarInformaion());
console.log(Cliente.bienvenida());