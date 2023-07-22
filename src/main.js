'use strict';

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
        let elemento = elementos_quimicos[numero - 1];
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

const modal = document.querySelector('.modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

const elementos_quimicos = [
    "Hidrogênio - H",
    "Hélio - He",
    "Lítio - Li",
    "Berílio - Be",
    "Boro - B",
    "Carbono - C",
    "Nitrogênio - N",
    "Oxigênio - O",
    "Flúor - F",
    "Neônio - Ne",
    "Sódio - Na",
    "Magnésio - Mg",
    "Alumínio - Al",
    "Silício - Si",
    "Fósforo - P",
    "Enxofre - S",
    "Cloro - Cl",
    "Argônio - Ar",
    "Potássio - K",
    "Cálcio - Ca",
    "Escândio - Sc",
    "Titânio - Ti",
    "Vanádio - V",
    "Cromo - Cr",
    "Manganês - Mn",
    "Ferro - Fe",
    "Cobalto - Co",
    "Níquel - Ni",
    "Cobre - Cu",
    "Zinco - Zn",
    "Gálio - Ga",
    "Germânio - Ge",
    "Arsênio - As",
    "Selênio - Se",
    "Bromo - Br",
    "Criptônio - Kr",
    "Rubídio - Rb",
    "Estrôncio - Sr",
    "Ítrio - Y",
    "Zircônio - Zr",
    "Nióbio - Nb",
    "Molibdênio - Mo",
    "Tecnécio - Tc",
    "Rutênio - Ru",
    "Ródio - Rh",
    "Paládio - Pd",
    "Prata - Ag",
    "Cádmio - Cd",
    "Índio - In",
    "Estanho - Sn",
    "Antimônio - Sb",
    "Telúrio - Te",
    "Iodo - I",
    "Xenônio - Xe",
    "Césio - Cs",
    "Bário - Ba",
    "Lantânio - La",
    "Cério - Ce",
    "Praseodímio - Pr",
    "Neodímio - Nd",
    "Promécio - Pm",
    "Samário - Sm",
    "Európio - Eu",
    "Gadolínio - Gd",
    "Térbio - Tb",
    "Disprósio - Dy",
    "Hólmio - Ho",
    "Érbio - Er",
    "Túlio - Tm",
    "Itérbio - Yb",
    "Lutécio - Lu",
    "Háfnio - Hf",
    "Tântalo - Ta",
    "Tungstênio - W",
    "Rênio - Re",
    "Ósmio - Os",
    "Irídio - Ir",
    "Platina - Pt",
    "Ouro - Au",
    "Mercúrio - Hg",
    "Tálio - Tl",
    "Chumbo - Pb",
    "Bismuto - Bi",
    "Polônio - Po",
    "Ástato - At",
    "Rádon - Rn",
    "Frâncio - Fr",
    "Rádio - Ra",
    "Actínio - Ac",
    "Tório - Th",
    "Protactínio - Pa",
    "Urânio - U",
    "Neptúnio - Np",
    "Plutônio - Pu",
    "Amerício - Am",
    "Cúrio - Cm",
    "Berquélio - Bk",
    "Califórnio - Cf",
    "Einstênio - Es",
    "Férmio - Fm",
    "Mendelévio - Md",
    "Nobélio - No",
    "Laurêncio - Lr",
    "Rutherfórdio - Rf",
    "Dúbnio - Db",
    "Seabórgio - Sg",
    "Bóhrio - Bh",
    "Hássio - Hs",
    "Meitnério - Mt",
    "Darmstádio - Ds",
    "Roentgênio - Rg",
    "Copernício - Cn",
    "Nihônio - Nh",
    "Fleróvio - Fl",
    "Moscóvio - Mc",
    "Livermório - Lv",
    "Tenessino - Ts",
    "Ogânio - Og"
];
