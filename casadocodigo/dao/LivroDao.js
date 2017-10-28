// https://github.com/MarcoBrunoBR/arquivos-js35

class LivroDao {
  constructor(connection) {
    this._connection = connection
  }

  getAll(callback) {
    this._connection.query('SELECT * FROM livros', callback)
  }

  insert(livro, callback) {
    this._connection.query('INSERT INTO livros SET ?', livro, callback)
    // this._connection.query(`INSERT INTO livros(titulo, descricao, preco) VALUES("${livro.titulo}", "${livro.descricao}", ${livro.preco})`, livro, callback)
  }
}

module.exports = () => LivroDao
