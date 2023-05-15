var menu = document.getElementById('menu');

function toggleMenu() {
    if(menu.classList.contains('show')) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
}

document.getElementById('menuButton').onclick = showHideMenu;
