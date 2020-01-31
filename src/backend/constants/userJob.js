const jobType = {
  WOLF: '狼人',
  HUMAN: '平民',
  HUNTER: '獵人',
  WITCH: '女巫',
  PROPHET: '預言家',
};

const jobArray = [jobType.WOLF, jobType.HUMAN, jobType.HUNTER, jobType.WITCH, jobType.PROPHET];

module.exports = Object.freeze({
  JOB_TYPE: jobType,
  JOB_ARRAY: jobArray,
});
