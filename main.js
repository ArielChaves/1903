const form = document.getElementById('form');
const numeroA = document.getElementById("A");
const numeroB = document.getElementById("B");
const campoA = numeroA;
const campoB = numeroB;
let formEValido = false;

function validaCampo(campoA, campoB){
    return campoB > campoA;
}
form.addEventListener('submit', function(e){
    e.preventDefault();

    const valorDoInputA = parseFloat(numeroA.value);
    const valorDoInputB = parseFloat(numeroB.value);
    const mensagemErro = `Resultado incorreto o valor de B: ${campoB.value} é inferior ao valor de A: ${campoA.value}.`;
    const mensagemSucesso = `Resultado certo o valor de B: ${campoB.value} é superior ao valor de A: ${campoA.value}. `;

    formEValido = validaCampo(valorDoInputA, valorDoInputB);
    if (formEValido == true){
        const containerMensagemSucesso = document.querySelector('.message-sucess');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        campoA.value = '';
        campoB.value = '';
    }else{
        if (!formEValido){
            const containerMensagemErro = document.querySelector('.message-error');
            containerMensagemErro.innerHTML = mensagemErro;
            containerMensagemErro.style.display = 'block';
        };
    };
});
