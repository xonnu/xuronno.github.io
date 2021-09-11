const menuButton = document.querySelector('#menu-button');
const closeButton = document.querySelector('#close-button');
const menu = document.querySelector('.navbar__mobile');
const openMenu = () => {
    menu.classList.add('navbar__mobile--open');
}

const closeMenu = () => {
    menu.classList.remove('navbar__mobile--open');
}

menuButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);