// script.js
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon,onclick = () => {
  menuicon.classList.toggle('bx-x')
  navbar.classList.toggle('active');
}
