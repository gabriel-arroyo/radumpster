import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-label',
  templateUrl: './text-label.component.html',
  styleUrls: ['./text-label.component.scss']
})
export class TextLabelComponent implements OnInit {
  @Input() label: string = "";
  @Input() text: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
