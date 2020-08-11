import nextConnect from 'next-connect'
import jwt from 'jsonwebtoken'
import middleware from '../../middlewares/dbMiddleware'

const handler = nextConnect()
handler.use(middleware)

handler.post(async (req, res) => {
  console.log('Create todo api here')
  console.log('req.headers', req.headers)
  try {
    const token = req.headers.authorization ? req.headers.authorization.slice(7) : undefined
    if (token) {
      const { userId } = jwt.verify(token, process.env.SECRET_SAUCE)
      const { title, description } = req.body
      const { Todo } = req
      const newTodo = new Todo({ title, description, userId })
      res.json({
        success: true,
        message: 'Congratulation for you dude!',
        data: await newTodo.save()
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