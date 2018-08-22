import Board from './board';
import Circle from './circle';
import Player from './player';

document.addEventListener('DOMContentLoaded', () => {
  // TODO Remove console.log() after development
  console.log('Webpack is live!');

  const canvas = document.getElementById('wormhole');
  const ctx = canvas.getContext('2d');

  const board = new Board(ctx);
  const player = new Player(ctx);
  const circles = [];

  setInterval(() => {
    const circle = new Circle(ctx);
    circles.push(circle);
    circles.length > 5 ? circles.shift() : null;
  }, 400);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft'){
      player.moveLeft();
    } else if (e.key === 'ArrowRight'){
      player.moveRight();
    }
  });

  const renderGame = () => {
    board.render();
    // circles.forEach(circle => {
    //   circle.render();
    // });
    player.render();
    window.requestAnimationFrame(renderGame);
  };
  window.requestAnimationFrame(renderGame);
});
