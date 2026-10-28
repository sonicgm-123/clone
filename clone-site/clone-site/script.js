
const menu = document.querySelector(".menu");
const abrir = document.querySelector(".menu-resp");
const fechar = document.querySelector(".fechar");

// Abre o menu em telas menores
function abrirMenu() {
    menu.classList.add("aberto");
    abrir.setAttribute("aria-expanded", "true");
}

// Fecha o menu
function fecharMenu() {
    menu.classList.remove("aberto");
    abrir.setAttribute("aria-expanded", "false");
}

abrir.addEventListener("click", abrirMenu);
fechar.addEventListener("click", fecharMenu);

// Fecha o menu ao clicar em uma opção
menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", fecharMenu);
});

// Formulário demonstrativo
document.querySelector(".form-contato").addEventListener("submit", function (event) {
    event.preventDefault();

    alert("O formulário ainda não está conectado a um servidor.");
});

document.querySelectorAll("#portfolio .item").forEach(function (card) {
    card.style.cursor = "pointer";

    card.addEventListener("click", function () {
        window.location.href = window.location.pathname;
    });
});
