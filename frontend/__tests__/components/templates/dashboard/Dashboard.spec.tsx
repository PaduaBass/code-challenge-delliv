import Dashboard from '@/components/templates/dashboard/Dashboard'
import { render, screen } from '@testing-library/react'
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      pathname: '',
      replace: jest.fn,
    }
  },
}))

jest.mock('react-redux', () => ({
  useDispatch() {
    return {
      dispath: () => jest.fn,
    }
  },
  useSelector() {
    return {
      user: null,
      order: {
        orders: [
          {
            address: 'Presidente castelo branco, 660',
            client_name: 'test',
            id: '',
            status: 'Enviado',
          },
        ],
      },
    }
  },
}))

describe('Dashboad template test', () => {
  it('should Dashboad is defined', () => {
    render(<Dashboard />)
    expect(screen.getByText('Enviado')).toBeDefined()
  })
})
