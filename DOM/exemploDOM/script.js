//Exemplo de Script para a manipulção DOM

function clickBtn(){
    //Manipulaçao pelo ID -> Variável simples
    let titulo = document.getElementById("titulo");
    console.log(titulo);
    titulo.innerText = "Meu Título Modificado";
    let li = document.createElement("li");
    let texto = "Modificado Texto do Título";
    li.innerHTML = texto+'<button onclick="btnConfere(this)">Confere</button>';
    //querySelector -> Variável simples
    document.querySelector(".lista").appendChild(li); 
    //getElementsByClassName -> vetor .descricao
    let descricao = document.querySelectorAll('.descricao');
    console.log(descricao);
    descricao.forEach(element => element.style.color = "red");
    texto = "Modificado cor da Classe descricaso para Vermelho";
    li.innerHTML = texto+'<button onclick="btnConfere(this)">Confere</button>';
    document.querySelector(".lista").appendChild(li);
    
}
