const http = require('http')
const port = 3000
const ip = 'localhost'

http.createServer((req, res) => {
  const resp = []

  resp['/'] = 'COISO'
  resp['/home'] = 'COISO'
  resp['/cadastro'] = 'CADASTRO'

  res.end(resp[req.url] || '404')
  console.log('Eita')
}).listen(port, ip)
