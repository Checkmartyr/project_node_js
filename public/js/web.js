const warpper = document.querySelector('.warpper');
const Loginlink = document.querySelector('.login-link');
const Registerlink = document.querySelector('.register-link');
const btnPop = document.querySelector('.btnlogin-popup');
const iconclose = document.querySelector('.icon-close');

Registerlink.addEventListener('click', () => {
    warpper.classList.add('active');
});

Loginlink.addEventListener('click', () => {
    warpper.classList.remove('active');
});

btnPop.addEventListener('click', () => {
    warpper.classList.add('active-popup');
});

iconclose.addEventListener('click', () => {
    warpper.classList.remove('active-popup');
});








let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}




function displayFileName() {
    const fileInput = document.getElementById('fileInput');
    const fileNameSpan = document.getElementById('fileName');

    fileNameSpan.textContent = fileInput.files[0].name;
  }






// Upload