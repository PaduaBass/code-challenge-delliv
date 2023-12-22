import FormLogin from '@/components/molecules/login/FormLogin/FormLogin'
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

describe('FormLogin molecule test', () => {
  it('should FormLogin is defined', () => {
    render(<FormLogin />)
    expect(screen.getByText(login.labelEmail)).toBeDefined()
  })
})
