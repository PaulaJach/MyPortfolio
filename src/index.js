import '../src/scss/styles.scss';
import "particles.js";
import 'jquery';


// particlesJS.load(@dom-id, @path-json, @callback (optional))
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});


// open mobile menu
const menuIcon = document.querySelector('.hamburger');
const navbar = document.querySelector('.header__nav--mobile');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
    navbar.classList.add('open');
});


//close nav after click
$(document).ready(function() {
    $(document).click(function(event) {
        const clickover = $(event.target);
        const opened = $(".header__nav--mobile").hasClass("open");
        if (opened === true && !clickover.hasClass("hamburger")) {
            $(".hamburger").click();
        }
    });

});

//Smooth scrolling
$(document).ready(function() {
    $("a.scrollable").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {
                window.location.hash = hash;
            });
        }
    });
});


// change header bg-color after scrolling 
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.header__nav').addClass('solid');
            $('.header__nav--mobile').addClass('solid');
            $('.header__nav--mobile .hamburger .line').css('background-color', '#1d2935');
        } else {
            $('.header__nav').removeClass('solid');
            $('.header__nav--mobile').removeClass('solid');
            $('.header__nav--mobile .hamburger .line').css('background-color', 'white');
        }
    });
});

//lazy loading for images
$('[data-src]').each(function(_, element) {
    element.src = element.dataset.src;
});