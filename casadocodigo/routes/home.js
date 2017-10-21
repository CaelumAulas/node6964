module.exports = function (app) {
  app.get('/', (request, response) => {
    response.redirect('/home')
  })

  app.get('/home', (req, res) => {
    res.render('index')
  })
}
