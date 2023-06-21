import { Component } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
})
export class TimeDisplayComponent {
  test = 1;

  constructor() {
    setInterval(() => {
      this.test++;
    }, 1000);
  }
}
