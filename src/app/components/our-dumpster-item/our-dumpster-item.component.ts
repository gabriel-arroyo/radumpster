import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-our-dumpster-item',
  templateUrl: './our-dumpster-item.component.html',
  styleUrls: ['./our-dumpster-item.component.scss'],
})
export class OurDumpsterItemComponent implements OnInit {
  @Input() imgSrc: string = '../../../assets/images/5_yard_dumpster.jpg';
  @Input() position: string = 'left';
  constructor() {}

  ngOnInit(): void {}
}
