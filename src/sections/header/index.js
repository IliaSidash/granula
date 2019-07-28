import $ from 'jquery';

(function() {
  const burger = $('.header__burger');
  const nav = $('.header__nav');
  let menuIsOpen = false;

  const toggleMenu = () => {
    nav.slideToggle(300, () => {
      menuIsOpen = !menuIsOpen;
      if (!menuIsOpen) {
        nav.removeAttr('style');
      }
    });
  };

  burger.on('click', toggleMenu);
})();
