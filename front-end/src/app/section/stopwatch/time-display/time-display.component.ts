import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
})
export class TimeDisplayComponent implements OnInit {
  @Input() inputData: string = '';
  minutes: number = 0;
  seconds: number = 0;
  milliseconds: number = 0;

  min: string = '00';
  sec: string = '00';
  ms: string = '00';
  constructor() {}

  timeInterval: any;

  timeStart() {
    this.timeInterval = setInterval(() => {
      this.milliseconds++;
      this.min = String(this.minutes).padStart(2, '0');
      this.sec = String(this.seconds).padStart(2, '0');
      this.ms = String(this.milliseconds).padStart(2, '0');

      if (this.milliseconds == 100) {
        this.milliseconds = 0;
        this.seconds++;
      }
      if (this.seconds == 60) {
        this.seconds = 0;
        this.minutes++;
      }
    }, 1);
  }
  timeStop() {
    clearInterval(this.timeInterval);
  }

  timeReset() {
    this.milliseconds = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.min = String(this.minutes).padStart(2, '0');
    this.sec = String(this.seconds).padStart(2, '0');
    this.ms = String(this.milliseconds).padStart(2, '0');
  }
  ngOnInit() {}

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (let propName in changes) {
      if (propName == 'inputData') {
        switch (changes[propName].currentValue) {
          case 'start':
            this.timeStart();
            break;
          case 'stop':
            this.timeStop();
            break;
          case 'reset':
            this.timeReset();
            break;
          default:
            this.timeReset();
            break;
        }
      }
    }
  }
}
