$(function () {
  $('[data-fancybox]').fancybox({
  });

  $('.btn__link').on('click', function (e) {
    e.preventDefault()
    $.fancybox.close();
  })
});