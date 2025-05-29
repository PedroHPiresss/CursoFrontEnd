export class Vaga {
  //atributos
  //    id: number = 0;
  //  nome: string = "";
  //  foto: string = "";
  //  descricao: string = "";
  //  salario: number = 0;

  //    constructor(id:number, nome:string, foto:string, descricao:string, salario:number){
  //      this.id = id;
  //      this.nome = nome;
  //      this.foto = foto;
  //      this.descricao = descricao;
  //      this.salario = salario;
  //  }

  // ^ Forma clássica de criação de classes

  constructor(
    public id: number,
    public nome: string,
    public foto: string,
    public descricao: string,
    public salario: number
  ) {}

  // ^ Forma encurtada de criação de classes

  //getters e setters -> quando os atributos são privados (encapsulamento)
  //    getId(): number{
  //      return this.id;
  //}
  //setId(id:number): void{
  //  this.id = id;
  // }

  //toMap Obj para a API
  toMap(): {[key: string]: any} {
    return{
      id: this.id,
      nome: this.nome,
      foto: this.foto,
      descricao: this.descricao,
      salario: this.salario
    }
  }

  //fromMap API para Obj
  static fromMap(map:any):Vaga{
    return new Vaga(
      map.id,
      map.nome,
      map.foto,
      map.descricao,
      map.salario
    )
  }
}
