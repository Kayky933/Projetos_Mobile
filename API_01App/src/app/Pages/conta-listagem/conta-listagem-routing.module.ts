import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemPage } from './conta-listagem.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemPage
  }
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContaListagemPageRoutingModule {}
