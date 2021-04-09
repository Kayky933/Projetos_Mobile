import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ContaapiService } from '../../Services/conta-servises.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './conta-listagem.page.html',
  styleUrls: ['./conta-listagem.page.scss'],
})
export class ListagemPage implements OnInit {

  resultado : any = [{id: 0, nome:'', dataVencimento: '', valor: '', dataPagamento: '', email: '' }];

  constructor(private contatoApi: ContaapiService,
              private navCtrl : NavController) {

  }

  ngOnInit() {

  }

  CarregaDados() {
    this.contatoApi.getContatos()
      .then((json) => {
        console.log(json);
        this.resultado = json;
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  Consultar(codigo) {
    console.log("consultar item:" + codigo );
  }


  gotoPage(page) {
    this.navCtrl.navigateForward(page);
  }

}