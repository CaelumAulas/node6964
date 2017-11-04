// https://github.com/CaelumAulas/node6964
require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const request = require('request')

const server = require('http').Server(app)
const io = require('socket.io')(server)

const port = process.env.PORT

app.set('view engine', 'ejs')

app.use(express.static('./assets'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/msg', (req, res) => {
  const msg = req.body

  request.post('http://localhost:3001/msg', {form: msg}, () => {
    io.emit('new-msg', {msg})

    res.send(msg)
  })
})

server.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra desligar o servidor: ctrl+c');
})
