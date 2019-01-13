$(clickMe).on('click', function () {
  if (popover.style.display === 'block') {
    $(popover).hide()
  } else {
    $(popover).show()
    $(document).one('click', function () {
      $(popover).hide()
    })
  }
})
$(wrapper).on('click', function (a) {
  a.stopPropagation()
})