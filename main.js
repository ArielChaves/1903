$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li><li');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendto(novoItem);
        $(`
        <div class="overlay-imagem-link">
                a href= "${enderecoDaNovaImagem}" target "_blanck" tittle="Ver imagem em tamanho real
                    Ver imagem em tamanho real
                <a>
                <div>
        `).appendto(novoItem);
        $(novoItem).appendTo('ul');
    })
})

