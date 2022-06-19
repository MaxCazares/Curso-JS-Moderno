class Cliente{
    // Métodos privados
    #nombre;

    asignarNombre(nombre){
        this.#nombre = nombre;
    }

    obtenerNombre(){
        return this.#nombre;
    }
}

const max = new Cliente();
max.asignarNombre('Max');
console.log(max.obtenerNombre());