import { FormatoDeElemento } from "../interface/formatoDeElemento";

export class Retangulo implements FormatoDeElemento {
  comprimento: number;
  altura: number;

  constructor(comprimento: number, altura: number) {
    this.comprimento = comprimento;
    this.altura = altura;
  }

  desenhar(): void {
    console.log(`Desenhando um retângulo com comprimento: ${this.comprimento} e altura: ${this.altura}`);
  }

  redimensionar(): void {
    this.comprimento *= 2;
    this.altura *= 2;
    console.log(`Retângulo redimensionado. Novo comprimento: ${this.comprimento}, nova altura: ${this.altura}`);
  }
}