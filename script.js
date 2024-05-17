var tabelaON = false;
var ContadorAlunos = 1;
const Tabela = document.querySelector('table');
const TheadTbody = Tabela.querySelectorAll('thead, tbody');

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
        let listaAuxiliar = [];
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
        let listaAuxiliar = [];
        for (let iterador in ListaMaterias){
            if (ListaMaterias[iterador] != CheckMatematica.value){
                listaAuxiliar.push(ListaMaterias[iterador]);
            }
        }
        ListaMaterias = listaAuxiliar;
    }
})
CheckHistoria.addEventListener('change', () => {
    if(CheckHistoria.checked) {
        ListaMaterias.push(CheckHistoria.value);
    }
    else {
        let listaAuxiliar = [];
        for (let iterador in ListaMaterias){
            if (ListaMaterias[iterador] != CheckHistoria.value){
                listaAuxiliar.push(ListaMaterias[iterador]);
            }
        }
        ListaMaterias = listaAuxiliar;
    }
})
CheckGeografia.addEventListener('change', () => {
    if(CheckGeografia.checked) {
        ListaMaterias.push(CheckGeografia.value);
    }
    else {
        let listaAuxiliar = [];
        for (let iterador in ListaMaterias){
            if (ListaMaterias[iterador] != CheckGeografia.value){
                listaAuxiliar.push(ListaMaterias[iterador]);
            }
        }
        ListaMaterias = listaAuxiliar;
    }
})
CheckCiencias.addEventListener('change', () => {
    if(CheckCiencias.checked) {
        ListaMaterias.push(CheckCiencias.value);
    }
    else {
        let listaAuxiliar = [];
        for (let iterador in ListaMaterias){
            if (ListaMaterias[iterador] != CheckCiencias.value){
                listaAuxiliar.push(ListaMaterias[iterador]);
            }
        }
        ListaMaterias = listaAuxiliar;
    }
})
CheckEFisica.addEventListener('change', () => {
    if(CheckEFisica.checked) {
        ListaMaterias.push(CheckEFisica.value);
    }
    else {
        let listaAuxiliar = []; 
        for (let iterador in ListaMaterias){
            if (ListaMaterias[iterador] != CheckEFisica.value){
                listaAuxiliar.push(ListaMaterias[iterador]);
            }
        }
        ListaMaterias = listaAuxiliar;
    }
})

function ExcluirAluno(index) {
    RowsList = document.querySelectorAll('tr');
    TheadTbody[1].removeChild(RowsList[index]);
    ContadorAlunos --;
    console.log(TheadTbody[1].children);
    return GerarTabela();
}

function VerificarNotas() {
    RowsList = TheadTbody[1].querySelectorAll('tr');

    let notas;
    let dadosAluno;
    for(let i = 0; i <= RowsList.length - 1; i++){
        notas = [];
        dadosAluno = RowsList[i].querySelectorAll('input');
        for (let j = 0; j <= ListaMaterias.length - 1; j++){
            console.log('FUNFA')
            notas.push(dadosAluno[j + 1].valueAsNumber);
        }

        mediaAluno = 0;

        for (let n = 0; n <= notas.length - 1; n++){
            mediaAluno += notas[n];
        }
        if (mediaAluno > 60){
            dadosAluno[dadosAluno.length - 1].value = "APROVADO";
        }
        else if (mediaAluno > 40) {
            dadosAluno[dadosAluno.length - 1].value = "RECUPERADO";
        }
        else {
            dadosAluno[dadosAluno.length - 1].value = "REPROVADO";
        }
    }
}

