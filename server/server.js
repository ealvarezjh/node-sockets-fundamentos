const express = require('express');

const path = require('path');

const http = require('http');

const socketIO = require('socket.io');


const app = express();
const server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');

const port = process.env.PORT || 3000;


app.use(express.static(publicPath));


// io = comunicación del backend
// exportamos la variable io
module.exports.io = socketIO(server);

require('./sockets/socket')


// Es el server http que recibio la instacina de express
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`server running . . .`);

});