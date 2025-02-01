const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
const searchbut = document.querySelector('#search-button');
const cartbut = document.querySelector('.shopping-cart');
const shopcartbut = document.querySelector('#shopping-cart-button');

//gw bingung dah optimasiinnya gimana ;(
const itemdetailmodalA = document.querySelector('#item-detail-modal-A');  //ID pake #
const itemdetailmodalB = document.querySelector('#item-detail-modal-B');  //ID pake #
const itemdetailmodalC = document.querySelector('#item-detail-modal-C');  //ID pake #
const itemdetailbutA = document.querySelector('.item-detail-button-A');  //class pake . (kayak css aja)
const itemdetailbutB = document.querySelector('.item-detail-button-B');  //class pake . (kayak css aja)
const itemdetailbutC = document.querySelector('.item-detail-button-C');  //class pake . (kayak css aja)
const modalA = document.querySelector('#item-detail-modal-A');
const modalB = document.querySelector('#item-detail-modal-B');
const modalC = document.querySelector('#item-detail-modal-C');

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

//untuk shopping cart
document.querySelector('#shopping-cart-button').onclick = (e) => {
    cartbut.classList.toggle('active');
    e.preventDefault()
};

//modal box
itemdetailbutA.onclick = (e) => {
    itemdetailmodalA.style.display = 'flex';
    e.preventDefault();
};

itemdetailbutB.onclick = (e) => {
    itemdetailmodalB.style.display = 'flex';
    e.preventDefault();
};

itemdetailbutC.onclick = (e) => {
    itemdetailmodalC.style.display = 'flex';
    e.preventDefault();
};

// tombol close modal box 
// klik icon
document.querySelector('.modal .close-icon-A').onclick = (e) => {
    itemdetailmodalA.style.display = 'none';
    e.preventDefault();
};

document.querySelector('.modal .close-icon-B').onclick = (e) => {
    itemdetailmodalB.style.display = 'none';
    e.preventDefault();
};

document.querySelector('.modal .close-icon-C').onclick = (e) => {
    itemdetailmodalC.style.display = 'none';
    e.preventDefault();
};

// klik di sekitar

window.onclick = (e) => {
    if (e.target === modalA) {
        modalA.style.display = 'none';
    } else if (e.target === modalB) {
        modalB.style.display = 'none';
    } else if (e.target === modalC) {
        modalC.style.display = 'none';
    }
};


//biar kalo pas buka sidebar trus lu pencet di selain sidebar nnti keclose side bar nya
document.addEventListener('click', function(e) {
    //biar kalo pas buka sidebar trus lu pencet di selain sidebar nnti keclose side bar nya
    if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    //biar searchbutton kalo di klik di luar itu ketutup
    if(!searchBox.contains(e.target) && !searchbut.contains(e.target)) {
        searchForm.classList.remove('active');
    }

    //biar cartbutton kalo di klik di luar itu ketutup
    if(!shopcartbut.contains(e.target) && !cartbut.contains(e.target)) {
        cartbut.classList.remove('active');
    }
})