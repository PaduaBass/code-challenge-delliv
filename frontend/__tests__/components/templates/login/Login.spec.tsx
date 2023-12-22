import Login from '@/components/templates/login/Login'
import { login } from '@/constants/login'
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

describe('Login template test', () => {
  it('should Login is defined', () => {
    render(<Login />)
    expect(screen.getByText(login.description)).toBeDefined()
    expect(screen.getByText(login.labelEmail)).toBeDefined()
    expect(screen.getByText(login.labelPassword)).toBeDefined()
  })
})
