$(".navbar-link-toggle").click(function() {
    $(".navbar-toggle-show").toggle("flex");
});


var animData = {
    wrapper: document.getElementById('lottie'),
    animType: 'svg',
    loop: true,
    prerender: true,
    rendererSettings: {
        preserveAspectRatio: "xMaxYMax meet",
    },
    autoplay: true,
    path: 'https://cors.io/?https://s3.ap-south-1.amazonaws.com/ipl-2018-webtest/test.json'
};
var anim = bodymovin.loadAnimation(animData);

$(window).scroll(function() {
    if ($(window).scrollTop() >= 50) {
        $('.navbar').addClass("header-bg");
    } else {
        $('.navbar').removeClass("header-bg");
    }
});