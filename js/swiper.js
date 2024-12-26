const swiper = new Swiper('.swiper', {
    initialSlide: 0,
    slidesPerView: 1, 
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      1400: {
        slidesPerView: 3, 
      },
      520: {
        slidesPerView: 3, 
      },

    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  