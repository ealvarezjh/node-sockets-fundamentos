// Se importa la variable io del archivo server
const { io } = require('../server');


io.on('connection', (client) => {

    console.log('Server: online');

    client.on('disconnect', () => {
        console.log('Server: user-disconnected');
    });

    // Se recibe o escucha mensaje del usuario
    client.on('sendMsg', (data, callback) => {

        console.log(data);

        // Enviamos el mensaje recibido a todos los usuarios
        client.broadcast.emit('sendMsgToUser', data);


        // Regresamos una confirmación del mensaje recibido
        // if (msg.user) {

        //     callback({
        //         resp: 'Backend: Mensaje recibido'
        //     });
        //     console.log(msg);
        // } else {

        //     callback({
        //         resp: 'Backend: Algo salio mal'
        //     });
        // }

    });

    // emit: emitir o enviar mensaje propio al cliente
    client.emit('sendMsgToUser', {
        user: 'Admin',
        msg: 'Bienvenido a la aplicación'
    });

});