class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.cur = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.cur = Math.round((this.min + this.max) / 2);
    return this.cur;
  }

  lower() {
    this.max = this.cur;
  }

  greater() {
    this.min = this.cur;
  }
}

module.exports = GuessingGame;
