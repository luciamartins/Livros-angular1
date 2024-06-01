import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  editoras: Array<Editora> = [
    {
      codEditora: 1,
      nome: 'HarperCollins',
    },
    {
      codEditora: 2,
      nome: 'Schwarcz S.A.',
    },
    {
      codEditora: 3,
      nome: 'Nova Fronteira',
    },

  ];

  constructor() {}

  getEditoras(): Array<Editora> {
    return this.editoras;
  }
    
  getNomeEditoras(codEditora: number): string | null {
    let editora = this.editoras.filter(e  => e.codEditora === codEditora);
    return editora.length > 0 ? editora[0].nome : null;
  }        
}
  