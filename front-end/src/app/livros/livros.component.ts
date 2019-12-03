import { Component, OnInit } from '@angular/core';
import { LivrosService } from './../services/livros/livros.service';
import { EditorasService } from './../services/editoras/editoras.service';
import { AutoresService } from './../services/autores/autores.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {
  public faEdit = faEdit;
  public faTrash = faTrash;

  public livro = {
    liv_codigo: null,
    liv_dtcadastro: null,
    liv_titulo: null,
    liv_edicao: null,
    aut_nome: null,
    liv_ano: null,
    liv_ativoinativo: 'A',
    liv_isbn: null,
    edt_codigo: null,
    aut_codigo: null
  };

  public livros: any;
  public editoras: any;
  public autores: any;

  constructor(private livrosService: LivrosService, private editorasService: EditorasService, private autoresService: AutoresService) { }

  ngOnInit() {
    this.listarLivros();
    this.listarEditoras();
    this.listarAutores();
  }

  async listarLivros() {
    try {
      const resposta = await this.livrosService.listar();
      this.livros = resposta;
    } catch (erro) {
      console.error(erro.message)
    }
  }

  async listarEditoras() {
    try {
      const resposta = await this.editorasService.listar();
      this.editoras = resposta;
    } catch (erro) {
      console.error(erro.message)
    }
  }

  async listarAutores() {
    try {
      const resposta = await this.autoresService.listar();
      this.autores = resposta;
    } catch (erro) {
      console.error(erro.message)
    }
  }

  async salvar(livro) {
    try {
      const func = (livro.liv_codigo) ? 'atualizar' : 'salvar';
      const resposta = await this.livrosService[func](livro);
      this.listarLivros();
    } catch (erro) {
      console.error(erro.message)
    }
  }

  adicionar() {
    this.livro = {
      liv_codigo: null,
      liv_dtcadastro: null,
      liv_titulo: null,
      liv_edicao: null,
      aut_nome: null,
      liv_ano: null,
      liv_ativoinativo: 'A',
      liv_isbn: null,
      edt_codigo: null,
      aut_codigo: null
    }
  }

  editar(livro) {
    this.livro = livro
  }

  async deletar(livro) {
    try {
      const resposta = await this.livrosService.deletar(livro);
      this.listarLivros();
    } catch (erro) {
      console.error(erro.message)
    }
  }
}
