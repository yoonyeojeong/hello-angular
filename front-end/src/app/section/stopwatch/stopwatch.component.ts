import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
})
export class StopwatchComponent {
  constructor(
    private router: Router,
    public pageToggleService: PageToggleService
  ) {}

  present: string = 'reset';
  commandText: any;

  startTime($event: string) {
    if ($event === 'start') {
      this.present = this.present === 'start' ? 'stop' : 'start';
    } else {
      this.present = $event;
    }
  }

  goClock() {
    this.pageToggleService.goPage('/clock');
  }
  ngOnInit() {}
}
