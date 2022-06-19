function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando Clientes....');
        setTimeout( () => {
            resolve('Los clientes fueron descargados');           
        }, 5000);
    });
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando Pedidos....');
        setTimeout( () => {
            resolve('Los pedidos fueron descargados');           
        }, 5000);
    });
}

// Async await
// const app = async () => {
//     try {
//         const clientes = await descargarNuevosClientes();
//         console.log(clientes);

//         const pedidos = await descargarUltimosPedidos();
//         console.log(pedidos);
//     } catch (error) {
//         console.log(error)
//     }
// }

const app = async () => {
    try {
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()])
        console.log(respuesta[0]);
        console.log(respuesta[1]);
    } catch (error) {
        console.log(error)
    }
}

app();