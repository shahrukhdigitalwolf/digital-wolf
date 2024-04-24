/* function Navbar() {
var navbar = document.querySelector("header");
 window.addEventListener("scroll",function(){
    navbar.classList.toggle("sticky",window.scrollY>0);
 })
}
Navbar(); */

var $carousel = $('[data-owl-carousel]');
if ($carousel.length) {
    $carousel.each(function (index, el) {
        $(this).owlCarousel($(this).data('owl-carousel'));
    });
}