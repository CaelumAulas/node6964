// https://github.com/CaelumAulas/node6964
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.set('view engine', 'ejs')

app.use(express.static('./assets'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra desligar o servidor: ctrl+c');
})
