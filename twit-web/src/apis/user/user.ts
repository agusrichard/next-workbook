import axios from 'axios'
import { getHeader, envs } from '../config'

type RegisterRequestData = {
  username: string,
  email: string,
  password: string
}

async function registerUser(data: RegisterRequestData) {
  try {
    const response = await axios.post(envs.ServiceURL, data, getHeader())
    console.log(response.data)
  } catch(error) {
    console.log(error)
  }
}

export { registerUser }