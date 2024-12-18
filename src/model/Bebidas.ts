import { Mercadoria } from "./Mercadoria";

export class Bebidas extends Mercadoria{

    private _tipoDaBebida: string;


	constructor(codigo:number, nome: string, tipo: number, preco: number, tipoDaBebida: string) {
        super(codigo, nome, tipo,preco);
		this._tipoDaBebida = tipoDaBebida;
	}


 
	public get tipoDaBebida(): string {
		return this._tipoDaBebida;
	}

  
	public set tipoDaBebida(value: string) {
		this._tipoDaBebida = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log("Tipo da Bebida: " + this._tipoDaBebida);
    }

}