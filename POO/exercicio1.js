//ativ1
class Produto{
    constructor(nome, preco, estoque){
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
    vender(quantidade){
        if(quntidade>this.estoque){
            console.log("Quantidade solicitada maior que a quantidade em estoque");
            console.log("Quantidade em estoque é: ", this.estoque);
            return
        }
        this.estoque -= quantidade;
        console.log("Venda concluída");
    }
    repor(quantidade){
        this.estoque += quantidade;
        console.log("Quantidade em estoque = ", this.estoque);
    }
    exibirInfo(){
        console.log("Nome: ", this.nome, "Preço: ", this.preco, "Estoque: ", this.estoque); //this.estoque++
    }
}

let p1 = new Produto("Celular",2000);
p1.repor(50);
p1.estoque(100);
p1.exibirInfo();

//ativ2

class Veiculo{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    exibirInfo2(){
        console.log("Marca: ", this.marca, "Modelo: ", this.modelo)
    }
}

class Carro extends Veiculo{
    constructor(marca, modelo, ano, quantidadePortas){
        super(marca, modelo, ano);
        this.quantidadePortas = quantidadePortas;
    }
    exibirInfo3(){
        console.log("Marca: ", this.marca, "Modelo: ", this.modelo, "Ano: ", this.ano, "Quantidade de Portas: ", this.quantidadePortas);
    }
}

let carro1 = new Carro("Toyota", "Corolla", 2022, 4);
carro1.exibirInfo();

//ativ3

class ContaBancaria{
    constructor(titular, saldo = 0){
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(){
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    }
    sacar(){
        if (valor > this.saldo) {
            console.log("Saldo insuficiente!");
            return;
        }
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Saldo restante: R$${this.saldo}`);
    }
    exibirSaldo(){
        console.log(`Titular: ${this.titular}, Saldo: R$${this.saldo}`);
    }
}

let conta1 = new ContaBancaria("Rodriguinho");
conta1.depositar(500);
conta1.sacar(200);
conta1.exibirSaldo();

//ativ4

class Funcionario{
    constructor(nome2, salario, cargo){
        this.nome2 = nome2;
        this.salario = salario;
        this.cargo = cargo;
    }
    aumentarSalario(percentual) {
        this.salario += this.salario * (percentual / 100);
        console.log(`Salário de ${this.nome} aumentado em ${percentual}%. Novo salário: R$${this.salario.toFixed(2)}`);
    }

    exibirInfo() {
        console.log(`Funcionário: ${this.nome}, Cargo: ${this.cargo}, Salário: R$${this.salario.toFixed(2)}`);
    }
}

let funcionario1 = new Funcionario("Mariana", 3000, "Desenvolvedora");
funcionario1.exibirInfo();
funcionario1.aumentarSalario(10);
funcionario1.exibirInfo();
















