import Register from '@/components/templates/register/RegisterTemplate'
import { register } from '@/constants/register'
import { render, screen } from '@testing-library/react'
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      pathname: '',
    }
  },
}))

jest.mock('react-redux', () => ({
  useDispatch() {
    return {
      dispath: jest.fn,
    }
  },
  useSelector() {
    return {
      user: null,
    }
  },
}))

describe('Register template test', () => {
  it('should Register is defined', () => {
    render(<Register />)
    expect(screen.getByText(register.description)).toBeDefined()
    expect(screen.getByText(register.labelEmail)).toBeDefined()
    expect(screen.getByText(register.labelPassword)).toBeDefined()
  })
})
