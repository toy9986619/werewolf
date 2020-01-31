class UserController {
  constructor() {
    this.users = [];
  }

  addUser = (user) => {
    this.users.push(user);
  }

  removeUser = (socketId) => {
    const targetIndex = this.users.findIndex((user) => user.id === socketId);
    this.users.splice(targetIndex, 1);
    console.log('remove user:', targetIndex);
  }
}

module.exports = UserController;