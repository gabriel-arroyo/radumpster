import { Component, OnInit, Input } from '@angular/core';
import { Dumpster } from 'src/app/models/dumpster';

@Component({
  selector: 'app-dumpstersbar',
  templateUrl: './dumpstersbar.component.html',
  styleUrls: ['./dumpstersbar.component.scss']
})
export class DumpstersbarComponent implements OnInit {
  @Input() dumpsters: Dumpster[] = [
    {
      imageSrc: '../../../assets/images/5_yard_dumpster.jpg',
      title: '10 Yard',
      dimensionsArray: ['6', '12', '2'],
      bestForArray: ['Roofing: 16 squares (1 sq.=3 packs shingles = 100 sq.feet)', 'Demolition: items that lay flat (drywall, wood, tiles, flooring, etc..)', 'Household: mattresses, clothing, garbage bags etc.'],
      buttonSrc: '../../../assets/images/btn-get-a-quote.png'
    },
    {
      imageSrc: '../../../assets/images/10_yard_dumpster.jpg',
      title: '15 Yard',
      dimensionsArray: ['line1', 'line2', 'line3'],
      bestForArray: ['line1', 'line2', 'line3'],
      buttonSrc: '../../../assets/images/btn-get-a-quote.png'
    },
    {
      imageSrc: '../../../assets/images/20_yard_dumpster.jpg',
      title: '20 Yard',
      dimensionsArray: ['line1', 'line2', 'line3'],
      bestForArray: ['line1', 'line2', 'line3'],
      buttonSrc: '../../../assets/images/btn-get-a-quote.png'
    },
    {
      imageSrc: '../../../assets/images/30_yard_dumpster.jpg',
      title: '25 Yard',
      dimensionsArray: ['line1', 'line2', 'line3'],
      bestForArray: ['line1', 'line2', 'line3'],
      buttonSrc: '../../../assets/images/btn-get-a-quote.png'
    }


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
