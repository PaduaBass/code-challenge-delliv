import InfoLogin from '@/components/molecules/login/InfoLogin/InfoLogin'
import { login } from '@/constants/login'
import { render, screen } from '@testing-library/react'

describe('InfoLogin molecule test', () => {
  it('should InfoLogin is defined', () => {
    const { container } = render(<InfoLogin />)
    expect(container).toBeDefined()
  })

  it('should InfoLogin contain text', () => {
    render(<InfoLogin />)
    expect(screen.getByText(login.title)).toBeDefined()
  })
})
