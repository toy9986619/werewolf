const UserJob = require('../constants/userJob');
const EVENT = require('../constants/event');
const JOB_TYPE = UserJob.JOB_TYPE;
const JOB_ARRAY = UserJob.JOB_ARRAY;


class User {
  constructor(socket) {
    this.socket = socket;
    this.id = socket.id;
    this.name = "";
    this.isAlive = true;
    this.isSendData = false;
    this.job = null;
    console.log('id', socket.id);
  }

  setJob = (jobNumber) => {
    this.job = JOB_ARRAY[jobNumber];
    console.log(this.name, this.job);
    this.socket.emit(EVENT.JOB_INIT, { job: this.job });
  }
  // setName = (name) => {
  //   this.name = name;
  // }

  // setIsAlive = (isAlive) => {
  //   this.isAlive = isAlive;
  // }

}

module.exports = User;