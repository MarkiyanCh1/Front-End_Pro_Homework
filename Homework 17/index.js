const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 1300,
    disableOnInteraction: false,
  },
  effect: 'cube',
  speed: 3000,
});
