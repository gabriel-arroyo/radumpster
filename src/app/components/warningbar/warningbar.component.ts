import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-warningbar',
  templateUrl: './warningbar.component.html',
  styleUrls: ['./warningbar.component.scss'],
})
export class WarningbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  goToContact() {
    let contact = document.getElementById('contact')
    contact?.scrollIntoView({behavior: 'smooth'})
  }
}
