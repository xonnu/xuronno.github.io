const menuButton = document.querySelector('#menu-button');
const closeButton = document.querySelector('#close-button');
const menu = document.querySelector('.navbar__mobile');
const navbar = document.querySelector('#navbar');
const body = document.body;

const openMenu = () => {
    menu.classList.add('navbar__mobile--open');
    body.style.overflow = 'hidden';
};

const closeMenu = () => {
    menu.classList.remove('navbar__mobile--open');
    body.removeAttribute('style');
};

var previousScrollPosition = window.pageYOffset;
let hideNavbar = () => {
    var currentScrollPosition = window.pageYOffset;
    if (previousScrollPosition > currentScrollPosition) {
        navbar.style.top = '0px';
    } else {
        if (body.hasAttribute('style')) {
            navbar.style.top = '0px';
        } else {
            navbar.style.top = '-50%';
        }
    }
    previousScrollPosition = currentScrollPosition;
};

menuButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
window.addEventListener('scroll', hideNavbar);
