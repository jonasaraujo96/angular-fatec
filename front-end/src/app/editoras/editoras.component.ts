import { Component, OnInit } from '@angular/core';
import { EditorasService } from '../services/editoras/editoras.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-editoras',
  templateUrl: './editoras.component.html',
  styleUrls: ['./editoras.component.css']
})
export class EditorasComponent implements OnInit {
  public faEdit = faEdit;
  public faTrash = faTrash;

  public editora = {
    edt_codigo: null,
    edt_nome: null,
    edt_cidade: null,
    edt_cep: null,
    edt_telefone: null,
    edt_email: null,
    edt_estado: null,
  };

  public editoras: any;

  constructor(private editorasService: EditorasService) { }

  ngOnInit() {
    this.listarEditoras();
  }

  async listarEditoras() {
    try {
      const resposta = await this.editorasService.listar();
      this.editoras = resposta;
    } catch (erro) {
      console.error(erro.message)
    }
  }

  async salvar(editora) {
    try {
      const func = (editora.edt_codigo) ? 'atualizar' : 'salvar';
      const resposta = await this.editorasService[func](editora);
      this.listarEditoras();
    } catch (erro) {
      console.error(erro.message)
    }
  }

  adicionar() {
    this.editora = {
      edt_codigo: null,
      edt_nome: null,
      edt_cidade: null,
      edt_cep: null,
      edt_telefone: null,
      edt_email: null,
      edt_estado: null,
    }
  }

  editar(editora) {
   this.editora = editora;
  }

  async deletar(editora) {
    try {
      const resposta = await this.editorasService.deletar(editora);
      this.listarEditoras();
    } catch (erro) {
      console.error(erro.message)
    }
  }
}
