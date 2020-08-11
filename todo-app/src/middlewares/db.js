import mongoose from 'mongoose'
import nextConnect from 'next-connect'
import { User, Todo } from '../lib/models'

function connect(req, res, next) {
  console.log('connect')
  mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('Connected to the database')
  })
  req.User = User
  req.Todo = Todo
  return next()
}

const middleware = nextConnect()
middleware.use(connect)

export default middleware