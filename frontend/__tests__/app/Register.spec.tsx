import RegisterPage from '@/app/register/page'
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

describe('Register Page test', () => {
  it('should Register Page is defined', () => {
    render(<RegisterPage />)
    expect(screen.getByText(register.description)).toBeDefined()
    expect(screen.getByText(register.labelEmail)).toBeDefined()
    expect(screen.getByText(register.labelPassword)).toBeDefined()
  })
})
