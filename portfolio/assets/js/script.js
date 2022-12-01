$(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.globalMenuSp, .idx-globalMenuSp').addClass('active');
    } else {
      $('.globalMenuSp, .idx-globalMenuSp').removeClass('active');
    }
  });

  $(window).scroll(function () {
    var obj = $('.about-animation img');
    scroll = $(window).scrollTop();
    if (scroll > 600) {
      obj.addClass('isSmall');
    } else {
      obj.removeClass('isSmall');
    }
  });


  'use strict';

  var $filters = $('.filter [data-filter]'),
    $boxes = $('.boxes [data-category]');

  $filters.on('click', function (e) {
    e.preventDefault();
    var $this = $(this);

    $filters.removeClass('active');
    $this.addClass('active');

    var $filterColor = $this.attr('data-filter');

    if ($filterColor == 'all') {
      $boxes.removeClass('is-animated')
        .fadeOut().finish().promise().done(function () {
          $boxes.each(function (i) {
            $(this).addClass('is-animated').delay((i++) * 200).fadeIn();
          });
        });
    } else {
      $boxes.removeClass('is-animated')
        .fadeOut().finish().promise().done(function () {
          $boxes.filter('[data-category = "' + $filterColor + '"]').each(function (i) {
            $(this).addClass('is-animated').delay((i++) * 200).fadeIn();
          });
        });
    }
  });

  $(".modal-default").iziModal({
    padding: 40,
  });

});

$(window).scroll(function () {
  $('h2 span').each(function () {
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight) {
      $(this).addClass('scroll-in');
    }
  });
});

$(window).on('load', function () {
  $('.loader').delay(1500).fadeOut(300);
});
function stopLoad() {
  $('.loader').delay(1000).fadeOut(700);
}
setTimeout('stopLoad()', 10000);