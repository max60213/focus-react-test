import express from 'express'
import { createServer as createViteServer } from 'vite'
import { resolve } from 'node:path'

const app = express()
const port = Number(process.env.PORT) || 3000
const vite = await createViteServer({ server: { middlewareMode: true }, appType: 'spa' })
app.use(vite.middlewares)
app.listen(port, '0.0.0.0', () => {
  console.log(`Focus React app listening on http://localhost:${port}`)
})
