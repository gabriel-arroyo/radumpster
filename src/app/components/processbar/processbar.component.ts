import { Component, OnInit, Input } from '@angular/core';
import { Process } from 'src/app/models/process';

@Component({
  selector: 'app-processbar',
  templateUrl: './processbar.component.html',
  styleUrls: ['./processbar.component.scss']
})
export class ProcessbarComponent implements OnInit {
  @Input() processes:Process[]=[
    {
      imageSrc:'../../../assets/images/reserve.png',
      title:'Reserve',
      description:'Consectetur non aliqua et exercitation consectetur aute sunt aliqua et eu qui consequat.'
    },
    {
      imageSrc:'../../../assets/images/buy.png',
      title:'Buy',
      description:'Labore velit consequat minim cupidatat excepteur aliqua occaecat officia officia do.'
    },
    {
      imageSrc:'../../../assets/images/deliver.png',
      title:'Deliver',
      description:'Do eu laboris commodo sunt ipsum duis veniam et ea ex anim.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
