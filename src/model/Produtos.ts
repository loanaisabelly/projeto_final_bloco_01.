import { Mercadoria } from "./Mercadoria";

export class Produto extends Mercadoria{

private _marca: string;


constructor(codigo:number, nome: string, tipo: number, preco: number, marca: string) {
    super(codigo, nome, tipo,preco);
    this._marca = marca;
}


    
	public get marca(): string {
		return this._marca;
	}

	public set marca(value: string) {
		this._marca = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log("Nome do Produto: " + this._marca);
    }


}