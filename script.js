const addBtns = document.querySelectorAll('.add')
const stars = document.querySelectorAll('.star')
const total = document.querySelector('.total')
let totalStars = 0

addBtns.forEach((btn, index) => {
  addEventListener('click', (e) => {
    if (e.target === addBtns[index]) {
      stars[index].classList.toggle('active')
    }
    totalStars = document.getElementsByClassName('star active').length
    total.innerHTML = `Total Stars: ${totalStars}`
  })
})
