const Tabela = document.querySelector('table');

var CheckBoxList = document.querySelectorAll('li > input');
var RowsList;

var ListaMaterias = [];

var CheckPortugues  = CheckBoxList[0];
var CheckMatematica = CheckBoxList[1];
var CheckHistoria   = CheckBoxList[2];
var CheckGeografia  = CheckBoxList[3];
var CheckCiencias   = CheckBoxList[4];
var CheckEFisica    = CheckBoxList[5];

CheckPortugues.addEventListener('change', () => {
    if(CheckPortugues.checked) {
        ListaMaterias.push(CheckPortugues.value);
    }
    else {
        let listaAuxiliar = []
        for (let iterador in ListaMaterias){
            if (ListaMaterias[iterador] != CheckPortugues.value){
                listaAuxiliar.push(ListaMaterias[iterador]);
            }
        }
        ListaMaterias = listaAuxiliar;
    }
})

CheckMatematica.addEventListener('change', () => {
    if(CheckMatematica.checked) {
        ListaMaterias.push(CheckMatematica.value);
    }
    else {
        let listaAuxiliar = []
        for (let iterador in ListaMaterias){
            if (ListaMaterias[iterador] != CheckMatematica.value){
                listaAuxiliar.push(ListaMaterias[iterador]);
            }
        }
        ListaMaterias = listaAuxiliar;
        console.log(ListaMaterias);
    }
})

CheckHistoria.addEventListener('change', () => {
    if(CheckHistoria.checked) {
        ListaMaterias.push(CheckHistoria.value);
    }
    else {
        let listaAuxiliar = []
        for (let iterador in ListaMaterias){
            if (ListaMaterias[iterador] != CheckHistoria.value){
                listaAuxiliar.push(ListaMaterias[iterador]);
            }
        }
        ListaMaterias = listaAuxiliar;
        console.log(ListaMaterias);
    }
})

CheckGeografia.addEventListener('change', () => {
    if(CheckGeografia.checked) {
        ListaMaterias.push(CheckGeografia.value);
    }
    else {
        let listaAuxiliar = []
        for (let iterador in ListaMaterias){
            if (ListaMaterias[iterador] != CheckGeografia.value){
                listaAuxiliar.push(ListaMaterias[iterador]);
            }
        }
        ListaMaterias = listaAuxiliar;
        console.log(ListaMaterias);
    }
})

CheckCiencias.addEventListener('change', () => {
    if(CheckCiencias.checked) {
        ListaMaterias.push(CheckCiencias.value);
    }
    else {
        let listaAuxiliar = []
        for (let iterador in ListaMaterias){
            if (ListaMaterias[iterador] != CheckCiencias.value){
                listaAuxiliar.push(ListaMaterias[iterador]);
            }
        }
        ListaMaterias = listaAuxiliar;
        console.log(ListaMaterias);
    }
})

CheckEFisica.addEventListener('change', () => {
    if(CheckEFisica.checked) {
        ListaMaterias.push(CheckEFisica.value);
    }
    else {
        let listaAuxiliar = []
        for (let iterador in ListaMaterias){
            if (ListaMaterias[iterador] != CheckEFisica.value){
                listaAuxiliar.push(ListaMaterias[iterador]);
            }
        }
        ListaMaterias = listaAuxiliar;
        console.log(ListaMaterias);
    }
})

function ExcluirAluno() {
    console.log("ExcluirAluno() foi chamada!")
}

function VerificarNotas() {
    console.log("VerificarNotas() foi chamada!")
}

function GerarTabela() {
    console.log("GerarTabela() foi chamada!")

    console.log(ListaMaterias);
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