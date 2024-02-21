"use strict";

//  trying to fix

const resetarJogo = document.querySelector(".reset");
const btnSortear = document.querySelectorAll(".sortear");
const estadoJogo = document.querySelector(".estadoJogo");
const elementoSorteado = document.querySelector(".elementoSorteado");

let numerosSorteados = [];
let maxNumber = 118;

const resetar = function () {
  const numeros = document.querySelectorAll(".numero");
  numeros.forEach((numero) => numero.classList.remove("sorteado"));
  numerosSorteados = [];
  estadoJogo.textContent = "Novo Jogo";
  elementoSorteado.textContent = "Bem vindo ao Bingo dos Elementos Químicos";
};

resetarJogo.addEventListener("click", resetar);

const sortear = function () {
  let numero = generateUniqueNumber();

  if (numerosSorteados.includes(numero)) {
    return;
  } else {
    let letter = "Z";

    if (letter === undefined) {
      return;
    }
    let index = numero - 1;
    numerosSorteados.push(numero);
    let elemento = elementos_quimicos[index];
    let familia = familiasElementos[numero];
    estadoJogo.textContent = `${familia} - ${numero}`;
    const numeroSorteado = document.querySelector(`.numero.num-${numero}`);
    elementoSorteado.textContent = `${elemento}`;

    console.log(elemento, familia);

    if (numeroSorteado) {
      numeroSorteado.classList.add("sorteado");
    }
  }
};

const generateUniqueNumber = function () {
  let numero;

  do {
    numero = Math.floor(Math.random() * maxNumber) + 1;
  } while (numerosSorteados.includes(numero));

  return numero;
};

btnSortear.forEach((btn) => btn.addEventListener("click", sortear));

const modal = document.querySelector(".modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

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
  "Ogânio - Og",
];

let familiasElementos = {
  1: "Não Metal",
  2: "Gases Nobres",
  3: "Alcalinos",
  4: "Alcalinos Terrosos",
  5: "Semimetais (Boroides)",
  6: "Não Metal",
  7: "Não Metal",
  8: "Não Metal",
  9: "Halogênios",
  10: "Gases Nobres",
  11: "Alcalinos",
  12: "Alcalinos Terrosos",
  13: "Metais do Grupo 13 (Antigos Grupo IIIA)",
  14: "Semimetais (Carbonoides)",
  15: "Não Metal",
  16: "Não Metal",
  17: "Halogênios",
  18: "Gases Nobres",
  19: "Alcalinos",
  20: "Alcalinos Terrosos",
  21: "Metais de Transição",
  22: "Metais de Transição",
  23: "Metais de Transição",
  24: "Metais de Transição",
  25: "Metais de Transição",
  26: "Metais de Transição",
  27: "Metais de Transição",
  28: "Metais de Transição",
  29: "Metais de Transição",
  30: "Metais de Transição",
  31: "Metais do Grupo 13 (Antigos Grupo IIIA)",
  32: "Semimetais (Carbonoides)",
  33: "Semimetais (Carbonoides)",
  34: "Não Metal",
  35: "Halogênios",
  36: "Gases Nobres",
  37: "Alcalinos",
  38: "Alcalinos Terrosos",
  39: "Metais de Transição",
  40: "Metais de Transição",
  41: "Metais de Transição",
  42: "Metais de Transição",
  43: "Metais de Transição",
  44: "Metais de Transição",
  45: "Metais de Transição",
  46: "Metais de Transição",
  47: "Metais de Transição",
  48: "Metais de Transição",
  49: "Metais do Grupo 13 (Antigos Grupo IIIA)",
  50: "Metais de Transição",
  51: "Metal",
  52: "Semimetais (Carbonoides)",
  53: "Halogênios",
  54: "Gases Nobres",
  55: "Alcalinos",
  56: "Alcalinos Terrosos",
  57: "Lantanídeos",
  58: "Lantanídeos",
  59: "Lantanídeos",
  60: "Lantanídeos",
  61: "Lantanídeos",
  62: "Lantanídeos",
  63: "Lantanídeos",
  64: "Lantanídeos",
  65: "Lantanídeos",
  66: "Lantanídeos",
  67: "Lantanídeos",
  68: "Lantanídeos",
  69: "Lantanídeos",
  70: "Lantanídeos",
  71: "Lantanídeos",
  72: "Metais de Transição",
  73: "Metais de Transição",
  74: "Metais de Transição",
  75: "Metais de Transição",
  76: "Metais de Transição",
  77: "Metais de Transição",
  78: "Metais de Transição",
  79: "Metais de Transição",
  80: "Metais de Transição",
  81: "Metais do Grupo 13 (Antigos Grupo IIIA)",
  82: "Metais de Transição",
  83: "Semimetais (Carbonoides)",
  84: "Semimetais (Carbonoides)",
  85: "Halogênios",
  86: "Gases Nobres",
  87: "Alcalinos",
  88: "Alcalinos Terrosos",
  89: "Actinídeos",
  90: "Actinídeos",
  91: "Actinídeos",
  92: "Actinídeos",
  93: "Actinídeos",
  94: "Actinídeos",
  95: "Actinídeos",
  96: "Actinídeos",
  97: "Actinídeos",
  98: "Actinídeos",
  99: "Actinídeos",
  100: "Actinídeos",
  101: "Actinídeos",
  102: "Actinídeos",
  103: "Actinídeos",
  104: "Metais de Transição",
  105: "Metais de Transição",
  106: "Metais de Transição",
  107: "Metais de Transição",
  108: "Metais de Transição",
  109: "Metais de Transição",
  110: "Metais de Transição",
  111: "Metais de Transição",
  112: "Metais de Transição",
  113: "Metais do Grupo 13 (Antigos Grupo IIIA)",
  114: "Metais de Transição",
  115: "Metais de Transição",
  116: "Metais de Transição",
  117: "Metais de Transição",
  118: "Metais de Transição",
};
