const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');

//biar kalo hamburger menu di klik muncul sidebar
hamburgerMenu.addEventListener('click', () => {
    navbarNav.classList.toggle('active');
});

//biar kalo pas buka sidebar trus lu pencet di selain sidebar nnti keclose side bar nya
document.addEventListener('click', function(e) {
    if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})