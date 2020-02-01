const namespace = 'EVENT/';

module.exports = Object.freeze({
  NEW_CONNECTION: `connection`,
  LOGIN: `${namespace}LOGIN`,
  CREATE_USER: `${namespace}CREATE_USER`,
  GET_USER: `${namespace}GET_USER`,
  CREATE_ROOM: `${namespace}CREATE_ROOM`,
  GET_ROOM_USERS: `${namespace}GET_ROOM_USERS`,
  SET_JOBS_MEMBER: `${namespace}SET_JOBS_MEMBER`,
  GET_JOBS_MEMBER: `${namespace}GET_JOBS_MEMBER`,
  GAME_INIT: `${namespace}GAME_INIT`,
  JOB_INIT: `${namespace}JOB_INIT`,
  MORNING: `${namespace}MORNING`,
  NIGHT: `${namespace}NIGHT`,
  DISCONNECT: `disconnect`,
});
