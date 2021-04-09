import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContaCadastroPageRoutingModule } from './conta-cadastro-routing.module';

import { ContaCadastroPage } from './conta-cadastro.page';

@NgModule({
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ContaCadastroPageRoutingModule
  ],  
  declarations: [ContaCadastroPage]
})
export class ContaCadastroPageModule {}
