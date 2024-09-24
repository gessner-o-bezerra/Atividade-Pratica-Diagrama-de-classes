import { Cliente } from "./ex4/cliente";
import { Livro } from "./ex4/livro";
import { Locacao } from "./ex4/locacao";

// // Testando as classes pedidos
// const item1 = new Item(50, 'Mouse', 'Mouse sem fio');
// const item2 = new Item(100, 'Teclado', 'Teclado mecânico');
// const pedido = new Pedido();

// pedido.adicionarItem(item1);
// pedido.adicionarItem(item2);

// console.log(pedido.obterResumo());

// Testando as classes formar geométricas
// const circulo = new Circulo(5);
// circulo.desenhar();
// circulo.redimensionar();

// const retangulo = new Retangulo(10, 5);
// retangulo.desenhar();
// retangulo.redimensionar();


// Exemplo de uso para locação de livros
const livro1 = new Livro("1", "O Senhor dos Anéis", "J.R.R. Tolkien");
const livro2 = new Livro("2", "1984", "George Orwell");

const cliente1 = new Cliente("1", "Maria Silva");

cliente1.alugarLivro(livro1); // Empresta "O Senhor dos Anéis"
cliente1.alugarLivro(livro2); // Empresta "1984"

const locacao1 = new Locacao("1", livro1, cliente1);
locacao1.finalizarLocacao(); // Finaliza a locação de "O Senhor dos Anéis"

cliente1.devolverLivro(livro1); // Devolve "O Senhor dos Anéis"