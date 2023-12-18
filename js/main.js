var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    lazy:true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /*Nav btn*/
$(document).ready(function (){
  let navBtn = $('.nav-icon-btn');
  let navIcon = $('.nav-icon');
  let nav =  $('.header__top-content');

  navBtn.click(function (){
      navIcon.toggleClass('nav-icon--active');
      nav.toggleClass('header__top-content--mobile');
      $('body').toggleClass('no-scroll');
  });
});
