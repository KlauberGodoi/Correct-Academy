import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(private router: Router) { }
  public userRegister: User = {};

  ngOnInit() {
  }

  entrar(){
    console.log(this.userRegister)
  }
  
  pageInitial(){
    this.router.navigate(['login']);
  }

}
