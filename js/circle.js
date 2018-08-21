class Circle {
  constructor(ctx) {
    this.ctx = ctx;
    this.radius = 1;
  }

  calculateRadius() {
    if (this.radius * 1.075 < 300) {
      this.radius *= 1.075;
    }
  }

  drawCircle() {
    const ctx = this.ctx;
    const opacity = this.radius / 300;

    ctx.beginPath();
    ctx.strokeStyle = `rgba(255, 40, 230, ${opacity})`;
    ctx.lineWidth = 7;
    ctx.arc(300, 300, this.radius, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();

  }

  render() {
    this.calculateRadius();
    this.drawCircle();
  }
}

module.exports = Circle;
