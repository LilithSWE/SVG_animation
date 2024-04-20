const allLetters = document.querySelectorAll('.cls-1')
const leftBtn = document.getElementById('left')
leftBtn.addEventListener('click', () => {
  left()
})
const centerBtn = document.getElementById('center')
centerBtn.addEventListener('click', () => {
  center()
})
const rightBtn = document.getElementById('right')
rightBtn.addEventListener('click', () => {
  right()
})
start()

gsap.from(".cls-1", {
  opacity: 0,
  y: 100,
  duration: 1
});

function start() {
  allLetters.forEach(path => {
    gsap.to(path, {
      fill: 'rgb(96, 157, 159)',
      yoyo: true,
      repeat: -1,
      delay: 1,
    })
  });
}
function left() {
  allLetters.forEach(path => {
    gsap.to(path, {
      x: -20
    })
  });
}
function center() {
  allLetters.forEach(path => {
    gsap.to(path, {
      x: 'center'
    })
  });
}
function right() {
  allLetters.forEach(path => {
    gsap.to(path, {
      x: 20
    })
  });
}

