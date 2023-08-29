const form = document.getElementById('form-atividade');
const imgAprovado = '<img src"./images/aprovado.png" alt="Emoji celebrando"/>'
const imgReprovado = '<img src"./images/reprovado.png" alt="Emoji decepcionado"/>'
const atividades = [];
const notas = [];
const spanAprovado = 'sapan class="resultado aprovado">Aprovado</span';
const spanReprovado = 'sapan class="resultado reprovado">Reprovado</span';
const notaMinima = parsefloat(prompt("Digite a nota mínima:"));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
});

function adicionaLinha() {
    const inputNomeAtividade = documenet.getElementById('nome-atividade');
    const inputNotaAtividade = documenet.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} ja foi inserida`);
    } else {
        atividades.push(inputNomeAtividade);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>'
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length
}



