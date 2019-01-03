var allbuttons = $('#buttons>button')


for (let i = 0; i < allbuttons.length; i++) {
  $(allbuttons[i]).on('click', function (x) {  // $(allbuttons[i]) === allbuttons.eq(i)
    var index = $(x.currentTarget).index()
    var px = index * -600
    $('#images').css({
      transform: 'translateX(' + px + 'px)'
    })
    n = index
    allbuttons.eq(n).addClass('red')
    .siblings('.red').removeClass('red')
  })
}

var n = 0;
var size = allbuttons.length
var timerId = setInterval(() => {
  n += 1
  allbuttons.eq(n % size).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')
}, 1000)

$('.slideshow').on('mouseenter', function () {
  window.clearInterval(timerId)
})

$('.slideshow').on('mouseleave', function () {
  timerId = setInterval(() => {
    n += 1
    allbuttons.eq(n % size).trigger('click')
      .addClass('red')
      .siblings('.red').removeClass('red')
  }, 1000)
})