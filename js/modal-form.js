$(function () {
  $('.btn__link-close').on('click', function (e) {
    e.preventDefault()
    $.fancybox.close();
    $('#form-feedback').trigger( 'reset' );
  })

  $("#user-phone").mask("+7 (999) 999-99-99");

});

