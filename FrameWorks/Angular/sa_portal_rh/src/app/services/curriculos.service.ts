import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curriculo } from '../models/curriculo.model';

@Injectable({
  providedIn: 'root'
})
export class CurriculosService {
  //atributo
  private apiUrl = "http://localhost:3014/curriculos";

  constructor(private http: HttpClient) { }

  //get
  getCurriculos(): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(this.apiUrl);
  }

  //post
  cadastrarCurriculo(curriculo: Curriculo): Observable<Curriculo[]> {
    return this.http.post<Curriculo[]>(this.apiUrl, curriculo);
  }

  //put
  atualizarCurriculo(cpf: any, curriculo:Curriculo): Observable<Curriculo[]> {
    const urlAtualizado = `${this.apiUrl}/${cpf}`;
    return this.http.put<Curriculo[]>(urlAtualizado, curriculo);
  }

  //delete
  removerCurriculo(cpf: any): Observable<Curriculo[]>{
    const urlDeletar = `${this.apiUrl}/${cpf}`;
    return this.http.delete<Curriculo[]>(urlDeletar);
  }


  
}
