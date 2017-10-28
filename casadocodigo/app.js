const app = require('./custom-express')
const port = 3000


app.listen(port, () => {
  console.log(`Servido de pé em: http:localhost:${port}`)
  console.log('Pra derrubar o servidor: ctrl+c')
})
