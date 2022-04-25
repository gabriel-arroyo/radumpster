import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-our-dumpster-item',
  templateUrl: './our-dumpster-item.component.html',
  styleUrls: ['./our-dumpster-item.component.scss']
})
export class OurDumpsterItemComponent implements OnInit {
@Input() imageSrc: string = "../../../assets/images/10_yard_dumpster.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
