// Métodos de propiedad, ya que son funciones dentro de objetos
const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción ${id}`);
    },
    pausar: function(){
        console.log("Pausando...")
    },
    crearPlayList: function(nombre){
        console.log(`Creando la playlist ${nombre}`);
    },
    reproducirPlayList: function(nombre){
        console.log(`Reproduciendo ${nombre}`);
    }
}

reproductor.reproducir(12);
reproductor.pausar();

reproductor.borrar = function(id){
    console.log(`Borrando la canción ${id}`);
}

reproductor.borrar(40);
reproductor.crearPlayList("Heavy Metal");
reproductor.reproducirPlayList("Heavy Metal");