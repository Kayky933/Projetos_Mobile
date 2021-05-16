import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistrationPageRoutingModule } from './registration-page-routing.module';

import { RegistrationPage } from './registration-page.page';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationPageRoutingModule,    
    ReactiveFormsModule,
  ],
  declarations: [RegistrationPage],
})
export class RegistrationPagePageModule {}
