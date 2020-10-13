jQuery(($) => {
    "use strict";

    // PRELOADER
    $('body').addClass('page-loaded');
    $('.preloader').delay(1000).fadeOut(0);

    // TOP MENU POSITION
    $(window).on('scroll', function () {
        let sTop = $(window).scrollTop();
        let siteHeader = $('.main-header');
        let scrollLink = $('.scroll-to-top');
        let sticky_header = $('.main-header .sticky-header');
        if (sTop >= 1) {
            siteHeader.addClass('fixed-header');
            sticky_header.addClass("animated slideInDown");
            scrollLink.fadeIn(300);
        } else {
            siteHeader.removeClass('fixed-header');
            sticky_header.removeClass("animated slideInDown");
            scrollLink.fadeOut(300);
        }
    });

    // MENU
    $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>');
    let mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
    $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
    $('.sticky-header .main-menu').append(mobileMenuContent);
    $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
        $(this).toggleClass('open');
        $(this).prev('ul').slideToggle(500);
    });
    $('.mobile-nav-toggler,.extend-nav-toggler').on('click', function () {
        $('body').addClass('mobile-menu-visible');
    });
    $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function () {
        $('body').removeClass('mobile-menu-visible');
    });
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            $('#search-popup').removeClass('mobile-menu-visible');
            $('body').removeClass('mobile-menu-visible');
        }
    });

    // SEARCH
    $('.search-toggler').on('click', function () {
        $('#search-popup').addClass('popup-visible');
        $('body').addClass('search-visible');
    });
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            $('#search-popup').removeClass('popup-visible');
            $('body').removeClass('search-visible');
        }
    });
    $('.close-search,.search-popup .overlay-layer').on('click', function () {
        $('#search-popup').removeClass('popup-visible');
        $('body').removeClass('search-visible');
    });


    // SIDEBAR
    let hiddenBar = $('.hidden-bar');
    let hiddenBarOpener = $('.max-nav-toggler .toggle-btn');
    let hiddenBarCloser = $('.hidden-bar-closer');

    hiddenBarOpener.on('click', function () {
        hiddenBar.addClass('visible-sidebar');
    });

    hiddenBarCloser.on('click', function () {
        hiddenBar.removeClass('visible-sidebar');
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            hiddenBar.removeClass('visible-sidebar');
        }
    });


    // TABS
    $('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
        e.preventDefault();
        var target = $($(this).attr('data-tab'));

        if ($(target).is(':visible')) {
            return false;
        } else {
            target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
            $(this).addClass('active-btn');
            target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
            target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
            $(target).fadeIn(300);
            $(target).addClass('active-tab');
        }
    });

    // PRODUCT TEAMS
    $('.project-tab .product-tab-btns .p-tab-btn').on('click', function (e) {
        e.preventDefault();
        var target = $($(this).attr('data-tab'));

        if ($(target).hasClass('actve-tab')) {
            return false;
        } else {
            $('.project-tab .product-tab-btns .p-tab-btn').removeClass('active-btn');
            $(this).addClass('active-btn');
            $('.project-tab .p-tabs-content .p-tab').removeClass('active-tab');
            $(target).addClass('active-tab');
        }
    });

    // ACCORDIAN BOX
    $(".accordion-box").on('click', '.acc-btn', function () {
        let outerBox = $(this).parents('.accordion-box');
        let target = $(this).parents('.accordion');

        if ($(this).next('.acc-content').is(':visible')) {
            $(this).removeClass('active');
            $(this).next('.acc-content').slideUp(300);
            $(outerBox).children('.accordion').removeClass('active-block');
        } else {
            $(outerBox).find('.accordion .acc-btn').removeClass('active');
            $(this).addClass('active');
            $(outerBox).children('.accordion').removeClass('active-block');
            $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
            target.addClass('active-block');
            $(this).next('.acc-content').slideDown(300);
        }
    });

    // FANCY BOX POPUP
    $('.lightbox-image').fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        helpers: {
            media: {}
        }
    });


    // SCROLL TOP
    $(".scroll-to-target").on('click', function () {
        let target = $(this).attr('data-target');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1500);
    });

    // ALL APP CAROUSELS
    let carousels = [
        {
            selector: '.banner-carousel',
            options: {
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                margin: 0,
                smartSpeed: 500,
                autoplay: 6000,
                autoplayTimeout: 7000
            }
        },
        {
            selector: '.project-carousel',
            options: {
                smartSpeed: 700,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    },
                    1600: {
                        items: 3
                    },
                    1900: {
                        items: 4
                    }
                }
            }
        },
        {
            selector: '.team-carousel',
            options: {
                smartSpeed: 700,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
            }
        },
        {
            selector: '.team-carousel-two',
            options: {
                center: true,
                margin: 0,
                smartSpeed: 700,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
            }
        },
        {
            selector: '.services-carousel',
            options: {
                smartSpeed: 700,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
            }
        },
        {
            selector: '.news-carousel',
            options: {
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    800: {
                        items: 2
                    },
                    1024: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    }
                }
            }
        },
        {
            selector: '.testimonial-carousel',
            options: {}
        },
        {
            selector: '.featured-service-carousel',
            options: {}
        },
        {
            selector: '.featured-carousel',
            options: {}
        },
        {
            selector: '.single-item-carousel',
            options: {}
        },
        {
            selector: '.sponsors-carousel',
            options: {
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    800: {
                        items: 3
                    },
                    1024: {
                        items: 4
                    },
                    1366: {
                        items: 4
                    },
                    1500: {
                        items: 5
                    }
                }
            }
        }
    ];

    carousels.forEach(item => {
        $(item.selector).owlCarousel(
            $.extend(
                {
                    loop: true,
                    nav: true,
                    margin: 30,
                    smartSpeed: 500,
                    autoplay: 5000,
                    autoplayTimeout: 5000,
                    navText: ['<span class="icon flaticon-left-arrow"></span>', '<span class="icon flaticon-right-arrow-1"></span>'],
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 1
                        },
                        800: {
                            items: 1
                        },
                        1024: {
                            items: 1
                        }
                    }
                },
                item.options
            )
        );
    });

    // SIDE MENU
    let menuWrap = $('.hidden-bar .side-menu');
    // hidding submenu
    menuWrap.find('.dropdown').children('ul').hide();
    // toggling child ul
    menuWrap.find('li.dropdown > a').each(function () {
        $(this).on('click', function (e) {
            e.preventDefault();
            $(this).parent('li.dropdown').children('ul').slideToggle();
            // adding class to item container
            $(this).parent().toggleClass('open');
            return false;
        });
    });
});