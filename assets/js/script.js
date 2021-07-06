  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });

  (function ($) {
    'use strict';

    //  Search Form Open
    $('#searchOpen').on('click', function () {
      $('.search-wrapper').addClass('open');
    });
    $('#searchClose').on('click', function () {
      $('.search-wrapper').removeClass('open');
    });

    // featured post slider
    const featuredPostSlider = $(".featured-post-slider");
    featuredPostSlider.slick({
      infinite: true,
      vertical: true,
      verticalSwiping: true,
      arrows: false,
      dots: true,
      responsive: [{
        breakpoint: 600,
        settings: {
          vertical: false,
          verticalSwiping: false,
        }
      }]
    });

    featuredPostSlider.on('wheel', (function(e) {
      e.preventDefault();
      if (e.originalEvent.deltaY > 0) {
        $(this).slick('slickNext');
      } else {
        $(this).slick('slickPrev');
      }
    }));

    // venobox initialize
    $('.venobox').venobox();

  })(jQuery);