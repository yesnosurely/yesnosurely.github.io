$(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
    });
});

$(".menu-toggler").click(function () {
    $("nav").slideToggle("slow");
});

