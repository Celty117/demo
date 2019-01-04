var allbuttons = $('#buttons>button')

for (let i = 0; i < allbuttons.length; i++) {
  $(allbuttons[i]).on('click', function (x) {  // $(allbuttons[i]) === allbuttons.eq(i)
    var index = $(x.currentTarget).index()
    var px = index * -600
    $('#images').css({
      transform: 'translateX(' + px + 'px)'
    })
    n = index
    activeButton(allbuttons.eq(n))
  })
}

var n = 0;
var size = allbuttons.length
palySlide(n % size)

var timerId = setTimer()

function setTimer() {
  return setInterval(() => {
    n += 1
    palySlide(n % size)
  }, 2000)
}

function palySlide(index) {
  allbuttons.eq(index).trigger('click')
}

function activeButton($button) {
  $button
    .addClass('red')
    .siblings('.red').removeClass('red')
}

$('.slideshow').on('mouseenter', function () {
  window.clearInterval(timerId)
})

$('.slideshow').on('mouseleave', function () {
  timerId = setTimer()
  console.log(timerId)
})