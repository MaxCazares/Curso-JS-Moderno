const reproductor = {
    cancion: "",
    reproducir: id => `Reproduciendo canción ${id}`,
    pausar: () => "Pausando...",
    borrar: (id) => `Borrando la canción ${id}`,
    crearPlayList: nombre => `Creando la playlist ${nombre}`,
    reproducirPlayList: nombre => `Reproduciendo ${nombre}`,

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion(){
        return `${this.cancion}`;
    }
}
reproductor.nuevaCancion = "Syncopation";
console.log(reproductor.obtenerCancion);
console.log(reproductor.reproducir(12));
console.log(reproductor.pausar());

console.log(reproductor.borrar(40));
console.log(reproductor.crearPlayList("\"Heavy Metal\""));
console.log(reproductor.reproducirPlayList("\"Heavy Metal\""));