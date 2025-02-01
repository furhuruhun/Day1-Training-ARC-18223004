const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
const searchbut = document.querySelector('#search-button');

// Toggle class
//biar kalo hamburger menu di klik muncul sidebar
hamburgerMenu.addEventListener('click', () => {
    navbarNav.classList.toggle('active');
});

//buat searchform
document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}

//biar kalo pas buka sidebar trus lu pencet di selain sidebar nnti keclose side bar nya
document.addEventListener('click', function(e) {
    //biar kalo pas buka sidebar trus lu pencet di selain sidebar nnti keclose side bar nya
    if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    //biar searchbutton kalo di klik di luar itu ketutup
    if(!searchbut.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
})