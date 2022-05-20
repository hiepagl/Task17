$('.c-slider__list').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    arrows: false,
});

$('.c-hero__list').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerPadding: '0',
    centerMode: true,
    variableWidth: true,
    arrows: true,
    autoplay: true,
    prevArrow: "<button type='button' class='c-hero__btnLeft'><figure><img src='./assets/images/hero/arrowLeft.png' alt='arrowLeft'></figure></button>",
    nextArrow: "<button type='button' class='c-hero__btnRight'><figure><img src='./assets/images/hero/arrowRight.png' alt='arrowRight'></figure></button>",
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false,
            }
        }
    ]
});

