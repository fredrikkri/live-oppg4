import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors';

const app = new Hono()

app.use('*', cors())

const dadJokes = [
  {
    id: 6,
    title: "Bad joke",
    answer: "false"
  },
];

app.get('/', (c) => {
  return c.json(dadJokes);
})

app.post('/add', async (c) => {
  const body = await c.req.json()
  dadJokes.push(body);
  return c.json(dadJokes);
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port,
})
