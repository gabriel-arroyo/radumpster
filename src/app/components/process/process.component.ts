import { Component, OnInit, Input } from '@angular/core';
import { Process } from 'src/app/models/process';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {
  @Input() process:Process={
      imageSrc:'../../../assets/images/reserve.png',
      title:'Reserve',
      description:'Consectetur non aliqua et exercitation consectetur aute sunt aliqua et eu qui consequat.'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
