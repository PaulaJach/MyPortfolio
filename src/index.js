import '../src/scss/styles.scss';
import "particles.js";
import 'jquery';





/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });


const menuIcon = document.querySelector('.hamburger');
const navbar = document.querySelector('.header__nav--mobile');
  
menuIcon.addEventListener('click', () => {
  console.log('click')
    navbar.classList.toggle('change');
    menuIcon.classList.add('open');
});

//Smooth scrolling

$(document).ready(function() {
  $("a.scrollable").on('click', function(event) {
      if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 1000, function() {
              window.location.hash = hash;
          });
      }
  });
});

// change header after scrolling 

$(document).ready(function() {
  $(window).scroll(function() {
      if ($(this).scrollTop() > 500) {
        $('.header__nav').addClass('solid');
        $('.header__nav--mobile').addClass('solid');
      } else {
        $('.header__nav').removeClass('solid');
        $('.header__nav--mobile').removeClass('solid');
      }
  });
});
