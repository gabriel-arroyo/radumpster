import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-dumpster-container',
  templateUrl: './our-dumpster-container.component.html',
  styleUrls: ['./our-dumpster-container.component.scss'],
})
export class OurDumpsterContainerComponent implements OnInit {
  @Input() ourDumpsters: string[] = [
      '../../../assets/images/5_yard_dumpster.jpg',
      '../../../assets/images/10_yard_dumpster.jpg',
      '../../../assets/images/20_yard_dumpster.jpg',
      '../../../assets/images/30_yard_dumpster.jpg',
      '../../../assets/images/20_yard_dumpster.jpg',
      '../../../assets/images/30_yard_dumpster.jpg',
  ];
  constructor() {}

  ngOnInit(): void {}
}
