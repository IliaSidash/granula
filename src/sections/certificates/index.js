import $ from 'jquery';
import 'slick-carousel';

window.jQuery = $;
require('@fancyapps/fancybox');

const slider = $('.js-certificates-slider');
const prevArrow = $('.certificates__arrow_prev');
const nextArrow = $('.certificates__arrow_next');

$().fancybox({
  selector: '.certificates__slider-content a',
  infobar: false,

  buttons: ['close'],
  smallBtn: true,
  btnTpl: {
    smallBtn:
      '<span data-fancybox-close class="close"><svg width="14" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3137 13.3137L1 2M12.3137 1.6863L1 13" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>',
    arrowLeft:
      '<span data-fancybox-prev class="arrow arrow_prev arrow_with-border arrow_light"><svg width="10" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 17L1 9l8-8" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>',
    arrowRight:
      '<span data-fancybox-next class="arrow arrow_next arrow_with-border arrow_light"><svg width="10" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l8 8-8 8" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>'
  },
  mobile: { arrows: false }
});

const config = {
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

slider.slick(config);
