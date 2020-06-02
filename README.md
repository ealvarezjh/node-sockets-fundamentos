# Notas:

Este es un pequeño servidor de express listo para ejecutarse y servir la carpeta public en la web.

Adicionalmente le agregamos funcionalidades básicas de sockets para que exista comunicación entre el frontend y backend.

### FrotEnd

- Envío de mensajes del cliente al servidor.
- Confirmación de recepción del mesanje por parte del servidor.

### BackEnd
* Envío de mensajes del server al cliente.
* Control de los eventos de conexión y desconexión de los usuarios.
* Envío de confirmación de data recibida.
* Es posible la retransmisión de la data recibida por un cliente a todos los clientes actualmente conectados.

Recuerden que deben de reconstruir los módulos de node con el comando

```
npm install
```