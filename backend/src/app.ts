import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import authRouter from './routes/auth'
import usersRouter from './routes/users'
import { AuthMiddleware } from './middlewares/authMiddleware'
import errorHandler from './middlewares/errorHandler'
import cookieParser from 'cookie-parser'
import placesRouter from './routes/places'
import journeysRouter from './routes/journeys'

const app = express()
const port = Number(process.env.PORT) || 8000


async function connectToMongoDB() {

  if(!process.env.MONGO_URI){
    throw new Error("Missing MONGO_URI environment variable")
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
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
  }
))
app.use(express.json())
app.use(cookieParser())

app.use('/auth', authRouter)
app.use("/places", placesRouter)
app.use("/journey", journeysRouter)
app.use('/users', usersRouter)
app.use('/', AuthMiddleware)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
