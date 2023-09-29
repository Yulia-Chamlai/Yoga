$(".top__slider").slick({
    infinite: true,    
    speed: 500,
    fade: true,
    slidesToScroll: 1,
    prevArrow: '<button class="top__slider-btn top__slider-btn--prev"><img class="top__slider-arrow" src="./images/prev-arrow.svg" alt="arrow"></button>',
    nextArrow: '<button class="top__slider-btn top__slider-btn--next"><img class="top__slider-arrow" src="./images/next-arrow.svg" alt="arrow"></button>',
    
  });
  $(".teacher__slider").slick({
    //infinite:true,
    centerMode: true, 
    centerPadding: '40px',
    focusOnSelect: true,   
    slidesToShow: 5,   
    slidesToScroll:1, 
    slide:'.teacher__item', 
    asNavFor:".teacher__dots",
    arrows: false,
    adaptiveHeight: true
  });
  $(".teacher__dots").slick({
    infinite:true,      
    slidesToShow: 1,   
    slidesToScroll:1, 
    fade:true,
    asNavFor:".teacher__slider",
    centerMode: true,
    focusOnSelect: true,    
    prevArrow: '<button class="teacher__dots-btn teacher__dots-btn--left"><img class="teacher__dots-arrow" src="./images/pagin-arrow-left.svg" alt="arrow"></button>',
    nextArrow: '<button class="teacher__dots-btn teacher__dots-btn--right"><img class="teacher__dots-arrow" src="./images/pagin-arrow-right.svg" alt="arrow"></button>',
  });