import { Mercadoria } from "./Mercadoria";

export class Produto extends Mercadoria{

private _NomeProduto: string;


constructor(codigo:number, nome: string, tipo: number, preco: number, NomeProduto: string) {
    super(codigo, nome, tipo,preco);
    this._NomeProduto = NomeProduto;
}


    
	public get NomeProduto(): string {
		return this._NomeProduto;
	}

	public set NomeProduto(value: string) {
		this._NomeProduto = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log("Nome do Produto: " + this._NomeProduto);
    }


}