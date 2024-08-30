(function(a) {
    var n = a("header").height() + 50;

    function o() {
        if (a(".header_area").length) {
            a(window).scroll(function() {
                var w = a(window).scrollTop();
                if (w >= n) {
                    a(".header_area").addClass("navbar_fixed")
                } else {
                    a(".header_area").removeClass("navbar_fixed")
                }
            })
        }
    }
    o();

    function m() {
        if (a(".submenu").length) {
            a(".submenu > .dropdown-toggle").click(function() {
                var w = a(this).attr("href");
                window.location.href = w;
                return false
            })
        }
    }
    m();
    a('.one_page_menu .main_menu .navbar-nav li a[href^="#"]:not([href="#"]').on("click", function(x) {
        var w = a(this);
        a("html, body").stop().animate({
            scrollTop: a(w.attr("href")).offset().top - 70
        }, 1500);
        x.preventDefault()
    });
    a(".js-scroll-trigger").on("click", function() {
        a(".navbar-collapse").collapse("hide")
    });
    a(window).on("load", function() {
        a("body").scrollspy({
            target: "#mainNav",
            offset: 60
        })
    });

    function i() {
        if (a("#main_slider").length) {
            a("#main_slider").revolution({
                sliderType: "standard",
                sliderLayout: "auto",
                delay: 40000000,
                disableProgressBar: "on",
                navigation: {
                    onHoverStop: "off",
                    touch: {
                        touchenabled: "on"
                    },
                    arrows: {
                        style: "zeus",
                        enable: true,
                        hide_onmobile: true,
                        hide_under: 992,
                        hide_onleave: true,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels: [4096, 1199, 992, 767, 480],
                gridwidth: [1170, 970, 750, 700, 480],
                gridheight: [848, 848, 700, 550, 550],
                lazyType: "smart",
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            })
        }
    }
    i();

    function j() {
        if (a("#main_slider_3").length) {
            a("#main_slider_3").revolution({
                sliderType: "standard",
                sliderLayout: "auto",
                delay: 4000000000,
                disableProgressBar: "on",
                navigation: {
                    onHoverStop: "off",
                    touch: {
                        touchenabled: "on"
                    },
                    arrows: {
                        style: "zeus",
                        enable: true,
                        hide_onmobile: true,
                        hide_under: 992,
                        hide_onleave: true,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels: [4096, 1199, 992, 767, 480],
                gridwidth: [1170, 970, 750, 700, 480],
                gridheight: [988, 988, 700, 500, 500],
                lazyType: "smart",
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            })
        }
    }
    j();

    function k() {
        if (a("#main_slider_4").length) {
            a("#main_slider_4").revolution({
                sliderType: "standard",
                sliderLayout: "auto",
                delay: 400000000,
                disableProgressBar: "on",
                navigation: {
                    onHoverStop: "off",
                    touch: {
                        touchenabled: "on"
                    },
                    arrows: {
                        style: "zeus",
                        enable: true,
                        hide_onmobile: true,
                        hide_under: 992,
                        hide_onleave: true,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels: [4096, 1600, 1199, 992, 767, 480],
                gridwidth: [1170, 970, 970, 750, 700, 480],
                gridheight: [988, 988, 700, 600, 600, 600],
                lazyType: "smart",
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            })
        }
    }
    k();

    function l() {
        if (a("#main_slider_5").length) {
            a("#main_slider_5").revolution({
                sliderType: "standard",
                sliderLayout: "auto",
                delay: 400000000,
                disableProgressBar: "on",
                navigation: {
                    onHoverStop: "off",
                    touch: {
                        touchenabled: "on"
                    },
                    arrows: {
                        style: "zeus",
                        enable: true,
                        hide_onmobile: true,
                        hide_under: 992,
                        hide_onleave: true,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels: [4096, 1600, 1199, 992, 767, 480],
                gridwidth: [1170, 970, 970, 750, 700, 480],
                gridheight: [947, 947, 700, 700, 700, 700],
                lazyType: "smart",
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            })
        }
    }
    l();
    var s = a(".text_slider");

    function u() {
        if (s.length) {
            s.owlCarousel({
                loop: false,
                margin: 10,
                dots: false,
                autoplay: false,
                mouseDrag: false,
                touchDrag: false,
                navSpeed: 1500,
                items: 1,
                smartSpeed: 1500,
            })
        }
    }
    u();
    var r = a(".slider_bg");

    function g() {
        if (r.length) {
            r.owlCarousel({
                loop: false,
                margin: 10,
                dots: false,
                autoplay: false,
                mouseDrag: false,
                touchDrag: false,
                navSpeed: 1500,
                items: 1,
                smartSpeed: 1500,
            })
        }
    }
    g();
    a(".home_screen_nav .testi_next").on("click", function() {
        s.trigger("next.owl.carousel");
        r.trigger("next.owl.carousel")
    });
    a(".home_screen_nav .testi_prev").on("click", function() {
        s.trigger("prev.owl.carousel");
        r.trigger("prev.owl.carousel")
    });
    s.on("translate.owl.carousel", function(w) {
        a(".slider_bg_inner .owl-dots:eq(" + w.page.index + ")").click()
    });
    r.on("translate.owl.carousel", function(w) {
        a(".text_slider_inner .owl-dots:eq(" + w.page.index + ")").click()
    });
    r.on("drag.owl.carousel", function() {
        s.trigger("next.owl.carousel");
        r.trigger("next.owl.carousel")
    });
    s.on("drag.owl.carousel", function() {
        s.trigger("next.owl.carousel");
        r.trigger("next.owl.carousel")
    });

    function d() {
        if (a(".dishes_slider").length) {
            a(".dishes_slider").owlCarousel({
                loop: true,
                margin: 30,
                items: 4,
                nav: false,
                autoplay: false,
                smartSpeed: 2000,
                dots: false,
                navContainerClass: "dishes_arrow",
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    700: {
                        items: 2,
                    },
                    992: {
                        items: 3,
                    },
                    1192: {
                        items: 4,
                    }
                }
            })
        }
    }
    d();

    function t() {
        if (a(".testi_slider").length) {
            a(".testi_slider").owlCarousel({
                loop: true,
                margin: 32,
                items: 2,
                nav: false,
                autoplay: false,
                smartSpeed: 2000,
                dots: false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                }
            })
        }
    }
    t();

    function q() {
        if (a(".single_testi_slider").length) {
            a(".single_testi_slider").owlCarousel({
                loop: true,
                margin: 5,
                items: 1,
                nav: false,
                autoplay: false,
                smartSpeed: 2000,
                dots: false,
                navContainerClass: "single_arrow",
                navText: ['<i class="lnr lnr-arrow-left" aria-hidden="true"></i>', '<i class="lnr lnr-arrow-right" aria-hidden="true"></i>'],
                responsiveClass: true,
            })
        }
    }
    q();

    function e() {
        if (a(".gallery_area").length) {
            a(".gallery_inner").imagesLoaded(function() {
                a(".gallery_inner").isotope({
                    layoutMode: "fitRows",
                    percentPosition: true,
                    masonry: {
                        columnWidth: 1,
                    }
                })
            });
            a(".g_fillter ul li").on("click", function() {
                a(".g_fillter ul li").removeClass("active");
                a(this).addClass("active");
                var w = a(this).attr("data-filter");
                a(".gallery_inner").isotope({
                    filter: w,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false
            })
        }
    }
    e();

    function f() {
        if (a(".gallery_three").length) {
            a(".gallery_three .gallery_inner").imagesLoaded(function() {
                a(".gallery_three .gallery_inner").isotope({
                    layoutMode: "masonry",
                    percentPosition: true,
                    columnWidth: 1
                })
            })
        }
    }
    f();

    function h() {
        if (a(".light").length) {
            a(".imageGallery1 .light").simpleLightbox()
        }
    }
    h();

    function c() {
        if (a("#datetimepicker3").length) {
            a("#datetimepicker3").datetimepicker({
                format: "LT"
            })
        }
    }
    c();

    function b() {
        if (a("#datetimepicker4").length) {
            a("#datetimepicker4").datetimepicker({
                format: "L"
            })
        }
    }
    b();

    function p() {
        if (a(".nice_select").length) {
            a(".nice_select").niceSelect()
        }
    }
    p();

    function v() {
        if (a(".popup-youtube, .popup-vimeo, .popup-gmaps").length) {
            a(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
                disableOn: 700,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            })
        }
    }
    v()
})(jQuery);