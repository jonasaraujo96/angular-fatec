import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../services/autores/autores.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {
  public faEdit = faEdit;
  public faTrash = faTrash;

  public autor = {
    aut_codigo: null,
    aut_nome: null,
    aut_apelido: null,
    aut_sexo: null,
    aut_telefone: null,
    aut_email: null
  };

  public autores: any;

  constructor(private autoresService: AutoresService) { }

  ngOnInit() {
    this.listarAutores();
  }

  async listarAutores() {
    try {
      const resposta = await this.autoresService.listar();
      this.autores = resposta;
    } catch (erro) {
      console.error(erro.message)
    }
  }

  async salvar(autor) {
    try {
      const func = (autor.aut_codigo) ? 'atualizar' : 'salvar';
      const resposta = await this.autoresService[func](autor);
      this.listarAutores();
    } catch (erro) {
      console.error(erro.message)
    }
  }

  adicionar() {
    this.autor = {
      aut_codigo: null,
      aut_nome: null,
      aut_apelido: null,
      aut_sexo: null,
      aut_telefone: null,
      aut_email: null
    }
  }

  editar(autor) {
    this.autor = autor;
  }

  async deletar(autor) {
    try {
      const resposta = await this.autoresService.deletar(autor);
      this.listarAutores();
    } catch (erro) {
      console.error(erro.message)
    }
  }
}
