let themeCss = {};

$(function () {
  $('input[name="td-theme"]:radio').change(function () {
    let val = $(this).val();
    if (val == 1) {
      $('.td-preview').contents().find('html').addClass('dark');
    } else {
      $('.td-preview').contents().find('html').removeClass('dark');
    }
  });

  $('input.td-com-css').change(function () {
    let tdSel = $(this).data('sel');
    let tdProp = $(this).data('prop');
    let val = $(this).val();
    $('.td-preview').contents().find(tdSel).css(tdProp, val);
    $(`input[data-sel=${tdSel}][data-prop=${tdProp}]`).val(val);
  });

  $('input.td-col-css').change(function () {
    let tdSel = $(this).data('sel');
    let tdProp = $(this).data('prop');
    let val = $(this).val();
    $('.td-preview').contents().find(tdSel).css(tdProp, val);
    $(`input[data-sel=${tdSel}][data-prop=${tdProp}]`).val(val);
  });
});