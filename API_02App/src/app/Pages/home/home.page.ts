import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private NavCtrl:NavController) {}

GoToPage(page){
  this.NavCtrl.navigateForward(page);
}
}
