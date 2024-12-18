import { Mercadoria } from "../src/model/Mercadoria";

export interface MercadoriaRepository{

    procurarPorCodigo(codigo: number): void;
	listarTodas(): void;
	cadastrar(mercadoria: Mercadoria): void;
	atualizar(mercadoria: Mercadoria): void;
	deletar(codigo: number): void;

    entrega(codigo: number,nomeEntregador: string): void;

}