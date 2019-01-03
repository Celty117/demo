var allbuttons = $('#buttons>button')

for (let i = 0; i < allbuttons.length; i++) {
  $(allbuttons[i]).on('click', function (x) {
    var index = $(x.currentTarget).index()
    var n = index * -600
    $('#images').css({
      transform: 'translateX(' + n + 'px)'
    })
  })
}