export class Curriculo{
    constructor (
        public cpf: number,
        public nome: string,
        public idade: string,
        public formacao: string,
        public descricao: string
    ) {}

    toMap(): {[key: string]: any} {
        return{
            cpf: this.cpf,
            nome: this.nome,
            idade: this.idade,
            formacao: this.formacao,
            descricao: this.descricao
        }
    }

    static fromMap(map: any):Curriculo{
        return new Curriculo(
            map.cpf,
            map.nome,
            map.idade,
            map.formacao,
            map.descricao
        )
    }
}