import { Router } from 'express'

import { channel, search } from './channel'

export const routes = Router()

routes.get('/ping', async (_request, response) => {
  await channel.ping()
  return response.status(204).send()
})

routes.post('/products', async (request, response) => {
  const { id, category, name } = request.body
  await channel.push(category, 'default', `products:${id}`, name)

  return response.status(201).json({ id, category, name })
})

routes.get('/products', async (request, response) => {
  const category = request.query.category?.toString() || ''
  const query = request.query.query?.toString() || ''
  const products = await search.query(category, 'default', query)

  return response.json(products)
})
