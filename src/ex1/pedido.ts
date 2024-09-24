export  class Item {
  valor: number;
  nome: string;
  descricao: string;

  constructor(valor: number, nome: string, descricao: string) {
    this.valor = valor;
    this.nome = nome;
    this.descricao = descricao;
  }
}

export  class Pedido {
  itens: Item[] = [];
  valorTotal: number = 0;

  adicionarItem(item: Item): void {
    this.itens.push(item);
    this.valorTotal += item.valor;
  }

  obterResumo(): string {
    return `Valor Total: R$${this.valorTotal.toFixed(2)}\nItens:\n` +
      this.itens.map(item => `- ${item.nome}: R$${item.valor.toFixed(2)}`).join('\n');
  }
}


