import Board from './board';
import Player from './player';
import Obstacle from './obstacle';
import Util from './util';

class Wormhole {
  constructor(ctx) {
    this.paths = {
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false
    };

    this.ctx = ctx;

    this.board = new Board(ctx);
    this.player = new Player(ctx);
    this.util = new Util();
    this.obstacles = [];
    this.circles = [];
    this.score = 0;

    this.curShipPath = 0;
    this.curPattern = this.util.patterns[this.util.randomNumber(8)];
    this.curPath = 0;

    this.renderGame = this.renderGame.bind(this);
  }

  play() {
    const { ctx, obstacles, player, util } = this;
    let { curPath, curPattern } = this;

    setInterval(() => {
      const obstacle = new Obstacle(ctx, curPattern[curPath]);
      curPath = curPath + 1;
      if (curPath >= curPattern.length) {
        curPattern = util.randomPattern();
        curPath = 0;
      }
      obstacles.push(obstacle);
      obstacles.length > 20 ? obstacles.shift() : null;
    }, 200);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft'){
        player.moveLeft();
      } else if (e.key === 'ArrowRight'){
        player.moveRight();
      }
    });
    this.startScore();
    this.renderGame();
  }

  startScore() {
    if (!this.gameOver) {
      setTimeout(() => {
        this.score += 1;
        this.startScore();
      }, 10);
    }
  }

  renderScore() {
    const ctx = this.ctx;

    ctx.strokeStyle = '#eeeeee';
    ctx.font = '15px Arial';
    ctx.lineWidth = 1;
    ctx.fillStyle = '#999999';
    ctx.fillText(this.score, 550, 21);
  }

  renderGame() {
    const { board, ctx, obstacles, paths, player, renderGame } = this;
    const deathPaths = [];

    // ctx.save();
    // ctx.transform(1, 1, 0, 1, 0, 0);
    // ctx.load();

    board.render();
    obstacles.forEach(obst => {
      obst.render();

      if (obst.begin > 200 && obst.end < 280) {
        paths[obst.path] = true;
        deathPaths.push(obst.path);
      } else if (!deathPaths.includes(obst.path)) {
        paths[obst.path] = false;
      }
    });

    for (let i = 0; i < 8; i++) {
      if (!deathPaths.includes(i)) {
        paths[i] = false;
      }
    }

    this.renderScore();
    player.render();

    if (player.shields <= 0) {
      const score = document.getElementById('player-score');
      score.innerHTML = this.score;
      const scoreboardContainer = document.getElementById('scoreboard-container');
      const scoreboard = document.getElementById('scoreboard');
      scoreboardContainer.className = 'scoreboard-container show';
      scoreboard.className = 'scoreboard open';
    } else {
      if (paths[player.pos]) {
        player.damage();
      }
      window.requestAnimationFrame(renderGame);
    }
  }
}

export default Wormhole;
