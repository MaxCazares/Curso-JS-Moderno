function descargarClientes(){
    return new Promise((resolve, reject) => {
        const error = false;
        setTimeout(() => {
            if(!error){
                resolve('clientes descargados');
            }else{
                reject('error en la conexion')
            }
        }, 5000);
    });
}
const ejecutar = async () => {
    try {
        console.log(1+1);
        const respuesta = await descargarClientes();
        console.log(respuesta);
        console.log(2+2);
    } catch (error) {
        console.error(error);
    }
}

ejecutar();