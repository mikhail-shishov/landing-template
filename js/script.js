$(document).ready(function () {
  const swiper = new Swiper(".object-slider-1", {
    loop: true,
    centeredSlides: true,
    watchSlidesVisibility: true,
    slidesPerView: 1.5,
    spaceBetween: 150,
    slideToClickedSlide: true,
    speed: 600,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      860: {
        slidesPerView: 1.7,
      },
      1280: {
        slidesPerView: 1.5,
      },
      1680: {
        slidesPerView: 1.95,
      },
    },

    // If we need pagination
    pagination: {
      el: ".object-pagination-1",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".object-next-1",
      prevEl: ".object-prev-1",
    },
  });
  const swiper2 = new Swiper(".object-slider-2", {
    loop: true,
    centeredSlides: true,
    watchSlidesVisibility: true,
    slidesPerView: 1.5,
    spaceBetween: 150,
    slideToClickedSlide: true,
    speed: 600,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      860: {
        slidesPerView: 1.7,
      },
      1280: {
        slidesPerView: 1.5,
      },
      1680: {
        slidesPerView: 1.95,
      },
    },

    // If we need pagination
    pagination: {
      el: ".object-pagination-2",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".object-next-2",
      prevEl: ".object-prev-2",
    },
  });
  const swiper3 = new Swiper(".object-slider-3", {
    loop: true,
    centeredSlides: true,
    watchSlidesVisibility: true,
    slidesPerView: 1.5,
    spaceBetween: 150,
    slideToClickedSlide: true,
    speed: 600,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      860: {
        slidesPerView: 1.7,
      },
      1280: {
        slidesPerView: 1.5,
      },
      1680: {
        slidesPerView: 1.95,
      },
    },

    // If we need pagination
    pagination: {
      el: ".object-pagination-3",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".object-next-3",
      prevEl: ".object-prev-3",
    },
  });
  const swiper4 = new Swiper(".object-slider-4", {
    loop: true,
    centeredSlides: true,
    watchSlidesVisibility: true,
    slidesPerView: 1.5,
    spaceBetween: 150,
    slideToClickedSlide: true,
    speed: 600,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      860: {
        slidesPerView: 1.7,
      },
      1280: {
        slidesPerView: 1.5,
      },
      1680: {
        slidesPerView: 1.95,
      },
    },

    // If we need pagination
    pagination: {
      el: ".object-pagination-4",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".object-next-4",
      prevEl: ".object-prev-4",
    },
  });
  const swiper5 = new Swiper(".object-slider-5", {
    loop: true,
    centeredSlides: true,
    watchSlidesVisibility: true,
    slidesPerView: 1.5,
    spaceBetween: 150,
    slideToClickedSlide: true,
    speed: 600,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      860: {
        slidesPerView: 1.7,
      },
      1280: {
        slidesPerView: 1.5,
      },
      1680: {
        slidesPerView: 1.95,
      },
    },

    // If we need pagination
    pagination: {
      el: ".object-pagination-5",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".object-next-5",
      prevEl: ".object-prev-5",
    },
  });
  const swiper6 = new Swiper(".slider3", {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination-slider3",
      clickable: true
    },
    speed: 600
  });
  var houseNavSwiper = new Swiper(".slider2", {
    observer: true,
    observeParents: true,
    slidesPerView: 5.5,
    slideToClickedSlide: true,
    slidesOffsetBefore: 180,
    initialSlide: 0,
    loop: true,
    loopedSlides: 50,
    speed: 600,
    allowTouchMove: false,
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        slidesOffsetBefore: 50,
      },
      340: {
        slidesPerView: 1.5,
        slidesOffsetBefore: 55,
      },
      360: {
        slidesPerView: 1.5,
        slidesOffsetBefore: 60,
      },
      380: {
        slidesPerView: 1.5,
        slidesOffsetBefore: 65,
      },
      400: {
        slidesPerView: 1.5,
        slidesOffsetBefore: 70,
      },
      420: {
        slidesPerView: 1.5,
        slidesOffsetBefore: 75,
      },
      440: {
        slidesPerView: 3,
        slidesOffsetBefore: 100,
      },
      767: {
        slidesPerView: 4,
        slidesOffsetBefore: 180,
      },
      1560: {
        slidesPerView: 5.5,
      },
    },
  });
  var houseMainSwiper = new Swiper(".house-main-slider", {
    observer: true,
    observeParents: true,
    loop: true,
    speed: 600,
    // попытка исправить проблему на мобильных ниже
    loopedSlides: $(".house-main-slider .swiper-wrapper .swiper-slide").length,
    thumbs: {
      swiper: houseNavSwiper,
    },
    navigation: {
      nextEl: ".swiper-button-next-house",
      prevEl: ".swiper-button-prev-house",
    },
  });
});

$(".object-list-tags .white_bordered_btn").click(function (e) {
  e.preventDefault(),
    $(this).closest(".object-list-tags").toggleClass("object-list-tags-opened"),
    $(this).text(function (e, i) {
      return "показать все" === i ? "скрыть" : "показать все";
    });
});

$(".form_button_fade,.footer_main_questions_link").click(function () {
  $(".form_body").fadeIn();
  $("html").addClass("lock");
});
$(document).mouseup(function (e) {
  var popup = $(".form_content");
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $(".form_body").fadeOut();
    $("html").removeClass("lock");
  }
});
