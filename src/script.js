class Button extends React.Component {
  constructor(props) {

  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      }
    }
  }


  start() {
    if (!this.state.running) {
      this.state.running = true;
      this.props.watch = setInterval(() => this.step(), 10);
    }
  }

  step() {
    if (!this.state.running) return;
    this.calculate();
    this.print();
  }

  calculate() {
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

  print() {
    return this.format(this.state.times);
  }

  format(times) {
    return `${this.pad0(times.minutes)}:${this.pad0(times.seconds)}:${this.pad0(Math.floor(times.miliseconds))}`
  }

  pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
      result = '0' + result;
    }
    return result;
  }

  stop() {
    this.state.running = false;
    clearInterval(this.props.watch);
  }

  clearWatch() {
    this.stop();
    this.reset();
  }

  reset() {
    this.state.times.miliseconds = 0;
    this.state.times.seconds = 0;
    this.state.times.minutes = 0;
  }

  render() {
    return (<div className='container'>
      <nav>
        <a href="#" className="button" id="start" onClick={this.start = this.start.bind(this)}><i className="fas fa-play"></i> Start</a>
        <a href="#" className="button" id="stop" onClick={this.stop = this.stop.bind(this)}><i className="fas fa-pause"></i> Stop</a>
        <a href="#" className="button" id="lap" onClick={this.clearWatch = this.clearWatch.bind(this)}><i className="fas fa-history"></i> Lap</a>
      </nav>
      <div className="stopwatch">{this.print()}</div>
      <nav className="controls">
        <a href="#" className="button" id="reset"><i className="fas fa-trash-alt"></i> Reset</a>
      </nav>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));