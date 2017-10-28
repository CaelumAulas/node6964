const mysql = require('mysql')

module.exports = app => {
  app.get('/produtos', (req, res) => {
    const connection = mysql.createConnection({
      user: 'root',
      password: '',
      host: 'localhost',
      database: 'casadocodigo1'
    })

    connection.query('SELECT * FROM livros', (error, result, fields) => {
      res.render('produtos/lista', {livros: result})
    })
  })
}
