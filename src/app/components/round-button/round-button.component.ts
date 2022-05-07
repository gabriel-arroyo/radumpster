import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-round-button',
  templateUrl: './round-button.component.html',
  styleUrls: ['./round-button.component.scss'],
})
export class RoundButtonComponent implements OnInit {
  @Output() click = new EventEmitter();
  @Input() text = 'button';
  @Input() size = 'md';
  @Input() hover: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.click.emit();
  }
}
