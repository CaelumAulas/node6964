const express = require('../../custom-express')
const request = require('supertest')(express)

describe('#ProdutosRoutes', () => {
  it('listagem de produtos json', (done) => {
    request.get('/produtos')
           .set('Accept', 'application/json')
           .expect('Content-type', /json/)
           .expect(200, done)
  })

  it('listagem de produtos html', (done) => {
    request.get('/produtos')
           .expect('Content-type', /html/)
           .expect(200, done)
  })

  it('cadastrando um livro por json', (done) => {
    const livro = {}
    livro.titulo = 'Node'
    livro.preco = 20.12
    livro.descricao = 'Node ae'

    request.post('/produtos')
           .query('Content-Type','application/vnd.api+json')
           .send(livro)
           .expect(200, done)
  })
})
