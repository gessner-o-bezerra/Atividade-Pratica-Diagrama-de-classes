// ******************** ERROS ENCONTRADOS - LISTADOS ABAIXO ***********************

/*

*************************************************************
1 - Erro na implementação de métodos dentro de interfaces:

Interfaces não podem conter implementações de métodos. No código, você implementou métodos diretamente 
dentro das interfaces Desconto e ValorPedido. Isso não é permitido.

*********************************************************
2 - Erro de herança múltipla com classes:

TypeScript não suporta herança múltipla com classes, ou seja, uma classe não pode herdar de duas 
classes ao mesmo tempo. No código, a classe ItemPedido tenta herdar de ValorPedido e Desconto 
simultaneamente, o que não é permitido.

********************************************************
3 - Erro ao acessar this.itens na interface ValorPedido:

O código tenta acessar this.itens em um método da interface ValorPedido, mas interfaces não podem 
ter implementação de métodos, nem podem ter acesso a atributos de uma classe.

********************************************
4 - Erro ao acessar this.valor em Pedido:

A classe Pedido usa this.valor, mas esse atributo não foi definido na classe. 

*/


// **************************** CÓDIGO CORRIGIDO ABAIXO **************************
interface Desconto {
  aplicarDescontoEmPorcentagem(desconto: number): void;
  recuperarValorTotal(): number;
}

interface ValorPedido {
  aplicarDescontoEmReais(desconto: number): void;
  removeItem(item: string): void;
}

class Pedido implements ValorPedido, Desconto {
  itens: ItemPedido[] = [];

  add(item: ItemPedido): void {
    this.itens.push(item);
  }

  removeItem(item: string): void {
    const index = this.itens.findIndex((i) => i.nome === item);
    if (index > -1) {
      this.itens.splice(index, 1);
    }
  }

  recuperarValorTotal(): number {
    let total = this.itens
      .map((i) => i.recuperarValorTotal())
      .reduce((sum, v) => sum + v, 0);

    return total;
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    const porcentagem = desconto / 100;
    const total = this.recuperarValorTotal();
    const descontoEmReais = total * porcentagem;

    // Aplicar o desconto em cada item proporcionalmente
    this.itens.forEach((item) => {
      const descontoItem = (item.recuperarValorTotal() / total) * descontoEmReais;
      item.aplicarDescontoEmReais(descontoItem);
    });
  }

  aplicarDescontoEmReais(desconto: number): void {
    const total = this.recuperarValorTotal();
    
    // Aplicar o desconto em cada item proporcionalmente
    this.itens.forEach((item) => {
      const descontoItem = (item.recuperarValorTotal() / total) * desconto;
      item.aplicarDescontoEmReais(descontoItem);
    });
  }
}

class ItemPedido {
  valor: number;
  nome: string;
  quantidade: number;

  constructor(valor: number, nome: string, quantidade: number) {
    this.valor = valor;
    this.nome = nome;
    this.quantidade = quantidade;
  }

  recuperarValorTotal(): number {
    return this.valor * this.quantidade;
  }

  aplicarDescontoEmReais(desconto: number): void {
    this.valor -= desconto / this.quantidade; // Distribui o desconto por quantidade
  }
}

// Teste do sistema corrigido
const item1 = new ItemPedido(50, "Livro", 2);
const item2 = new ItemPedido(30, "Caneta", 1);

const pedido = new Pedido();
pedido.add(item1);
pedido.add(item2);

console.log("Valor total antes do desconto:", pedido.recuperarValorTotal());
pedido.aplicarDescontoEmPorcentagem(10);
console.log("Valor total após 10% de desconto:", pedido.recuperarValorTotal());

pedido.removeItem("Livro");
console.log("Valor total após remover o Livro:", pedido.recuperarValorTotal());
