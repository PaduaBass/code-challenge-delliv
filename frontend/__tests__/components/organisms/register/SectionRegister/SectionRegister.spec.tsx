import SectionRegister from '@/components/organisms/register/SectionRegister/SectionRegister'
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

describe('SectionRegister organism test', () => {
  it('should SectionRegister is defined', () => {
    render(<SectionRegister />)
    expect(screen.getByText(register.labelEmail)).toBeDefined()
  })
})
