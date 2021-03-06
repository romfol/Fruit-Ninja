// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/game_bg.jpg":[function(require,module,exports) {
module.exports = "/game_bg.836ae9aa.jpg";
},{}],"src/background.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Background = void 0;

var _game_bg = _interopRequireDefault(require("../assets/game_bg.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Background = function Background() {
  _classCallCheck(this, Background);

  this.image = new Image();
  this.image.src = _game_bg.default;
  this.bitmap = new createjs.Bitmap(this.image);
  this.bitmap.scaleX = window.innerWidth / this.image.width;
  this.bitmap.scaleY = window.innerHeight / this.image.height;
};

exports.Background = Background;
},{"../assets/game_bg.jpg":"assets/game_bg.jpg"}],"assets/play-btn.png":[function(require,module,exports) {
module.exports = "/play-btn.77cb7971.png";
},{}],"src/play-button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayButton = void 0;

var _playBtn = _interopRequireDefault(require("../assets/play-btn.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlayButton = function PlayButton() {
  _classCallCheck(this, PlayButton);

  this.image = new Image();
  this.image.src = _playBtn.default;
  this.bitmap = new createjs.Bitmap(this.image);
  this.bitmap.x = (window.innerWidth - this.image.width) / 2;
  this.bitmap.y = 20;
};

exports.PlayButton = PlayButton;
},{"../assets/play-btn.png":"assets/play-btn.png"}],"assets/game_fruit_blue.png":[function(require,module,exports) {
module.exports = "/game_fruit_blue.a68da932.png";
},{}],"assets/game_fruit_blue_s.png":[function(require,module,exports) {
module.exports = "/game_fruit_blue_s.30143d5f.png";
},{}],"assets/game_fruit_blue_l.png":[function(require,module,exports) {
module.exports = "/game_fruit_blue_l.1fcde41d.png";
},{}],"assets/game_fruit_blue_r.png":[function(require,module,exports) {
module.exports = "/game_fruit_blue_r.d5e37d19.png";
},{}],"assets/game_fruit_green.png":[function(require,module,exports) {
module.exports = "/game_fruit_green.f72d42b1.png";
},{}],"assets/game_fruit_green_s.png":[function(require,module,exports) {
module.exports = "/game_fruit_green_s.9232c482.png";
},{}],"assets/game_fruit_green_l.png":[function(require,module,exports) {
module.exports = "/game_fruit_green_l.0f702726.png";
},{}],"assets/game_fruit_green_r.png":[function(require,module,exports) {
module.exports = "/game_fruit_green_r.935fd146.png";
},{}],"assets/game_fruit_orange.png":[function(require,module,exports) {
module.exports = "/game_fruit_orange.4296c84b.png";
},{}],"assets/game_fruit_orange_s.png":[function(require,module,exports) {
module.exports = "/game_fruit_orange_s.1e0a8c88.png";
},{}],"assets/game_fruit_orange_l.png":[function(require,module,exports) {
module.exports = "/game_fruit_orange_l.0d238433.png";
},{}],"assets/game_fruit_orange_r.png":[function(require,module,exports) {
module.exports = "/game_fruit_orange_r.752b8ea6.png";
},{}],"assets/game_fruit_purple.png":[function(require,module,exports) {
module.exports = "/game_fruit_purple.d699916d.png";
},{}],"assets/game_fruit_purple_s.png":[function(require,module,exports) {
module.exports = "/game_fruit_purple_s.69c46ad7.png";
},{}],"assets/game_fruit_purple_l.png":[function(require,module,exports) {
module.exports = "/game_fruit_purple_l.b4848c21.png";
},{}],"assets/game_fruit_purple_r.png":[function(require,module,exports) {
module.exports = "/game_fruit_purple_r.c6ec2b2e.png";
},{}],"assets/game_fruit_red.png":[function(require,module,exports) {
module.exports = "/game_fruit_red.96068379.png";
},{}],"assets/game_fruit_red_s.png":[function(require,module,exports) {
module.exports = "/game_fruit_red_s.b210ecfb.png";
},{}],"assets/game_fruit_red_l.png":[function(require,module,exports) {
module.exports = "/game_fruit_red_l.d5fd1448.png";
},{}],"assets/game_fruit_red_r.png":[function(require,module,exports) {
module.exports = "/game_fruit_red_r.cff09886.png";
},{}],"assets/game_fruit_yellow.png":[function(require,module,exports) {
module.exports = "/game_fruit_yellow.437813a8.png";
},{}],"assets/game_fruit_yellow_s.png":[function(require,module,exports) {
module.exports = "/game_fruit_yellow_s.cd32b651.png";
},{}],"assets/game_fruit_yellow_l.png":[function(require,module,exports) {
module.exports = "/game_fruit_yellow_l.93d8fb4f.png";
},{}],"assets/game_fruit_yellow_r.png":[function(require,module,exports) {
module.exports = "/game_fruit_yellow_r.a5c8387a.png";
},{}],"helpers/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = exports.fruits = void 0;

