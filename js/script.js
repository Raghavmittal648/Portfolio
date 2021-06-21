$(document).ready(function () {
    $('.js--section-about').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });

    $('.js--scroll-to-home').click(function () {
        $('html,body').animate({scrollTop: $('.js--section-home').offset().top}, 1000);
    }); 

    $('.js--scroll-to-about').click(function () {
        $('html,body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);
    }); 

    $('.js--scroll-to-resume').click(function () {
        $('html,body').animate({scrollTop: $('.js--section-resume').offset().top}, 1000);
    }); 

    $('.js--scroll-to-work').click(function () {
        $('html,body').animate({scrollTop: $('.js--section-work').offset().top}, 1000);
    }); 

    $('.js--scroll-to-testimonial').click(function () {
        $('html,body').animate({scrollTop: $('.js--section-testimonial').offset().top}, 1000);
    }); 
});
    