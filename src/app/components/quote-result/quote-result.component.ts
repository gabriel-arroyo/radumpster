import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-result',
  templateUrl: './quote-result.component.html',
  styleUrls: ['./quote-result.component.scss']
})
export class QuoteResultComponent implements OnInit {
  @Input() available: boolean = true;
  @Input() message: string = 'This tool is currently unable to calculate the price for the selected location, but we would love to know how we can help you! Call Today! (313)999-1352'
  @Input() total: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
