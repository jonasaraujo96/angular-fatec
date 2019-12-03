import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  constructor(private http: HttpClient) { }

  async salvar(autor) {
    try {
      const resposta = this.http.post('http://localhost:3000/autores/criar', autor).toPromise();
      return resposta
    } catch (erro) {
      console.error(erro.message)
    }
  }

  async listar() {
    try {
      const resposta = await this.http.get('http://localhost:3000/autores/listar').toPromise();
      return resposta;
    } catch (erro) {
      console.error(erro.message)
    }
  }

  async deletar(autor) {
    try {
      const resposta = await this.http.post('http://localhost:3000/autores/deletar', autor).toPromise();
      return resposta;
    } catch (erro) {
      console.error(erro.message)
    }
  }

  async atualizar(autor) {
    try {
      const resposta = await this.http.patch('http://localhost:3000/autores/atualizar', autor).toPromise();
      return resposta;
    } catch (erro) {
      console.error(erro.message)
    }
  }
}
