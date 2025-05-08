import { Component } from '@angular/core';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent {
  //atributos
  nome: string = "";
  email: string = "";
  telefone: string = "";
  genero: string = "";
  idade: number | null = null;
  profissao: string = "";

  limparCampos(){
    this.nome = "";
    this.email = "";
    this.telefone = "";
    this.genero = "";
    this.idade = null;
    this.profissao = "";
  }

  enviar() {
    if (!this.nome || !this.email || !this.telefone || !this.genero || this.idade === null || !this.profissao) {
      alert("Todos os campos devem ser preenchidos.");
      return;
    } 
    console.log("Dados enviados com sucesso:", {
      nome: this.nome,
      email: this.email,
      telefone: this.telefone,
      genero: this.genero,
      idade: this.idade,
      profissao: this.profissao
    });
  }
}
