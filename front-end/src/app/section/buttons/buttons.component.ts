import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  constructor() {}

  test($event: MouseEvent) {
    console.log($event);
  }
  ngOnInit() {}
}
