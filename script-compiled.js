"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// class Stopwatch {
//   constructor(display) {
//     this.running = false;
//     this.display = display;
//     this.reset();
//     this.print(this.times);
//   }
//   reset() {
//     this.times = {
//       minutes: 0,
//       seconds: 0,
//       miliseconds: 0
//     }
//   }
//   print() {
//     this.display.innerText = this.format(this.times);
//   }
//   format(times) {
//     return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`
//   }
//   start() {
//     if (!this.running) {
//       this.running = true;
//       this.watch = setInterval(() => this.step(), 10);
//     }
//   }
//   step() {
//     if (!this.running) return;
//     this.calculate();
//     this.print();
//   }
//   calculate() {
//     this.times.miliseconds++;
//     if (this.times.miliseconds >= 100) {
//       this.times.seconds++;
//       this.times.miliseconds = 0;
//     }
//     if (this.times.seconds >= 60) {
//       this.times.minutes++;
//       this.times.seconds = 0;
//     }
//   }
//   stop() {
//     this.running = false;
//     clearInterval(this.watch);
//   }
//   addResults() {
//     if (!this.running) return;
//     const resultsList = document.querySelector('.results');
//     const el = document.createElement('li');
//     el.innerText = this.format(this.times);
//     resultsList.appendChild(el);
//   }
//   clearResults() {
//     const resultsList = document.querySelector('.results');
//     resultsList.innerHTML = '';
//   }
//   clearWatch() {
//     this.stop();
//     this.reset();
//     this.print();
//     this.clearResults();
//   }
// }
function pad0(value) {
  var result = value.toString();

  if (result.length < 2) {
    result = '0' + result;
  }

  return result;
} // const stopwatch = new Stopwatch(
//   document.querySelector('.stopwatch')
// );
// let startButton = document.querySelector('#start');
// startButton.addEventListener('click', () => stopwatch.start());
// let stopButton = document.querySelector('#stop');
// stopButton.addEventListener('click', () => stopwatch.stop());
// let lapButton = document.querySelector('#lap');
// lapButton.addEventListener('click', () => stopwatch.addResults());
// let resetButton = document.querySelector('#reset');
// resetButton.addEventListener('click', () => stopwatch.clearWatch());


var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      running: false
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "container"
      }, React.createElement("nav", null, React.createElement("a", {
        href: "#",
        className: "button",
        id: "start"
      }, React.createElement("i", {
        className: "fas fa-play"
      }), " Start"), React.createElement("a", {
        href: "#",
        className: "button",
        id: "stop"
      }, React.createElement("i", {
        className: "fas fa-pause"
      }), " Stop"), React.createElement("a", {
        href: "#",
        className: "button",
        id: "lap"
      }, React.createElement("i", {
        className: "fas fa-history"
      }), " Lap")), React.createElement("div", {
        className: "stopwatch"
      }, this.props.minutes, ":", this.props.seconds, ":", this.props.miliseconds), React.createElement("nav", {
        className: "controls"
      }, React.createElement("a", {
        href: "#",
        className: "button",
        id: "reset"
      }, React.createElement("i", {
        className: "fas fa-trash-alt"
      }), " Reset")));
    }
  }]);

  return App;
}(React.Component);

_defineProperty(App, "defaultProps", {
  minutes: 0,
  seconds: 0,
  miliseconds: 0
});

_defineProperty(App, "propTypes", {
  minutes: React.PropTypes.number.isRequired,
  seconds: React.PropTypes.number.isRequired,
  miliseconds: React.PropTypes.number.isRequired
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

//# sourceMappingURL=script-compiled.js.map