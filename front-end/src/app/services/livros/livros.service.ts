import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor(private http: HttpClient) { }

  async salvar(livro) {
    try {
      const resposta = this.http.post('http://localhost:3000/livros/criar', livro).toPromise();
      return resposta
    } catch (erro) {
      console.error(erro.message)
    }
  }

  async listar() {
    try {
      const resposta = await this.http.get('http://localhost:3000/livros/listar').toPromise();
      return resposta;
    } catch (erro) {
      console.error(erro.message)
    }
  }
}
