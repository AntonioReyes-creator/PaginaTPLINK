$(document).ready(function () {
  $('.gallery-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.gallery-nav'
  });

  $('.gallery-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.gallery-main',
    dots: false,
    focusOnSelect: true,
    vertical: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          vertical: false,
          slidesToShow: 3
        }
      }
    ]
  });
});
