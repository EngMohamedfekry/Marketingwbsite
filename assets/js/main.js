
// loading page
window.addEventListener('load', function () {
    $(window).ready(function () {
        $(".loader").fadeOut(2200, function () {
            $("body").css("overflow", "auto");
            $(".loading-spiner").fadeOut(1500);
        });
    });
})

// AOS ANIMATION
AOS.init({
    disable: 'mobile',
    duration: 800,
    anchorPlacement: 'center-bottom'
});


// SMOOTHSCROLL NAVBAR ANIMATION
$(function () {
    $('.navbar a, .hero-scroll a').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
    });
});

