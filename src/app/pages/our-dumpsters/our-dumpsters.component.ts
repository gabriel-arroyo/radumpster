import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-our-dumpsters',
  templateUrl: './our-dumpsters.component.html',
  styleUrls: ['./our-dumpsters.component.scss']
})
export class OurDumpstersComponent implements OnInit {
  @Input() ourDumpsters: string[] = [
    "../../../assets/images/5_yard_dumpster.jpg",
    "../../../assets/images/10_yard_dumpster.jpg",
    "../../../assets/images/20_yard_dumpster.jpg",
    "../../../assets/images/30_yard_dumpster.jpg",
    "../../../assets/images/20_yard_dumpster.jpg",
    "../../../assets/images/30_yard_dumpster.jpg",
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
