var socket = io();

// on: escuchar
socket.on('connect', function() {
    console.log('frotend: online');
});


socket.on('disconnect', () => {
    console.log('frontend: disconnected');
});


// emit: emitir o enviar mensaje propio al server
socket.emit('sendMsg', {

    user: 'Caleb',
    msg: 'Mensaje personalizado desde el cliente'

}, function(resp) {
    console.log('respuesta: ', resp);
});


// escuchar mensaje proveniente del servidor
socket.on('sendMsgToUser', (message) => {
    console.log('Backend envía: ', message);
});