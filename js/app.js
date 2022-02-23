/*===================================================================================
 Theme Name: Barallax
 Description: One Page Parallax
 Author: Bull-Theme
 Version: 1.0.0
 Created: March 2020
===================================================================================*/

(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        // Laptop owlCarousel
        $('#laptop-slide').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: false,
            autoplay: true,
            autoplayTimeout: 3000,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
        });

        // Team owlCarousel
        $('#team-slide').owlCarousel({
            loop:true,
            margin: 30,
            autoplay:true,
            smartSpeed:500,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                700:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        });

        // Testimonials owlCarousel
        $('#testimonial-slide').owlCarousel({
            loop: true,
            margin: 60,
            items: 3,
            autoplay: true,
            smartSpeed: 500,
            dots: false,
            nav: true,
            navText: ['<i class="pe-7s-angle-left"></i>','<i class="pe-7s-angle-right"></i>'],
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });

        // magnificPopup
        $('.gallery').magnificPopup({
            delegate: '.popup-img',
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        // Smooth Scroll
        $('html').smoothScroll(800);

        // Form Validator
        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (function() {
            'use strict';
            window.addEventListener('load', function() {
                // Fetch all the forms we want to apply custom Bootstrap validation styles to
                var forms = document.getElementsByClassName('needs-validation');
                // Loop over them and prevent submission
                var validation = Array.prototype.filter.call(forms, function(form) {
                    form.addEventListener('submit', function(event) {
                        event.preventDefault();
                        event.stopPropagation();
                        if (form.checkValidity() !== false) {
                            var url = "php/contact.php";
                            $.ajax({
                                type: "POST",
                                url: url,
                                data: $(this).serialize(),
                                success: function(data) {
                                    var messageAlert = 'alert-' + data.type;
                                    var messageText = data.message;
                                    var alertBox = '<div class="alert mb-40 ' + messageAlert + ' alert-dismissible fade show" role="alert">' + messageText + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
                                    if (messageAlert && messageText) {
                                        $('.needs-validation').find('.messages').hide().html(alertBox).fadeIn('slow');
                                        $('.needs-validation')[0].reset();
                                    }
                                }
                            });
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            }, false);
        })();

    });


    jQuery(window).on('scroll', function() {

        // Navbar Sticky
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".navbar-custom").addClass("navbar-sticky");
        } else {
            $(".navbar-custom").removeClass("navbar-sticky");
        }

    });

    // Back to Top
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) { 
            $('#back-to-top').fadeIn(); 
        } else { 
            $('#back-to-top').fadeOut(); 
        } 
    }); 
    $("#back-to-top").on("click", function(){
        $("html, body").animate({ scrollTop: 0 }, 1000); 
        return false; 
    });


    $(window).on("load",function (){
        // isotope
        $('.gallery').isotope({
            // options
            itemSelector: '.item'
        });

        var $gallery = $('.gallery').isotope({
        // options
        });

        // filter items on button click
        $('.filtering').on( 'click', 'span', function() {
            var filterValue = $(this).attr('data-filter');
            $gallery.isotope({ filter: filterValue });

        });

        $('.filtering').on( 'click', 'span', function() {
            $(this).addClass('active').siblings().removeClass('active');
        });

    });


}(jQuery));