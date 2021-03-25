import { render, screen } from '@testing-library/react'

import Navbar from '../../src/components/navbar/navbar'
import { mockRouter } from '../utils/utils'

describe('Testing navbar component', () => {
  test('Home link\'s text is there', async () => {
    mockRouter()

    render(<Navbar />)

    expect(screen.getByText('Home')).toBeInTheDocument()
  })
  test('Login link\'s text is there', async () => {
    mockRouter()

    render(<Navbar />)

    expect(screen.getByText('Login')).toBeInTheDocument()
  })
  test('Register link\'s text is there', async () => {
    mockRouter()

    render(<Navbar />)

    expect(screen.getByText('Register')).toBeInTheDocument()
  })
})