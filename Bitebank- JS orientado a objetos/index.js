import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente('Thyago', 12343232323);
const cliente2 = new Cliente('Laura', 32323232332);
const ContaCorrenteLaura = new ContaCorrente(cliente2, 1002);
const ContaCorrenteThyago = new ContaCorrente(cliente1, 1001);


let valor = 200;
ContaCorrenteThyago.depositar(valor);
valor = 100
ContaCorrenteThyago.transferir(valor, ContaCorrenteLaura)


console.log(ContaCorrente.numeroDeContas);
