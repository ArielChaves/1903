$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(00)00000-0000'
}),

$('#CEP').mask('0000-000', {
    placeholder: '0000-000'
}),


$('#CPF').mask('000.000.000-00', {
    placeholder: '000.000.000-00'
}),


$('form').validate({
    rules: {
        CPF: {
            required: true,
        },
        
        nome: {
            required: true,
        },
        email: {
            required: true,
        },
        telefone: {
            required: true
        },
        CEP: {
            required: true,
        },
        Endereco: {
            required: true,
        }
    
    },
    submitHandler: function(form) {
        console.log(form)
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if(camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    }
})