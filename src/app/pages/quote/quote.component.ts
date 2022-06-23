import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Dumpster } from 'src/app/models/dumpster';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit, OnDestroy {
  @Input() dumpsterType: string = 'Select a dumpster';
  @Input() dumpsters: string[] = [
    '10 Yard',
    '15 Yard',
    '20 Yard',
    '25 Yard'
  ]
  quoteForm;
  messageActive: boolean = true;
  message: string = 'This tool is currently unable to calculate the price for the selected location, but we would love to know how we can help you! Call Today! (313)999-1352'
  total: number = 20;
  location: string = '';
  startDate: string = '';
  endDate: string = '';
  sub: any;

  constructor(private _Activatedroute: ActivatedRoute, private formBuilder: FormBuilder) {
    this.quoteForm = this.formBuilder.group({
      location: '',
      startDate: '',
      endDate: '',
      dumpsterType: '',
    });
  }


  ngOnInit(): void {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.dumpsterType = params.get('id') ?? 'Select a dumpster'
      console.log(this.dumpsterType)
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
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
