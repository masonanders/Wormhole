import Board from './board';
import Circle from './circle';

document.addEventListener('DOMContentLoaded', () => {
  // TODO Remove console.log() after development
  console.log('Webpack is live!');

  const canvas = document.getElementById('wormhole');
  const ctx = canvas.getContext('2d');

  const board = new Board(ctx);
  const circles = [];

  setInterval(() => {
    const circle = new Circle(ctx);
    circles.push(circle);
    circles.length > 5 ? circles.shift() : null;
  }, 400);

  const renderGame = () => {
    board.render();
    circles.forEach(circle => {
      circle.render();
    });
    window.requestAnimationFrame(renderGame);
  };
  window.requestAnimationFrame(renderGame);
});
