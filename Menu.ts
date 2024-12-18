import readlinesync = require("readline-sync");
import { colors } from "./src/util/colors";
import { Mercadoria } from "./src/model/Mercadoria";
import { MercadoriaController } from "./src/Controller/MercadoriaController";
import { Hortifruti } from "./src/model/Hortifruti";
import { Frigorífico } from "./src/model/Frigorífico";
import { Bebidas } from "./src/model/Bebidas";
import { Produto } from "./src/model/Produtos";

export function main(){

let opcao, codigo, tipo, preco, quiloCarne, quilo: number; 
let nome, tipoDaBebida, marca: string;

   const mercadoria = new MercadoriaController();

    const tipoMercadoria = ['Hortifruti', 'Frigorífico', 'Bebida', 'Produtos'];
   

    mercadoria.cadastrar(new Hortifruti(mercadoria.gerarCodigo(), "Maça", 1, 5.50, 14.49))
    mercadoria.cadastrar(new Frigorífico(mercadoria.gerarCodigo(), "Carne Suina", 2, 21.00, 17.99))
    mercadoria.cadastrar(new Bebidas(mercadoria.gerarCodigo(), "Coca-Cola", 3, 11.00, "Refrigerante"))
    mercadoria.cadastrar(new Produto(mercadoria.gerarCodigo(), "Macarrão", 4, 2.50, "Vitarella"))






 while(true){

  console.log(colors.fg.bluestrong,
    "*****************************************************");
  console.log("                                            ");
  console.log("            Mercadinho Baratão              ");
  console.log("                                            ");
  console.log("********************************************");
  console.log("            1 - Criar Mercadoria            ");
  console.log("            2 - Listar todas as Mercadorias ");
  console.log("            3 - Buscar Mercadoria por Codigo");
  console.log("            4 - Atualizar Mercadoria        ");
  console.log("            5 - Apagar Mercadoria           ");
  console.log("            6 - Inserir no Estoque          ");
  console.log("            7 - Verificar Estoque           ");
  console.log("            8 - Sair                        ");
  console.log("********************************************",
    colors.reset);

    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt(" "); 


     if(opcao == 8){
        console.log(colors.fg.bluestrong, 
        "\nObrigada por escolher o Mercadinho Baratão.");
        console.log(colors.fg.bluestrong, 
            "\nAqui você compra Barato. Volte Sempre!");
        sobre();
        console.log(colors.reset, "");
        process.exit(0);
    }

        switch(opcao){

            case 1:
               console.log( "\n\nCriar Mercadoria\n\n");

                console.log("\nDigite o Nome da Mercadoria: ")
                nome = readlinesync.question(""); 

              tipo = readlinesync.keyInSelect(tipoMercadoria, "", { cancel: false }) + 1;

              console.log("\nDigite o Preço da Mercadoria: ")
              preco = readlinesync.questionFloat(""); 

               switch(tipo){
                case 1: 
                quilo = readlinesync.questionFloat("\nDigite o Quilo da Fruta/Verdura/Legumes: ");
                mercadoria.cadastrar(new Hortifruti(mercadoria.gerarCodigo(), nome, tipo, preco, quilo));
                break;
               
                case 2: 
                quiloCarne = readlinesync.questionFloat("\nDigite o Quilo da Carne: ");
                mercadoria.cadastrar(new Frigorífico(mercadoria.gerarCodigo(), nome, tipo, preco, quiloCarne));
                break;

                case 3: 
                tipoDaBebida = readlinesync.question("\nDigite o tipo da Bebida: ");
                mercadoria.cadastrar(new Bebidas(mercadoria.gerarCodigo(), nome, tipo, preco, tipoDaBebida));
                break;

                case 4: 
                marca = readlinesync.question("\nDigite a Marca do Produto: ");
                mercadoria.cadastrar(new Produto(mercadoria.gerarCodigo(), nome, tipo, preco, marca));
                break;

               }
               keyPress()
               break;

            case 2:
                console.log( "\n\nListar todas as Mercadorias\n\n");
                mercadoria.listarTodas();
                keyPress()
                break; 
        

            case 3:
                console.log( "\n\nBuscar Mercadoria por Codigo\n\n");
                codigo = readlinesync.questionInt("\nDigite o Codigo do Produto: ");
                mercadoria.procurarPorCodigo(codigo);
                keyPress()
                break;  
      
      
            case 4:
               console.log( "\n\nAtualizar Mercadoria\n\n");

               codigo = readlinesync.questionInt("Digite o Codigo da Mercadoria: ")

               let mercadorias = mercadoria.buscarNoArray(codigo);

               if(mercadorias !== null) {
                
                nome = readlinesync.question("Digite o Nome da Mercadoria: ");

                tipo = mercadorias.tipo;

                preco = readlinesync.questionFloat("Digite o preco da Mercadoria: ");

                switch (tipo) {
                    case 1:
                        quilo = readlinesync.questionFloat("Digite o Quilo da Fruta/Verdura/Legumes: ");
                        mercadoria.atualizar(new Hortifruti(codigo,nome, tipo, preco, quilo));
                        break;

                    case 2:
                        quiloCarne = readlinesync.questionFloat("Digite o Quilo da Carne: ");
                        mercadoria.atualizar(new Frigorífico(codigo,nome, tipo, preco, quiloCarne));
                        break;

                    case 3:
                        tipoDaBebida  = readlinesync.question("\nDigite o tipo da Bebida: ");
                        mercadoria.atualizar(new Bebidas(codigo,nome, tipo, preco, tipoDaBebida));
                        break;    

                    case 4:
                         marca  = readlinesync.question("\nDigite o tipo da Bebida: ");
                         mercadoria.atualizar(new Produto(codigo,nome, tipo, preco, marca));
                       break; 
                }

              }
               else
                console.log("Produto não Encontrado!")
               keyPress()
               break;


            case 5:
               console.log( "\n\nApagar Mercadoria\n\n");
               console.log("\nDigite o Codigo da Mercadoria: ");
               codigo = readlinesync.questionInt("");
               mercadoria.deletar(codigo);
               keyPress()
               break; 
        
            case 6:
               console.log( "\n\nEstoque\n\n");
               codigo = readlinesync.questionInt("\nDigite o Codigo da Mercadoria para atualizar o estoque: ");
               let quantidade = readlinesync.questionInt("\nDigite a quantidade a ser adicionada ou removida (use números negativos para remover): ");
               mercadoria.estoque(codigo, quantidade);
               console.log("\n")
               keyPress()
               break;  
      

            case 7:
                console.log( "\n\nListar Estoque\n\n");
                console.log("\n\nListar Estoque das Mercadorias\n\n");
                mercadoria.listarEstoque();
                keyPress()
                break; 

            default:
               console.log(colors.fg.red, 
                "\nOpção Inválida!\n", colors.reset);

               keyPress()
                 break;
            }


     }
}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Loana Isabelly ");
    console.log("Generation Brasil ");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log( " ");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}
main();