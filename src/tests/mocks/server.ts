import { setupServer } from 'msw/node'
import { rest } from 'msw'


export const movies = [
  {
    id: 1,
    title: 'Underbelly',
    released: 2008,
  },
  {
    id: 2,
    title: 'The Sopranos',
    released: 2007,
  },

]

export const handlers = [
  rest.get('http://localhost:8080/v1/movies', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(movies))
  }),
]

// This configures a Service Worker with the given request handlers.
export const server = setupServer(...handlers)