import nextConnect from 'next-connect'
import middleware from '../../middlewares/db'

const handler = nextConnect()
handler.use(middleware)

handler.post(async (req, res) => {
  console.log('Register here')
  const { User } = req
  const { username, password } = req.body
  const user = new User({ username, password })
  const response = await user.save()
  res.json({
    success: true,
    message: 'It works dude...',
    data: response
  })
}) 

export default handler