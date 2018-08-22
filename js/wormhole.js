import Board from './board';
import Player from './player';
import Obstacle from './obstacle';
import Util from './util';

document.addEventListener('DOMContentLoaded', () => {
  // TODO Remove console.log() after development
  console.log('Webpack is live!');

  const canvas = document.getElementById('wormhole');
  const ctx = canvas.getContext('2d');

  const paths = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false
  };

  const board = new Board(ctx);
  const player = new Player(ctx);
  const obstacles = [];
  const circles = [];
  const util = new Util();

  let curShipPath = 0;

  let curPattern = util.patterns[util.randomNumber(8)];
  let curPath = 0;

  setInterval(() => {
    const obstacle = new Obstacle(ctx, curPattern[curPath]);
    curPath += 1;
    if (curPath >= curPattern.length) {
      curPattern = util.patterns[util.randomNumber(8)];
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


  const renderGame = () => {
    board.render();
    const deathPaths = [];
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

    player.render();

    if (paths[player.pos]) {
      player.damage();
    }
    if (player.shields <= 0) {
      console.log('Game Over!');
    } else {
      window.requestAnimationFrame(renderGame);
    }
  };
  window.requestAnimationFrame(renderGame);
});
