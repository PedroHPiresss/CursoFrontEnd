import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //atributos
  private apiUrl = "http://localhost:3013/usuarios";
  private readonly CHAVE_AUTH = 'usuarioLogado';

  constructor(private router: Router, private http: HttpClient) { }

  //Métodos
  //Cadastrar o Usuário no sistema
  registrar(usuario: any): Observable<any> {
    //verificar se o usuário já existe (get -> email)
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      map(usuarios => {
        //Se usuário já existe
        if (usuarios.length > 0) {
          //lanço um erro para o sistema
          throw new Error('Usuário já cadastrado.');
        }
        return usuario
      }),
      //Caso o usuário não exista
      switchMap(novoUsuario =>
        this.http.post(this.apiUrl, novoUsuario).pipe(
          tap(() => alert('Registro realizado com sucessso.'))
        )
      ),
      //Pegar erros de conexão
      catchError(err => {
        alert(`Erro: ${err.message}`);
        throw err;
      })
    );
  }

  //Método prara logar usuários já registrados
  login(credenciais: any): Observable<boolean> {
    //Passar para o banco uma busca com email e senha
    return this.http
      .get<any[]>(
        `${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`
      )
      .pipe(
        //Não encontrado
        map((usuarios) => {
        if (usuarios.length === 0) return false;
        //o usuário e sua chave de autenticação -> localStorage
        const usuario = usuarios[0];
        localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuario));
        return true;//Deu certo, pode avançar 
      }));
  }
  //Deslogar o usuário
  logout() {
    //Limpo o localStorage
    localStorage.removeItem(this.CHAVE_AUTH);
    //Redireciono para outra página
    this.router.navigate(["/home"]);
  }

  // Verificar se o usuario já fez autenticação
  // Autorização do acesso
  estaAutenticado(): boolean{
    // Transformando a verificação da String em uma booleana
    return !! localStorage.getItem(this.CHAVE_AUTH);
  }

  // Pegar os dados do usuário
  getUsuarioAtual():any{
    //Quando eu armazeno no localStorage -> Texto
    // Quando vou pegar as informações do localStorage eu converto para JSON
    return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || '{}');
  }
}
