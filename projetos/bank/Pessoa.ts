import { Conta } from "./Conta";

export class Pessoa {
  private nome: string;
  private cpf: string;
  private conta: Conta | null = null;

  constructor(nome: string, cpf: string) {
    this.nome = nome;
    this.cpf = cpf;
  }

  abrirConta() {
    this.conta = new Conta();
  }

  obterConta(): Conta {
    if (this.conta === null) {
      throw new Error(`${this.nome} ainda não criou conta!`);
    }

    return this.conta;
  }
}
