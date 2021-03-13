export class ContaModel {

    constructor(public id?:number,
        public nome?: string,
        public dataVencimento?: Date,
        public valorPagar?: number,
        public dataPagamento?: Date,
        public email?: string) {}
}
