function alterarTexto() {
    document.getElementById("titulo").innerText = "Texto Alterado!";
}

// getElementById - Seleção do elemento pelo ID
let titulo = document.getElementById("titulo");
// variável comum
titulo.style.color = "blue";

// getElementsByClassName
let descricao = document.getElementsByClassName("descricao");
// variável vetor//array
descricao[1].style.fontWeight = "bold"
descricao[2].style.color = "green"

// getElementsByTagName -> vetor
let todosParagrafos = document.getElementsByTagName("p");
console.log(todosParagrafos.length);

//querySelector -> Primeiro elemento
let primeiroDescricao = document.querySelector(".descricao");
primeiroDescricao.style.color = "red";

//querySelectorAll -> Todos os elementos -> vetor
let ps = document.querySelectorAll("p");
ps.forEach(p => p.style.fontSize = "18px");