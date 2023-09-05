$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });


    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });


    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        if (enderecoDaNovaImagem !== '') {
            const novoItem = $('<li></li>');
            $('<img src="' + enderecoDaNovaImagem + '" />').appendTo(novoItem);
            $(`
                <div class="overlay-imagem-link">
                    <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
                </div>
            `).appendTo(novoItem);
            novoItem.appendTo('#lista-de-imagens');
            $('form').slideUp(); // Oculta o formulário após adicionar a imagem
            $('#endereco-imagem-nova').val(''); // Limpa o campo de entrada
        } else {
            alert('Insira um endereço de imagem válido.');
        }
    });
});
