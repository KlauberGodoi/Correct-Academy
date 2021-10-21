import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
slideOpts = {
    slidesPerview: 1.5,
    centerSlides: true,
    loop: true,
    spaceBetween: 10,
    initialSlide: 0,
    speed: 2000,
    autoplay: true,
  };
  constructor() { }

  ngOnInit() {
  }

}
