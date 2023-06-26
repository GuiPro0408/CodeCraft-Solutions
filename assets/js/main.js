$(document).ready(function() {
  /*==================== MENU SHOW Y HIDDEN ====================*/
  $('#nav-toggle').click(function() {
    $('#nav-menu').addClass('show-menu');
  });

  $('#nav-close').click(function() {
    $('#nav-menu').removeClass('show-menu');
  });

  $('.nav__link').click(function() {
    $('#nav-menu').removeClass('show-menu');
  });

  /*==================== ACCORDION SKILLS ====================*/
  $('.skills__header').click(function() {
    const $item = $(this).parent();

    $('.skills__content').not($item).removeClass('skills__open').addClass('skills__close');
    $item.toggleClass('skills__open skills__close');
  });

  /*==================== QUALIFICATION TABS ====================*/
  $('[data-target]').click(function() {
    const target = $(this).data('target');

    $('[data-content]').removeClass('qualification__active');
    $(target).addClass('qualification__active');

    $('[data-target]').removeClass('qualification__active');
    $(this).addClass('qualification__active');
  });

  /*==================== SERVICES MODAL ====================*/
  $('.services__button').click(function() {
    $(this).next('.services__modal').addClass('active-modal');
  });

  $('.services__modal-close').click(function() {
    $('.services__modal').removeClass('active-modal');
  });

  /*==================== PORTFOLIO SWIPER ====================*/
  const portfolioSwiper = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });

  /*==================== TESTIMONIAL ====================*/
  const testimonialSwiper = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      568: {
        slidesPerView: 2,
      }
    }
  });

  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
  $(window).scroll(function() {
    const scrollY = $(this).scrollTop();

    $('section[id]').each(function() {
      const sectionHeight = $(this).outerHeight();
      const sectionTop = $(this).offset().top - 50;
      const sectionId = $(this).attr('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        $('.nav__menu a[href*=' + sectionId + ']').addClass('active-link');
      } else {
        $('.nav__menu a[href*=' + sectionId + ']').removeClass('active-link');
      }
    });
  });

  /*==================== CHANGE BACKGROUND HEADER ====================*/
  $(window).scroll(function() {
    const nav = $('#header');

    if ($(this).scrollTop() >= 80) {
      nav.addClass('scroll-header');
    } else {
      nav.removeClass('scroll-header');
    }
  });

  /*==================== SHOW SCROLL UP ====================*/
  $(window).scroll(function() {
    const scrollUp = $('#scroll-up');

    if ($(this).scrollTop() >= 560) {
      scrollUp.addClass('show-scroll');
    } else {
      scrollUp.removeClass('show-scroll');
    }
  });

  /*==================== DARK LIGHT THEME ====================*/
  const themeButton = $('#theme-button');
  const darkTheme = 'dark-theme';
  const iconTheme = 'uil-sun';

  const selectedTheme = localStorage.getItem('selected-theme');
  const selectedIcon = localStorage.getItem('selected-icon');

  const getCurrentTheme = () => $('body').hasClass(darkTheme) ? 'dark' : 'light';
  const getCurrentIcon = () => themeButton.hasClass(iconTheme) ? 'uil-moon' : 'uil-sun';

  if (selectedTheme) {
    $('body').toggleClass(darkTheme, selectedTheme === 'dark');
    themeButton.toggleClass(iconTheme, selectedIcon === 'uil-moon');
  }

  themeButton.click(function() {
    $('body').toggleClass(darkTheme);
    themeButton.toggleClass(iconTheme);

    if (getCurrentTheme() === 'dark') {
      $('body').removeClass('light-theme').addClass('dark-theme');
    } else {
      $('body').removeClass('dark-theme').addClass('light-theme');
    }

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
  });
});
