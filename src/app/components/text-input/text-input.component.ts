import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  @Output() input = new EventEmitter();
  @Output() change = new EventEmitter();
  @Input() label: string = "";
  @Input() type: string = "text";

  constructor() { }

  ngOnInit(): void {
  }

  onInput(event: Event) {
    this.input.emit(event)
  }

  onChange(event: Event) {
    this.change.emit(event)
  }

}
