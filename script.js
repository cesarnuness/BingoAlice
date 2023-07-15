const resetarJogo = document.querySelector('.reset');
const btnSortear = document.querySelectorAll('.sortear');
const estadoJogo = document.querySelector('.estadoJogo');

let numerosSorteados = [];

const resetar = function() {
    const numeros = document.querySelectorAll('.numero');
    numeros.forEach(numero => numero.classList.remove('sorteado'));
    numerosSorteados = [];
    estadoJogo.textContent = 'Novo Jogo';
};

resetarJogo.addEventListener('click', resetar);

const sortear = function() {
    let numero = Math.floor(Math.random() * 119);

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
        numerosSorteados.push(numero);

        estadoJogo.textContent = `${letter} - ${numero}`;
        const numeroSorteado = document.querySelector(`.numero.num-${numero}`);
        if (numeroSorteado) {
            numeroSorteado.classList.add('sorteado');
        }
    }
};

btnSortear.forEach(btn => btn.addEventListener('click', sortear));
