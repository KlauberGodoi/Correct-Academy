import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'loader', pathMatch: 'full'},

  {path: 'loader',loadChildren: () => import('./pages/loader/loader.module' ).then( m => m.LoaderPageModule) },
  {path: 'login',loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule), /*canActivate: [LoginGuard]*/},//ñ funciona
  {path: 'cadastro',loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)},
{path: 'home',loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule), /*canActivate:[AuthGuard]*/},//ñ funciona
  {path: 'prgprog',loadChildren: () => import('./pages/prgprog/prgprog.module').then( m => m.PrgprogPageModule)},
  {path: 'perfil',loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)},
  {path: 'comment',loadChildren: () => import('./pages/comment/comment.module').then( m => m.CommentPageModule)},
  {path: 'midia',loadChildren: () => import('./pages/midia/midia.module').then( m => m.MidiaPageModule)},
  {path: 'perna',loadChildren: () => import('./pages/perna/perna.module').then( m => m.PernaPageModule)},
  {path: 'peito',loadChildren: () => import('./pages/peito/peito.module').then( m => m.PeitoPageModule)},
  {path: 'aerobico',loadChildren: () => import('./pages/aerobico/aerobico.module').then( m => m.AerobicoPageModule)},
  {path: 'costas',loadChildren: () => import('./pages/costas/costas.module').then( m => m.CostasPageModule)}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
