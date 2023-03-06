// JavaScript Document
var typed = new Typed('.element', {
               	strings: ["Vinyasa Yoga.","Ashtanga Yoga.", "Inside Flow.","Animal Flow.","Mindful Movement.","Yoga Film."],
       	 		typeSpeed:100,
        		backSpeed:50,
        		loop:true,
        		});


$(document).ready(function(){
			$(".btn-toggle").click(function(){
				$(".menu").slideToggle()
			})
	
	$('#banner').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		autoplay:true,
		autoplayTimeout:5000,
	
	})
	$('#mySkill').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1,
			dots:false,
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

		$('#testimonial').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
		
	})