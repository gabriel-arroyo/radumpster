import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  openQuote=false

  constructor() { }

  ngOnInit(): void {
  }

  onQuote(){
    console.log('quote')
    this.openQuote = !this.openQuote
    console.log("openQuote: ", this.openQuote);

  }

}
