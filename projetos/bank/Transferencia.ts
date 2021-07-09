import { Conta } from "./Conta";

export class TransferenciaEntreContas {
  private contaDe: Conta;
  private contaPara: Conta;
  private valorDaTransferencia: number;

  constructor(contaDe: Conta, contaPara: Conta, valorDaTransferencia: number) {
    this.contaDe = contaDe;
    this.contaPara = contaPara;
    this.valorDaTransferencia = valorDaTransferencia;
  }

  executar() {
    this.contaDe.sacar(this.valorDaTransferencia);
    this.contaPara.depositar(this.valorDaTransferencia);
  }
}
