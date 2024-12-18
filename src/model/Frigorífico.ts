import { Mercadoria } from "./Mercadoria";


export class Frigorífico extends Mercadoria{

    private _quiloCarne: number;


	constructor(codigo:number, nome: string, tipo: number, preco: number, quiloCarne: number) {
        super(codigo, nome, tipo,preco);
		this._quiloCarne = quiloCarne;
	}

	public get quiloCarne(): number {
		return this._quiloCarne;
	}

    
	public set quiloCarne(value: number) {
		this._quiloCarne = value;
	}

	public visualizar(): void {
        super.visualizar();
        console.log("Quilos da Carne: " + this._quiloCarne);
    }
}