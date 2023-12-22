import SectionLogin from '@/components/organisms/login/SectionLogin/SectionLogin'
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

describe('SectionLogin organism test', () => {
  it('should SectionLogin is defined', () => {
    render(<SectionLogin />)
    expect(screen.getByText(login.labelEmail)).toBeDefined()
  })
})
