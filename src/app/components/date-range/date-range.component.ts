import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss']
})
export class DateRangeComponent implements OnInit {
  @Output() changeStart = new EventEmitter();
  @Output() changeEnd = new EventEmitter();
  @Input() label: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onChangeStart(event: MatDatepickerInputEvent<Date>) {
    this.changeStart.emit(`${event.value}`);
  }
  onChangeEnd(event: MatDatepickerInputEvent<Date>) {
    this.changeEnd.emit(`${event.value}`);
  }
}
