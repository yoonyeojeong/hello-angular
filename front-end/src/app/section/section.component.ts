import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  constructor() {}

  present: string = 'reset';
  commandText: any;

  startTime($event: string) {
    if ($event === 'start') {
      this.present = this.present === 'start' ? 'stop' : 'start';
    } else {
      this.present = $event;
    }
  }

  ngOnInit() {}
}
