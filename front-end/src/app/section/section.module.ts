import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { StopwatchModule } from './stopwatch/stopwatch.module';
import { RouterModule, Routes } from '@angular/router';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ClockComponent } from './clock/clock.component';
import { ClockModule } from './clock/clock.module';

const routes: Routes = [
  {
    path: 'stopwatch',
    component: StopwatchComponent,
  },
  {
    path: 'clock',
    component: ClockComponent,
  },
];

@NgModule({
  declarations: [SectionComponent],
  imports: [
    CommonModule,
    ClockModule,
    StopwatchModule,
    RouterModule.forChild(routes),
  ],
  exports: [SectionComponent, RouterModule],
})
export class SectionModule {}
