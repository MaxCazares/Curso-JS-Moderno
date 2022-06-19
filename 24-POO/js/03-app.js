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

// Herencia

class Empresa extends Cliente{ 
    constructor(nombre, salario, telefono, categoria){
        super(nombre, salario);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    mostrarInformaion(){
        return `Cliente: ${this.nombre} Salario: ${this.salario} 
        Telefono: ${this.telefono} Categoria: ${this.categoria}`;
    } 
}

const max = new Cliente('Max', 5999);
const e1 = new Empresa('IBM', 20000, 5523146987, 'Computación');
console.log(e1.mostrarInformaion());
console.log(e1);
console.log(max.mostrarInformaion());
console.log(e1.mostrarInformaion());
console.log(Empresa.bienvenida());