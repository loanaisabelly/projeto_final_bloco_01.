import readlinesync = require("readline-sync");
import { colors } from "./src/util/colors";

export function main(){

let opcao; 

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
  console.log("            6 - Entregas                    ");
  console.log("            7 - Sair                        ");
  console.log("********************************************",
    colors.reset);

    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt(" "); 


     if(opcao == 7){
        console.log(colors.fg.bluestrong, 
        "\nObrigada por escolher a Farmácia do Zezinho. Volte Sempre!");
        sobre();
        console.log(colors.reset, "");
        process.exit(0);
    }

        switch(opcao){

            case 1:
               console.log( "\n\nCriar Mercadoria\n\n");
               keyPress()
               break;

            case 2:
                console.log( "\n\nListar todas as Mercadorias\n\n");
                keyPress()
                break; 
        
            case 3:
                console.log( "\n\nBuscar Mercadoria por Codigo\n\n");
                keyPress()
                break;  
      
      
            case 4:
               console.log( "\n\nAtualizar Mercadoria\n\n");
               keyPress()
               break;

            case 5:
               console.log( "\n\nApagar Mercadoria\n\n");
               keyPress()
               break; 
        
            case 6:
               console.log( "\n\nEntregas\n\n");
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