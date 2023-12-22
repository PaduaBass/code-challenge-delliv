import { render, screen } from '@testing-library/react'

import Home from '@/app/page'
import { login } from '@/constants/login'
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

describe('Home Page test', () => {
  it('Home page should have Login', () => {
    render(<Home />)
    expect(screen.getByText(login.title)).toBeDefined()
    expect(screen.getByText(login.description)).toBeDefined()
    expect(screen.getByText(login.titleButton)).toBeDefined()
  })
})
