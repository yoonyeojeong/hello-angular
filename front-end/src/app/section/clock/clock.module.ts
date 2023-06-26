import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClockComponent } from './clock.component';

@NgModule({
  declarations: [ClockComponent],
  imports: [CommonModule, RouterModule],
})
export class ClockModule {}
