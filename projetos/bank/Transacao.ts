export class Transacao {
  readonly tipo: string;
  readonly valor: number;

  constructor(tipo: string, valor: number) {
    this.tipo = tipo;
    this.valor = valor;
  }
}
