const request = require('supertest')
const app = require('../src')

it('test /health route', done => {
  request(app)
    .get('/health')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, {
      serverStatus: 'ok',
      version: 'v1.0.0'
    }, done)
})