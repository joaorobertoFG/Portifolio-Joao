//fade-in
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden, .ap, .top-b');
hiddenElements.forEach((el) => observer.observe(el));

//menu lateral

const botaoMenu = document.querySelector('.cabecalho-menu');
const menu = document.querySelector(".menu-lateral");
const hideMenu = document.querySelector('.menu-link');
const hideMenu2 = document.querySelector('.menu-link2');

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral-ativo')
})

//esconder menu lateral
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