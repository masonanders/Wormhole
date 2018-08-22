const Util = {
};

Util.randomNumber = (max) => {
  let n;
  n = Math.floor(Math.random() * (max));
  return n;
};

module.exports = Util;
