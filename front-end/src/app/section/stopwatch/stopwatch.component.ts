import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
})
export class StopwatchComponent {
  constructor() {}

  present: string = 'reset';
  commandText: any;

  startTime($event: string) {
    if ($event == 'start') {
      if (this.present == 'start') {
        this.present = 'stop';
      } else if (this.present == 'stop' || this.present == 'reset') {
        this.present = 'start';
      }
    } else {
      this.present = $event;
    }
  }
  ngOnInit() {}
}
