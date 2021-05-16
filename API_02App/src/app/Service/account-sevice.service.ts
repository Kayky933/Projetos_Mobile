import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  postAccount(nome: string, dataVencimento: string, valorPagar: string, dataPagamento: string, email: string) {
    let url = 'https://localhost:5001/api/conta';

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
    let url = 'https://localhost:5001/api/conta';
    return this.http.get(url).toPromise();
  }

  getContato(id) {
    let url = 'https://localhost:5001/api/conta' + id;
    return this.http.get(url).toPromise();
  }
}