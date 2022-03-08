import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {
  @Input() image :string = ""
  @Input() title:string = ""
  @Input() description:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
