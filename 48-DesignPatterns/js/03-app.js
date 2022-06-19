// Singleton

let instancia = null;

class Persona {
    constructor(nombre, email){
        if(!instancia){
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        }else{
            return instancia;
        }
    }
}

const persona = new Persona('Max', 'ejemplo@correo.com');
const persona2 = new Persona('Gerardo', 'correo@correo.com');
console.log(persona);
console.log(persona2);