// Эта запись для того чтобы всё сначала обрабатывалось в index.html, сначала там всё выполнится, а потом всё то что в  $(function(){}) ,  по-старому --  document.ready

$(function () {

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true

    });

    $('.product-slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false
    });


    var mixer = mixitup('.products__inner-box');


});


