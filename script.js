const botaoLogin = document.getElementById("singincabec");
const fundo = document.getElementById("fundoLogin");
const janela = document.getElementById("janelaLogin");
const botaoFechar = document.getElementById("fecharJanela");
const botaoLogin2 = document.getElementById("singin2");

botaoLogin.addEventListener("click", function() {
    janela.style.display = "block";
    fundo.style.display = "block"
});

botaoLogin2.addEventListener("click", function() {
    janela.style.display = "block";
    fundo.style.display = "block"
});

botaoFechar.addEventListener("click", function() {
    janela.style.display = "none";
    fundo.style.display = "none"
});