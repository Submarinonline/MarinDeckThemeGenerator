let tdCss = {};
$(function () {
  $('input[name="td-theme"]:radio').change(function () {
    let val = $(this).val();
    if (val == 1) {
      $('.td-preview').contents().find('html').addClass('dark');
    } else {
      $('.td-preview').contents().find('html').removeClass('dark');
    }
  });

  $('input.td-css').change(function () {
    let tdSel = $(this).data('sel');
    let tdProp = $(this).data('prop');
    let val = $(this).val();
    $('.td-preview').contents().find(tdSel).css(tdProp, val);
    $(`input[data-sel="${tdSel}"][data-prop="${tdProp}"]`).val(val);
    if(tdSel in tdCss === false) tdCss[tdSel] = [];
    Object.keys(tdCss).forEach((key)=>{
      tdCss[key].forEach((e)=>{
        if(e.match(new RegExp(tdProp))) {
          tdCss[key].splice(key, 1);
        }
      })
    })
    tdCss[tdSel].push(`${tdProp}:${val}!important;`);
    let tdCssText = "";
    Object.keys(tdCss).forEach((key)=>{
      tdCssText = tdCssText + `${key}{`
      tdCss[key].forEach((e)=>{
        tdCssText = tdCssText + e;
      })
      tdCssText = tdCssText+"}\n"
    })
    $('.td-css-text').val(tdCssText);
  });
});