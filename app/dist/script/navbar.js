const menuButton = document.querySelector('#menu-button');
const closeButton = document.querySelector('#close-button');
const menu = document.querySelector('.navbar__mobile');
const body = document.body;
const openMenu = () => {
    menu.classList.add('navbar__mobile--open');
    body.style.overflow = 'hidden';
}

const closeMenu = () => {
    menu.classList.remove('navbar__mobile--open');
    body.removeAttribute('style');
}

menuButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);