type Header = {
  headers: {
    Authorization: string
  }
}

function getHeader(): Header {
  const token: string = localStorage.getItem('token')

  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
}

const envs = {
  ServiceURL: process.env.SERVICE_URL
}

export { getHeader, envs }