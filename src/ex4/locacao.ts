import { Cliente } from "./cliente";
import { Livro } from "./livro";

export class Locacao {
    id: string;
    livro: Livro;
    cliente: Cliente;
    dataLocacao: Date;
    dataDevolucao: Date | null;

    constructor(id: string, livro: Livro, cliente: Cliente) {
        this.id = id;
        this.livro = livro;
        this.cliente = cliente;
        this.dataLocacao = new Date();
        this.dataDevolucao = null;
    }

    finalizarLocacao(): void {
        this.dataDevolucao = new Date();
        console.log(`Locação do livro ${this.livro.titulo} finalizada.`);
    }
}