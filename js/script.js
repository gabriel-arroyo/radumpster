(function($) {

    "use strict";

    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(500).fadeOut(500);
        }
    }

    //Update Header Style + Scroll to Top
    function headerStyle() {
        if ($('.main-header').length) {
            var topHeader = $('.header-top').innerHeight();
            var windowpos = $(window).scrollTop();
            if (windowpos >= topHeader) {
                $('.main-header').addClass('fixed-header');
                $('.scroll-to-top').fadeIn(300);
            } else {
                $('.main-header').removeClass('fixed-header');
                $('.scroll-to-top').fadeOut(300);
            }
        }
    }


    //Search Box Hide / Show
    if ($('.lower-header .search-btn').length) {
        $('.lower-header .search-btn').on('click', function() {
            $('.search-box.toggle-box').slideToggle(500);
            // animate
            $('html, body').animate({
                scrollTop: $('html, body').offset().top
            }, 1000);
        });
    }

    //Submenu Dropdown Toggle
    if ($('.main-header li.dropdown ul').length) {
        $('.main-header li.dropdown').append('<div class="dropdown-btn"></div>');

        //Dropdown Button
        $('.main-header li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('ul').slideToggle(500);
        });
    }

    //Main Slider
    if ($('.main-slider .tp-banner').length) {

        jQuery('.main-slider .tp-banner').show().revolution({
            delay: 10000,
            startwidth: 1200,
            startheight: 680,
            hideThumbs: 600,

            thumbWidth: 80,
            thumbHeight: 50,
            thumbAmount: 5,

            navigationType: "bullet",
            navigationArrows: "0",
            navigationStyle: "preview4",

            touchenabled: "on",
            onHoverStop: "off",

            swipe_velocity: 0.7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: false,

            parallax: "mouse",
            parallaxBgFreeze: "on",
            parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

            keyboardNavigation: "off",

            navigationHAlign: "center",
            navigationVAlign: "bottom",
            navigationHOffset: 0,
            navigationVOffset: 20,

            soloArrowLeftHalign: "left",
            soloArrowLeftValign: "center",
            soloArrowLeftHOffset: 20,
            soloArrowLeftVOffset: 0,

            soloArrowRightHalign: "right",
            soloArrowRightValign: "center",
            soloArrowRightHOffset: 20,
            soloArrowRightVOffset: 0,

            shadow: 0,
            fullWidth: "on",
            fullScreen: "off",

            spinner: "spinner4",

            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,

            shuffle: "off",

            autoHeight: "off",
            forceFullWidth: "on",

            hideThumbsOnMobile: "on",
            hideNavDelayOnMobile: 1500,
            hideBulletsOnMobile: "on",
            hideArrowsOnMobile: "on",
            hideThumbsUnderResolution: 0,

            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            startWithSlide: 0,
            videoJsPath: "",
            fullScreenOffsetContainer: ".main-slider"
        });

    }

    //Owl Setting 
    var owl = $("#owl-recent");
    owl.owlCarousel({
        navigation: true,
        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        pagination: false,
        paginationNumbers: false,
        autoPlay: false, //Set AutoPlay to 3 seconds
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1000, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });
    var owl = $("#owl-testimonial");

    owl.owlCarousel({
        pagination: true,
        navigation: false,
        autoPlay: true,
        items: 1, //10 items above 1000px browser width
        itemsDesktop: [1000, 1], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 1], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });

    var owl = $(".client-area");

    owl.owlCarousel({
        pagination: false,
        navigation: true,
        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoPlay: true,
        items: 5, //10 items above 1000px browser width
        itemsDesktop: [1000, 4], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });

    //Post slider 

    $('.flexslider').flexslider({
        animation: "slide",
        directionNav: true,
        controlNav: false,
        prevText: "",
        nextText: ""
    });

    $('.service-slider.flex-slider').flexslider({
        animation: "fade",
        prevText: "",
        nextText: "",
    });

    $('.portfolio-single-slider.service-slider').flexslider({
        animation: "fade",
        prevText: "",
        nextText: "",
        controlNav: "thumbnails"
    });


    //Counter Section 
    $('.counters').counterUp({
        delay: 10,
        time: 1000
    });

    if ($(".player").length > 0) { //If there are video backgrounds
        $(".player").mb_YTPlayer();
    }

    //Filters Section / Mixitup
    $('.projects').mixItUp();

    $('.projects-details').mixItUp();

    //LightBox / Fancybox
    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox();
    }

    //Contact Form Validation
    if ($('#contact-form').length) {
        $('#contact-form').validate({
            rules: {
                username: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: true
                },
                message: {
                    required: true
                }
            }
        });
    }

    // Google Map Settings
    if ($('#map-location').length) {
        var map;
        map = new GMaps({
            el: '#map-location',
            zoom: 14,
            scrollwheel: false,
            //Set Latitude and Longitude Here
            lat: -37.817085,
            lng: 144.955631
        });

        //Add map Marker
        map.addMarker({
            lat: -37.817085,
            lng: 144.955631,
            infoWindow: {
                content: '<p style="text-align:center;"><strong>Envato</strong><br>Melbourne VIC 3000, Australia</p>'
            }

        });
    }

    // Scroll to top
    if ($('.scroll-to-top').length) {
        $(".scroll-to-top").on('click', function() {
            // animate
            $('html, body').animate({
                scrollTop: $('html, body').offset().top
            }, 1000);

        });
    }

    // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }
    // Index Page two Feature Section 
	    $(window).on('resize', function () {
        $('.about-item-step').removeClass('about-item-step-left', $(window).width() < 768);
        $('.about-item-content').removeClass('about-item-content-left', $(window).width() < 768);
    });
	
    /* ==========================================================================
       When document is ready, do
       ========================================================================== */

    $(document).on('ready', function() {
        headerStyle();
        footerStyle();
    });

    /* ==========================================================================
       When document is Scrollig, do
       ========================================================================== */

    $(window).on('scroll', function() {
        headerStyle();
        factCounter();
    });

    /* ==========================================================================
       When document is loading, do
       ========================================================================== */

    $(window).on('load', function() {
        handlePreloader();
    });

    /* ==========================================================================
       When Window is resizing, do
       ========================================================================== */

    $(window).on('resize', function() {
        footerStyle();
    });

})(window.jQuery);