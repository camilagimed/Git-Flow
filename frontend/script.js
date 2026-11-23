const formulario = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const telefone = document.getElementById("telefone").value.trim();

    
    const telefoneNumeros = telefone.replace(/\D/g, "");

    switch (true) {

        case nome === "" || email === "" || senha === "" || telefone === "":
            mensagem.textContent = "Preencha todos os campos!";
            mensagem.style.color = "red";
            break;

        case !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email):
            mensagem.textContent = "Digite um e-mail válido!";
            mensagem.style.color = "red";
            break;

        case senha.length < 6:
            mensagem.textContent = "A senha deve ter pelo menos 6 caracteres!";
            mensagem.style.color = "red";
            break;

        case !/^[1-9]{2}(?:9\d{8}|\d{8})$/.test(telefoneNumeros):
            mensagem.textContent = "Digite um telefone válido com DDD!";
            mensagem.style.color = "red";
            break;

        default:
            mensagem.textContent = "Cadastro realizado com sucesso!";
            mensagem.style.color = "green";
            formulario.reset();
            break;
    }
});
