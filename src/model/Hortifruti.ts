import { Mercadoria } from "./Mercadoria";

export class Hortifruti extends Mercadoria{

    private _quilo: number;


	constructor(codigo:number, nome: string, tipo: number, preco: number, quilos: number) {
        super(codigo, nome, tipo,preco);
		this._quilo = quilos;
	}


   
	public get quilos(): number {
		return this._quilo;
	}

	public set quilos(value: number) {
		this._quilo = value;
	}


    public visualizar(): void {
        super.visualizar();
        console.log("Quilos: " + this._quilo);
    }



}