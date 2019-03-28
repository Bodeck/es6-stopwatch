"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Stopwatch =
/*#__PURE__*/
function () {
  function Stopwatch(display) {
    _classCallCheck(this, Stopwatch);

    this.running = false;
    this.display = display;
    this.reset();
    this.print(this.times);
  }

  _createClass(Stopwatch, [{
    key: "reset",
    value: function reset() {
      this.times = {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      };
    }
  }, {
    key: "print",
    value: function print() {
      this.display.innerText = this.format(this.times);
    }
  }, {
    key: "format",
    value: function format(times) {
      return "".concat(pad0(times.minutes), ":").concat(pad0(times.seconds), ":").concat(pad0(Math.floor(times.miliseconds)));
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      if (!this.running) {
        this.running = true;
        this.watch = setInterval(function () {
          return _this.step();
        }, 10);
      }
    }
  }, {
    key: "step",
    value: function step() {
      if (!this.running) return;
      this.calculate();
      this.print();
    }
  }, {
    key: "calculate",
    value: function calculate() {
      this.times.miliseconds++;

      if (this.times.miliseconds >= 100) {
        this.times.seconds++;
        this.times.miliseconds = 0;
      }

      if (this.times.seconds >= 60) {
        this.times.minutes++;
        this.times.seconds = 0;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      this.running = false;
      clearInterval(this.watch);
    }
  }, {
    key: "addResults",
    value: function addResults() {
      if (!this.running) return;
      var resultsList = document.querySelector('.results');
      var el = document.createElement('li');
      el.innerText = this.format(this.times);
      resultsList.appendChild(el);
    }
  }, {
    key: "clearResults",
    value: function clearResults() {
      var resultsList = document.querySelector('.results');
      resultsList.innerHTML = '';
    }
  }, {
    key: "clearWatch",
    value: function clearWatch() {
      this.stop();
      this.reset();
      this.print();
      this.clearResults();
    }
  }]);

  return Stopwatch;
}();

function pad0(value) {
  var result = value.toString();

  if (result.length < 2) {
    result = '0' + result;
  }

  return result;
}

var stopwatch = new Stopwatch(document.querySelector('.stopwatch'));
var startButton = document.querySelector('#start');
startButton.addEventListener('click', function () {
  return stopwatch.start();
});
var stopButton = document.querySelector('#stop');
stopButton.addEventListener('click', function () {
  return stopwatch.stop();
});
var lapButton = document.querySelector('#lap');
lapButton.addEventListener('click', function () {
  return stopwatch.addResults();
});
var resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function () {
  return stopwatch.clearWatch();
});

//# sourceMappingURL=script-compiled.js.map