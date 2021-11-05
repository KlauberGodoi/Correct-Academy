import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

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
  constructor(
    private afa: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  logout(){
    this.afa.signOut().then((val)=>{
      //alert(JSON.stringify(val));
    })
  }
}
