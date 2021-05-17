import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AccountService } from 'src/app/Service/account-sevice.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.page.html',
  styleUrls: ['./account-list.page.scss'],
})
export class AccountListPage implements OnInit {
  Result: any = [
    {
      id_Conta: 0,
      nomeDoCredor: '',
      dataDoVencimento: '',
      valorAPagar: '',
      dataDoPagamento: '',
      email: '',
    },
  ];
  constructor(
    private NavCtrl: NavController,
    public service: AccountService,
    public alertCtrl: AlertController
  ) {}

  ngOnInit() {}
  LoadData() {
    this.service
      .GetAccounts()
      .then((json) => {
        console.log(json);
        this.Result = json;
      })
      .catch((erro) => {
        console.log(JSON.stringify(erro));
      });
  }
  GoToPage(page) {
    this.NavCtrl.navigateForward(page);
  }
  async FindFail() {
    let response = await this.alertCtrl.create({
      header: 'search error',
      message: 'The acount is not found!',
      buttons: ['Ok'],
    });
    await response.present();
  }
}