var _game_fruit_blue = _interopRequireDefault(require("../assets/game_fruit_blue.png"));

var _game_fruit_blue_s = _interopRequireDefault(require("../assets/game_fruit_blue_s.png"));

var _game_fruit_blue_l = _interopRequireDefault(require("../assets/game_fruit_blue_l.png"));

var _game_fruit_blue_r = _interopRequireDefault(require("../assets/game_fruit_blue_r.png"));

var _game_fruit_green = _interopRequireDefault(require("../assets/game_fruit_green.png"));

var _game_fruit_green_s = _interopRequireDefault(require("../assets/game_fruit_green_s.png"));

var _game_fruit_green_l = _interopRequireDefault(require("../assets/game_fruit_green_l.png"));

var _game_fruit_green_r = _interopRequireDefault(require("../assets/game_fruit_green_r.png"));

var _game_fruit_orange = _interopRequireDefault(require("../assets/game_fruit_orange.png"));

var _game_fruit_orange_s = _interopRequireDefault(require("../assets/game_fruit_orange_s.png"));

var _game_fruit_orange_l = _interopRequireDefault(require("../assets/game_fruit_orange_l.png"));

var _game_fruit_orange_r = _interopRequireDefault(require("../assets/game_fruit_orange_r.png"));

var _game_fruit_purple = _interopRequireDefault(require("../assets/game_fruit_purple.png"));

var _game_fruit_purple_s = _interopRequireDefault(require("../assets/game_fruit_purple_s.png"));

var _game_fruit_purple_l = _interopRequireDefault(require("../assets/game_fruit_purple_l.png"));

var _game_fruit_purple_r = _interopRequireDefault(require("../assets/game_fruit_purple_r.png"));

var _game_fruit_red = _interopRequireDefault(require("../assets/game_fruit_red.png"));

var _game_fruit_red_s = _interopRequireDefault(require("../assets/game_fruit_red_s.png"));

var _game_fruit_red_l = _interopRequireDefault(require("../assets/game_fruit_red_l.png"));

var _game_fruit_red_r = _interopRequireDefault(require("../assets/game_fruit_red_r.png"));

var _game_fruit_yellow = _interopRequireDefault(require("../assets/game_fruit_yellow.png"));

var _game_fruit_yellow_s = _interopRequireDefault(require("../assets/game_fruit_yellow_s.png"));

var _game_fruit_yellow_l = _interopRequireDefault(require("../assets/game_fruit_yellow_l.png"));

