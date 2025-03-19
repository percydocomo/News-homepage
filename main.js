const menu = document.querySelector('.nav__menu');
const layer = document.querySelector('.nav__layer');
const closeMenu = document.querySelector('.nav__close-menu');
const openMenu = document.querySelector('.nav__open-menu');


openMenu.addEventListener('click', openNav);
closeMenu.addEventListener('click', closeNav);

function openNav() {
    console.log('nav opened');
    menu.style.left = '8em';
    layer.style.left = '0';
}

function closeNav() {
    console.log('nav closed');
    menu.style.left = '100vw';
    layer.style.left = '100vw'; 
}

