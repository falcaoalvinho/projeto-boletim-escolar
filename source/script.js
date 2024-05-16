const Tabela = document.querySelector('table');

var CheckBoxList = document.querySelectorAll('li > input');
var RowsList;

function ExcluirAluno() {
    console.log("ExcluirAluno() foi chamada!")
}

function VerificarNotas() {
    console.log("VerificarNotas() foi chamada!")
}

function GerarTabela() {
    console.log("GerarTabela() foi chamada!")
}

function AdicionarAluno() {
    console.log("AdicionarAluno() foi chamada!")
    
    var RowsList = document.querySelectorAll('tr');

    let ultimaLinha = RowsList[RowsList.length - 1].querySelectorAll('td'); 

    let colunaId = document.createElement('td');
    var NovaLinha = document.createElement('tr');

    colunaId.innerText = parseInt(ultimaLinha[0].innerText) + 1;

    Tabela.appendChild(NovaLinha);
    NovaLinha.appendChild(colunaId);

    let colunaNome = document.createElement('td')
    let novoInput = document.createElement('input');
    novoInput.setAttribute('type', 'text');

    NovaLinha.appendChild(colunaNome);
    colunaNome.appendChild(novoInput);

    let colunaNota;

    for (let iterador = 0; iterador < 1; iterador ++){
        colunaNota = document.createElement('td');
        novoInput = document.createElement('input');
        novoInput.setAttribute('type', 'number');

        NovaLinha.appendChild(colunaNota);
        colunaNota.appendChild(novoInput);
    }

    let colunaSituacao = document.createElement('td');
    novoInput = document.createElement('input');
    novoInput.setAttribute('type', 'output');

    NovaLinha.appendChild(colunaSituacao);
    colunaSituacao.appendChild(novoInput);

    let colunaExcluir = document.createElement('td');
    let novoButton = document.createElement('button');
    novoButton.setAttribute('onclick', 'ExcluirAluno()');
    novoButton.innerText = "Excluir";

    NovaLinha.appendChild(colunaExcluir);
    colunaExcluir.appendChild(novoButton);
}