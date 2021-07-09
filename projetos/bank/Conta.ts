import { Extrato } from "./Extrato";
import { Transacao } from "./Transacao";

export class Conta {
  private saldo: number = 0;
  private aberta: boolean = false;
  private extrato: Extrato;

  constructor() {
    this.saldo = 0;
    this.aberta = true;
    this.extrato = new Extrato();
  }

  depositar(valor: number) {
    if (this.aberta === false) {
      throw new Error("Conta fechada!");
    }

    this.saldo = this.saldo + valor;

    const transacaoDeDeposito = new Transacao("DEPOSITO", valor);
    this.extrato.adiciona(transacaoDeDeposito);
  }

  sacar(valor: number) {
    this.saldo = this.saldo - valor;

    const transacaoDeSaque = new Transacao("SAQUE", valor);
    this.extrato.adiciona(transacaoDeSaque);
  }

  obterSaldo(): number {
    return this.saldo;
  }

  estaAberta(): boolean {
    return this.aberta;
  }

  fechar(): void {
    this.aberta = false;
  }

  visualizarExtrato() {
    console.log(this.extrato);
  }
}
