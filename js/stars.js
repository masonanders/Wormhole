import Util from "./util";

class Star {
  constructor(ctx, speed, x = 300, y = 300) {
    this.ctx = ctx;
    this.speed = speed;

    this.util = new Util();

    this.xDir = this.util.makePosOrNeg(Math.random());
    this.yDir = this.util.makePosOrNeg(Math.random());
    this.magnitude = Math.hypot(this.xDir, this.yDir);

    this.curX = x;
    this.curY = y;
  }

  drawStar() {
    const ctx = this.ctx;
    const opacity =
      Math.hypot(Math.abs(this.curX - 300), Math.abs(this.curY - 300)) / 300;

    ctx.beginPath();
    ctx.strokeStyle = `rgba(200, 200, 200, ${opacity})`;
    ctx.lineTo(this.curX, this.curY);
    this.curX += this.xDir / this.magnitude;
    this.xDir *= this.speed;
    this.curY += this.yDir / this.magnitude;
    this.yDir *= this.speed;
    ctx.lineTo(this.curX, this.curY);
    ctx.stroke();
  }

  render() {
    this.drawStar();
  }
}

export default Star;
