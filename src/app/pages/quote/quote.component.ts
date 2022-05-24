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
  message: string = 'Sorry, we don\'t have dumpsters available for this location and date'
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

  ngOnInit(): void {}

  onSubmit(data: any) {
    console.log(data);
  }
}
