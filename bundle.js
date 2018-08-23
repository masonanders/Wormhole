/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wormhole__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wormhole */ "./js/wormhole.js");


document.addEventListener('DOMContentLoaded', () => {
  // TODO Remove console.log() after development
  console.log('Webpack is live!');

  const canvas = document.getElementById('wormhole');
  const ctx = canvas.getContext('2d');

  let game = new _wormhole__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);

  const scoreboardContainer = document.getElementById('scoreboard-container');
  const scoreboard = document.getElementById('scoreboard');
  const playAgain = document.getElementById('play-again');

  playAgain.addEventListener('click', (e) => {
    playGame();
    scoreboardContainer.className = 'scoreboard-container';
    scoreboard.className = 'scoreboard';
  });

  const playGame = () => {
    game = new _wormhole__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);

    game.play();
    game.setupDone = true;
  };

  playGame();
});


/***/ }),

/***/ "./js/board.js":
/*!*********************!*\
  !*** ./js/board.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Board {
  constructor(ctx) {
    this.ctx = ctx;
  }

  background() {
    const ctx = this.ctx;

    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, 600, 600);
  }

  rings() {
    const ctx = this.ctx;

    ctx.lineWidth = 1;
    ctx.beginPath();
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
    ctx.fillStyle = 'rgba(255, 40, 230, 1.0)';
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
    ctx.strokeStyle = 'rgba(255, 40, 230, 0.75)';
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
    ctx.strokeStyle = 'rgba(255, 40, 230, 0.75)';
    ctx.moveTo(194, 194);
    ctx.lineTo(240, 240);
    ctx.moveTo(406, 194);
    ctx.lineTo(360, 240);
    ctx.moveTo(195, 405);
    ctx.lineTo(240, 360);
    ctx.moveTo(406, 406);
    ctx.lineTo(360, 360);
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
    ctx.strokeStyle = 'rgba(255, 40, 230, 0.25)';
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
    this.background();
    this.rings();
    this.eye();
    this.lines();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Board);


/***/ }),

/***/ "./js/obstacle.js":
/*!************************!*\
  !*** ./js/obstacle.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Obstacle {
  constructor(ctx, path) {
    this.ctx = ctx;
    this.radius = 1;
    this.speed = 1.09;
    this.path = path;
    this.begin = 0;
    this.end = 0;

    this.sections = [
      0,
      Math.PI / 4,
      Math.PI / 2,
      3 * Math.PI / 4,
      Math.PI,
      5 * Math.PI / 4,
      3 * Math.PI / 2,
      7 * Math.PI / 4
    ];
  }

  render() {
    const ctx = this.ctx;
    const sections = this.sections;
    const path = this.path;

    this.radius *= this.speed;
    this.length = (this.radius / 10) * 3.5;

    ctx.beginPath();
    ctx.strokeStyle = `rgba(255, 0, 0, ${ this.radius / 50 })`;
    ctx.fillStyle = `rgba(255, 0, 0, ${ this.radius / 50 })`;
    ctx.arc(
      300,
      300,
      this.radius,
      5.5 + this.sections[path],
      Math.PI * 2 + this.sections[path],
      false
    );
    ctx.arc(
      300,
      300,
      this.radius - this.length,
      Math.PI * 2 + this.sections[path],
      5.5 + this.sections[path],
      true
    );
    ctx.fill();

    this.begin = this.radius;
    this.end = this.radius - this.length;
  }
}

module.exports = Obstacle;


/***/ }),

/***/ "./js/player.js":
/*!**********************!*\
  !*** ./js/player.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ }),

/***/ "./js/util.js":
/*!********************!*\
  !*** ./js/util.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Util {
  constructor() {
    this.patterns = [
      [0,1,2,3,4,5,6,7],
      [4,1,2,0,3,7,5,6],
      [7,6,5,4,3,2,1,0],
      [4,3,5,0,6,1,7,2],
      [2,4,1,6,4,3,7,0],
      [5,2,7,1,0,4,3,6],
      [1,7,3,2,5,6,0,4],
      [3,5,6,7,0,1,2,4]
    ];
  }

  randomPattern() {
    return this.patterns[this.randomNumber(8)];
  }

  randomNumber(max) {
    let n;
    n = Math.floor(Math.random() * (max));
    return n;
  }
}

module.exports = Util;


/***/ }),

/***/ "./js/wormhole.js":
/*!************************!*\
  !*** ./js/wormhole.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./js/board.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./js/player.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _obstacle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./obstacle */ "./js/obstacle.js");
/* harmony import */ var _obstacle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_obstacle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./js/util.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_util__WEBPACK_IMPORTED_MODULE_3__);





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

    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
    this.player = new _player__WEBPACK_IMPORTED_MODULE_1___default.a(ctx);
    this.util = new _util__WEBPACK_IMPORTED_MODULE_3___default.a();
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
      const obstacle = new _obstacle__WEBPACK_IMPORTED_MODULE_2___default.a(ctx, curPattern[curPath]);
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

/* harmony default export */ __webpack_exports__["default"] = (Wormhole);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map