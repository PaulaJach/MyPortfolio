import '../src/scss/styles.scss';


import "particles.js";


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });


const menuIcon = document.querySelector('.hamburger');
const navbar = document.querySelector('.header__nav--mobile');
  
menuIcon.addEventListener('click', () => {
  console.log('click')
    navbar.classList.toggle('change');
});