const express = require('express')
const load = require('express-load')
const app = express()
const http = require('http')

app.set('view engine', 'ejs')

app.use(express.static('./assets'))

app.use((req, res, next) => {
  console.log('URL:', req.url)
  next()
})

load('routes')
    .then('infra')
    .then('dao')
    .into(app)

app.use((req, res) => {
  res.status(404).render('404')
})


module.exports = app
