import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  constructor() {}

  @Output()
  clickEvent = new EventEmitter<string>();

  executeButton(command: string) {
    this.clickEvent.emit(command);
  }
  ngOnInit() {}
}
