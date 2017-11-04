module.exports = app => {
  app.get('/produtos', (req, res) => {
    const connection = app.infra.connectionFactory()
    const livroDao = new app.dao.LivroDao(connection)

    livroDao.getAll((error, result, fields) => {
      res.format({
        html: function() {
          res.render('produtos/lista', {livros: result})
        },
        json: function() {
          res.json(result)
        }
      })

    })
  })

  app.post('/produtos', (req, res) => {
    const connection = app.infra.connectionFactory()
    const livroDao = new app.dao.LivroDao(connection)
    const livro = req.body

    req.assert('titulo', 'Título deve ser preenchido').notEmpty()
    req.assert('preco', 'Preço deve ser um número').isFloat()
    const errors = req.validationErrors()

    console.log(errors)

    if(errors) {
      // res.render('produtos/form', {errors: errors, livro: livro})
      res.status(403).render('produtos/form', {errors, livro})
    } else {
      livroDao.insert(livro, (error, result, fields) => {
        res.redirect('/produtos')
      })
    }
  })

  app.get('/produtos/form', (req, res) => {
    const livro = ''
    res.render('produtos/form', {livro})
  })
}