function GerarTabela() {
    if (tabelaON == true) {
        RowsList = document.querySelectorAll('tr');

        TheadTbody[0].removeChild(RowsList[0]);

        for (let x = 1; x <= RowsList.length - 1; x++){
            TheadTbody[1].removeChild(RowsList[x]);
        }
        RowsList = document.querySelectorAll('tr');

        let NovaLinha = document.createElement('tr');
        TheadTbody[0].appendChild(NovaLinha);
    }
    else {
        let NovaLinha = document.createElement('tr');
        TheadTbody[0].appendChild(NovaLinha);
    }

    RowsList = document.querySelectorAll('tr');

    let colunaID = document.createElement('th');
    colunaID.innerText = "ID";
    RowsList[0].appendChild(colunaID);

    let colunaNome = document.createElement('th')
    colunaNome.innerText = "Nome";
    RowsList[0].appendChild(colunaNome);

    let colunaNota;
    for (let iterador = 0; iterador <= ListaMaterias.length - 1; iterador++){
        if(ListaMaterias[0] != undefined){
            colunaNota = document.createElement('th');
            colunaNota.innerText = ListaMaterias[iterador];
            
            RowsList[0].appendChild(colunaNota);
            }
        }

    let colunaSituacao = document.createElement('th');
    colunaSituacao.innerText = "Situação";
    RowsList[0].appendChild(colunaSituacao);

    let colunaExcluir = document.createElement('th');
    RowsList[0].appendChild(colunaExcluir);

    for (let iterador = 1; iterador <= ContadorAlunos; iterador++){

        NovaLinha = document.createElement('tr');
        TheadTbody[1].appendChild(NovaLinha);
        RowsList = document.querySelectorAll('tr');

        let colunaID = document.createElement('td');
        colunaID.innerText = iterador;

        RowsList[iterador].appendChild(colunaID);
    
        let colunaNome = document.createElement('td');
        let novoInput = document.createElement('input');
        novoInput.setAttribute('type', 'text');
        RowsList[iterador].appendChild(colunaNome);
        colunaNome.appendChild(novoInput);
    
        let colunaNota;
        for (let x = 0; x <= ListaMaterias.length - 1; x++){
            if(ListaMaterias[0] != undefined){
                colunaNota = document.createElement('td');
                novoInput = document.createElement('input');
                novoInput.setAttribute('type', 'number');
        
                RowsList[iterador].appendChild(colunaNota);
                colunaNota.appendChild(novoInput);
            }
        }
    
        let colunaSituacao = document.createElement('td');
        novoInput = document.createElement('input');
        novoInput.setAttribute('type', 'output');

        RowsList[iterador].appendChild(colunaSituacao);
        colunaSituacao.appendChild(novoInput);
    
        let colunaExcluir = document.createElement('td');
        let novoButton = document.createElement('button');
        novoButton.setAttribute('onclick', `ExcluirAluno(${RowsList.length - 1})`);
        novoButton.innerHTML = 'Excluir';

        RowsList[iterador].appendChild(colunaExcluir);
        colunaExcluir.appendChild(novoButton);
    }
    tabelaON = true;
}

function AdicionarAluno() {
    ContadorAlunos++;

    if (tabelaON == false){
        alert("Por Favor gere uma tabela primeiro.");
    }
    else {
        RowsList = document.querySelectorAll('tr');

        let colunaId = document.createElement('td');
        let NovaLinha = document.createElement('tr');

        colunaId.innerText = ContadorAlunos;

        TheadTbody[1].appendChild(NovaLinha);
        NovaLinha.appendChild(colunaId);

        let colunaNome = document.createElement('td')
        let novoInput = document.createElement('input');
        novoInput.setAttribute('type', 'text');

        TheadTbody[1].appendChild(NovaLinha);
        NovaLinha.appendChild(colunaNome);
        colunaNome.appendChild(novoInput);

        let colunaNota;

        for (let iterador = 0; iterador < ListaMaterias.length; iterador ++){
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
        novoButton.setAttribute('onclick', `ExcluirAluno(${RowsList.length -1})`);
        novoButton.innerText = "Excluir";

        NovaLinha.appendChild(colunaExcluir);
        colunaExcluir.appendChild(novoButton);
    }
}