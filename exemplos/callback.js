const http = require('http')
const nomes = ['Marco', 'Jovis', 'Van', 'Toalha']

loop(nomes, function (nome) {
  console.log('Olá ' + nome)
})

function loop(lista, callback) {
  let max = lista.length

  for(let i = 0; i < lista.length; i++) {
    callback(lista[i])
  }

  while(max--) {
    callback(lista[max])
  }
}
