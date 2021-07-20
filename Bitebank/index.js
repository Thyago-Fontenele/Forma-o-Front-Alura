class Cliente{
    nome;
    cpf;
}
class ContaCorrente{
    agencia;
    #saldo = 0; // "#" objeto privado

    depositar(valor){
        if(valor > 0){
            
            this.#saldo += valor;

            console.log("Saldo atual: "+ this.#saldo);
            console.log("Valor depositado: "+ valor);
            console.log("Valor atual: "+ this.#saldo);
        }
        else{
            console.log("Valor inválido!")
        }
    }
    sacar(valor){
        if(this.#saldo >= valor){

            this.#saldo -= valor;

            console.log("Saldo atual: "+ this.#saldo);
            console.log("Valor sacado: "+ valor);
            console.log("Valor atual: "+ this.#saldo);
        }
        else{
            console.log("Valor insuficiente!");
        }
    }
}
const cliente1 = new Cliente();
cliente1.nome = 'Thyago';
cliente1.cpf = 12334534300;

const ContaCorrenteThyago = new ContaCorrente();
ContaCorrenteThyago.depositar(200);
ContaCorrenteThyago.sacar(2);
ContaCorrenteThyago.agencia = 1001;
console.log(ContaCorrenteThyago);