import { render, screen } from '@testing-library/react'
import Typograph from './Typograph'

describe('Component typograph test', () => {
  it('should typograph must exist', () => {
    render(<Typograph>Admin</Typograph>)
    expect(screen.getByText('Admin')).toBeDefined()
  })
})
