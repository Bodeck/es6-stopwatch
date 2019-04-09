"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ResultsList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ResultsList, _React$Component);

  function ResultsList() {
    _classCallCheck(this, ResultsList);

    return _possibleConstructorReturn(this, _getPrototypeOf(ResultsList).apply(this, arguments));
  }

  _createClass(ResultsList, [{
    key: "render",
    value: function render() {
      return React.createElement("ul", {
        className: "results"
      }, this.results);
    }
  }, {
    key: "results",
    get: function get() {
      return this.props.results.map(function (result, index) {
        return React.createElement("li", {
          key: index
        }, result);
      });
    }
  }]);

  return ResultsList;
}(React.Component);

var App =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      running: false,
      minutes: 0,
      seconds: 0,
      miliseconds: 0,
      results: []
    };
    return _this;
  }

  _createClass(App, [{
    key: "start",
    value: function start() {
      var _this2 = this;

      if (!this.state.running) {
        this.setState({
          running: true
        });
        this.watch = setInterval(function () {
          return _this2.step();
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
      var minutes = this.state.minutes;
      var seconds = this.state.seconds;
      var miliseconds = this.state.miliseconds;
      miliseconds++;

      if (miliseconds >= 100) {
        seconds++;
        miliseconds = 0;
      }

      if (seconds >= 60) {
        minutes++;
        seconds = 0;
      }

      this.setState({
        minutes: minutes,
        seconds: seconds,
        miliseconds: miliseconds
      });
    }
  }, {
    key: "print",
    value: function print() {
      var miliseconds = this.state.miliseconds;
      var seconds = this.state.seconds;
      var minutes = this.state.minutes;
      return "".concat(this.pad0(minutes), ":").concat(this.pad0(seconds), ":").concat(this.pad0(miliseconds));
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
      this.setState({
        running: false
      });
      clearInterval(this.watch);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        running: false,
        miliseconds: 0,
        seconds: 0,
        minutes: 0,
        results: []
      });
    }
  }, {
    key: "addResults",
    value: function addResults() {
      if (this.state.running) {
        var results = _toConsumableArray(this.state.results);

        var lap = this.print();
        results.push(lap);
        this.setState({
          results: results
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement("div", null, React.createElement("div", {
        className: "container"
      }, React.createElement("nav", null, React.createElement("a", {
        href: "#",
        className: "button",
        id: "start",
        onClick: function onClick() {
          return _this3.start();
        }
      }, React.createElement("i", {
        className: "fas fa-play"
      }), " Start"), React.createElement("a", {
        href: "#",
        className: "button",
        id: "stop",
        onClick: function onClick() {
          return _this3.stop();
        }
      }, React.createElement("i", {
        className: "fas fa-pause"
      }), " Stop"), React.createElement("a", {
        href: "#",
        className: "button",
        id: "lap",
        onClick: function onClick() {
          return _this3.addResults();
        }
      }, React.createElement("i", {
        className: "fas fa-history"
      }), " Lap")), React.createElement("div", {
        className: "stopwatch"
      }, this.print()), React.createElement("nav", {
        className: "controls"
      }, React.createElement("a", {
        href: "#",
        className: "button",
        id: "reset",
        onClick: function onClick() {
          return _this3.reset();
        }
      }, React.createElement("i", {
        className: "fas fa-trash-alt"
      }), " Reset"))), React.createElement(ResultsList, {
        results: this.state.results
      }));
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

//# sourceMappingURL=script-compiled.js.map