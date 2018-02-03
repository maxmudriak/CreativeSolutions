//=require jquery.min.js

// to inlude bootstrap plugins add "=" sign below
// require javascripts/bootstrap/*.*
//=require javascripts/bootstrap.min.js

//=require slick.min.js
//=require map.js

;(function($){

    var header = $(".ba-header"),
        scrollTop;

    window.addEventListener('scroll', fixHeader);

    function fixHeader() {
        scrollTop = window.pageYOffset;
        console.log(scrollTop);
        if (scrollTop >= 50) {
            header.addClass('ba-stick');
        } else{
            header.removeClass('ba-stick');

        }
    }

    fixHeader();

//slider
	$(window).on('load', function(){

		$('.ba-works-slider').slick({
			dots: false,
			arrows: true,
			slide: '.ba-works-slide',
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			autoplay: true,

			prevArrow: '.ba-button--prev',
			nextArrow: '.ba-button--next'
		});

        $('.ba-team-slider').slick({
            dots: false,
            arrows: false,
            slide: '.ba-team__box',
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
            autoplay: true,
            //autoplaySpeed: 300,
            centerPadding: '50px',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ],
            prevArrow: '.ba-team-arrow--prev',
            nextArrow: '.ba-team-arrow--next'
        });


	});
//slider


    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 2000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                        ;
                    });
                }
            }
        });

})(jQuery);






















