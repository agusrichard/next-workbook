import nextConnect from 'next-connect'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import middleware from '../../middlewares/db'

const handler = nextConnect()
handler.use(middleware)

handler.post(async (req, res) => {
  console.log('Login here')
  try {
    const { User } = req
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ userId: user.id }, process.env.SECRET_SAUCE)
      res.json({
        success: true,
        message: "It's working boy....",
        token
      })
    } else {
      res.json({
        success: false,
        message: 'Your password is wrong mate... Check again!'
      })
    }
  } catch(err) {
    console.log(err)
  }
})

export default handler