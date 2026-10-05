
console.log('===== LAB01 - ECMAScript 6 =====');


class VideoGame {
    constructor(marca, nControles, tipoMidia) {
        this.marca = marca;
        this.nControles = nControles;
        this.tipoMidia = tipoMidia;
        this.ligado = false;
    }

    jogar() {
        if (this.ligado) {
            console.log(`Jogando no ${this.marca}!`);
        } else {
            console.log('Não é possível jogar: o videogame está desligado.');
        }
    }

    ligar(estado) {
        this.ligado = estado;
        console.log(this.ligado ? 'Videogame ligado.' : 'Videogame desligado.');
    }

    salvarJogo() {
        if (this.ligado) {
            console.log('Jogo salvo com sucesso!');
        } else {
            console.log('Não é possível salvar: o videogame está desligado.');
        }
    }
}

const playstation = new VideoGame('Sony', 2, 'DVD');
console.log('\nEXERCÍCIO 1');
console.log(playstation);
playstation.ligar(true);
playstation.jogar();
playstation.salvarJogo();


class FuncionariosDoHospital {
    constructor() {}
}

class Medico extends FuncionariosDoHospital {
    #nome;
    #numeroRestantesDeFerias;
    #cpf;

    constructor(nome, cpf) {
        super();
        this.#nome = nome;
        this.#numeroRestantesDeFerias = 20;
        this.#cpf = cpf;
    }

    tirarFerias(num_dias) {
        if (num_dias > 0 && num_dias <= this.#numeroRestantesDeFerias) {
            this.#numeroRestantesDeFerias -= num_dias;
            console.log(`${this.#nome} tirou ${num_dias} dias de férias. Restam ${this.#numeroRestantesDeFerias} dias.`);
        } else {
            console.log('Quantidade de dias de férias inválida.');
        }
    }
}

class Enfermeira extends FuncionariosDoHospital {
    #nome;
    #numeroRestantesDeFerias;
    #certificados;

    constructor(nome) {
        super();
        this.#nome = nome;
        this.#numeroRestantesDeFerias = 20;
        this.#certificados = [];
    }

    tirarFerias(num_dias) {
        if (num_dias > 0 && num_dias <= this.#numeroRestantesDeFerias) {
            this.#numeroRestantesDeFerias -= num_dias;
            console.log(`${this.#nome} tirou ${num_dias} dias de férias. Restam ${this.#numeroRestantesDeFerias} dias.`);
        } else {
            console.log('Quantidade de dias de férias inválida.');
        }
    }

    adicionarCertificado(certificado) {
        this.#certificados.push(certificado);
        console.log(`Certificado "${certificado}" adicionado para ${this.#nome}.`);
    }
}

console.log('\nEXERCÍCIO 2');
const medico = new Medico('Dr. Carlos', '123.456.789-01');
medico.tirarFerias(5);

const enfermeira = new Enfermeira('Ana');
enfermeira.tirarFerias(3);
enfermeira.adicionarCertificado('Primeiros Socorros');


function apresentar(nome, sobrenome) {
    console.log(`Olá ${nome} ${sobrenome}, eu sou uma função!`);
}

const apresentarArrow = (nome, sobrenome) =>
    console.log(`Olá ${nome} ${sobrenome}, eu sou uma função!`);

console.log('\nEXERCÍCIO 3');
apresentar('Matheus', 'Salera');
apresentarArrow('Matheus', 'Salera');


const jogador1 = {
    nome: 'Neymar',
    clube: 'Santos'
};

const jogador2 = {
    nome: 'Vini Jr.',
    clube: 'Real Madrid'
};

function mostrarJogador() {
    console.log(`${this.nome} joga no ${this.clube}.`);
}

const mostrarJogador1 = mostrarJogador.bind(jogador1);
const mostrarJogador2 = mostrarJogador.bind(jogador2);

console.log('\nEXERCÍCIO 4');
mostrarJogador1();
mostrarJogador2();


const processarMensagem = (mensagem, callback) => callback(mensagem);

const juntarStrings = (mensagem) => `*** ${mensagem} ***`;
console.log('\nEXERCÍCIO 5 - A');
console.log(processarMensagem('Atenção: Sistema instável!', juntarStrings));


const contarCaracteres = (mensagem) =>
    `Resumo: A mensagem contém ${mensagem.length} caracteres.`;

console.log('\nEXERCÍCIO 5 - B');
console.log(processarMensagem('123456789012345678901234567890123456789012', contarCaracteres));


const verificarCaixa = (mensagem) => {
    const temMaiuscula = mensagem !== mensagem.toLowerCase();
    const temMinuscula = mensagem !== mensagem.toUpperCase();

    if (temMaiuscula && temMinuscula) {
        return 'Mensagem contém maiúsculas e minúsculas.';
    }
    if (temMaiuscula) {
        return 'Mensagem em caixa alta: tudo em maiúsculas';
    }
    if (temMinuscula) {
        return 'Mensagem em caixa baixa: tudo em minúsculas';
    }
    return 'Mensagem não possui letras.';
};

console.log('\nEXERCÍCIO 5 - C');
console.log(processarMensagem('tudo em minúsculas', verificarCaixa));



class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Nome: ${this.nome} | Idade: ${this.idade}`);
    }
}

console.log('\nEXERCÍCIO 6');
const pessoa = new Pessoa('Matheus', 20);
pessoa.apresentar();
