import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userLogin: User = {};

  constructor(private router: Router) { }

  ngOnInit() {
  }
  entrar(){
    console.log(this.userLogin)
  }
  
  cadastro(){
    this.router.navigate(['cadastro']);
  }

}
