$(document).ready(function() {
    $(".home-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        navText: [
            '<i class="fas fa-long-arrow-alt-left"></i>',
            '<i class="fas fa-long-arrow-alt-right"></i>'
        ],
        autoplayTimeout: 3000
    });
});

$(document).ready(function() {
    $(".hot-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        navText: [
            '<i class="fas fa-long-arrow-alt-left"></i>',
            '<i class="fas fa-long-arrow-alt-right"></i>'
        ],
        autoplayTimeout: 4000
    });
});

$(document).ready(function() {
    $(".kids-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        navText: [
            '<i class="fas fa-long-arrow-alt-left"></i>',
            '<i class="fas fa-long-arrow-alt-right"></i>'
        ],
        autoplayTimeout: 5000
    });
});
