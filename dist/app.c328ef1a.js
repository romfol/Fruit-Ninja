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
},{}],"background.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Background = void 0;

var _game_bg = _interopRequireDefault(require("./assets/game_bg.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Background = function Background() {
  _classCallCheck(this, Background);

  this.image = new Image();
  this.image.src = _game_bg.default;
  this.bitmap = new createjs.Bitmap(this.image);
};

exports.Background = Background;
},{"./assets/game_bg.jpg":"assets/game_bg.jpg"}],"assets/play-btn.png":[function(require,module,exports) {
module.exports = "/play-btn.77cb7971.png";
},{}],"play-button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayButton = void 0;

var _playBtn = _interopRequireDefault(require("./assets/play-btn.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlayButton = function PlayButton(x, y) {
  _classCallCheck(this, PlayButton);

  this.image = new Image();
  this.image.src = _playBtn.default;
  this.bitmap = new createjs.Bitmap(this.image);
  this.bitmap.x = x;
  this.bitmap.y = y;
};

exports.PlayButton = PlayButton;
},{"./assets/play-btn.png":"assets/play-btn.png"}],"fruit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fruit = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fruit = function Fruit(x, y, fruit) {
  _classCallCheck(this, Fruit);

  this.image = new Image();
  this.image.src = fruit;
  this.bitmap = new createjs.Bitmap(this.image);
  this.bitmap.x = x;
  this.bitmap.y = y;
  this.bitmap.scaleX = 0.5;
  this.bitmap.scaleY = 0.5; // this.bitmap.addEventListener("click", () => {
  //     this.bitmap.x = 1000;
  //     console.log(2222222222);
  //     // evt.remove(); // removes this listener.
  // });
};

exports.Fruit = Fruit;
},{}],"assets/game_fruit_blue.png":[function(require,module,exports) {
module.exports = "/game_fruit_blue.a68da932.png";
},{}],"assets/game_fruit_green.png":[function(require,module,exports) {
module.exports = "/game_fruit_green.f72d42b1.png";
},{}],"assets/game_fruit_orange.png":[function(require,module,exports) {
module.exports = "/game_fruit_orange.4296c84b.png";
},{}],"assets/game_fruit_purple.png":[function(require,module,exports) {
module.exports = "/game_fruit_purple.d699916d.png";
},{}],"assets/game_fruit_red.png":[function(require,module,exports) {
module.exports = "/game_fruit_red.96068379.png";
},{}],"assets/game_fruit_yellow.png":[function(require,module,exports) {
module.exports = "/game_fruit_yellow.437813a8.png";
},{}],"fruits.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fruits = void 0;

var _fruit = require("./fruit");

var _game_fruit_blue = _interopRequireDefault(require("./assets/game_fruit_blue.png"));

var _game_fruit_green = _interopRequireDefault(require("./assets/game_fruit_green.png"));

var _game_fruit_orange = _interopRequireDefault(require("./assets/game_fruit_orange.png"));

var _game_fruit_purple = _interopRequireDefault(require("./assets/game_fruit_purple.png"));

var _game_fruit_red = _interopRequireDefault(require("./assets/game_fruit_red.png"));

var _game_fruit_yellow = _interopRequireDefault(require("./assets/game_fruit_yellow.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fruits = [_game_fruit_blue.default, _game_fruit_green.default, _game_fruit_orange.default, _game_fruit_purple.default, _game_fruit_red.default, _game_fruit_yellow.default];

var random = function random(max) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return min + (max - min) * Math.random();
};

var randomFruit = function randomFruit() {
  return fruits[Math.floor(random(6))];
};

var Fruits =
/*#__PURE__*/
function () {
  function Fruits() {
    _classCallCheck(this, Fruits);

    this.container = new createjs.Container();
  }

  _createClass(Fruits, [{
    key: "launch",
    value: function launch() {
      var _this = this;

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
      var fruit = new _fruit.Fruit(random(window.innerWidth), window.innerHeight, randomFruit());
      var listener = fruit.on("click", this.sliceFruit); // fruit.bitmap.on("click", this.sliceFruit);

      this.container.addChild(fruit.bitmap);
      return fruit;
    }
  }, {
    key: "sliceFruit",
    value: function sliceFruit(e) {
      console.log("sliceFruit", e);
    }
  }, {
    key: "launchFruit",
    value: function launchFruit(fruit) {
      createjs.Tween.get(fruit.bitmap).to({
        rotation: random(200),
        x: random(40, window.innerWidth - 40),
        y: random(window.innerHeight * 0.1, 30)
      }, 2100).to({
        rotation: random(200),
        x: window.innerWidth / random(6, 1.1),
        y: window.innerHeight * 1.2
      }, 2100).call(function (click) {});
    }
  }]);

  return Fruits;
}();

exports.Fruits = Fruits;
},{"./fruit":"fruit.js","./assets/game_fruit_blue.png":"assets/game_fruit_blue.png","./assets/game_fruit_green.png":"assets/game_fruit_green.png","./assets/game_fruit_orange.png":"assets/game_fruit_orange.png","./assets/game_fruit_purple.png":"assets/game_fruit_purple.png","./assets/game_fruit_red.png":"assets/game_fruit_red.png","./assets/game_fruit_yellow.png":"assets/game_fruit_yellow.png"}],"app.js":[function(require,module,exports) {
"use strict";

var _background = require("./background");

var _playButton = require("./play-button");

var _fruits = require("./fruits");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sketch =
/*#__PURE__*/
function () {
  function Sketch() {
    _classCallCheck(this, Sketch);

    this.stage = new createjs.Stage('demoCanvas');
    this.addObjects();
  }

  _createClass(Sketch, [{
    key: "addObjects",
    value: function addObjects() {
      this.background = new _background.Background();
      this.stage.addChild(this.background.bitmap);
      this.play = new _playButton.PlayButton(50, 10);
      this.stage.addChild(this.play.bitmap);
      this.play.bitmap.addEventListener('click', this.scene2.bind(this)); // for (let index = 0; index < 100; index++) {
      //   let snowflake = new SnowFlake(random(230), random(300));
      //   this.stage.addChild(snowflake.circle);
      //   this.snowflakes.push(snowflake);
      // }

      this.scene1();
    }
  }, {
    key: "scene1",
    value: function scene1() {
      createjs.Ticker.setFPS(60);
      createjs.Ticker.addEventListener('tick', this.stage);
    }
  }, {
    key: "scene2",
    value: function scene2() {
      this.stage.removeChild(this.play.bitmap);
      this.fruits = new _fruits.Fruits();
      this.stage.addChild(this.fruits.container);
      this.fruits.launch();
    }
  }]);

  return Sketch;
}();

var app = new Sketch();
},{"./background":"background.js","./play-button":"play-button.js","./fruits":"fruits.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37991" + '/');

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