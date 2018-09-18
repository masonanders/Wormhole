class Util {
  constructor() {
    this.patterns = [
      [0, 1, 2, 3, 4, 5, 6, 7],
      [4, 1, 2, 0, 3, 7, 5, 6],
      [7, 6, 5, 4, 3, 2, 1, 0],
      [4, 3, 5, 0, 6, 1, 7, 2],
      [2, 4, 1, 6, 4, 3, 7, 0],
      [5, 2, 7, 1, 0, 4, 3, 6],
      [1, 7, 3, 2, 5, 6, 0, 4],
      [3, 5, 6, 7, 0, 1, 2, 4]
    ];
  }

  randomPattern() {
    return this.patterns[this.randomNumber(8)];
  }

  makePosOrNeg(num) {
    const random = this.randomNumber(10);
    return random % 2 === 0 ? Math.abs(num) : -Math.abs(num);
  }

  randomNumber(max) {
    return Math.floor(Math.random() * max);
  }
}

export default Util;
