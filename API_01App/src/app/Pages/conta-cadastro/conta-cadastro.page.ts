import { ContaapiService } from '../../Services/conta-servises.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-conta-cadastro',
  templateUrl: './conta-cadastro.page.html',
  styleUrls: ['./conta-cadastro.page.scss']
})

export class ContaCadastroPage implements OnInit {
  errors: String = "";
  ionicForm: FormGroup;

  constructor(private navCtrl: NavController,
    private contaApi: ContaapiService,
    public formBuilder: FormBuilder) {

    this.ionicForm = this.formBuilder.group({
      nome: ['', Validators.nullValidator],
      dataVencimento: [''],
      valorPagar: [''],
      dataPagamento: [''], 
      email: ['']
    });
  }

  ngOnInit() {

  }

  gotoPage(page) {
    this.navCtrl.navigateForward(page);
  }

  cadastraConta() {
    console.log('chamou o cadastro' +
      this.ionicForm.value['nome'] +
      this.ionicForm.value['dataVencimento'] +
      this.ionicForm.value['valorPagar'] +
      this.ionicForm.value['dataPagar'] +
      this.ionicForm.value['email']);


    this.contaApi.postConta(
      this.ionicForm.value['nome'],
      this.ionicForm.value['dataVencimento'],
      this.ionicForm.value['valorPagar'],
      this.ionicForm.value['dataPagar'],
      this.ionicForm.value['email'])
      .then((json) => {
        console.log(json);
      })
      .catch((erro) => {
        console.log(erro.error);
        this.errors = erro.error[0];
      });

  }
}
