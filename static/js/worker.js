var i = 0

function timedCount () {
  // console.log(i)
  i = i + 1
  postMessage(i)
  setTimeout(timedCount, 1000)
}

timedCount()
