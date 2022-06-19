const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(resultado => {
            console.log('el resultado es: ', resultado);
        })
});

const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted'){
        const notificacion = new Notification('Esta es la notificación', {
            icon: 'img/ccj.png',
            body: 'Aprendiendo con proyectos reales'
        });

        notificacion.onclick = () => {
            window.open('http://youtube.com')
        }
    }
});