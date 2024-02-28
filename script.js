const ratingButtons = document.querySelectorAll('[type="button"]')
const formEl = document.querySelector('form')
const selectionEl = document.querySelector('.selection__wrapper')
const thankYouEl = document.querySelector('.thank-you__wrapper')
const resultEl = document.querySelector('.thank-you__result')

ratingButtons.forEach((button) => {
  button.addEventListener('click', () => {
    ratingButtons.forEach((el) => el.removeAttribute('class'))
    button.classList.add('active')
  })
})

formEl.addEventListener('submit', (e) => {
  const selectedEl = document.querySelector('.active')
  e.preventDefault()
  selectionEl.style.display = 'none'
  thankYouEl.style.display = 'block'
  resultEl.textContent = `You selected ${selectedEl.textContent || 0} out of 5`
})
