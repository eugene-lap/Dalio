const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: 16,
    breakpoints: {
      1000: {
        slidesPerView: 2,
        spaceBetween: 32,
        allowTouchMove: false,
        pagination: {
          el: null,
          
        },
      },
    },
  });
  new Swiper(".reviews-swapper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    spaceBetween: 16,
    allowTouchMove: true,
    breakpoints: {
      1000: {
        slidesPerView: 1.5,
        spaceBetween: 32,
        pagination: {
          el: null,
        },
        navigation: {
          nextEl: ".reviews-button-circle-start",
          prevEl: ".reviews-button-circle-end",
        },
      },
    },
  });