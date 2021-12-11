const container = document.querySelector('.container')
const addBtns = document.querySelectorAll('.add')
const stars = document.querySelectorAll('.star')
const total = document.querySelector('.total')
let totalStars = 0
const submit = document.querySelector('.submit')
const input = document.getElementById('new-chore')
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  // console.log(input.value)

  if (input.value !== '') {
    let div = document.createElement('div')
    div.setAttribute('class', 'star-container')
    div.innerHTML = `
    <h1>${input.value}</h1>
    <button class="add">Add/Remove Star</button>
    <div class="star">⭐</div>
  `
    container.appendChild(div)

    input.value = ''
  }
})

addBtns.forEach((btn, index) => {
  addEventListener('click', (e) => {
    if (e.target === addBtns[index]) {
      stars[index].classList.toggle('active')
    }
    totalStars = document.getElementsByClassName('star active').length
    total.innerHTML = `Total Stars: ${totalStars}`
    if (totalStars === stars.length) {
      total.innerHTML = `Total Stars: ${totalStars} Awesome Job!`
    }
  })
})
