import $ from 'jquery';
import 'slick-carousel';

(function() {
  const slider = $('.js-geography-slider');
  const prevArrow = $('.geography__arrow-prev');
  const nextArrow = $('.geography__arrow-next');
  let maxHeight;

  const sliderOptions = {
    dots: false,
    prevArrow,
    nextArrow,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  };

  const equalSlidesHeight = function() {
    const slidersContetn = $(this).find('.geography__slide-content');
    const slidesHeight = slidersContetn.map((index, elem) => {
      return $(elem).outerHeight();
    });
    const currentMaxHeight = Math.max.apply(null, slidesHeight);

    if (maxHeight !== currentMaxHeight) {
      slidersContetn.css('min-height', currentMaxHeight);
      maxHeight = currentMaxHeight;
    }
  };

  slider.slick(sliderOptions).on('setPosition', equalSlidesHeight);
})();
