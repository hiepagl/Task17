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
  slidesToShow: 3,
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

// VALIDATE FORM
var form = document.contactForm;
var isValid = false;

function handleInput(inputName) {
  var errorElement = document.querySelector('#' + inputName + ' + span');

  if (form[inputName].value === "") {
    errorElement.innerText = "『" + inputName + "』を入力してください。";
    isValid = false;
  } else {
    errorElement.innerText = "";
    isValid = true;
  };
}

function handleSubmit() {
  if (!isValid) {
    alert("入力内容を確認してください。")
    document.querySelector(".c-contactForm__formError").classList.add("is-actived");
    document.querySelector("#contactForm").scrollIntoView();
    return false;
  } else {
    document.querySelector(".c-contactForm__formError").classList.remove("is-actived");
    return true;

  }
}
