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

function enviar(event){
    event.preventDefaut();

    const email = event.target[0].value;
    const nome = event.target[1].value;

    if(!email || !nome){
        alert("Insira os dados, POR FAVOR!")
        return;
    }

    const tr = document.createElement("tr");
    const td_email = document.createElement("td");
    td_email.innerHTML = email;
    const td_nome = document.createElement("td");
    td_nome.innerHTML = nome;

    tr.appendChild(td_email);
    tr.appendChild(td_nome);

    const tbody = document.getElementsByTagName("tbody")[0];

    tbody.appendChild(tr);
}