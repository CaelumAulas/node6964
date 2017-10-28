const connectionFactory = require('../infra/connectionFactory')
const LivroDao = require('../dao/LivroDao')

module.exports = app => {
  app.get('/produtos', (req, res) => {
    const connection = connectionFactory()
    const livroDao = new LivroDao()

    livroDao.getAll((error, result, fields) => {
      res.render('produtos/lista', {livros: result})
    })

    LivroDao.prototype.coiso = function() {

    }
    // connection.query('SELECT * FROM livros', (error, result, fields) => {
    //   res.render('produtos/lista', {livros: result})
    // })
    //
    // connection.end()
  })
}
