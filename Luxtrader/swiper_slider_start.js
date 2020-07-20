    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      	},
      autoplay: {
    	delay: 5000,
  		},
    });
    var popularnoe_slider = new Swiper('.popularnoe_slider', {
    
      
      loop: true,
      loopFillGroupWithBlank: true,
      updateOnWindowResize:true,  
      navigation: {
        nextEl: '.popularnoe_next',
        prevEl: '.popularnoe_prev',
        },
      breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 500,
      slidesPerGroup: 1,  
    },
    450: {
      slidesPerView: 1,
      spaceBetween: 350,
      slidesPerGroup: 1,  
    },
    620: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,  
    },
   // when window width is <= 640px
   768: {
      slidesPerView: 2,   
      spaceBetween:  150,
      slidesPerGroup: 2,

    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 100, 
      slidesPerGroup: 3,
    }
  }
      
    });

var citati_slider = new Swiper('.citati_slider', {
      navigation: {
        nextEl: '.citati_next',
        prevEl: '.citati_prev',
        },
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
      delay: 5000,
      },
});