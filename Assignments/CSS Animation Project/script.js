document.getElementById('menu-toggle').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.classList.contains('nav-closed')) {
        navMenu.classList.remove('nav-closed');
        navMenu.classList.add('nav-open');
    } else {
        navMenu.classList.remove('nav-open');
        navMenu.classList.add('nav-closed');
    }
});
