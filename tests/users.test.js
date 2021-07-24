const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/users')

beforeAll(async () => {
  await User.deleteMany()
})

//obtendo um GET
test('Should call GET method successfuly', async() => {
  await request(app).get('/users').expect(200)
})

//Passando um body
test('Should call POST method successfuly and create a new user', async() => {
  await request(app)
    .post('/users')
    .send({
      name: 'NunesTeste',
      email: 'nunesTeste@email.com',
      password:'meuSecredo'
    })
    .expect(201)
})

//obtendo um GET
test('Should call GET method and get all users', async() => {
  const response = await request(app).get('/users').expect(200)
  console.log(response.body)
  expect(response.body[0].name).toBe('NunesTeste')
})