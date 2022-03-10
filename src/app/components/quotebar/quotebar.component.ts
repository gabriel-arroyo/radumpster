import { Component, OnInit, Input, Output } from '@angular/core';
import { Dumpster } from 'src/app/models/dumpster';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-quotebar',
  templateUrl: './quotebar.component.html',
  styleUrls: ['./quotebar.component.scss']
})
export class QuotebarComponent implements OnInit {
  @Input() dumpsters:Dumpster[]=[
    {
      imageSrc: '../../../assets/images/5_yard_dumpster.jpg',
      title: 'Dumpster type',
      dimensionsArray: ['line1', 'line2', 'line3'],
      bestForArray: ['line1', 'line2', 'line3'],
      buttonSrc: '../../../assets/images/btn-get-a-quote.png'
    },
    {
      imageSrc: '../../../assets/images/10_yard_dumpster.jpg',
      title: 'Dumpster type',
      dimensionsArray: ['line1', 'line2', 'line3'],
      bestForArray: ['line1', 'line2', 'line3'],
      buttonSrc: '../../../assets/images/btn-get-a-quote.png'
    },
    {
      imageSrc: '../../../assets/images/20_yard_dumpster.jpg',
      title: 'Dumpster type',
      dimensionsArray: ['line1', 'line2', 'line3'],
      bestForArray: ['line1', 'line2', 'line3'],
      buttonSrc: '../../../assets/images/btn-get-a-quote.png'
    },
    {
      imageSrc: '../../../assets/images/30_yard_dumpster.jpg',
      title: 'Dumpster type',
      dimensionsArray: ['line1', 'line2', 'line3'],
      bestForArray: ['line1', 'line2', 'line3'],
      buttonSrc: '../../../assets/images/btn-get-a-quote.png'
    }
  ]
  isOpen = true;

  constructor() { }

  ngOnInit(): void {
  }


}
