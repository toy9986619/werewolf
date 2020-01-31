const shuffle = require('lodash/shuffle');

class GameController {
  constructor(userController){
    this.userController = userController;
  }

  // init = () => {

  // }

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