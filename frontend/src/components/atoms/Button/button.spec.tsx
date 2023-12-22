import { render, screen } from '@testing-library/react'
import Button from './Button'
import userEvent from '@testing-library/user-event'

describe('Component test button', () => {
  it('should text must exist and if possible click on the button', () => {
    render(<Button>Click</Button>)
    const button = screen.getByRole('button')
    expect(screen.getByText('Click'))
    userEvent.click(button)
    expect(button).toBeDefined()
  })
})
