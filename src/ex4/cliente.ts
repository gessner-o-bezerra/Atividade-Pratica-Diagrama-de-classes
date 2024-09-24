import { Livro } from "./livro";

export class Cliente {
    id: string;
    nome: string;
    livrosEmprestados: Livro[];

    constructor(id: string, nome: string) {
        this.id = id;
        this.nome = nome;
        this.livrosEmprestados = [];
    }

    alugarLivro(livro: Livro): void {
        if (livro.disponivel) {
            livro.emprestar();
            this.livrosEmprestados.push(livro);
        } else {
            console.log(`${livro.titulo} não está disponível para locação.`);
        }
    }

    devolverLivro(livro: Livro): void {
        const index = this.livrosEmprestados.indexOf(livro);
        if (index > -1) {
            this.livrosEmprestados.splice(index, 1);
            livro.devolver();
        } else {
            console.log(`${this.nome} não possui o livro ${livro.titulo}.`);
        }
    }
}