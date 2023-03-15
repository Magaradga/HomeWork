$(function () {

    var mixer = mixitup('.directions_list');

    $('.directions_filter-btn').on('click', function () {
        $('.directions_filter-btn').removeClass('directions_filter-btn--active')
        $(this).addClass('directions_filter-btn--active')
    })

    $('.team_slider').slick({
        arrows:false,
        slidesToShow: 4, // сколько изображений показывать одновременно
        infinite: true,
        draggable: false,
        waitForAnimate: false,
        responsive:
        [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    draggable: true,
                },
            },
        ]
    })
    $('.team_slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team_slider').slick('slickPrev')
    })
    $('.team_slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team_slider').slick('slickNext')
    })
    

    $('.testimonials_slader').slick({
        arrows:false,
        dots: true,
        appendDots: $('.testimonials_dots'),
        waitForAnimate: false,
    })
    $('.testimonials_prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials_slader').slick('slickPrev')
    })
    $('.testimonials_next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials_slader').slick('slickNext')
    })

    
    $('.program_acc-link').on('click', function(e){
        e.preventDefault()
        if ($(this).hasClass('program_acc-link--active')) {
            $(this).removeClass('program_acc-link--active')
            $(this).children('.program_acc-text').slideUp()
        } else {
            $('.program_acc-link').removeClass('program_acc-link--active')
            $('.program_acc-text').slideUp()
            $(this).addClass('program_acc-link--active')
            $(this).children('.program_acc-text').slideDown()
        }
    })


    $(".header_nav-list a, .header_top-btn, .footer_go-top, .header_content-btn, .about_btn, .footer_go-top, .footer_top-list a").on("click", function (e) {
        e.preventDefault()
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000)
    })

    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header_top').hasClass('header_top-open') === false)  {
            $('.burger').addClass('burger-follow')
        } else {
            $('.burger').removeClass('burger-follow')
        }
    }, 0);
    $('.burger, .overlay, .header_top a').on('click', function(e) {
        e.preventDefault()
        $('.header_top').toggleClass('header_top-open')
        $('.overlay').toggleClass('overlay-show')
    }) 

    $('.footer_top-titel-skide').on('click', function(){
        $(this).next().slideToggle()
    })

    
})
