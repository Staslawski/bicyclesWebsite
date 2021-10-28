$(".wrapper").addClass("loaded");

$(".icon-menu").click(function(event) {
    $(this).toggleClass("active");
    $(".menu__body").toggleClass("active");
    $("body").toggleClass("lock");
});



function ibg(){
    $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0){
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
    });
}

ibg();



$(document).ready(function(){
    $('.slider__body').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        autoplaySpeed: 3000,
        nextArrow: '<button type = "button" class="slick-next"></button>',
        prevArrow: '<button type = "button" class="slick-prev"></button>',
        accessibility: false,
        adaptiveHeight: true,
        responsive: [
            {breakpoint: 768, settings: {}}
        ]
    });
});





