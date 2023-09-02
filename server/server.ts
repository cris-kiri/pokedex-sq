import * as Path from 'node:path'
import express from 'express'
import cors, { CorsOptions } from 'cors'

const server = express()

// Server configuration
const publicFolder = Path.resolve('public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

server.use(express.json())
server.use(cors('*' as CorsOptions))

server.use('/api/*', (req, res) => {
  res.sendStatus(404)
})

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
