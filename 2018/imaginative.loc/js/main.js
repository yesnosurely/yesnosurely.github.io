$(".toggler").click(function () {
    $(".topBar").toggle("fast", function () {});
});

$(".menu-toggler").click(function () {
    $("nav").toggle("fast", function () {});
});

$(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: false,
        loop: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 2000,
    });
});

$(".toggle").click(function () {
    $(".topBar").toggle("slow");
});
