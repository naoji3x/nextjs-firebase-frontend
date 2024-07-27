import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Index from './page'
jest.mock('../auth', () => ({
  signIn: jest.fn(),
  signOut: jest.fn()
}))

describe('Index', () => {
  it('renders a main', async () => {
    render(<Index />)
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
  })
})
