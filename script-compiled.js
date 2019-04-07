"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    return _possibleConstructorReturn(_this);
  }

  return Button;
}(React.Component);

var App =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    var _this2;

    _classCallCheck(this, App);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this2.state = {
      running: false,
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      }
    };
    return _this2;
  }

  _createClass(App, [{
    key: "start",
    value: function start() {
      var _this3 = this;

      if (!this.state.running) {
        this.state.running = true;
        this.props.watch = setInterval(function () {
          return _this3.step();
        }, 10);
      }
    }
  }, {
    key: "step",
    value: function step() {
      if (!this.state.running) return;
      this.calculate();
      this.print();
    }
  }, {
    key: "calculate",
    value: function calculate() {
      this.state.times.miliseconds++;

      if (this.state.times.miliseconds >= 100) {
        this.state.times.seconds++;
        this.state.times.miliseconds = 0;
      }

      if (this.state.times.seconds >= 60) {
        this.state.times.minutes++;
        this.state.times.seconds = 0;
      }
    }
  }, {
    key: "print",
    value: function print() {
      return this.format(this.state.times);
    }
  }, {
    key: "format",
    value: function format(times) {
      return "".concat(this.pad0(times.minutes), ":").concat(this.pad0(times.seconds), ":").concat(this.pad0(Math.floor(times.miliseconds)));
    }
  }, {
    key: "pad0",
    value: function pad0(value) {
      var result = value.toString();

      if (result.length < 2) {
        result = '0' + result;
      }

      return result;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.state.running = false;
      clearInterval(this.props.watch);
    }
  }, {
    key: "clearWatch",
    value: function clearWatch() {
      this.stop();
      this.reset();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.state.times.miliseconds = 0;
      this.state.times.seconds = 0;
      this.state.times.minutes = 0;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "container"
      }, React.createElement("nav", null, React.createElement("a", {
        href: "#",
        className: "button",
        id: "start",
        onClick: this.start = this.start.bind(this)
      }, React.createElement("i", {
        className: "fas fa-play"
      }), " Start"), React.createElement("a", {
        href: "#",
        className: "button",
        id: "stop",
        onClick: this.stop = this.stop.bind(this)
      }, React.createElement("i", {
        className: "fas fa-pause"
      }), " Stop"), React.createElement("a", {
        href: "#",
        className: "button",
        id: "lap",
        onClick: this.clearWatch = this.clearWatch.bind(this)
      }, React.createElement("i", {
        className: "fas fa-history"
      }), " Lap")), React.createElement("div", {
        className: "stopwatch"
      }, this.print()), React.createElement("nav", {
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

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

//# sourceMappingURL=script-compiled.js.map