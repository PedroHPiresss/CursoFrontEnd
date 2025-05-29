import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga.model';

@Injectable({
  providedIn: 'root'
})
export class VagasService {
  //atributo
  private apiUrl = "http://localhost:3014/vagas"; //Caminho da API

  constructor(private http: HttpClient) { }

  //Método de conexão com a API
  
  //get - read
  getVagas(): Observable<Vaga[]> { // Responsável por traduzir as informações da API para Model
    return this.http.get<Vaga[]>(this.apiUrl); // Faz a requisição para a API - Endereço da conexão e retorno da informação
    
  }

  //post - create
  cadastrarVaga(vaga: Vaga): Observable<Vaga[]> { // Responsável por traduzir as informações da API para Model
    return this.http.post<Vaga[]>(this.apiUrl, vaga); // Faz a requisição para a API - Endereço da conexão e retorno da informação
  }

  //put - update
  atualizarVaga(id: any, vaga:Vaga): Observable<Vaga[]> { // Responsável por traduzir as informações da API para Model
    const urlAtualizado = `${this.apiUrl}/${id}`; // Faz a requisição para a API - Endereço da conexão e retorno da informação
    return this.http.put<Vaga[]>(urlAtualizado, vaga);
  }

  //delete - delete
  removerVaga(id:any): Observable<Vaga[]>{
    const urlDeletar = `${this.apiUrl}/${id}`;
    return this.http.delete<Vaga[]>(urlDeletar);
  }
}
