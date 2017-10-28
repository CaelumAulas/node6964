const connectionFactory = require('../infra/connectionFactory')

const LivroDao = (function() {
  const module = {}

  module._connection = connectionFactory()

  module.getAll = function(callback) {
    module._connection.query('SELECT * FROM livros', callback)
  }

  return {
    getAll: module.getAll
  }
})

module.exports = LivroDao
