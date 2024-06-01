import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Interação humano-computador',
      resumo:  
      'Está seção engloba os conceitos introdutórios para o entendimento sobre IHC, com a explanação de aspectos sobre a comunicação que são a base para uma interação eficiente.',
      autores: ['Everson Matias de Morais","Adriane Aparecida Loper']            

    },

    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Expressões Regulares: Uma Abordagem Divertida',
      resumo:
      'Revisando aquela tese de mestrado, você percebe que digitou errado o nome daquele pesquisador alemão famoso. E foram várias vezes. Escreveu Miller, Mueller e Müler, quando na verdade era Müller. Que tal corrigir todos de uma vez? Fácil, use a expressão M(i|ue|ü)ll?er.',
      autores: ['Aurelio Marinho Jargas']
        
    },

    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Primeiros Passos com React',
      resumo:
      'Saia trabalhando de imediato com React: a tecnologia de código aberto do Facebook para construir rapidamente aplicações web sofisticadas. ',
      autores: ['Stoyan Stefanov']
        
    },
  ];

  constructor() { }

  obterLivros() : Array<Livro>{
    return this.livros;
  }

  incluir(livro: Livro): void {
    let maxCodigo = Math.max(...this.livros.map(i => i.codigo));
    livro.codigo = maxCodigo + 1;
    this.livros.push(livro);   
  }

  excluir (codigo: number): void {
    let index = this.livros.findIndex(i => i.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }    
  }
}