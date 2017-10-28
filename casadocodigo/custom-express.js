const express = require('express')
const app = express()
const http = require('http')

app.set('view engine', 'ejs')

app.use(express.static('./assets'))

app.use((req, res, next) => {
  console.log('URL:', req.url)
  next()
})

require('./routes/home')(app)
// const home = require('./routes/home')
// home(app)

require('./routes/produtos')(app)

app.use((req, res) => {
  res.status(404).render('404')
})


module.exports = app
