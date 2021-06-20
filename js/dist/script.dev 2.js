"use strict";

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

function initSwipers() {
  new Swiper(".slider1", {
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1"
    },
    autoplay: {
      delay: 7000
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    speed: 600,
    initialSlide: 1
  });
  new Swiper(".slider2", {
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2"
    },
    slidesPerView: 5.5,
    slideToClickedSlide: true,
    slidesOffsetBefore: 180,
    initialSlide: 0,
    loop: true,
    speed: 600,
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        centeredSlides: true,
        slidesOffsetBefore: 0
      },
      480: {
        slidesPerView: 3,
        slidesOffsetBefore: 100,
        centeredSlides: false
      },
      767: {
        slidesPerView: 4,
        slidesOffsetBefore: 180
      },
      1560: {
        slidesPerView: 5.5
      }
    }
  });
  new Swiper(".slider3", {
    pagination: {
      el: ".swiper-pagination-slider3",
      clickable: true
    },
    speed: 600
  });
  new Swiper(".slider4", {
    pagination: {
      el: ".swiper-pagination-slider4",
      clickable: true
    },
    speed: 600,
    navigation: {
      nextEl: ".swiper-button-next4",
      prevEl: ".swiper-button-prev4"
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      576: {
        slidesPerView: 1.3,
        spaceBetween: 30
      },
      1100: {
        slidesPerView: 1.2
      },
      1560: {
        slidesPerView: 1.4
      }
    }
  });
  new Swiper(".slider5", {
    slidesPerView: 3,
    pagination: {
      el: ".swiper-pagination-slider5",
      clickable: true
    },
    speed: 600,
    breakpoints: {
      320: {
        spaceBetween: 20,
        slidesPerView: 2
      },
      768: {
        spaceBetween: 50,
        slidesPerView: 3
      },
      1100: {
        spaceBetween: 0
      },
      1560: {
        spaceBetween: 0
      }
    }
  });
  new Swiper(".search-top-slider", {
    navigation: {
      nextEl: ".swiper-button-next6",
      prevEl: ".swiper-button-prev6"
    },
    pagination: {
      el: ".swiper-pagination-slider6",
      clickable: true
    },
    slidesPerView: 1.5,
    slidesOffsetBefore: 180,
    initialSlide: 0,
    loop: true,
    speed: 600,
    breakpoints: {
      320: {
        slidesPerView: 1,
        centeredSlides: true,
        slidesOffsetBefore: 0
      },
      767: {
        slidesPerView: 1,
        slidesOffsetBefore: 0
      },
      860: {
        slidesPerView: 1.5,
        slidesOffsetBefore: 75,
        centeredSlides: false
      },
      920: {
        slidesPerView: 1.4,
        slidesOffsetBefore: 75
      },
      1280: {
        slidesPerView: 1.7,
        slidesOffsetBefore: 180
      },
      1680: {
        slidesPerView: 1.5
      },
      slidesPerView: 1,
      slideToClickedSlide: true,
      initialSlide: 0,
      loop: true,
      speed: 600
    }
  });
  new Swiper(".slider11", {
    navigation: {
      nextEl: ".swiper-button-next11",
      prevEl: ".swiper-button-prev11"
    },
    slidesPerView: 1,
    slideToClickedSlide: true,
    initialSlide: 0,
    loop: true,
    speed: 600
  });
  new Swiper(".slider12", {
    navigation: {
      nextEl: ".swiper-button-next12",
      prevEl: ".swiper-button-prev12"
    },
    slidesPerView: 1,
    slideToClickedSlide: true,
    initialSlide: 0,
    loop: true,
    speed: 600
  });
  new Swiper(".slider13", {
    navigation: {
      nextEl: ".swiper-button-next13",
      prevEl: ".swiper-button-prev13"
    },
    slidesPerView: 1,
    slideToClickedSlide: true,
    initialSlide: 0,
    loop: true,
    speed: 600
  });
  new Swiper(".mass-media-slider", {
    navigation: {
      nextEl: ".swiper-button-next14",
      prevEl: ".swiper-button-prev14"
    },
    pagination: {
      el: ".swiper-pagination-14",
      clickable: true
    },
    slidesPerView: 1,
    initialSlide: 0,
    loop: true,
    speed: 600
  });
  var teamNavSwiper = new Swiper(".team-nav-slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 5,
    slideToClickedSlide: true,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
  });
  var teamMainSwiper = new Swiper(".team-main-slider", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    thumbs: {
      swiper: teamNavSwiper
    },
    pagination: {
      el: ".swiper-pagination-15",
      type: "fraction"
    }
  });
}

$(function () {
  initSwipers();
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
$(document).ready(function () {
  $(".header_burger_desktop").hover(function (event) {
    $(".menu_burger").toggleClass("menu_burger_active");
    $(".header_burger_desktop").toggleClass("header_burger_desktop_active");
  });
});
$(".form_inputs_tel,.service_form_tel").mask("+7(999)999-99-99"); // шаги в модалке

$("#steps-app-modal").steps({
  onFinish: function onFinish() {
    console.log("complete");
  }
});
$(".step-btn, .step-steps li").click(function () {
  if ($('.step-tab-panel:last-of-type').hasClass("active")) {
    $(".step-footer").addClass("step-footer-hidden");
  } else {
    $(".step-footer").removeClass("step-footer-hidden");
  }
});
$(".about_project .container .about_project_wrap .left_column .action_button").on("click", function (event) {
  event.preventDefault();
  $(".about_project .container .about_project_wrap .left_column p").show();
  $(this).hide();
}); // переносим консультанта на странице поиска по нужным координатам

$(document).ready(function () {
  var searchSlide = $(".search-top-slider .swiper-slide-active");

  if ($(window).width() >= 1280) {
    var searchSlideW = $(searchSlide).width() + 180;
  } else {
    var searchSlideW = $(searchSlide).width() + 75;
  }

  $(".search-top-consultant").css("left", searchSlideW);
}); // добавляем класс к текущей модалке, чтобы сделать из нее маленькую

$(".modal-final-btn").click(function () {
  var modalCurrent = $(this).closest(".modal");
  modalCurrent.addClass("modal-finished");
  setTimeout(function () {
    $(".modal").modal('hide');
    $(".modal").removeClass("modal-finished");
  }, 5000);
}); // объект - показ тегов

$(".object-list-tags .white_bordered_btn").click(function (e) {
  e.preventDefault();
  $(this).closest(".object-list-tags").addClass("object-list-tags-opened");
  $(this).text("Скрыть");
});
$(".premium-more-btn").click(function (e) {
  e.preventDefault();
  $(".premium-more").toggleClass("premium-more-show");
});