let titulo = document.querySelector(".titulo");
console.log(titulo);
let paragrafo = document.querySelector(".paragrafo")
console.log(paragrafo);
let button = document.querySelector("button")
console.log(button);

// alterar texto
function alterarTexto(){
    document.getElementsByClassName("titulo").innerText = "Texto Alterado!";
    document.getElementsByClassName("descricao").innerText = "Textinho Alterado Também!";
}

function alterarCor(){
    let fundo = document.querySelector("body")
    fundo.style.backgroundColor = "blue";
}