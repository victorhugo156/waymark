import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, minlength: 3, maxlength: 20 },
  email: { type: String, required: true, unique: true },
  hashedPassword: { type: String, required: true, select: false },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export const User = mongoose.model('user', userSchema)
