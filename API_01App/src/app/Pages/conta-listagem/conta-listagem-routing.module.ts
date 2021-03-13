import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContaListagemPage } from './conta-listagem.page';

const routes: Routes = [
  {
    path: '',
    component: ContaListagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContaListagemPageRoutingModule {}
