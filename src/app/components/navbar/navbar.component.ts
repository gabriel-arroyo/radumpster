import { Component, OnInit, Input, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() logo: string = "https://firebasestorage.googleapis.com/v0/b/claudia-oropeza-photography.appspot.com/o/logo.png?alt=media&token=c7a7d4b5-f61e-41b2-9d1f-a5794220bf57"
  @Input() navitems: any[] = [
    { title: 'Home', link: '/home' },
    { title: 'Why Us', link: '/whyus' },
    { title: 'Our Dumpsters', link: '/ourdumpsters' },
    { title: 'Login', link: '/login' },
  ]
  showMenu: boolean = false;

  constructor() { }

  @HostListener('document:click', ['$event'])
  onDocumentClick() {
    console.log("out")
    this.showMenu = false;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.hideMenu()
  }

  toggleMenu() {
    this.showMenu = !this.showMenu
  }

  hideMenu() {
    this.showMenu = false
  }

}