var _game_fruit_yellow_r = _interopRequireDefault(require("../assets/game_fruit_yellow_r.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fruits = [[_game_fruit_blue.default, _game_fruit_blue_s.default, _game_fruit_blue_l.default, _game_fruit_blue_r.default], [_game_fruit_green.default, _game_fruit_green_s.default, _game_fruit_green_l.default, _game_fruit_green_r.default], [_game_fruit_orange.default, _game_fruit_orange_s.default, _game_fruit_orange_l.default, _game_fruit_orange_r.default], [_game_fruit_purple.default, _game_fruit_purple_s.default, _game_fruit_purple_l.default, _game_fruit_purple_r.default], [_game_fruit_red.default, _game_fruit_red_s.default, _game_fruit_red_l.default, _game_fruit_red_r.default], [_game_fruit_yellow.default, _game_fruit_yellow_s.default, _game_fruit_yellow_l.default, _game_fruit_yellow_r.default]];
exports.fruits = fruits;

var random = function random(max) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return min + (max - min) * Math.random();
};

exports.random = random;
},{"../assets/game_fruit_blue.png":"assets/game_fruit_blue.png","../assets/game_fruit_blue_s.png":"assets/game_fruit_blue_s.png","../assets/game_fruit_blue_l.png":"assets/game_fruit_blue_l.png","../assets/game_fruit_blue_r.png":"assets/game_fruit_blue_r.png","../assets/game_fruit_green.png":"assets/game_fruit_green.png","../assets/game_fruit_green_s.png":"assets/game_fruit_green_s.png","../assets/game_fruit_green_l.png":"assets/game_fruit_green_l.png","../assets/game_fruit_green_r.png":"assets/game_fruit_green_r.png","../assets/game_fruit_orange.png":"assets/game_fruit_orange.png","../assets/game_fruit_orange_s.png":"assets/game_fruit_orange_s.png","../assets/game_fruit_orange_l.png":"assets/game_fruit_orange_l.png","../assets/game_fruit_orange_r.png":"assets/game_fruit_orange_r.png","../assets/game_fruit_purple.png":"assets/game_fruit_purple.png","../assets/game_fruit_purple_s.png":"assets/game_fruit_purple_s.png","../assets/game_fruit_purple_l.png":"assets/game_fruit_purple_l.png","../assets/game_fruit_purple_r.png":"assets/game_fruit_purple_r.png","../assets/game_fruit_red.png":"assets/game_fruit_red.png","../assets/game_fruit_red_s.png":"assets/game_fruit_red_s.png","../assets/game_fruit_red_l.png":"assets/game_fruit_red_l.png","../assets/game_fruit_red_r.png":"assets/game_fruit_red_r.png","../assets/game_fruit_yellow.png":"assets/game_fruit_yellow.png","../assets/game_fruit_yellow_s.png":"assets/game_fruit_yellow_s.png","../assets/game_fruit_yellow_l.png":"assets/game_fruit_yellow_l.png","../assets/game_fruit_yellow_r.png":"assets/game_fruit_yellow_r.png"}],"src/fruits.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fruits = void 0;

var _ = require("./");

var _helpers = require("../helpers");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var randomFruit = function randomFruit() {
  return Math.floor((0, _helpers.random)(6));
};

var Fruits =
/*#__PURE__*/
function () {
  function Fruits() {
    _classCallCheck(this, Fruits);

    this.container = new createjs.Container();
    window.points = 0;
  }

  _createClass(Fruits, [{
    key: "start",
    value: function start() {
      var _this = this;

      this.splashedBackground = new _.SplashedBackground();
      this.container.addChild(this.splashedBackground.container);
      setInterval(function () {
        _this.createAndLaunch();
      }, 2000);
    }
  }, {
    key: "createAndLaunch",
    value: function createAndLaunch() {
      var fruit = this.createFruit();
      this.launchFruit(fruit);
    }
  }, {
    key: "createFruit",
    value: function createFruit() {
      var randomFruitId = randomFruit();
      var fruit = new _.Fruit((0, _helpers.random)(window.innerWidth), window.innerHeight, _helpers.fruits[randomFruitId][0], randomFruitId);
      fruit.bitmap.addEventListener('mousedown', this.fruitOnCLick.bind(this, fruit));
      this.container.addChild(fruit.bitmap);
      return fruit;
    }
  }, {
    key: "fruitOnCLick",
    value: function fruitOnCLick(fruit) {
      this.removeFruit(fruit.bitmap);
      window.points += Math.ceil((0, _helpers.random)(29, 4));
      this.addFruitSplash(fruit);
      this.addSlicedFruit(fruit);
    }
  }, {
    key: "addSlicedFruit",
    value: function addSlicedFruit(fruit) {
      var fruitSliced = new _.FruitSliced(fruit.bitmap.x, fruit.bitmap.y, _helpers.fruits[fruit.randomId][2], _helpers.fruits[fruit.randomId][3]);
      this.container.addChild(fruitSliced.container);
      fruitSliced.init();
    }
  }, {
    key: "addFruitSplash",
    value: function addFruitSplash(fruit) {
      var fruitSplash = new _.SimpleEntity(fruit.bitmap.x - 100, fruit.bitmap.y - 60, _helpers.fruits[fruit.randomId][1]);
      this.splashedBackground.container.addChild(fruitSplash.bitmap);
    }
  }, {
    key: "removeFruit",
    value: function removeFruit(fruit) {
      this.container.removeChild(fruit);
    }
  }, {
    key: "launchFruit",
    value: function launchFruit(fruit) {
      var _this2 = this;

      createjs.Tween.get(fruit.bitmap).to({
        rotation: (0, _helpers.random)(200),
        x: (0, _helpers.random)(40, window.innerWidth - 40),
        y: (0, _helpers.random)(window.innerHeight * 0.1, 30)
      }, 1500).wait(40).to({
        rotation: (0, _helpers.random)(200),
        x: window.innerWidth / (0, _helpers.random)(6, 1),
        y: window.innerHeight
      }, 1500).call(function () {
        _this2.removeFruit(fruit.bitmap);
      });
    }
  }]);

  return Fruits;
}();

