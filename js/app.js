import Wormhole from './wormhole';

document.addEventListener('DOMContentLoaded', () => {
  // TODO Remove console.log() after development
  console.log('Webpack is live!');

  const canvas = document.getElementById('wormhole');
  const ctx = canvas.getContext('2d');

  let game = new Wormhole(ctx);

  const scoreboard = document.getElementById('scoreboard-container');
  const playAgain = document.getElementById('play-again');

  playAgain.addEventListener('click', (e) => {
    playGame();
    scoreboard.className = 'scoreboard-container';
  });

  const playGame = () => {
    game = new Wormhole(ctx);

    game.play();
    game.setupDone = true;
  };

  playGame();
});
