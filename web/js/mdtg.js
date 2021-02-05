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
    if (tdSel in tdCss === false) tdCss[tdSel] = [];
    tdCss[tdSel].forEach((e) => {
      if (e.startsWith(`${tdProp}:`)) {
        let index = tdCss[tdSel].indexOf(e)
        tdCss[tdSel].splice(index,1)
      }
    })
    if (val) tdCss[tdSel].push(`${tdProp}:${val}!important;`);
    tdCss[tdSel].sort()
    let tdCssText = "";
    Object.keys(tdCss).forEach((key) => {
      if (tdCss[key].length === 0) delete tdCss[key];
      else {
        tdCssText = tdCssText + `${key}{`
      tdCss[key].forEach((e) => {
        tdCssText = tdCssText + e;
      })
      tdCssText = tdCssText + "}\n"
      }
    })
    $('.td-css-text').val(tdCssText);
  });
});