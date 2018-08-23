class Obstacle {
  constructor(ctx, path) {
    this.ctx = ctx;
    this.radius = 1;
    this.speed = 1.09;
    this.path = path;
    this.begin = 0;
    this.end = 0;

    this.sections = [
      0,
      Math.PI / 4,
      Math.PI / 2,
      3 * Math.PI / 4,
      Math.PI,
      5 * Math.PI / 4,
      3 * Math.PI / 2,
      7 * Math.PI / 4
    ];
  }

  render() {
    const ctx = this.ctx;
    const sections = this.sections;
    const path = this.path;

    this.radius *= this.speed;
    this.length = (this.radius / 10) * 3.5;

    ctx.beginPath();
    ctx.strokeStyle = `rgba(255, 0, 0, ${ this.radius / 50 })`;
    ctx.fillStyle = `rgba(255, 0, 0, ${ this.radius / 50 })`;
    ctx.arc(
      300,
      300,
      this.radius,
      5.5 + this.sections[path],
      Math.PI * 2 + this.sections[path],
      false
    );
    ctx.arc(
      300,
      300,
      this.radius - this.length,
      Math.PI * 2 + this.sections[path],
      5.5 + this.sections[path],
      true
    );
    ctx.fill();

    this.begin = this.radius;
    this.end = this.radius - this.length;
  }
}

module.exports = Obstacle;
