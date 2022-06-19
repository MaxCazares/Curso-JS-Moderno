class Cliente{
    constructor(nombre, salario){
        this.nombre = nombre;
        this.salario = salario;
    }

    mostrarInformaion(){
        return `Cliente: ${this.nombre} Salario: ${this.salario}`;
    }
}

const max = new Cliente('Max', 5999);
console.log(max);
console.log(max.mostrarInformaion());