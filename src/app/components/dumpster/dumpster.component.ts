import { Component, OnInit, Input } from '@angular/core';
import { Dumpster } from 'src/app/models/dumpster';

@Component({
  selector: 'app-dumpster',
  templateUrl: './dumpster.component.html',
  styleUrls: ['./dumpster.component.scss']
})
export class DumpsterComponent implements OnInit {
  @Input() dumpster: Dumpster = {
    imageSrc: '../../../assets/images/5_yard_dumpster.jpg',
    title: 'Dumpster type',
    dimensionsArray: ['line1', 'line2', 'line3'],
    bestForArray: ['line1', 'line2', 'line3'],
    buttonSrc: '../../../assets/images/btn-get-a-quote.png'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
