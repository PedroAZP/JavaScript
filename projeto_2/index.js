function criarTabela(nome){

    //Criando elementos principais
    const tabela = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    //Criando os elementos do THEAD
    const th_nome = document.createElement("th");
    th_nome.innerHTML = nome;
    th_nome.colSpan = 5;
    thead.appendChild(th_nome);

    //Criando os elementos do TBODY
    const th_B = document.createElement("th");
    th_B.innerHTML = "B";
    const th_I = document.createElement("th");
    th_I.innerHTML = "I";
    const th_N = document.createElement("th");
    th_N.innerHTML = "N";
    const th_G = document.createElement("th");
    th_G.innerHTML = "G";
    const th_O = document.createElement("th");
    th_O.innerHTML = "O";

    tbody.appendChild(th_B);
    tbody.appendChild(th_I);
    tbody.appendChild(th_N);
    tbody.appendChild(th_G);
    tbody.appendChild(th_O);

    for(let i = 0; i < 5; i++){
        const tr = document.createElement("tr");
        for(let j = 0; j < 5; j++){
            const td = document.createElement("td");
            td.innerHTML = "XX";
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    //Selecione os Elementos
    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    //Selecionando o body e inserindo a tabela
    const body = document.querySelector("body");
    body.appendChild(tabela);

}

function pedirNome(){
    const nome = prompt("Digite o seu Nome")
    criarTabela(nome);
}