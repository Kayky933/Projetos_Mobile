export class AccountModel {
  constructor(
    public nome: string,
    public dataVencimento: string,
    public valorPagar: string,
    public dataPagamento: string,
    public email: string
  ) {}
}
