import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-whyus',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.scss'],
})
export class WhyusComponent implements OnInit {
  @Input() imgSrc: string = '../../../assets/images/5_yard_dumpster.jpg';
  @Input() position: string ="left"
  constructor() {}

  ngOnInit(): void {}
}
