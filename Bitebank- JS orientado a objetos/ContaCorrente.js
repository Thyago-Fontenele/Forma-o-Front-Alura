import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0; // "_" objeto privado

     
    get cliente(){
        return this._cliente;
    }
    get saldo(){
        return this._saldo;
    }
    constructor(cliente, agencia){
        this.agencia = agencia;
        this._cliente = cliente;
        ContaCorrente.numeroDeContas++;
    }

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