const EVENT = require('./constants/event');
const Member = require('./entities/user');

class ServiceController {
  constructor(socketIO) {
    /** @type {SocketIO.Server} */
    this.socketIO = socketIO;
    this.members = [];
  }

  init = () => {
    this.socketIO.on(EVENT.newConnection, (socket) => {
      socket.emit(EVENT.login);
      socket.on(EVENT.createUser, (data) => {
        console.log(data);
      })
    });
  }
}

module.exports = ServiceController;