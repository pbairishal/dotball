$(".navbar-link-toggle").click(function() {
    $(".navbar-toggle-show").toggle("flex");
});

$(window).scroll(function() {
    if ($(window).scrollTop() >= 50) {
        $('.navbar').addClass("header-bg");
    } else {
        $('.navbar').removeClass("header-bg");
    }
});