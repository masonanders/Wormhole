import Wormhole from "./wormhole";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("wormhole");
  const ctx = canvas.getContext("2d");

  let game = new Wormhole(ctx);
  game.renderPreview();

  const scoreboardContainer = document.getElementById("scoreboard-container");
  const scoreboard = document.getElementById("scoreboard");
  const startMenu = document.getElementById("start-menu");
  const playAgain = document.getElementById("play-again");
  const startGame = document.getElementById("start-game");
  const muteButton = document.getElementById("mute");
  const gameAudio = document.getElementById("game-audio");

  gameAudio.autoplay = false;

  playAgain.addEventListener("click", () => {
    scoreboardContainer.className = "scoreboard-container";
    scoreboard.className = "scoreboard";
    playGame();
  });

  startGame.addEventListener("click", () => {
    scoreboardContainer.className = "scoreboard-container";
    startMenu.setAttribute("style", "visibility: hidden;");
    playGame();
  });

  muteButton.addEventListener("click", () => {
    muteButton.className = muteButton.className === "mute" ? "mute on" : "mute";
    gameAudio.muted = muteButton.className === "mute on" ? true : false;
  });

  const playGame = () => {
    game = new Wormhole(ctx);

    game.play();
    game.setupDone = true;
  };
});
