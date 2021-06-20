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
$(".form_inputs_tel,.service_form_tel").mask("+7(999)999-99-99");