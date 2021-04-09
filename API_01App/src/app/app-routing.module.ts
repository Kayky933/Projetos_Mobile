import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {  
    path: 'conta-cadastro',
    loadChildren: () => import('./Pages/conta-cadastro/conta-cadastro.module').then( m => m.ContaCadastroPageModule)
  },
  {
    path: 'listagem-conta',
    loadChildren: () => import('./Pages/conta-listagem/conta-listagem.module').then( m => m.ContaListagemPageModule)
  },
  {
    path: 'consulta-conta',
    loadChildren: () => import('./Pages/conta-consulta/conta-consulta.module').then( m => m.ContaConsultaPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
