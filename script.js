// let menuIcon = document.getElementById('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     navbar.classList.toggle('bx-x');
//     navbar.classList.toggle('active');  
// }

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});