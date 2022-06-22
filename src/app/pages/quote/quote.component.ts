import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  quoteForm;
  messageActive: boolean = true;
  message: string = 'This tool is currently unable to calculate the price for the selected location, but we would love to know how we can help you! Call Today! (313)999-1352'
  total: number = 20;
  location: string = '';
  startDate: string = '';
  endDate: string = '';
  dumpsterType: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.quoteForm = this.formBuilder.group({
      location: '',
      startDate: '',
      endDate: '',
      dumpsterType: '',
    });
  }

  ngOnInit(): void { }

  onSubmit(data: any) {
    console.log('submit', data);
  }

  onChangeStartDate(event: Event) {
    console.log('change', event)
  }
  onChangeEndDate(event: Event) {
    console.log('change', event)
  }
  onChange(event: Event) {
    console.log(event)
  }
  onInput(event: Event) {
    console.log(event)
  }

}
