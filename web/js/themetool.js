let deckCss

$(function () {
  $('input[name="deck-col-theme"]:radio').change(function () {
    let val = $(this).val();
    if (val == 1) {
      $('#deck-col').contents().find('html').addClass('dark');
    } else {
      $('#deck-col').contents().find('html').removeClass('dark');
    }
  });
  $('#deck-col-header-color').change(function () {
    let val = $(this).val();
    $('#deck-col').contents().find('.column-header').css('color', val);
  });
  $('#deck-col-header-backcolor').change(function () {
    let val = $(this).val();
    $('#deck-col').contents().find('.column-header').css('background-color', val);
  });
});