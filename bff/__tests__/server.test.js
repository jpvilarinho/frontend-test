const request = require('supertest');
const app = require('../server');

test('GET /search', async () => {
  const response = await request(app).get('/search?q=javascript');
  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('items');
});
