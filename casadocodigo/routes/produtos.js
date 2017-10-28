module.exports = app => {
  app.get('/produtos', (req, res) => {
    const connection = app.infra.connectionFactory()
    const livroDao = new app.dao.LivroDao(connection)

    livroDao.getAll((error, result, fields) => {
      res.render('produtos/lista', {livros: result})
    })
  })
}
