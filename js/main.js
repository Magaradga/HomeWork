$(function () {
  $('.home__slader').slick({
    arrows:false,
    dots: false,
    waitForAnimate: false,
    slidesToShow: 1,
  })
  $('.home__prev').on('click', function (e) {
    e.preventDefault()
    $('.home__slader').slick('slickPrev')
  })
  $('.home__next').on('click', function (e) {
    e.preventDefault()
    $('.home__slader').slick('slickNext')
  })

  $('.auction__slader').slick({
    arrows:false,
    dots: false,
    waitForAnimate: false,
    slidesToShow: 4,
  })
  $('.auction__prev').on('click', function (e) {
    e.preventDefault()
    $('.auction__slader').slick('slickPrev')
  })
  $('.auction__next').on('click', function (e) {
    e.preventDefault()
    $('.auction__slader').slick('slickNext')
  })

  $('.questions__link').on('click', function(e){
    e.preventDefault()
    if ($(this).hasClass('questions__link--active')) {
        $(this).removeClass('questions__link--active')
        $(this).children('.questions__text').slideUp()
    } else {
        $('.questions__link').removeClass('questions__link--active')
        $('.questions__text').slideUp()
        $(this).addClass('questions__link--active')
        $(this).children('.questions__text').slideDown()
    }
})

$(document).ready(function() {
  $(".text__skroll").customScrollbar();
});

	$('.selection__form--selection, .selection__row').styler({
  });

  $('.burger').on('click', function(e) {
    e.preventDefault()
    $('.burger').toggleClass('burger--active');
  }) 



    $('.burger, .overlay, .header__inner a').on('click', function(e) {
      e.preventDefault()
      $('.header__inner').toggleClass('header__inner--open')
      $('.overlay').toggleClass('overlay--show')
    }) 
    
  
})

