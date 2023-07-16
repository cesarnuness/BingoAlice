const resetarJogo = document.querySelector('.reset');
const btnSortear = document.querySelectorAll('.sortear');
const estadoJogo = document.querySelector('.estadoJogo');
const elementoSorteado = document.querySelector('.elementoSorteado');

let numerosSorteados = [];
let maxNumber = 118;
const resetar = function() {
    const numeros = document.querySelectorAll('.numero');
    numeros.forEach(numero => numero.classList.remove('sorteado'));
    numerosSorteados = [];
    estadoJogo.textContent = 'Novo Jogo';
    elementoSorteado.textContent = 'Bem vindo ao Bingo dos Elementos Químicos';
};

resetarJogo.addEventListener('click', resetar);

const sortear = function() {
let numero = generateUniqueNumber();

    if (numerosSorteados.includes(numero)) {
        return;
    } else {
        let letter = '';
        if ([1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56, 61, 66, 71, 76, 81, 86, 91, 96, 101, 106, 111, 116].includes(numero)) {
            letter = 'B';
        } else if ([2, 7, 12, 17, 22, 27, 32, 37, 42, 47, 52, 57, 62, 67, 72, 77, 82, 87, 92, 97, 102, 107, 112, 117].includes(numero)) {
            letter = 'I';
        } else if ([3, 8, 13, 18, 23, 28, 33, 38, 43, 48, 53, 58, 63, 68, 73, 78, 83, 88, 93, 98, 103, 108, 113, 118].includes(numero)) {
            letter = 'N';
        } else if ([4, 9, 14, 19, 24, 29, 34, 39, 44, 49, 54, 59, 64, 69, 74, 79, 84, 89, 94, 99, 104, 109, 114, 119].includes(numero)) {
            letter = 'G';
        } else if ([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120].includes(numero)) {
            letter = 'O';
        }
        if (letter === undefined) {
            return;

        }

        numerosSorteados.push(numero);
        let elemento = elementos_quimicos[numero -1];
        estadoJogo.textContent = `${letter} - ${numero}`;
        const numeroSorteado = document.querySelector(`.numero.num-${numero}`);
        elementoSorteado.textContent = `${elemento}`;
        if (numeroSorteado) {
            numeroSorteado.classList.add('sorteado');
        }
    }
};

const generateUniqueNumber = function() {
    let numero;
    do {
      numero = Math.floor(Math.random() * maxNumber) + 1;
    } while (numerosSorteados.includes(numero));
    return numero;
  };

btnSortear.forEach(btn => btn.addEventListener('click', sortear));

const elementos_quimicos = [
    "Hidrogênio",
    "Hélio",
    "Lítio",
    "Berílio",
    "Boro",
    "Carbono",
    "Nitrogênio",
    "Oxigênio",
    "Flúor",
    "Neônio",
    "Sódio",
    "Magnésio",
    "Alumínio",
    "Silício",
    "Fósforo",
    "Enxofre",
    "Cloro",
    "Argônio",
    "Potássio",
    "Cálcio",
    "Escândio",
    "Titânio",
    "Vanádio",
    "Cromo",
    "Manganês",
    "Ferro",
    "Cobalto",
    "Níquel",
    "Cobre",
    "Zinco",
    "Gálio",
    "Germânio",
    "Arsênio",
    "Selênio",
    "Bromo",
    "Criptônio",
    "Rubídio",
    "Estrôncio",
    "Ítrio",
    "Zircônio",
    "Nióbio",
    "Molibdênio",
    "Tecnécio",
    "Rutênio",
    "Ródio",
    "Paládio",
    "Prata",
    "Cádmio",
    "Índio",
    "Estanho",
    "Antimônio",
    "Telúrio",
    "Iodo",
    "Xenônio",
    "Césio",
    "Bário",
    "Lantânio",
    "Cério",
    "Praseodímio",
    "Neodímio",
    "Promécio",
    "Samário",
    "Európio",
    "Gadolínio",
    "Térbio",
    "Disprósio",
    "Hólmio",
    "Érbio",
    "Túlio",
    "Itérbio",
    "Lutécio",
    "Háfnio",
    "Tântalo",
    "Tungstênio",
    "Rênio",
    "Ósmio",
    "Irídio",
    "Platina",
    "Ouro",
    "Mercúrio",
    "Tálio",
    "Chumbo",
    "Bismuto",
    "Polônio",
    "Ástato",
    "Rádon",
    "Frâncio",
    "Rádio",
    "Actínio",
    "Tório",
    "Protactínio",
    "Urânio",
    "Neptúnio",
    "Plutônio",
    "Amerício",
    "Cúrio",
    "Berquélio",
    "Califórnio",
    "Einstênio",
    "Férmio",
    "Mendelévio",
    "Nobélio",
    "Laurêncio",
    "Rutherfórdio",
    "Dúbnio",
    "Seabórgio",
    "Bóhrio",
    "Hássio",
    "Meitnério",
    "Darmstádio",
    "Roentgênio",
    "Copernício",
    "Nihônio",
    "Fleróvio",
    "Moscóvio",
    "Livermório",
    "Tenessino",
    "Ogânio"
    ]
    
