// Factory Es una forma de crear objetos basados en cierta condición...

class InputHTML {
    constructor(type, nombre) {
        this.type = type;
        this.nombre = nombre;
    }

    crearInput() {
        return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}">`;
    }
}

class HTMLFactory {
    crearElemento(tipo, nombre) {
        switch(tipo) {
            case 'text':
                return new InputHTML(tipo, nombre);
            case 'tel':
                return new InputHTML(tipo, nombre);
            case 'email':
                return new InputHTML(tipo, nombre);
            default:
                return;
        }
    }
}

const elemento = new HTMLFactory();

const inputText = elemento.crearElemento('text', 'nombre-cliente');
const inputText2 = elemento.crearElemento('tel', 'telefono-cliente');
const inputText3 = elemento.crearElemento('email', 'email-cliente');

console.log(inputText.crearInput());
console.log(inputText2.crearInput());
console.log(inputText3.crearInput());