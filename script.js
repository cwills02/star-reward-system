const addBtns = document.querySelectorAll('.add')
const stars = document.querySelectorAll('.star')
console.log(addBtns)

addBtns.forEach((btn, index) => {
  addEventListener('click', (e) => {
    if (e.target === addBtns[index]) {
      stars[index].classList.toggle('active')
    }
  })
})
