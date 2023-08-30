const menuIcon = document.getElementById('menu-icon');
const linksList = document.getElementById('links-list');

menuIcon.addEventListener('click', evt => {
    linksList.classList.toggle('links-open');
    if (menuIcon.classList.contains('bi-list')) {
        menuIcon.classList.replace('bi-list', 'bi-x');
    } else {
        menuIcon.classList.replace('bi-x', 'bi-list');
    }
})