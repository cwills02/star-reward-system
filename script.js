const container = document.querySelector('.container')
let totalStars = 0
const submit = document.querySelector('.submit')
const input = document.getElementById('new-chore')
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (input.value.trim().length >= 5) {
    let div = document.createElement('div')
    div.setAttribute('class', 'star-container')
    div.innerHTML = `
    <h1>${input.value}</h1>
    <button class="delete">Remove Chore</button>
    <button class="add">+</button>
    <button class="remove">-</button>
    <div class="star">⭐</div>
  `
    container.appendChild(div)

    input.value = ''
  }

  let addBtns = document.querySelectorAll('.add')
  let removeBtns = document.querySelectorAll('.remove')
  let stars = document.querySelectorAll('.star')
  let total = document.querySelector('.total')

  let addBtnsArr = Array.from(addBtns)
  let removeBtnsArr = Array.from(removeBtns)

  let starsArr = Array.from(stars)
  starsArr.map((star, index) => star.setAttribute('id', `${index}`))

  addBtnsArr.forEach((btn, index) => {
    addEventListener('click', (e) => {
      if (
        e.target === btn &&
        !document.getElementById(`${index}`).classList.contains('star-active')
      ) {
        document.getElementById(`${index}`).classList.add('star-active')
      }
      totalStars = document.getElementsByClassName('star-active').length
      total.innerHTML = `Total Stars: ${totalStars}`
      if (totalStars === stars.length) {
        total.innerHTML = `Total Stars: ${totalStars} <span class="awesome">Awesome Job!</span>`
      }
    })
  })

  removeBtnsArr.forEach((btn, index) => {
    addEventListener('click', (e) => {
      if (
        e.target === btn &&
        document.getElementById(`${index}`).classList.contains('star-active')
      ) {
        document.getElementById(`${index}`).classList.remove('star-active')
        totalStars = document.getElementsByClassName('star-active').length
        totalStars = totalStars--
        if (totalStars < stars.length) {
          total.innerHTML = `Total Stars: ${totalStars}`
        }
      }

      const starDivs = document.querySelectorAll('.star-container')

      const deleteBtns = document.querySelectorAll('.delete')

      deleteBtns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
          btn.parentNode.remove()
          stars = document.querySelectorAll('.star')
        })
      })
    })
  })
})
