
class User {
  constructor(connection) {
    this.connection = connection;
    this.name = "";
    this.isAlive = true;
    this.isSendData = false;
    this.job = null;
  }

  // setName = (name) => {
  //   this.name = name;
  // }

  // setIsAlive = (isAlive) => {
  //   this.isAlive = isAlive;
  // }

}

module.exports = User;