const botaoMenu = document.querySelector('.cabecalho-menu');
const menu = document.querySelector(".menu-lateral");
const hideMenu = document.querySelector('.menu-link');
const hideMenu2 = document.querySelector('.menu-link2');

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral-ativo')
})

//Esconder menu lateral

const listaMenu = document.querySelectorAll('.menu-link');

listaMenu[0].addEventListener('click', () => {
    menu.classList.toggle('menu-lateral-ativo')
})

listaMenu[1].addEventListener('click', () => {
    menu.classList.toggle('menu-lateral-ativo')
})

listaMenu[2].addEventListener('click', () => {
    menu.classList.toggle('menu-lateral-ativo')
})

listaMenu[3].addEventListener('click', () => {
    menu.classList.toggle('menu-lateral-ativo')
})