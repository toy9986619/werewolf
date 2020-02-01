const jobType = {
  WOLF: 'WOLF',
  HUMAN: 'HUMAN',
  HUNTER: 'HUNTER',
  WITCH: 'WITCH',
  PROPHET: 'PROPHET',
};

const jobArray = [jobType.WOLF, jobType.HUMAN, jobType.HUNTER, jobType.WITCH, jobType.PROPHET];

module.exports = Object.freeze({
  JOB_TYPE: jobType,
  JOB_ARRAY: jobArray,
});
