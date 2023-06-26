import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class PageToggleService {
  constructor(private router: Router) {}

  routingCount: number = 0;

  goPage(target: string) {
    this.routingCount++;
    this.router.navigateByUrl(target);
  }
}
