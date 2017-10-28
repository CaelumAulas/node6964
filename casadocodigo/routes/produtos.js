module.exports = app => {
  app.get('/produtos', (req, res) => {
    const connection = app.infra.connectionFactory()
    const livroDao = new app.dao.LivroDao(connection)

    livroDao.getAll((error, result, fields) => {
      res.render('produtos/lista', {livros: result})
    })
  })

  app.post('/produtos', (req, res) => {
    const connection = app.infra.connectionFactory()
    const livroDao = new app.dao.LivroDao(connection)
    const livro = req.body

    livroDao.insert(livro, (error, result, fields) => {
      res.redirect('/produtos')
    })
  })

  app.get('/produtos/form', (req, res) => {
    res.render('produtos/form')
  })
}