exports.Fruits = Fruits;
},{"./":"src/index.js","../helpers":"helpers/index.js"}],"src/game-result.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameResult = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameResult = function GameResult(score) {
  _classCallCheck(this, GameResult);

  this.text = new createjs.Text("Total score: ".concat(score), '20px Arial', 'white');
  this.text.x = (window.innerWidth - 130) / 2;
  this.text.y = window.innerHeight / 2;
};

exports.GameResult = GameResult;
},{}],"src/game-data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameData = void 0;

var _ = require("./");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameData =
/*#__PURE__*/
function () {
  function GameData() {
    _classCallCheck(this, GameData);

    this.container = new createjs.Container();
  }

  _createClass(GameData, [{
    key: "init",
    value: function init() {
      this.timer = new _.Timer();
      this.container.addChild(this.timer.timer);
      this.text = new _.ResultText(window.points, window.innerWidth - 150, 20);
      this.container.addChild(this.text.text);
      this.timerId = setInterval(this.countdown.bind(this), 1000);
    }
  }, {
    key: "countdown",
    value: function countdown() {
      if (this.timer.timer.text == 0) {
        clearTimeout(this.timerId);
      } else {
        this.timer.timer.text--;
        this.text.text.text = "Total score: ".concat(window.points);
      }
    }
  }]);

  return GameData;
}();

exports.GameData = GameData;
},{"./":"src/index.js"}],"src/timer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timer = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timer = function Timer() {
  _classCallCheck(this, Timer);

  this.timer = new createjs.Text(30, '20px Arial', 'white');
  this.timer.x = 20;
  this.timer.y = 20;
};

exports.Timer = Timer;
},{}],"src/result-text.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResultText = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResultText = function ResultText(score, x, y) {
  _classCallCheck(this, ResultText);

  this.text = new createjs.Text("Total score: ".concat(score), '20px Arial', 'white');
  this.text.x = x;
  this.text.y = y;
};

exports.ResultText = ResultText;
},{}],"src/fruit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fruit = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fruit = function Fruit(x, y, fruit, randomId) {
  _classCallCheck(this, Fruit);

  this.randomId = randomId;
  this.image = new Image();
  this.image.src = fruit;
  this.bitmap = new createjs.Bitmap(this.image);
  this.bitmap.x = x;
  this.bitmap.y = y;
  this.bitmap.scaleX = 0.5;
  this.bitmap.scaleY = 0.5;
};

exports.Fruit = Fruit;
},{}],"src/simple-entity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleEntity = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SimpleEntity = function SimpleEntity(x, y, entity) {
  _classCallCheck(this, SimpleEntity);

  this.image = new Image();
  this.image.src = entity;
  this.bitmap = new createjs.Bitmap(this.image);
  this.bitmap.x = x;
  this.bitmap.y = y;
  this.bitmap.scaleX = 0.5;
  this.bitmap.scaleY = 0.5;
};

exports.SimpleEntity = SimpleEntity;
},{}],"src/fruit-sliced.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FruitSliced = void 0;

var _ = require("./");

var _helpers = require("../helpers");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FruitSliced =
/*#__PURE__*/
function () {
  function FruitSliced(x, y, leftPart, rightPart) {
    _classCallCheck(this, FruitSliced);

    this.leftPart = leftPart;
    this.rightPart = rightPart;
    this.container = new createjs.Container();
    this.fruitX = x;
    this.fruitY = y;
  }

  _createClass(FruitSliced, [{
    key: "init",
    value: function init() {
      var leftSlice = new _.SimpleEntity(this.fruitX - 40, this.fruitY, this.leftPart);
      this.container.addChild(leftSlice.bitmap);
      var rightSlice = new _.SimpleEntity(this.fruitX + 40, this.fruitY, this.rightPart);
      this.container.addChild(rightSlice.bitmap);
      this.animate(leftSlice);
      this.animate(rightSlice);
    }
  }, {
    key: "animate",
    value: function animate(slice) {
      var _this = this;

      createjs.Tween.get(slice.bitmap).to({
        y: slice.bitmap.y - (0, _helpers.random)(50)
      }, 200).wait(30).to({
        rotation: (0, _helpers.random)(200),
        x: slice.bitmap.x + (0, _helpers.random)(50, -50),
        y: window.innerHeight
      }, 150000 / slice.bitmap.y).call(function () {
        _this.container.removeChild(slice.bitmap);
      });
    }
  }]);

  return FruitSliced;
}();

