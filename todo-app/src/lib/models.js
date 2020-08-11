import mongoose from 'mongoose'

var userSchema = new mongoose.Schema({
  username: String,
  password: String
})

var todoSchema = new mongoose.Schema({
  title: String,
  createdAt: { type: Date, default: Date.now },
  forWhen: Date,
  description: String
})

console.log('we create the models again! why?')

var User = mongoose.model('User', userSchema)
var Todo = mongoose.model('Todo', todoSchema)

export { User, Todo }