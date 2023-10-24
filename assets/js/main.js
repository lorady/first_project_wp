
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
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

window.onload=function(){
let menuBtn = document.querySelector('.mobile-menu-btn');
let menu = document.querySelector('.mobile-menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});}

$( document ).ready(function() {
  $(window).scroll(function(){
    console.log(window);
    var sticky = $('#header'),
        scroll = $(window).scrollTop();
      
        
  
    if (scroll >= 100 && $(window).width() < 1000) sticky.addClass('sticky');
    else sticky.removeClass('sticky');
  });
});
