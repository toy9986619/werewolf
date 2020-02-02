const EVENT = require('./constants/event');
const UserController = require('./UserController');
const User = require('./entities/user');
const GameController = require('./GameController');

class ServiceController {
  constructor(socketIO) {
    /** @type {SocketIO.Server} */
    this.socketIO = socketIO;
    this.userController = new UserController();
    this.gameController = new GameController(this.userController);
  }

  init = () => {
    console.log('init');
    this.socketIO.on(EVENT.NEW_CONNECTION, (socket) => {
      console.log('new connection');
      socket.emit(EVENT.LOGIN);
      socket.on(EVENT.CREATE_USER, (data) => {
        console.log('new user', data);
        const { name } = data;
        const user = new User(socket);
        user.name = name;
        this.userController.addUser(user);
      });
      // socket.on(EVENT.CREATE_ROOM, () => {
      //   console.log('create room');
      //   this.gameController = new GameController(this.userController);
      // });
      socket.on(EVENT.GET_ROOM_USERS, () => {
        console.log('get room users');
        this.socketIO.emit(EVENT.GET_ROOM_USERS, this.userController.getUserList());
        socket.emit(EVENT.GET_JOBS_MEMBER, this.gameController.jobMember);
        // socket.broadcast.emit(EVENT.GET_ROOM_USERS, this.userController.getUserList());
      });
      socket.on(EVENT.SET_JOBS_MEMBER, (data) => {
        console.log('set job member:', data);
        this.gameController.setJobMember(data);
        socket.broadcast.emit(EVENT.GET_JOBS_MEMBER, this.gameController.jobMember);
      })

      socket.on(EVENT.GAME_INIT, () => {
        console.log('game init!');
        // const gameController = new GameController(this.userController);
        // gameController.init();
        this.gameController.start();
      })

      socket.on(EVENT.DISCONNECT, ()=> {
        const id = socket.id;
        this.userController.removeUser(id);
      })
    });
  }
}

module.exports = ServiceController;