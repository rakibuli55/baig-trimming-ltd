(function ($) {
	"use strict";


	$(window).on('load', function () {
    	$('.preloader').delay(500).fadeOut(500);

    	// isotope initialize
		$('.gallery_active').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
		    columnWidth: '.grid-item',
		  }
		});
	});

	$(document).ready(function (){
		// ----sticky header----
		$(window).scroll(function(){
			$('header').toggleClass('sticky', $(this).scrollTop() > 10);
			$('.back-to-top').toggleClass('show', $(this).scrollTop() > 100);
		});

		// ----mobile menu----
		$('.hamburger-menu').on('click', function(){
			var initialSrc = 'img/logo.png';
			var changeSrc = 'img/logo-black.png';
			$('.menu_wrapper').toggleClass('current');
			$('.line-top, .line-center, .line-bottom').toggleClass('current');
			$('.logo img').toggleClass('logo-change');
			$('body').toggleClass('overflow-hidden');
			if($('.logo img').hasClass('logo-change')){
				$('.logo img').attr('src', initialSrc);
			}else{
				$('.logo img').attr('src', changeSrc);
			}
		});

		// change img src on scroll
		var initialSrc = 'img/logo.png';
		var changeSrc = 'img/logo-black.png';
		$(window).scroll(function(){
			var scrollValue = $(this).scrollTop();
			if(scrollValue > 10){
				$('.logo img').attr('src', changeSrc);
			}
			else{
				$('.logo img').attr('src', initialSrc);
			}
		});
		// popups
		$('.pro1').on('click', function(){
			$('.pop1').addClass('show-popup');
		});
		$('.pro2').on('click', function(){
			$('.pop2').addClass('show-popup');
		});
		$('.pro3').on('click', function(){
			$('.pop3').addClass('show-popup');
		});
		$('.pro4').on('click', function(){
			$('.pop4').addClass('show-popup');
		});
		$('.pro5').on('click', function(){
			$('.pop5').addClass('show-popup');
		});
		$('.pro6').on('click', function(){
			$('.pop6').addClass('show-popup');
		});
		$('.pro7').on('click', function(){
			$('.pop7').addClass('show-popup');
		});
		$('.pro8').on('click', function(){
			$('.pop8').addClass('show-popup');
		});
		// close popups
		$('.pop_close').on('click', function(){
			$('.remove').removeClass('show-popup');
		});
		// ----slider initialize----
		$('.owl-carousel.home_slider').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    dots:false,
	    navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
	    animateOut: 'fadeOut',
	    animateIn:'fadeIn',
	    autoplay:true,
	    responsiveClass:true,
	    responsive:{
		       0:{
		            items:1,
		            dots:true,
		            nav:false,
		        },
		        600:{
		            items:1,
		        },
		        1000:{
		            items:1,
		        }
		    }
		}) 

		// ----product slider----
		$('.owl-carousel.product_slider').owlCarousel({
	    loop:true,
	    margin:20,
	    nav:true,
	    dots:false,
	    navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
	    responsiveClass:true,
	    responsive:{
		       0:{
		            items:1,
		            dots:true,
		            stagePadding:30,
		        },
		        500:{
		        	items:2,
		        },
		        768:{
		            items:3,
		        },
		        1000:{
		            items:4,
		        }
		    }
		})

		// ----director slider----
		$('.owl-carousel.director_slider').owlCarousel({
	    loop:true,
	    margin:20,
	    nav:true,
	    dots:false,
	    navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
	    responsiveClass:true,
	    responsive:{
		       0:{
		            items:1,
		            stagePadding:30,
		        },
		        500:{
		        	items:2,
		        },
		        768:{
		            items:3,
		        },
		        1000:{
		            items:4,
		        }
		    }
		})

		// ----client slider----
		$('.owl-carousel.client_slider').owlCarousel({
	    loop:true,
	    margin:20,
	    nav:false,
	    dots:false,
	    autoplay:true,
	    responsiveClass:true,
	    responsive:{
		       0:{
		            items:2,
		        },
		        600:{
		            items:3,
		        },
		        1000:{
		            items:5,
		        }
		    }
		})

		// ----testimonial slider----
		$('.owl-carousel.testimonial_slider').owlCarousel({
	    loop:true,
	    margin:20,
	    nav:false,
	    dots:false,
	    autoplay:false,
	    smartSpeed:2000,
	    responsiveClass:true,
	    responsive:{
		       0:{
		            items:1,
		            stagePadding:0,
		        },
		        576:{
		            items:1,
		            stagePadding:0,
		        },
		        768:{
		            items:2,
		        },
		        1000:{
		            items:2,
		        }
		    }
		})

		// video play
		$('.play').magnificPopup({
			type:'iframe',
			iframe: {
			  patterns: {
			    youtube: {
			      index: 'youtube.com/',

			      id: 'v=',
			      src: 'https://www.youtube.com/embed/%id%?autoplay=1'
			    },
			  },
			  srcAction: 'iframe_src',
			}
		});

		// image popup
		$('.certificate_inner').magnificPopup({
		  delegate: 'a',
		  type: 'image',
		   gallery:{
	    	enabled:true
	  	   }
		});

		// Gallery popup
		$('.gallery_active').magnificPopup({
		  delegate: 'a',
		  type: 'image',
		   gallery:{
	    	enabled:true
	  	   }
		});

		//Animate the scroll to top
	    $('.back-to-top').on('click', function (event) {
	        event.preventDefault();

	        $('html, body').animate({
	            scrollTop: 0,
	        }, 500);
	    });
	});

})(jQuery);