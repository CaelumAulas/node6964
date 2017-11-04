const mysql = require('mysql')

function connectionFactory() {
  return mysql.createConnection({
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    host: process.env.HOST_DB,
    database: process.env.DB
  })
}

module.exports = function(){
  return connectionFactory
}
