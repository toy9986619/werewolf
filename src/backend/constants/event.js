const namespace = 'EVENT/';

module.exports = Object.freeze({
  NEW_CONNECTION: `connection`,
  LOGIN: `${namespace}LOGIN`,
  CREATE_USER: `${namespace}CREATE_USER`,
  GAME_INIT: `${namespace}GAME_INIT`,
  JOB_INIT: `${namespace}JOB_INIT`,
  MORNING: `${namespace}MORNING`,
  NIGHT: `${namespace}NIGHT`,
  DISCONNECT: `disconnect`,
});
