$(".top__slider").slick({
    infinite: true,    
    speed: 500,
    fade: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    //variableWidth:true,
    //centerMode: true,
    prevArrow: '<button class="top__slider-btn top__slider-btn--prev"><img class="top__slider-arrow" src="./images/prev-arrow.svg" alt="arrow"></button>',
    nextArrow: '<button class="top__slider-btn top__slider-btn--next"><img class="top__slider-arrow" src="./images/next-arrow.svg" alt="arrow"></button>',
    responsive: [      
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode:true,
          variableWidth:true,
          fade:false,
          adaptiveHeight: true,
        }
      }
     
    ]
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
    adaptiveHeight: true,
    responsive: [      
      {
        breakpoint: 1379,
        settings: {
          slidesToShow: 4,         
        }
      },
      {
        breakpoint: 1141,
        settings: {
          slidesToShow: 3,         
        }
      },
      {
        breakpoint: 811,
        settings: {
          slidesToShow: 2,         
        }
      },
      {
        breakpoint: 441,
        settings: {
          slidesToShow: 1,         
        }
      },
    ]
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
  $(".courses__slider").slick({
    infinite:true,
    centerMode: true, 
    variableWidth: true,
    centerPadding: '40px',
    focusOnSelect: true,   
    slidesToShow: 1,   
    slidesToScroll:1, 
    slide:'.courses__slider-item', 
    asNavFor:".courses__dots",
    arrows: false,
    adaptiveHeight: true
  });
  $(".courses__dots").slick({
    infinite:true,      
    slidesToShow: 1,   
    slidesToScroll:1, 
    fade:true,
    asNavFor:".courses__slider",
    centerMode: true,
    focusOnSelect: true,    
    prevArrow: '<button class="courses__dots-btn courses__dots-btn--left"><img class="courses__dots-arrow" src="./images/pagin-arrow-left.svg" alt="arrow"></button>',
    nextArrow: '<button class="courses__dots-btn courses__dots-btn--right"><img class="courses__dots-arrow" src="./images/pagin-arrow-right.svg" alt="arrow"></button>',
  });
  const menuBtn = document.querySelector('.header__menu');
  const navList = document.querySelector('.header__nav');
  const listItem = document.querySelectorAll('.nav__list-item');

  menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    navList.classList.toggle('active');    
  });
  listItem.forEach(function(item){
    item.addEventListener('click', function(){
      navList.classList.remove('active');
      menuBtn.classList.remove('active');
    })
  })
 $(function(){
   new WOW().init();
 });