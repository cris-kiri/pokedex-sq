import server from './server.ts'

const port = process.env.PORT || 3000

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('API Routes available on port', port)
})
