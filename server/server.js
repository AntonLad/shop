import express from 'express'
import path from 'path'
import cors from 'cors'
import sockjs from 'sockjs'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'
import axios from 'axios'


import cookieParser from 'cookie-parser'
import config from './config'
import Html from '../client/html'

require('colors')
const { readFile, writeFile, /* stat, unlink  */  } = require('fs').promises


let Root
try {
  // eslint-disable-next-line import/no-unresolved
  Root = require('../dist/assets/js/ssr/root.bundle').default
} catch {
  console.log('SSR not found. Please run "yarn run build:ssr"'.red)
}

let connections = []

const port = process.env.PORT || 8090
const server = express()

const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../dist/assets')),
  express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  express.json({ limit: '50mb', extended: true }),
  cookieParser()
]

middleware.forEach((it) => server.use(it))

server.get('/api/v1', async (req, res) => {
  const currency = await axios(
    'https://api.exchangerate.host/latest?base=USD&symbols=USD,EUR,CAD'
  ).then((it) => it.data.rates)
  res.json(currency)
})

const filePath = `${__dirname}/log.json`
const writeNewFile = (logArray) => {
  return writeFile(filePath, JSON.stringify(logArray), 'utf-8')
}
const getLogs = () => {

}

server.get('/api/v1/log', async (req, res) => {
  const logList = await readFile(filePath, 'utf-8')
    .then((logdata) => {
      return JSON.parse(logdata)
    })
    .catch(async () => {
      const resivedLogs = await getLogs()
      await writeNewFile(resivedLogs)
      return resivedLogs
    })
  res.json(logList)
})



server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
})

const [htmlStart, htmlEnd] = Html({
  body: 'separator',
  title: 'Skillcrucial'
}).split('separator')

server.get('/', (req, res) => {
  const appStream = renderToStaticNodeStream(<Root location={req.url} context={{}} />)
  res.write(htmlStart)
  appStream.pipe(res, { end: false })
  appStream.on('end', () => {
    res.write(htmlEnd)
    res.end()
  })
})

server.get('/*', (req, res) => {
  const appStream = renderToStaticNodeStream(<Root location={req.url} context={{}} />)
  res.write(htmlStart)
  appStream.pipe(res, { end: false })
  appStream.on('end', () => {
    res.write(htmlEnd)
    res.end()
  })
})

const app = server.listen(port)

if (config.isSocketsEnabled) {
  const echo = sockjs.createServer()
  echo.on('connection', (conn) => {
    connections.push(conn)
    conn.on('data', async () => {})

    conn.on('close', () => {
      connections = connections.filter((c) => c.readyState !== 3)
    })
  })
  echo.installHandlers(app, { prefix: '/ws' })
}
console.log(`Serving at http://localhost:${port}`)
