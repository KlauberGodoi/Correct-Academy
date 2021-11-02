import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(private router: Router) { }
  login(){
    this.router.navigate(['login']);
  }

  sigin(){
    this.router.navigate(['home']);
  }

  ngOnInit() {
  }

}
