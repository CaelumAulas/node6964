const $msg = document.querySelector('.msg')
const $msgSend = document.querySelector('.msg-send')
const $msgSendContent = $msgSend.querySelector('.msg-send__content')
const socket = io()

socket.on('new-msg', (data) => {
  const msg = data.msg

  $msg.innerHTML += `<br> ${msg.msg}`
})

$msgSend.addEventListener('submit', (event) => {
  event.preventDefault()
  const msg = {msg: $msgSendContent.value}
  $msgSendContent.value = ''

  $.post('/msg', msg, (result) => {
    console.log('Chegou!', result)
  })
})
