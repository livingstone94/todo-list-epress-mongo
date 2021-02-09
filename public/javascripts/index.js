// no undefined input
const inputError = function () {
  const body = document.querySelector('body')
  const input = document.querySelector('.input-group input')

  body.addEventListener('click', () => {
    if (event.target.classList.contains('write')) {
      if (!confirm('Add todo?')) {
        event.preventDefault()
      }
    }
    if (event.target.classList.contains('send')) {
      if (!input.value) {
        alert('Todo !!')
        event.preventDefault()
      }
    }
  })
}


inputError()

