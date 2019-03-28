class Stopwatch {
  constructor(display) {
    this.running = false;
    this.display = display;
    this.reset();
    this.print(this.times);
  }

  reset() {
    this.times = {
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    }
  }

  print() {
    this.display.innerText = this.format(this.times);
  }

  format(times) {
    return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`
  }

  start() {
    if (!this.running) {
      this.running = true;
      this.watch = setInterval(() => this.step(), 10);
    }
  }

  step() {
    if (!this.running) return;
    this.calculate();
    this.print();
  }

  calculate() {
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

  stop() {
    this.running = false;
    clearInterval(this.watch);
  }

  addResults() {
    if (!this.running) return;
    const resultsList = document.querySelector('.results');
    const el = document.createElement('li');
    el.innerText = this.format(this.times);
    resultsList.appendChild(el);
  }

  clearResults() {
    const resultsList = document.querySelector('.results');
    resultsList.innerHTML = '';
  }

  clearWatch() {
    this.stop();
    this.reset();
    this.print();
    this.clearResults();
  }
}

function pad0(value) {
  let result = value.toString();
  if (result.length < 2) {
    result = '0' + result;
  }
  return result;
}

const stopwatch = new Stopwatch(
  document.querySelector('.stopwatch')
);

let startButton = document.querySelector('#start');
startButton.addEventListener('click', () => stopwatch.start());
let stopButton = document.querySelector('#stop');
stopButton.addEventListener('click', () => stopwatch.stop());
let lapButton = document.querySelector('#lap');
lapButton.addEventListener('click', () => stopwatch.addResults());
let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => stopwatch.clearWatch());
