class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.pos = 2;
    this.shields = 25;
  }

  moveLeft() {
    this.pos = (this.pos + 1 > 7 ? 0 : this.pos + 1);
  }

  moveRight() {
    this.pos = (this.pos - 1 < 0 ? 7 : this.pos - 1);
  }

  drawShip() {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.strokeStyle = `rgb(50, 70, 255)`;
    ctx.fillStyle = `rgb(50, 70, 255)`;
    ctx.lineWidth = 3;

    switch (this.pos) {
      case 0:
        ctx.moveTo(572, 228);
        ctx.lineTo(548, 233);
        ctx.lineTo(507, 223);
        ctx.lineTo(483, 220);
        ctx.lineTo(498, 200);
        ctx.lineTo(520, 160);
        ctx.lineTo(540, 150);
        ctx.moveTo(483, 220);
        ctx.lineTo(518, 205);
        ctx.lineTo(520, 197);
        ctx.lineTo(533, 191);
        ctx.lineTo(539, 195);
        ctx.lineTo(537, 202);
        ctx.lineTo(527, 207);
        ctx.lineTo(518, 205);
        ctx.moveTo(533, 191);
        ctx.lineTo(537, 150);
        ctx.moveTo(537, 202);
        ctx.lineTo(570, 228);
        ctx.moveTo(572, 228);
        ctx.lineTo(550, 193);
        ctx.lineTo(540, 150);
        break;
      case 1:
        ctx.moveTo(542, 445);
        ctx.lineTo(522, 432);
        ctx.lineTo(505, 400);
        ctx.lineTo(487, 374);
        ctx.lineTo(522, 368);
        ctx.lineTo(553, 360);
        ctx.lineTo(575, 366);
        ctx.moveTo(487, 374);
        ctx.lineTo(524, 388);
        ctx.lineTo(530, 384);
        ctx.lineTo(543, 388);
        ctx.lineTo(543, 397);
        ctx.lineTo(537, 402);
        ctx.lineTo(525, 395);
        ctx.lineTo(524, 388);
        ctx.moveTo(543, 388);
        ctx.lineTo(572, 365);
        ctx.moveTo(537, 402);
        ctx.lineTo(540, 442);
        ctx.moveTo(575, 366);
        ctx.lineTo(550, 400);
        ctx.lineTo(542, 445);
        break;
      case 2:
        ctx.moveTo(376, 570);
        ctx.lineTo(370, 550);
        ctx.lineTo(380, 520);
        ctx.lineTo(383, 486);
        ctx.lineTo(408, 505);
        ctx.lineTo(440, 520);
        ctx.lineTo(453, 538);
        ctx.moveTo(383, 486);
        ctx.lineTo(398, 520);
        ctx.lineTo(406, 522);
        ctx.lineTo(411, 533);
        ctx.lineTo(408, 540);
        ctx.lineTo(400, 540);
        ctx.lineTo(395, 528);
        ctx.lineTo(398, 520);
        ctx.moveTo(376, 570);
        ctx.lineTo(400, 540);
        ctx.moveTo(411, 533);
        ctx.lineTo(453, 535);
        ctx.moveTo(454, 536);
        ctx.lineTo(411, 550);
        ctx.lineTo(376, 570);
        break;
      case 3:
        ctx.moveTo(157, 545);
        ctx.lineTo(168, 525);
        ctx.lineTo(200, 505);
        ctx.lineTo(224, 487);
        ctx.lineTo(230, 515);
        ctx.lineTo(240, 555);
        ctx.lineTo(235, 575);
        ctx.moveTo(224, 487);
        ctx.lineTo(212, 520);
        ctx.lineTo(215, 530);
        ctx.lineTo(213, 540);
        ctx.lineTo(203, 542);
        ctx.lineTo(197, 535);
        ctx.lineTo(202, 525);
        ctx.lineTo(212, 520);
        ctx.moveTo(213, 540);
        ctx.lineTo(235, 575);
        ctx.moveTo(197, 535);
        ctx.lineTo(157, 543);
        ctx.moveTo(157, 545);
        ctx.lineTo(200, 555);
        ctx.lineTo(235, 575);
        break;
      case 4:
        ctx.moveTo(25, 367);
        ctx.lineTo(50, 360);
        ctx.lineTo(85, 368);
        ctx.lineTo(115, 373);
        ctx.lineTo(100, 395);
        ctx.lineTo(80, 430);
        ctx.lineTo(56, 446);
        ctx.moveTo(115, 373);
        ctx.lineTo(80, 387);
        ctx.lineTo(76, 397);
        ctx.lineTo(66, 402);
        ctx.lineTo(60, 397);
        ctx.lineTo(60, 388);
        ctx.lineTo(70, 385);
        ctx.lineTo(80, 387);
        ctx.moveTo(66, 402);
        ctx.lineTo(60, 443);
        ctx.moveTo(60, 388);
        ctx.lineTo(27, 367);
        ctx.moveTo(25, 367);
        ctx.lineTo(47, 405);
        ctx.lineTo(58, 445);
        break;
      case 5:
        ctx.moveTo(61, 150);
        ctx.lineTo(80, 163);
        ctx.lineTo(100, 197);
        ctx.lineTo(116, 216);
        ctx.lineTo(95, 221);
        ctx.lineTo(50, 233);
        ctx.lineTo(25, 225);
        ctx.moveTo(116, 216);
        ctx.lineTo(80, 203);
        ctx.lineTo(72, 208);
        ctx.lineTo(60, 205);
        ctx.lineTo(59, 197);
        ctx.lineTo(65, 190);
        ctx.lineTo(77, 195);
        ctx.lineTo(80, 205);
        ctx.moveTo(60, 205);
        ctx.lineTo(31, 226);
        ctx.moveTo(65, 190);
        ctx.lineTo(63, 150);
        ctx.moveTo(29, 225);
        ctx.lineTo(50, 190);
        ctx.lineTo(61, 150);
        break;
      case 6:
        ctx.moveTo(227, 28);
        ctx.lineTo(234, 45);
        ctx.lineTo(225, 85);
        ctx.lineTo(223, 115);
        ctx.lineTo(198, 98);
        ctx.lineTo(160, 80);
        ctx.lineTo(150, 60);
        ctx.moveTo(223, 115);
        ctx.lineTo(205, 78);
        ctx.lineTo(195, 76);
        ctx.lineTo(189, 65);
        ctx.lineTo(195, 60);
        ctx.lineTo(203, 59);
        ctx.lineTo(207, 70);
        ctx.lineTo(205, 78);
        ctx.moveTo(189, 65);
        ctx.lineTo(150, 63);
        ctx.moveTo(203, 59);
        ctx.lineTo(227, 30);
        ctx.moveTo(150, 60);
        ctx.lineTo(190, 48);
        ctx.lineTo(227, 28);
        break;
      case 7:
        ctx.moveTo(443, 57);
        ctx.lineTo(433, 75);
        ctx.lineTo(398, 93);
        ctx.lineTo(370, 113);
        ctx.lineTo(370, 85);
        ctx.lineTo(360, 44);
        ctx.lineTo(365, 24);
        ctx.moveTo(370, 113);
        ctx.lineTo(390, 72);
        ctx.lineTo(386, 64);
        ctx.lineTo(391, 54);
        ctx.lineTo(398, 54);
        ctx.lineTo(402, 59);
        ctx.lineTo(398, 70);
        ctx.lineTo(390, 72);
        ctx.moveTo(391, 54);
        ctx.lineTo(365, 27);
        ctx.moveTo(402, 59);
        ctx.lineTo(443, 60);
        ctx.moveTo(443, 57);
        ctx.lineTo(400, 45);
        ctx.lineTo(365, 24);
        break;
      default:
        null;
    }
    ctx.stroke();
  }

  shieldBar() {
    const ctx = this.ctx;

    ctx.strokeStyle = '#FFFFFF';
    ctx.strokeRect(5, 5, 104, 20);
    ctx.fillStyle = `rgb(0, 150, 255)`;
    ctx.fillRect(7, 7, this.shields * 4, 16);
    ctx.font = '15px Arial';
    ctx.lineWidth = 1;
    ctx.fillStyle = '#000000';
    ctx.fillText('SHIELDS', 25, 21);
  }

  damage() {
    this.shields > 0 ? this.shields -= 1 : null;
  }

  render() {
    const ctx = this.ctx;

    this.drawShip();
    this.shieldBar();
  }
}

module.exports = Player;
