let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmBD();

    setTimeout(() => {
        crearCliente();
    }, 5000);

});

function crmBD(){
    let crmBD = window.indexedDB.open('crm', 1);

    crmBD.onerror = function(){
        console.log('Aiudaaaaa hubo un error a la hora de crear la base de datos');
    }

    crmBD.onsuccess = function(){
        console.log('Siuuu la base de datos se creo correctamente');
        DB = crmBD.result;
    }

    crmBD.onupgradeneeded = function(e){
        const db = e.target.result;
        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        objectStore.createIndex('nombre', 'nombre', {unique:false});
        objectStore.createIndex('email', 'email', {unique:true});
        objectStore.createIndex('telefono', 'telefono', {unique:false});
    }
}

function crearCliente(){
    let transaction = DB.transaction(['crm'], 'readwrite');
    transaction.oncomplete = function(){
        console.log('transacción completada');
    }

    transaction.onerror = function(){
        console.log('hubo un error en la transacción');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 1234567890,
        nombre: 'Max',
        email: 'max@prueba.com'
    }

    const peticion = objectStore.add(nuevoCliente);
    console.log(peticion);
}