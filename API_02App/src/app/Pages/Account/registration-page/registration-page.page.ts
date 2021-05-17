import { HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { AccountService } from '../../../Service/account-sevice.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.page.html',
  styleUrls: ['./registration-page.page.scss'],
})
export class RegistrationPage implements OnInit {
  RegisterForm: FormGroup;
  errors: string = '';

  constructor(
    private navCtrl: NavController,
    private service: AccountService,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController
  ) {
    this.RegisterForm = this.formBuilder.group({
      nome: ['', Validators.nullValidator],
      dataVencimento: [''],
      valorPagar: [''],
      dataPagamento: [''],
      email: [''],
    });
  }

  ngOnInit() {}

  GoToPage(page) {
    this.navCtrl.navigateForward(page);
  }

  RegisterAccount() {
    console.log(
      'chamou o cadastro: ' +
        '\n' +
        this.RegisterForm.value['nome'] +
        '\n' +
        this.RegisterForm.value['dataVencimento'] +
        '\n' +
        this.RegisterForm.value['valorPagar'] +
        '\n' +
        this.RegisterForm.value['dataPagamento'] +
        '\n' +
        this.RegisterForm.value['email']
    );

    this.service
      .postAccount(
        this.RegisterForm.value['nome'],
        this.RegisterForm.value['dataVencimento'],
        this.RegisterForm.value['valorPagar'],
        this.RegisterForm.value['dataPagamento'],
        this.RegisterForm.value['email']
      )
      .then((json) => {
        console.log(json);
        this.Success();
      })
      .catch((erro) => {
        console.log(erro.error);
        this.errors = erro.error[0];
        this.Fail(JSON.stringify(erro.error));
      });
  }
  async Success() {
    let alert = await this.alertCtrl.create({
      header: 'Success',
      message: '<p>The registration was successful</p>',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.GoToPage('home');
          },
        },
      ],
    });
    await alert.present();
  }
  async Fail(errors) {
    let alert = await this.alertCtrl.create({
      header: 'Fail',
      message: '<p>Ops, something is wrong</p>\n' + errors,
      buttons: ['Ok'],
    });
    await alert.present();
  }
}
