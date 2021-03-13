import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContaConsultaPageRoutingModule } from './conta-consulta-routing.module';

import { ContaConsultaPage } from './conta-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContaConsultaPageRoutingModule
  ],
  declarations: [ContaConsultaPage]
})
export class ContaConsultaPageModule {}
