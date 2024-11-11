//togle class active hamburger menu
const navbarNav = document.querySelector
('.navbar-nav');

//ketika hamburger menu diklik akan menambah class active pada div navbar-nav
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

// togle class active search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// toggle active keranjang
const shoppingCart = document.querySelector('.shopping-cart');

//ketika hamburger menu diklik akan menambah class active pada div navbar-nav
document.querySelector('#shopping-cart-button')
.onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};

//klik diluar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function(e) {
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if(!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});

// modal box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButttons = document.querySelectorAll('.item-detail-button');

itemDetailButttons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    
    };    
})

document.querySelector('#item-detail-modal').onclick = (e) => {
    itemDetailModal.classList.toggle('active');
    e.preventDefault();

}

// klik tombol close 
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
};

// klik diluar modal container
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
};