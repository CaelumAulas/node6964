class LivroDao {
  constructor(connection) {
    this._connection = connection
  }

  getAll(callback) {
    this._connection.query('SELECT * FROM livros', callback)
  }
}

module.exports = LivroDao
