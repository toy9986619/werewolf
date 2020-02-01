class UserController {
  constructor() {
    this.users = [];
  }

  addUser = (user) => {
    if (this.users.length === 0) {
      user.host = true;
    }

    this.users.push(user);
  }

  removeUser = (socketId) => {
    const targetIndex = this.users.findIndex((user) => user.id === socketId);
    this.users.splice(targetIndex, 1);
    console.log('remove user:', targetIndex);
  }

  getUserList = () => {
    return this.users.length;
  }
}

module.exports = UserController;