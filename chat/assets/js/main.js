const $msg = document.querySelector('.msg')
const $msgSend = document.querySelector('.msg-send')
const $msgSendContent = $msgSend.querySelector('.msg-send__content')

$msgSend.addEventListener('submit', (event) => {
  event.preventDefault()

  const msg = {msg: $msgSendContent.value}
  $msgSendContent.value = ''

  $.post('http://localhost:3001/msg', msg, (result) => {
    $msg.innerHTML += `<br> ${result}` 
  })
})
