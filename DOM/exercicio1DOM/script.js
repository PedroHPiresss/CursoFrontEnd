// 1.1 - Selecionar um elemento
let titulo = document.querySelector("#titulo"); // select by id
console.log(titulo);

let paragrafo = document.querySelector(".paragrafo"); // select by class
console.log(paragrafo);

let button = document.querySelector("button"); // select by tag
console.log(button);

// 1.2 - Alterar texto
function alterarTexto(){
    titulo.innerText = "Texto Alterado!";
    paragrafo.innerText = "Textinho Alterado Também!";
}

// 1.3 - Alterar cor de fundo
function alterarCorFundo(){
    let body = document.querySelector("body")
    body.style.backgroundColor = "blue"
}

// 1.4 - adicionar class
function adicionarClasse(){
    titulo.classList.add("descricao");
    let descricao = document.querySelector(".descricao");
    descricao.style.color = "red";
}