exports.FruitSliced = FruitSliced;
},{"./":"src/index.js","../helpers":"helpers/index.js"}],"src/splashed-background.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SplashedBackground = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SplashedBackground = function SplashedBackground() {
  _classCallCheck(this, SplashedBackground);

  this.container = new createjs.Container();
};

exports.SplashedBackground = SplashedBackground;
},{}],"src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Background", {
  enumerable: true,
  get: function () {
    return _background.Background;
  }
});
Object.defineProperty(exports, "PlayButton", {
  enumerable: true,
  get: function () {
    return _playButton.PlayButton;
  }
});
Object.defineProperty(exports, "Fruits", {
  enumerable: true,
  get: function () {
    return _fruits.Fruits;
  }
});
Object.defineProperty(exports, "GameResult", {
  enumerable: true,
  get: function () {
    return _gameResult.GameResult;
  }
});
Object.defineProperty(exports, "GameData", {
  enumerable: true,
  get: function () {
    return _gameData.GameData;
  }
});
Object.defineProperty(exports, "Timer", {
  enumerable: true,
  get: function () {
    return _timer.Timer;
  }
});
Object.defineProperty(exports, "ResultText", {
  enumerable: true,
  get: function () {
    return _resultText.ResultText;
  }
});
Object.defineProperty(exports, "Fruit", {
  enumerable: true,
  get: function () {
    return _fruit.Fruit;
  }
});
Object.defineProperty(exports, "SimpleEntity", {
  enumerable: true,
  get: function () {
    return _simpleEntity.SimpleEntity;
  }
});
Object.defineProperty(exports, "FruitSliced", {
  enumerable: true,
  get: function () {
    return _fruitSliced.FruitSliced;
  }
});
Object.defineProperty(exports, "SplashedBackground", {
  enumerable: true,
  get: function () {
    return _splashedBackground.SplashedBackground;
  }
});

var _background = require("./background");

var _playButton = require("./play-button");

var _fruits = require("./fruits");

var _gameResult = require("./game-result");

var _gameData = require("./game-data");

var _timer = require("./timer");

var _resultText = require("./result-text");

var _fruit = require("./fruit");

var _simpleEntity = require("./simple-entity");

var _fruitSliced = require("./fruit-sliced");

var _splashedBackground = require("./splashed-background");
},{"./background":"src/background.js","./play-button":"src/play-button.js","./fruits":"src/fruits.js","./game-result":"src/game-result.js","./game-data":"src/game-data.js","./timer":"src/timer.js","./result-text":"src/result-text.js","./fruit":"src/fruit.js","./simple-entity":"src/simple-entity.js","./fruit-sliced":"src/fruit-sliced.js","./splashed-background":"src/splashed-background.js"}],"app.js":[function(require,module,exports) {
"use strict";

var _src = require("./src");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sketch =
/*#__PURE__*/
function () {
  function Sketch() {
    _classCallCheck(this, Sketch);

    this.canvas = document.getElementById('ninjaCanvas');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.stage = new createjs.Stage('ninjaCanvas');
    this.addObjects();
  }

  _createClass(Sketch, [{
    key: "addObjects",
    value: function addObjects() {
      this.background = new _src.Background();
      this.stage.addChild(this.background.bitmap);
      this.play = new _src.PlayButton();
      this.stage.addChild(this.play.bitmap);
      this.play.bitmap.addEventListener('click', this.scene1.bind(this));
      createjs.Ticker.setFPS(60);
      createjs.Ticker.addEventListener('tick', this.stage);
    }
  }, {
    key: "scene1",
    value: function scene1() {
      var _this = this;

      this.stage.removeChild(this.play.bitmap);
      this.fruits = new _src.Fruits();
      this.stage.addChild(this.fruits.container);
      this.fruits.start();
      this.gameData = new _src.GameData();
      this.stage.addChild(this.gameData.container);
      this.gameData.init();
      setTimeout(function () {
        _this.stage.removeChild(_this.fruits.container);

        _this.stage.removeChild(_this.gameData.container);

        _this.scene2();
      }, 30000);
    }
  }, {
    key: "scene2",
    value: function scene2() {
      this.gameResult = new _src.GameResult(window.points);
      this.stage.addChild(this.gameResult.text);
    }
  }]);

  return Sketch;
}();

var app = new Sketch();
},{"./src":"src/index.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "34355" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map