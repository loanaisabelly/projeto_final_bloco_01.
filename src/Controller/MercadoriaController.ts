import { MercadoriaRepository } from "../../repository/MercadoriaRepository";
import { colors } from "../util/colors";
import { Mercadoria } from "../model/Mercadoria";

export class MercadoriaController implements MercadoriaRepository{

    
    
    listaMercadorias = new Array<Mercadoria>();
    public codigo: number = 0; 
    listaMercadoria: any;
    
    
    
    procurarPorCodigo(codigo: number): void {
        let BuscarMercadoria = this.buscarNoArray(codigo);

        if(BuscarMercadoria != null){
            BuscarMercadoria.visualizar();
        } else
        console.log(colors.fg.red,"\nO produto do Codigo: " + codigo
         + " não foi encontrado!", colors.reset); 

    }

    listarTodas(): void {
        this.listaMercadorias.forEach(Mercadoria => Mercadoria.visualizar());
    }


    cadastrar(mercadoria: Mercadoria): void {
        this.listaMercadorias.push(mercadoria);
        console.log("A Mercadoria foi Cadastrada com sucesso!");
    }

    atualizar(mercadoria: Mercadoria): void {
        const BuscarMercadoria = this.buscarNoArray(mercadoria.codigo);

        if(BuscarMercadoria !== null){
            this.listaMercadoria[this.listaMercadorias.indexOf(BuscarMercadoria)] = mercadoria;
            console.log("\nA Mercadoria foi atualizada com sucesso!")
        }
        else
        console.log(colors.fg.red, "\nA Mercadoria não foi encontrado!", colors.reset)

    }


    deletar(codigo: number): void {
        const BuscarMercadoria = this.buscarNoArray(codigo);

        if(BuscarMercadoria !== null) {
            this.listaMercadorias.splice(this.listaMercadorias.indexOf(BuscarMercadoria), 1);
            console.log("\nA Mercadoria do Codigo: " + codigo + 
        " foi apagada com sucesso!");
        }
        else 
        console.log(colors.fg.red,"\nA Mercadoria do Codigo: " + codigo + 
            " não foi encontrado!", colors.reset);
    }


    estoque(codigo: number,quantidade: number): void {
       let BuscarMercadoria = this.buscarNoArray(codigo);

       if(BuscarMercadoria != null){
        BuscarMercadoria.estoque += quantidade;

        if (BuscarMercadoria.estoque < 0){
            BuscarMercadoria.estoque = 0;
            console.log(colors.fg.red, "\nNão é possível ter estoque negativo para o código: " + codigo, colors.reset);
        } 
        else{
         console.log("\nA Mercadoria do Código: " + codigo + " foi atualizada com sucesso! Estoque atual: " + BuscarMercadoria.estoque);
        }

    
       }

    }

    listarEstoque(): void {
        console.log("\nLista de Estoque das Mercadorias:");
        this.listaMercadorias.forEach((mercadoria) => {
            console.log(`Nome: ${mercadoria.nome}, Estoque: ${mercadoria.estoque}`);
        });
    }

    public gerarCodigo(): number {
        return ++this.codigo;
    }

    public buscarNoArray(codigo: number): Mercadoria | null {
        for (let mercadoria of this.listaMercadorias) {
            if (mercadoria.codigo === codigo)
                return mercadoria;
        }

        return null;
    }

    
}