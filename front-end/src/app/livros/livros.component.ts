import { Component, OnInit } from '@angular/core';
import { LivrosService } from './../services/livros/livros.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  public livro = {
    nome: null,
    autor: null,
    lancamento: null
  };

  public livros: any;

  constructor(private livrosService: LivrosService) { }

  ngOnInit() {
    this.listar();
  }

  async listar() {
    try {
      const resposta = await this.livrosService.listar();
      this.livros = resposta;
    } catch (erro) {
      console.error(erro.message)
    }
  }

  async salvar(livro) {
    try {
      const resposta = await this.livrosService.salvar(livro);
      this.listar();
    } catch (erro) {
      console.error(erro.message)
    }
  }
}
