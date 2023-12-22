import { render, screen } from '@testing-library/react'
import Avatar from '../../../../src/components/atoms/Avatar/Avatar'
import userEvent from '@testing-library/user-event'
describe('Component test avatar', () => {
  it('should text must exist and if possible click on the button', () => {
    render(<Avatar name="admin" />)
    const buttonAvatar = screen.getByRole('button', { name: 'a' })
    expect(screen.getByText('a'))
    userEvent.click(buttonAvatar)
    expect(buttonAvatar).toBeDefined()
  })
})
