const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

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

app.listen(port, () => {
  console.log(`Servido de pé em: http:localhost:${port}`)
  console.log('Pra derrubar o servidor: ctrl+c')
})
