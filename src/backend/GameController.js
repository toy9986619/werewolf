const shuffle = require('lodash/shuffle');
const JOB_TYPE = require('./constants/userJob').JOB_TYPE

class GameController {
  constructor(userController){
    this.userController = userController;
    this.jobMember = {
      [JOB_TYPE.HUMAN]: 0,
      [JOB_TYPE.HUNTER]: 0,
      [JOB_TYPE.PROPHET]: 0,
      [JOB_TYPE.WITCH]: 0,
      [JOB_TYPE.WOLF]: 0,
    }
  }

  // init = () => {

  // }

  setJobMember = (data) => {
    this.jobMember = { ...this.jobMember, ...data };
  }

  start = () => {
    let jobArray = [0, 1];
    jobArray = shuffle(jobArray);
    console.log(this.userController.users);

    this.userController.users.forEach((user, index) => {
      user.setJob(jobArray[index]);
    });
  }
}

module.exports = GameController;