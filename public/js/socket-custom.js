var socket = io();

// on: escuchar
socket.on('connect', function() {
    console.log('Usuario: online');
});


socket.on('disconnect', () => {
    console.log('Usuario: disconnected');
});


// emit: emitir o enviar mensaje propio al server
socket.emit('sendMsg', {

    user: 'Caleb',
    msg: 'Mensaje personalizado desde el cliente'

}, function(resp) {
    console.log('Server: ', resp);
});


// escuchar mensaje proveniente del servidor
socket.on('sendMsgToUser', (message) => {
    console.log('Server: ', message);
});