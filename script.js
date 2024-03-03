$(document).ready(function () {
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav"
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    centerMode: true,
    focusOnSelect: true,
    arrows: true
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    mouseDrag: true,
    touchDrag: true,

    pullDrag: true,

    responsive: {
      0: {
        items: 2

      }


    }
  })
});


