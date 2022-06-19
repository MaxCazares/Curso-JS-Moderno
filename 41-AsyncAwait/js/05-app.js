const url = 'https://picsum.photos/list'

window.onload = () =>{
    obtenerDatos();
}

// function obtenerDatos(){
//     fetch(url)
//         .then(respuesta => respuesta.json())
//         .then(resultado => console.log(resultado))
//         .catch(error => console.error(error))
// }

// async function obtenerDatos(){
    // try {
    //     const respuesta = await fetch(url);
    //     const resultado = await respuesta.json();
    //     console.log(resultado);
    // } catch (error) {
    //     console.error(error);
    // }
// }

const obtenerDatos = async () => {
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
    } catch (error) {
        console.error(error);
    }
}