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

})