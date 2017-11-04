require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/msg', (req, res) => {
  const msg = req.body.msg
  
  res.send(msg)
})

app.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra desligar o servidor: ctrl+c')
})
