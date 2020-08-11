import nextConnect from 'next-connect'
import jwt from 'jsonwebtoken'
import middleware from '../../middlewares/dbMiddleware'

const handler = nextConnect()
handler.use(middleware)

handler.get(async (req, res) => {
  try {
    const token = req.headers.authorization ? req.headers.authorization.slice(7) : undefined
    if (token) {
      const { userId } = jwt.verify(token, process.env.SECRET_SAUCE)
      const { Todo } = req
      const todos = await Todo.find({ userId: { $eq: userId } })
      console.log(todos)
      res.json({
        success: true,
        message: 'Will it work? I guess it is...',
        data: todos
      })
    } else {
      res.json({
        success: false,
        message: 'You need token boi!'
      })
    }
  } catch(err) {
    console.log(err)
  }
})

export default handler