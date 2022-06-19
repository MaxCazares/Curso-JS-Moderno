// Parametros por defecto

function saludar(nombre = "Desconocido", apellido = " "){
    console.log(`Hola ${nombre} ${apellido}`)
}

saludar("max", "cazares");
saludar("max");
saludar();