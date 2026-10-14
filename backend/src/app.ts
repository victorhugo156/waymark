import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import authRouter from './routes/auth'
import { AuthMiddleware } from './middlewares/authMiddleware'

const app = express()
const port = Number(process.env.PORT) || 8000


async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI || '')
  } catch (err) {
    console.log(`Error connecting to MongoDB: ${err}`)
  }
}

connectToMongoDB()
.then(() => {
  console.log('Connected to MongoDB')
})
.catch((err) => {
  console.log(`Error connecting to MongoDB: ${err}`)
})

app.use(cors(
  {
    origin: 'http://localhost:5173',
  }
))
app.use(express.json())

app.use('/', AuthMiddleware)
app.use('/auth', authRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
