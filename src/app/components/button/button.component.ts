import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Output() click = new EventEmitter();
  @Input() text = "button"
  @Input() size = "md"
  @Input() hover:boolean = true

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.click.emit();
  }
}
