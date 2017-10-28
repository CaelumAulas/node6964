const mysql = require('mysql')

function connectionFactory() {
  return mysql.createConnection({
    user: 'root',
    password: '',
    host: 'localhost',
    database: 'casadocodigo1'
  })
}

module.exports = function(){
  return connectionFactory
}
