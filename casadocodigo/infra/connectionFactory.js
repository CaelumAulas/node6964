const mysql = require('mysql')

module.exports = () => {
  return mysql.createConnection({
    user: 'root',
    password: '',
    host: 'localhost',
    database: 'casadocodigo1'
  })
}
