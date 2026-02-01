const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', togglemenu);

function togglemenu() {
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
}