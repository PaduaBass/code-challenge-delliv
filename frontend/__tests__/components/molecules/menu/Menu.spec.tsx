import Menu from '@/components/molecules/menu/Menu'
import { dashboard } from '@/constants/dashboard'
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

describe('Menu molecule test', () => {
  it('should Menu is defined', () => {
    const { container } = render(<Menu show={true} />)
    expect(container).toBeDefined()
  })

  it('should Menu is not defined', async () => {
    render(<Menu show={false} />)
    expect(screen.queryByText(dashboard.logout)).toBeNull()
  })
})
