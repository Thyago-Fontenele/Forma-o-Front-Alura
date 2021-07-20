export class ContaCorrente{
    agencia;
    cliente;


    _saldo = 0; // "_" objeto privado

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            return valor;
        }
        else{
            console.log("Valor inválido!")
        }
    }
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
        else{
            console.log("Valor insuficiente!");
        }
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}