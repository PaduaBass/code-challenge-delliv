import FormRegister from '@/components/molecules/register/FormRegister/FormRegister'
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
describe('FormRegister molecule test', () => {
  it('should FormRegister is defined', () => {
    render(<FormRegister />)
    expect(screen.getByText(register.titleRegister)).toBeDefined()
  })
})
