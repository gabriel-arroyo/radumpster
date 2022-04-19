import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() logo: string = "https://firebasestorage.googleapis.com/v0/b/claudia-oropeza-photography.appspot.com/o/logo.png?alt=media&token=c7a7d4b5-f61e-41b2-9d1f-a5794220bf57"
  @Input() navitems: any[] = [
    { title: 'Home', link: '#cover' },
    { title: 'Why Us', link: '/whyus' },
    { title: 'Our Dumpsters', link: '/ourdumpsters' },
  ]
  selected: number = 0;

  constructor() { }

  select(n: number) {
    this.selected = n
  }

  ngOnInit(): void {
  }

}
