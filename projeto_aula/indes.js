function perguntarNome(){
    var nome = prompt("Qual o seu nome?");
    alert("Seu nome é " +nome)
}

function mudarBackground(){
    document.getElementsByTagName("body")[0].style.backgroundColor= "black";

    var novoelemento = document.createElement ("h2");
    novoelemento.innerHTML = "vermelho"
    novoelemento.style.color = "black"
    document.getElementsByTagName("body")[0].appendChild (novoelemento)

}