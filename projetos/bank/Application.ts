import { Conta } from "./Conta";
import { Pessoa } from "./Pessoa";
import { TransferenciaEntreContas } from "./Transferencia";

export class Application {
  static main(): void {
    const matheus = new Pessoa("Matheus", "908902192812");
    matheus.abrirConta();
    const contaDoMatheus = matheus.obterConta();
    contaDoMatheus.depositar(15);

    const gabbi = new Pessoa("Gabbi", "6546461681489");
    gabbi.abrirConta();
    const contaDaGabbi = gabbi.obterConta();

    const transferencia = new TransferenciaEntreContas(
      contaDoMatheus,
      contaDaGabbi,
      15
    );
    transferencia.executar();

    console.log("Saldo Gabbi " + contaDaGabbi.obterSaldo());
    console.log("Saldo Matheus " + contaDoMatheus.obterSaldo());
    contaDoMatheus.visualizarExtrato();
    contaDaGabbi.visualizarExtrato();
    contaDaGabbi.sacar(10);
    contaDaGabbi.visualizarExtrato();

    const map = new Map<number, Conta>();
    map.set(1, contaDaGabbi);
    map.set(2, contaDoMatheus);
  }
}
