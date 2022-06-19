const obtenerCliente = () => {
    const nombre = 'Max';

    function muestraNombre(){
        console.log(nombre);
    }

    return muestraNombre;
}

const nombre = obtenerCliente();
console.log(nombre);
nombre();