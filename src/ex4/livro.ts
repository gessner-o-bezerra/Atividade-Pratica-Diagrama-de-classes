export class Livro {
    id: string;
    titulo: string;
    autor: string;
    disponivel: boolean;

    constructor(id: string, titulo: string, autor: string) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;
    }

    emprestar(): void {
        if (this.disponivel) {
            this.disponivel = false;
            console.log(`${this.titulo} foi emprestado.`);
        } else {
            console.log(`${this.titulo} não está disponível.`);
        }
    }

    devolver(): void {
        this.disponivel = true;
        console.log(`${this.titulo} foi devolvido.`);
    }
}