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

const hiddenElements = document.querySelectorAll('.hidden, .ap');
hiddenElements.forEach((el) => observer.observe(el));

//menu lateral

const botaoMenu = document.querySelector('.cabecalho-menu')
const menu = document.querySelector(".menu-lateral")

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral-ativo')
})