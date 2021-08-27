import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente('Thyago', 12343232323);
const cliente2 = new Cliente('Laura', 32323232332);
const cliente3 = new Cliente('Roberto', 130234242424);

const ContaCorrente1 = new ContaCorrente(cliente1, 1001);
const ContaCorrente2 = new ContaCorrente(cliente2, 1002);
const ContaCorrente3 = new ContaCorrente(cliente3, 1003);


let valor = 200;
ContaCorrente1.depositar(valor);
valor = 100
ContaCorrente1.transferir(valor, ContaCorrente3);
valor = 50;
ContaCorrente3.transferir(valor, ContaCorrente1);
valor = 500;
ContaCorrente2.depositar(valor);


console.log(ContaCorrente.numeroDeContas);
