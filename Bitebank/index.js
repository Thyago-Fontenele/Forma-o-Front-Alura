import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = 'Thyago';
cliente1.cpf = 12334534300;

const cliente2 = new Cliente();
cliente2.nome = 'Laura';
cliente2.cpf = 10121323230;

const ContaCorrenteLaura = new ContaCorrente();
ContaCorrenteLaura.agencia = 1002;
ContaCorrenteLaura.cliente = cliente2;

const ContaCorrenteThyago = new ContaCorrente();
ContaCorrenteThyago.agencia = 1001;
ContaCorrenteThyago.cliente = cliente1;
ContaCorrenteThyago.depositar(200);
ContaCorrenteThyago.transferir(200, ContaCorrenteLaura)


console.log(ContaCorrenteLaura);
console.log(ContaCorrenteThyago);