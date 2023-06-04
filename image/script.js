var swiper = new Swiper(".mySwiper", {
    slidesPerview:1,
    spaceBetween: 10,
    slidesPerGroup:1,
    loop:true,
    loopGroupWithBlank:true,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type:'fraction',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect:'creative',
    creativeEffect:{prev:{shadow:true,
    translate:[0,0-400],},
next:{translate:["100%",0,0],}}
  });