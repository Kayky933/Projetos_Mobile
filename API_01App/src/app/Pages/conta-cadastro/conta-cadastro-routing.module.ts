import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContaCadastroPage } from './conta-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: ContaCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
}) 
export class ContaCadastroPageRoutingModule {}
