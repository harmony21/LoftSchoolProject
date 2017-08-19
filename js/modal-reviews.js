$(function () {
  $('[data-fancybox]').fancybox({
  });

  $('.review-popup__close').on('click', function (e) {
    e.preventDefault()

    $.fancybox.close();
  })
});