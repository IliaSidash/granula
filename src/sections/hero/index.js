import 'slick-carousel/slick/slick.css';

import $ from 'jquery';
import 'slick-carousel';

const slider = $('.js-hero-slider');
const prevArrow = $('.hero__slider-arrow-prev');
const nextArrow = $('.hero__slider-arrow-next');
const appendDots = $('.hero__slider-dots');
const dotsClass = 'slider-dots';
const arrows = $('.hero__slider .arrow');

const config = {
  dots: true,
  dotsClass,
  prevArrow,
  nextArrow,
  appendDots
};

const handleChangeSlide = (event, slick, currentSlide) => {
  if ((currentSlide + 1) % 2 !== 0) {
    arrows.addClass('arrow_light');
    appendDots.addClass('hero__slider-dots_light');
  } else {
    arrows.removeClass('arrow_light');
    appendDots.removeClass('hero__slider-dots_light');
  }
};

slider.slick(config).on('beforeChange', handleChangeSlide);
