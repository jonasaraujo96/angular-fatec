import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EditorasService {

  constructor(private http: HttpClient) { }

  async salvar(editora) {
    try {
      const resposta = this.http.post('http://localhost:3000/editoras/criar', editora).toPromise();
      return resposta
    } catch (erro) {
      console.error(erro.message)
    }
  }

  async listar() {
    try {
      const resposta = await this.http.get('http://localhost:3000/editoras/listar').toPromise();
      return resposta;
    } catch (erro) {
      console.error(erro.message)
    }
  }

  async deletar(editora) {
    try {
      const resposta = await this.http.post('http://localhost:3000/editoras/deletar', editora).toPromise();
      return resposta;
    } catch (erro) {
      console.error(erro.message)
    }
  }

  async atualizar(editora) {
    try {
      const resposta = await this.http.patch('http://localhost:3000/editoras/atualizar', editora).toPromise();
      return resposta;
    } catch (erro) {
      console.error(erro.message)
    }
  }
}
