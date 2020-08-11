import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: String,
  password: String
})

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
  userId: String
})

console.log('we create the models again! why?')

const User = mongoose.models.User || mongoose.model('User', userSchema)
const Todo = mongoose.models.Todo || mongoose.model('Todo', todoSchema)

export { User, Todo }