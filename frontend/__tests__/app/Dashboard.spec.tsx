import { render, screen } from '@testing-library/react'

import DashboardPage from '@/app/dashboard/page'
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

describe('Dashboard Page test', () => {
  it('Dashboard page should have orders', () => {
    render(<DashboardPage />)
    expect(screen.getByText('Enviado')).toBeDefined()
  })
})
