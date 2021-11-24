const swiper = new Swiper('.swiper', {
  // Optional parameters
  // slidesPerView: 4,
  // slidesPerGroup:2,
  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    660: {
      slidesPerView: 2,
      slidesPerGroup:2,
      spaceBetween: 30
    },
    945: {
      slidesPerView: 2,
      slidesPerGroup:2,
      spaceBetween: 30
    },
    1256: {
      slidesPerView: 3,
      slidesPerGroup:3,
    },
    1370: {
      slidesPerView: 4,
      slidesPerGroup:2,
    }
  },
  dynamicMainBullets: 3,
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});