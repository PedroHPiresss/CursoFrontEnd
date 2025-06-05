export class Curriculo{
    constructor (
        public id: number,
        public nome: string,
        public idade: string,
        public formacao: string,
        public descricao: string
    ) {}

    toMap(): {[key: string]: any} {
        return{
            id: this.id,
            nome: this.nome,
            idade: this.idade,
            formacao: this.formacao,
            descricao: this.descricao
        }
    }

    static fromMap(map: any):Curriculo{
        return new Curriculo(
            map.id,
            map.nome,
            map.idade,
            map.formacao,
            map.descricao
        )
    }
}