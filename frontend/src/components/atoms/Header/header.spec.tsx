import { render } from '@testing-library/react'
import Header from './Header'

describe('Component header test', () => {
  it('should header must exist', () => {
    const { container } = render(<Header />)
    const header = container.querySelector('header')
    expect(header).toBeDefined()
  })
})
