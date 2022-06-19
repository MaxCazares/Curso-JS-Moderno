const {app, BrowserWindow} = require('electron') ;

let appWindow;

function crearVentana(){
    appWindow = new BrowserWindow({
        height: 800,
        width: 1200,
        minHeight: 500,
        minWidth: 1000,
        center: true,
        icon: 'icon.png'
    });

    // Cuando la aplicación es cerrada
    appWindow.on('closed', () => {
        appWindow = null;
    });

    // Cargar html
    appWindow.loadFile('./index.html');

    // Cuando la app esta lista, mostrar la ventana
    appWindow.once('ready-to-show', () => {
        appWindow.once();
    });
}

app.on('ready', crearVentana);