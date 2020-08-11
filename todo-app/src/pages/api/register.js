import nextConnect from 'next-connect'
import bcrypt from 'bcrypt'
import middleware from '../../middlewares/db'

const handler = nextConnect()
handler.use(middleware)

handler.post(async (req, res) => {
  console.log('Register here')
  try {
    const { User } = req
    let { username, password } = req.body
    password = await bcrypt.hash(password, 13)
    const user = new User({ username, password })
    const response = await user.save()
    res.json({
      success: true,
      message: 'It works dude...',
      data: response
    })
  } catch(err) {
    console.log(err)
  }
}) 

export default handler