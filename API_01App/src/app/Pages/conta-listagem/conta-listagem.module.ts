import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContaListagemPageRoutingModule } from './conta-listagem-routing.module';

import { ContaListagemPage } from './conta-listagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContaListagemPageRoutingModule
  ],
  declarations: [ContaListagemPage]
})
export class ContaListagemPageModule {}
