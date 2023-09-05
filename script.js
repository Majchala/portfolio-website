let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};


// SWITCHING LIGHT/DARK MODE 
const lightModeToggle = document.getElementById('light-mode-toggle');
const body = document.body;

lightModeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
});



