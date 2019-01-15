import { request } from './request'
import 'jest-extended'

describe('indexController', () => {
  it('GET /v1/', async () => {
    const result = await request.get('/').expect(200)

    expect(result.body).toHaveProperty('message')
  })
})

describe('errorHandler', () => {
  it('Responds with 404', async () => {
    const { body } = await request.get('/unicorn/42').expect(404)

    expect(body).toBeDefined()
    //expect(body.body).toBeString()
    //expect(body.code).toBe('E_NOT_FOUND')
  })
})
