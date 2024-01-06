let show = document.getElementById('show')
let increase = document.getElementById('increase')
let decrease = document.getElementById('decrease')
let reset = document.getElementById('reset')
count = 0

increase.addEventListener('click', () => {
  increase = show
  count++
  increase.innerHTML=count
})
decrease.addEventListener('click', () => {
  decrease = show
  count--
  decrease.innerText = count
})
reset.addEventListener('click', () => {
  reset = show
  count = 0
  reset.innerHTML = count
})