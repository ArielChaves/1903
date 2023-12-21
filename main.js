function Paciente(nome, idade, endereco, especialidade) {
    this.nome = nome;
    this.idade = idade;
    this.endereco = endereco;
    this.especialidade = especialidade;
}


function Cirurgiao(nome, idade, endereco) {
    Paciente.call(this, nome, idade, endereco, "Cirurgiao");

    this.realizarExameCirurgico = function realizarExameCirugico() {
        console.log(this.nome + " realizou um exame cirurgico.");
    };
}

function Fisioterapeuta(nome, idade, endereco) {
    Paciente.call(this, nome, idade, endereco, "Fisioterapeuta");

    this.realizarExameFisioterapeutico = function realizarExameFisioterapeutico() {
        console.log(this.nome + " realizou um exame fisioterapeutico.");
    };
}

function Ginecologista(nome, idade, endereco) {
    Paciente.call(this, nome, idade, endereco, " Ginecologista");

    this.realizarConsultaGinecologica = function realizarExameGinecoligica() {
        console.log(this.nome + " realizou uma consulta ginecologico.");
    };
}


const paciente1 = new Cirurgiao("Feranado", 7, "Rua A, 165");
const paciente2 = new Fisioterapeuta("Stefani", 3, "Rua B, 789");
const paciente3 = new Ginecologista("Carla", 9, "Rua C, 987");

console.log(paciente1);
console.log(paciente2);
console.log(paciente3);

paciente1.realizarExameCirurgico();
paciente2.realizarExameFisioterapeutico();
paciente3.realizarConsultaGinecologica();
