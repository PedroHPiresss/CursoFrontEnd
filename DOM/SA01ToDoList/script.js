// Usar o DOM para adicionar um evento no html
document.getElementById("btnAdicionar").addEventListener("click", adicionarTarefa);

function adicionarTarefa(){
    let input = document.getElementById("tarefa");
    let texto = input.value.trim(); // pega o valor e recorta os espaços em branco antes e depois
    
    if(texto===""){
        return; // interrompe a function
    }

    // continuar o código - se texto não for "" (vazio);
    let li = document.createElement("li"); // criando um elemento de lista
    li.innerHTML = texto+'<button onclick="removerTarefa(this)">Remover</button>'; // crie o conteúdo do Li

    let ul = document.getElementById("lista");
    ul.appendChild(li); // adicionar o item a lista

    input.value = ""; // limpar o texto
}

function removerTarefa(botao){ // função do botão para remover o elemento pai (parent) (li)
    botao.parentElement.remove();
}

function alterarCorFundo(){
    let body = document.querySelector("body")
    body.style.backgroundColor = "blue"
}