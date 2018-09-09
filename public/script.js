window.onload( ()=> {

    var socket = io();
    var btn = document.getElementById('submit');

    btn.addEventListener('onClick', () => {
        socket.emit('connection', () => {

        });
    });

});