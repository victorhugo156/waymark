import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import authRouter from './routes/auth'
import { AuthMiddleware } from './middlewares/authMiddleware'
import { error } from 'node:console'
import errorHandler from './middlewares/errorHandler'
import cookieParser from 'cookie-parser'
import UnauthorisedError from './errors/Unauthorised'

const app = express()
const port = Number(process.env.PORT) || 8000


async function connectToMongoDB() {

  if(!process.env.MONGO_URI){
    throw new UnauthorisedError("❌ Invalid or missing environment configuration")
  }
    await mongoose.connect(process.env.MONGO_URI)
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
    credentials: true,
  }
))
app.use(express.json())
app.use(cookieParser())

app.use('/auth', authRouter)
app.use('/', AuthMiddleware)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
