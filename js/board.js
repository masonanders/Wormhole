class Board {
  constructor(ctx) {
    this.ctx = ctx;
  }

  rings() {
    const ctx = this.ctx;

    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.arc(300, 300, 290, 0, Math.PI * 2, false);
    ctx.fillStyle = 'rgba(255, 40, 230, 1)';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(300, 300, 275, 0, Math.PI * 2, false);
    ctx.fillStyle = '#000000';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 40, 230, 0.9)';
    ctx.arc(300, 300, 150, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 40, 230, 0.5)';
    ctx.arc(300, 300, 85, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 40, 230, 0.3)';
    ctx.arc(300, 300, 50, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 40, 230, 0.1)';
    ctx.arc(300, 300, 35, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 40, 230, 0.05)';
    ctx.arc(300, 300, 5, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();
  }

  eye() {
    const ctx = this.ctx;

    ctx.beginPath();
    ctx.arc(300, 300, 35, 0, Math.PI * 2, false);
    ctx.fillStyle = 'rgba(255, 40, 230, 0.05)';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(300, 300, 25, 0, Math.PI * 2, false);
    ctx.fillStyle = 'rgba(255, 40, 230, 0.05)';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(300, 300, 10, 0, Math.PI * 2, false);
    ctx.fillStyle = 'rgba(255, 40, 230, 0.1)';
    ctx.fill();
    ctx.closePath();
  }

  lines() {
    const ctx = this.ctx;

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 40, 230, 1.0)';
    ctx.moveTo(300, 25);
    ctx.lineTo(300, 150);
    ctx.moveTo(300, 450);
    ctx.lineTo(300, 575);
    ctx.moveTo(25, 300);
    ctx.lineTo(150, 300);
    ctx.moveTo(450, 300);
    ctx.lineTo(575, 300);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 40, 230, 0.9)';
    ctx.moveTo(300, 150);
    ctx.lineTo(300, 215);
    ctx.moveTo(300, 450);
    ctx.lineTo(300, 385);
    ctx.moveTo(150, 300);
    ctx.lineTo(215, 300);
    ctx.moveTo(385, 300);
    ctx.lineTo(450, 300);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 40, 230, 0.5)';
    ctx.moveTo(300, 215);
    ctx.lineTo(300, 250);
    ctx.moveTo(300, 350);
    ctx.lineTo(300, 385);
    ctx.moveTo(215, 300);
    ctx.lineTo(250, 300);
    ctx.moveTo(350, 300);
    ctx.lineTo(385, 300);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 40, 230, 0.3)';
    ctx.moveTo(300, 250);
    ctx.lineTo(300, 265);
    ctx.moveTo(300, 335);
    ctx.lineTo(300, 350);
    ctx.moveTo(265, 300);
    ctx.lineTo(250, 300);
    ctx.moveTo(335, 300);
    ctx.lineTo(350, 300);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 40, 230, 0.1)';
    ctx.moveTo(300, 265);
    ctx.lineTo(300, 295);
    ctx.moveTo(300, 305);
    ctx.lineTo(300, 335);
    ctx.moveTo(265, 300);
    ctx.lineTo(295, 300);
    ctx.moveTo(335, 300);
    ctx.lineTo(305, 300);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 40, 230, 1.0)';
    ctx.moveTo(100, 100);
    ctx.lineTo(195, 195);
    ctx.moveTo(100, 500);
    ctx.lineTo(195, 405);
    ctx.moveTo(500, 100);
    ctx.lineTo(405, 195);
    ctx.moveTo(405, 405);
    ctx.lineTo(500, 500);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 40, 230, 0.9)';
    ctx.moveTo(194, 194);
    ctx.lineTo(239, 239);
    ctx.moveTo(406, 194);
    ctx.lineTo(361, 239);
    ctx.moveTo(194, 406);
    ctx.lineTo(239, 361);
    ctx.moveTo(406, 406);
    ctx.lineTo(361, 361);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 40, 230, 0.5)';
    ctx.moveTo(240, 240);
    ctx.lineTo(265, 265);
    ctx.moveTo(335, 335);
    ctx.lineTo(360, 360);
    ctx.moveTo(360, 240);
    ctx.lineTo(335, 265);
    ctx.moveTo(240, 360);
    ctx.lineTo(265, 335);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 40, 230, 0.3)';
    ctx.moveTo(265, 265);
    ctx.lineTo(275, 275);
    ctx.moveTo(325, 325);
    ctx.lineTo(335, 335);
    ctx.moveTo(275, 325);
    ctx.lineTo(265, 335);
    ctx.moveTo(325, 275);
    ctx.lineTo(335, 265);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 40, 230, 0.1)';
    ctx.moveTo(275, 275);
    ctx.lineTo(295, 295);
    ctx.moveTo(275, 325);
    ctx.lineTo(295, 305);
    ctx.moveTo(305, 305);
    ctx.lineTo(325, 325);
    ctx.moveTo(305, 295);
    ctx.lineTo(325, 275);
    ctx.stroke();
    ctx.closePath();
  }

  render() {
    this.rings();
    this.eye();
    this.lines();
  }
}

module.exports = Board;
