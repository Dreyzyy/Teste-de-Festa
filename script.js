// script.js

function verificarEntrada() { 
    let nome = document.getElementById("nome").value.toLowerCase();
    let idade = Number(document.getElementById("idade").value);
    let convite = document.getElementById("convite").value.toLowerCase();
    let mensagem = document.getElementById("mensagem");
    let nomesPermitidos = ["andrey", "bruno", "susana", "david"];

    // Remove classes anteriores
    mensagem.classList.remove("sucesso", "erro");

    if (!nome || !idade || !convite) {
        mensagem.textContent = "Preencha todos os campos";
        mensagem.classList.add("erro");
        mensagem.style.display = "block";
    } else if (!nomesPermitidos.includes(nome) || idade < 18 || convite !== "sim") {
        mensagem.textContent = "Não foi permitido sua entrada";
        mensagem.classList.add("erro");
        mensagem.style.display = "block";
    } else {
        mensagem.textContent = "Bem-vindo à Festa! Aproveite.";
        mensagem.classList.add("sucesso");
        mensagem.style.display = "block";
    }
}
