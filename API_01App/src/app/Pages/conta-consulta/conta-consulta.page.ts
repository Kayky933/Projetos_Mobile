import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ContaapiService } from '../../Services/conta-servises.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './conta-consulta.page.html',
  styleUrls: ['./conta-consulta.page.scss'],
})
export class ConsultaPage implements OnInit {

  id: number = 0;

  resultado : any = {id: 0, nome:'', dataVencimento: '', valor: '', dataPagamento: '', email: '' };

  constructor(private contatoApi: ContaapiService,
              private navCtrl : NavController) { }

  ngOnInit() {
  }

  Consultar(numero) {
    this.contatoApi.getContato(numero)
    .then( (json) => {
      console.log(json);

      this.resultado = json;

    } )
    .catch((erro) => {
      console.log(erro);
    })
  }


  gotoPage(page) {
    this.navCtrl.navigateForward(page);
  }

}