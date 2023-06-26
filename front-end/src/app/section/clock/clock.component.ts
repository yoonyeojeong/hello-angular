import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Observable, interval } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  timeString: string = '';

  constructor(private router: Router) {
    interval(1000)
      .pipe(
        map(() => {
          return moment().format('YYYY-MM-DD HH:mm:ss');
        })
      )
      .subscribe((data) => {
        this.timeString = data;
      });
  }

  goStopwatch() {
    this.router.navigateByUrl('/stopwatch');
  }

  ngOnInit() {}
}
