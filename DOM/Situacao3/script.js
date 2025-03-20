
document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let telefone = document.getElementById("telefone").value;
    let idade = document.getElementById("idade").value;
    let mensagem = document.getElementById("mensagem");

    if (nome === "" || email === "" || senha === "" || telefone === "" || idade === "") {
        mensagem.innerText = "Todos os campos são obrigatórios!";
        mensagem.style.color = "red";
    } else {
        mensagem.innerText = "Cadastro realizado com sucesso!";
        mensagem.style.color = "green";
    }
});