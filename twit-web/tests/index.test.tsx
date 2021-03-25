import { render, screen } from '@testing-library/react'
import App from '../src/pages/index'

describe('Test app component', () => {
  test('Test app component', () => {
    render(<App />)
    expect(screen.getByText('Hello World!')).toBeInTheDocument()
  })
})

export {}