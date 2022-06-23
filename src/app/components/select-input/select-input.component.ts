import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent implements OnInit {
  @Output() change = new EventEmitter();
  @Input() label: string = "";
  @Input() options: string[] = [];
  @Input() option: string = ""

  constructor() { }

  ngOnInit(): void {
    console.log("option:", this.option)
  }

  onChange(event: Event) {
    this.change.emit(event)
  }

}
