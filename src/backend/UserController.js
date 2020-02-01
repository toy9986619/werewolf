class UserController {
  constructor() {
    this.users = [];
  }

  addUser = (user) => {
    if (this.users.length === 0) {
      user.isHost = true;
    }
    const targetIndex = this.users.findIndex((data) => data.id === user.id);
    if(targetIndex === -1) {
      this.users.push(user);
    }
    user.getUser();
  }

  removeUser = (socketId) => {
    const targetIndex = this.users.findIndex((user) => user.id === socketId);
    this.users.splice(targetIndex, 1);
    console.log('remove user:', targetIndex);

    this.users[0].isHost = true;
    this.users[0].getUser();
  }

  getUserList = () => {
    return this.users.length;
  }
}

module.exports = UserController;