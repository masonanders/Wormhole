import Board from "./board";
import Player from "./player";
import Obstacle from "./obstacle";
import Util from "./util";

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
    this.speed = 1.09;

    this.board = new Board(ctx, this.speed);
    this.player = new Player(ctx);
    this.util = new Util();
    this.obstacles = [];
    this.circles = [];
    this.score = 0;

    this.curShipPath = 0;
    this.curPattern = this.util.patterns[this.util.randomNumber(8)];
    this.curPath = 0;

    this.renderPreview = this.renderPreview.bind(this);
    this.renderElements = this.renderElements.bind(this);
    this.renderGame = this.renderGame.bind(this);

    this.audio = document.getElementById("game-audio");
    this.audio.load();
  }

  play() {
    const { ctx, obstacles, player, util } = this;
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    let { curPath, curPattern } = this;

    setInterval(() => {
      const obstacle = new Obstacle(ctx, curPattern[curPath], this.speed);
      curPath = curPath + 1;
      if (curPath >= curPattern.length) {
        curPattern = util.randomPattern();
        curPath = 0;
      }
      obstacles.push(obstacle);
      obstacles.length > 20 ? obstacles.shift() : null;
    }, 200);

    left.addEventListener("touchstart", () => {
      left.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
      player.moveLeft();
      left.click();
    });

    left.addEventListener("touchend", e => {
      e.preventDefault();
      left.style.backgroundColor = "rgba(0, 0, 0, 0)";
    });

    right.addEventListener("touchstart", () => {
      right.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
      player.moveRight();
      left.click();
    });

    right.addEventListener("touchend", e => {
      e.preventDefault();
      right.style.backgroundColor = "rgba(0, 0, 0, 0)";
    });

    document.addEventListener("keydown", e => {
      if (e.key === "ArrowLeft") {
        player.moveLeft();
      } else if (e.key === "ArrowRight") {
        player.moveRight();
      }
    });

    this.audio.play();
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

    ctx.strokeStyle = "#eeeeee";
    ctx.font = "18px Arial";
    ctx.lineWidth = 1;
    ctx.fillStyle = "#999999";
    ctx.fillText(this.score, 550, 21);
  }

  renderElements() {
    const { board, obstacles, paths, player } = this;
    const activePaths = [];

    board.render();
    obstacles.forEach(obst => {
      obst.render();

      if (obst.begin > 200 && obst.end < 280) {
        paths[obst.path] = obst.type;
        activePaths.push(obst.path);
      } else if (!activePaths.includes(obst.path)) {
        paths[obst.path] = false;
      }
    });

    for (let i = 0; i < 8; i++) {
      if (!activePaths.includes(i)) {
        paths[i] = false;
      }
    }

    this.renderScore();
    player.render();
  }

  renderPreview() {
    this.board.render();
    window.requestAnimationFrame(this.renderPreview);
  }

  renderGame() {
    const { ctx, player, paths, renderElements, renderGame } = this;

    renderElements();

    if (player.shields <= 0) {
      this.audio.pause();
      const score = document.getElementById("player-score");
      score.innerHTML = this.score;
      const scoreboardContainer = document.getElementById(
        "scoreboard-container"
      );
      const scoreboard = document.getElementById("scoreboard");
      scoreboardContainer.className = "scoreboard-container show";
      scoreboard.className = "scoreboard open";
    } else {
      if (paths[player.pos]) {
        if (paths[player.pos] === "heal") {
          player.heal();
        } else {
          player.damage();
          ctx.save();
          ctx.rotate((2 * Math.PI) / 360);
          renderElements();
          ctx.restore();
        }
      }
      window.requestAnimationFrame(renderGame);
    }
  }
}

export default Wormhole;
