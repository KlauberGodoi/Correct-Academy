import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public userRegister: User = {};
  private loading: any;

  constructor(
    private router: Router,
  
    private loadingCtrl: LoadingController,
    private tostCtrl: ToastController,
    private authService: AuthService
    
  ) { }

  ngOnInit() {
  }

  async register() {
    await this.presentLoading();

    try {
      await this.authService.register(this.userRegister);
    } catch (error) {
      console.error(error);
    } finally {
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por Favor aguarde..' });
    return this.loading.present();
  }
  /*
  register(){
    console.log(this.userRegister)//retirar depois
  }*/
  
  pageInitial() {
    this.router.navigate(['login']);
  }

}
