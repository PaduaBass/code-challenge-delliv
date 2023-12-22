import DashBoardContent from '@/components/organisms/dashboardContent/dashboardContent'
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
      order: {
        orders: [
          {
            id: '',
            client_name: 'test',
            address: 'Rua presidente castelo branco, 660',
            status: 'enviado',
          },
        ],
      },
    }
  },
}))

describe('DashboardContent organism test', () => {
  it('should DashboardContent is defined', () => {
    render(<DashBoardContent />)
    expect(screen.getByText('enviado')).toBeDefined()
    expect(screen.getByText(dashboard.titleHeader)).toBeDefined()
  })
})
