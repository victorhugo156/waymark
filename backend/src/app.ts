import express from 'express'

const app = express()
const port = Number(process.env.PORT) || 8000

app.get('/', (_request, response) => {
  response.json({ message: 'Waymark API is running' })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
