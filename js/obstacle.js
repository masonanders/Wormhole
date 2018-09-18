class Obstacle {
  constructor(ctx, path, speed) {
    this.ctx = ctx;
    this.radius = 1;
    this.speed = speed;
    this.path = path;
    this.begin = 0;
    this.end = 0;
    this.type = Math.floor(Math.random() * 100) >= 95 ? "heal" : "harm";
    this.color = this.type === "heal" ? "0, 150, 255" : "255, 0, 0";

    this.sections = [
      0,
      Math.PI / 4,
      Math.PI / 2,
      (3 * Math.PI) / 4,
      Math.PI,
      (5 * Math.PI) / 4,
      (3 * Math.PI) / 2,
      (7 * Math.PI) / 4
    ];
  }

  render() {
    const ctx = this.ctx;
    const sections = this.sections;
    const path = this.path;

    this.radius *= this.speed;
    this.length = (this.radius / 10) * 3.5;

    ctx.beginPath();
    ctx.strokeStyle = `rgba(${this.color}, ${this.radius / 50})`;
    ctx.fillStyle = `rgba(${this.color}, ${this.radius / 50})`;
    ctx.arc(
      300,
      300,
      this.radius,
      5.5 + sections[path],
      Math.PI * 2 + sections[path],
      false
    );
    ctx.arc(
      300,
      300,
      this.radius - this.length,
      Math.PI * 2 + sections[path],
      5.5 + sections[path],
      true
    );
    ctx.fill();

    this.begin = this.radius;
    this.end = this.radius - this.length;
  }
}

export default Obstacle;
