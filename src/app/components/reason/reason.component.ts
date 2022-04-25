import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.scss'],
})
export class ReasonComponent implements OnInit {
  @Input() imgSrc: string = '../../../assets/images/5_yard_dumpster.jpg';
  @Input() position: string = 'left';
  @Input() title: string = 'We are faster than others'
  @Input() text: string = 'Aliquip minim sint occaecat elit cillum exercitation culpa consequat nisi aliquip consequat mollit magna do. Et ex minim exercitation anim anim nostrud.'
  constructor() {}

  ngOnInit(): void {}
}
