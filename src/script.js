class ResultsList extends React.Component {
  get results() {
    return this.props.results.map((result, index) => <li key={index}>{result}</li>)
  }

  render() {
    return (
      <ul className='results'>
        {this.results}
      </ul>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      minutes: 0,
      seconds: 0,
      miliseconds: 0,
      results: []
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
    let mm = this.state.minutes;
    let ss = this.state.seconds;
    let ms = this.state.miliseconds;
    ms++;

    if (ms >= 100) {
      ss++;
      ms = 0;
    }
    if (ss >= 60) {
      mm++;
      ss = 0;
    }
    this.setState({
      minutes: mm,
      seconds: ss,
      miliseconds: ms
    })
  }

  print() {
    const ms = this.state.miliseconds;
    const ss = this.state.seconds;
    const mm = this.state.minutes;
    return `${this.pad0(mm)}:${this.pad0(ss)}:${this.pad0(ms)}`
  }

  pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
      result = '0' + result;
    }
    return result;
  }

  stop() {
    this.setState({ running: false });
    clearInterval(this.props.watch);
  }

  reset() {
    this.setState({
      running: false,
      miliseconds: 0,
      seconds: 0,
      minutes: 0,
      results: []
    })
  }

  addResults() {
    if (this.state.running) {
      const arr = this.state.results;
      const lap = this.print();
      arr.push(lap);
      this.setState({ results: arr });
    }
  }

  render() {
    return (
      <div>
        <div className='container'>
          <nav>
            <a href="#" className="button" id="start" onClick={() => this.start()}><i className="fas fa-play"></i> Start</a>
            <a href="#" className="button" id="stop" onClick={() => this.stop()}><i className="fas fa-pause"></i> Stop</a>
            <a href="#" className="button" id="lap" onClick={() => this.addResults()}><i className="fas fa-history"></i> Lap</a>
          </nav>
          <div className="stopwatch">{this.print()}</div>
          <nav className="controls">
            <a href="#" className="button" id="reset" onClick={() => this.reset()}><i className="fas fa-trash-alt"></i> Reset</a>
          </nav>
        </div>
        <ResultsList results={this.state.results} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));