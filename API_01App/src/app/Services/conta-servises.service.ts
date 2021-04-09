import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContaapiService {

  constructor(private http: HttpClient) { }

  postConta(nome: string, dataVencimento: string, valorPagar: string, dataPagamento: string, email: string) {
    let url = 'http://localhost:50996/api/Conta/';

    let data =
    {
      "NomeDoCredor": nome,
      "DataDoVencimento": dataVencimento,
      "ValorAPagar": valorPagar,
      "DataDoPagamento": dataPagamento,
      "Email": email
    };

    return this.http.post(url, data).toPromise();
  }

  getContatos() {
    let url = 'http://localhost:50996/api/Conta/';
    return this.http.get(url).toPromise();
  }

  getContato(id) {
    let url = 'http://localhost:50996/api/Conta/' + id;
    return this.http.get(url).toPromise();
  }
}