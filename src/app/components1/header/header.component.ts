import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   navbarfixed: boolean = false;

@HostListener('window:scroll', ['$event'])
onScroll() {
  if (window.scrollY >100) {
    this.navbarfixed = true
  }else{
    this.navbarfixed = false
  }

// this.isSticky = window.pageYOffset > 0;
}

}
