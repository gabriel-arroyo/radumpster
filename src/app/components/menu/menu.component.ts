import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() navitems: any[] = [
    { title: 'Home', link: '/home' },
    { title: 'Why Us', link: '/whyus' },
    { title: 'Our Dumpsters', link: '/ourdumpsters' },
    { title: 'Login', link: '/login' },
  ]
  constructor() { }


  ngOnInit(): void {
  }

}
