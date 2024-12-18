import { colors } from "../util/colors";

export abstract class Mercadoria {

    private _codigo: number;
    private _nome: string;
    private _tipo: number;
    private _preco: number;
    static codigo: number;
    static cadastrar: any;
    estoque: number = 0;
    


	constructor(codigo: number, nome: string, tipo: number, preco: number) {
		this._codigo = codigo;
		this._nome = nome;
		this._tipo = tipo;
		this._preco = preco;
	}


	public get codigo(): number {
		return this._codigo;
	}

   
	public get nome(): string {
		return this._nome;
	}

    
	public get tipo(): number {
		return this._tipo;
	}

   
	public get preco(): number {
		return this._preco;
	}

   
	public set codigo(value: number) {
		this._codigo = value;
	}

   
	public set nome(value: string) {
		this._nome = value;
	}

    
	public set tipo(value: number) {
		this._tipo = value;
	}

    
	public set preco(value: number) {
		this._preco = value;
	}

    public visualizar(): void{
        let tipo: string = "";
        
        switch(this.tipo){
        case 1: 
            tipo = "Hortifruti";
            break;
        case 2:
            tipo ="Frigorífico";
            break;
        case 3: 
             tipo = "Bebidas"
            break;
        case 4:  
            tipo = "Produtos"
            break;
        }

        console.log(colors.fg.bluestrong,
        "\n\n**************************************************");
        console.log("         Dados do da Mercadoria:          ");
        console.log("******************************************");
        console.log("Codigo: " + this._codigo);
        console.log("Nome: " + this._nome);
        console.log("Tipo: " + tipo);
        console.log("Preço: R$ " + this._preco.toFixed(2));



    }
}