import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {
@Input() coverSrc:string = '../../../assets/images/portada.png'
@Input() title:string = 'Big or Small, we hault it all!'
@Input() subtitle:string = 'At Rent-A-Dumpster, we believe in offering the highest quality of dumpsters rental services at the most competitive prices.'
@Input() buttonSrc:string = '../../../assets/images/btn-get-a-quote.png'

  constructor() { }

  ngOnInit(): void {
  }

}
