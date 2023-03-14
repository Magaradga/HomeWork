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
    dots: true,
    appendDots: $('.auction__dots'),
    waitForAnimate: false,
    slidesToShow: 4,
    responsive:
        [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    draggable: true,
                },
            },
        ]
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


    $('.burger, .overlay, .header__inner a[href^="#"').on('click', function(e) {
      e.preventDefault()
      $('.header__inner').toggleClass('header__inner--open')
      $('.overlay').toggleClass('overlay--show')
      $('.burger').toggleClass('burger--active');
    }) 
    
  

    $('.fmain__contact--span').on('click', function(){
      $('.fmain__contact--list').slideToggle()
  })
  $('.fmain__menu--span').on('click', function(){
    $('.fmain__menu--list').slideToggle()
})
$('.fmain__auto--span').on('click', function(){
  $('.fmain__auto--list').slideToggle()
})

$('.home__top--btn--link--burger').on('click', function(){
  $('.home__top--list--burger').slideToggle()
})


$('a[href^="#"').on('click', function() {
  let href = $(this).attr('href');
  $('html, body').animate({
      scrollTop: $(href).offset().top -300
    }, 1000);
  return false;
});
})

