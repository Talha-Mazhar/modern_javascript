import { clock } from './clock.js';

class ExtendedClock extends clock {
  constructor(options) {
    super(options);
    let { precision = 1000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

let lowResolutionClock = new ExtendedClock({
  template: 'h:m:s',
  precision: 10000,
});

lowResolutionClock.start();
