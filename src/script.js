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
      this.setState({running: true});
      this.watch = setInterval(() => this.step(), 10);
    }
  }

  step() {
    if (!this.state.running) return;
    this.calculate();
    this.print();
  }

  calculate() {
    let minutes = this.state.minutes;
    let seconds = this.state.seconds;
    let miliseconds = this.state.miliseconds;
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
    })
  }

  print() {
    const miliseconds = this.state.miliseconds;
    const seconds = this.state.seconds;
    const minutes = this.state.minutes;
    return `${this.pad0(minutes)}:${this.pad0(seconds)}:${this.pad0(miliseconds)}`
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
    clearInterval(this.watch);
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
      const results = [...this.state.results];
      const lap = this.print();
      results.push(lap);
      this.setState({ results: results });
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