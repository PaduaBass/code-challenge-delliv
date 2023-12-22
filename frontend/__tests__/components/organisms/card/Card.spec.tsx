import Card from '@/components/organisms/card/Card'
import { Order } from '@/store/slices/order/orderSlice'
import { render, screen } from '@testing-library/react'
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
const orderMock: Order = {
  id: '',
  client_name: 'teste',
  status: 'Enviado',
  address: 'Rua Presidente Castelo Branco, 660',
}
describe('Card organism test', () => {
  it('should Card is defined', () => {
    const handleCloseCard = jest.fn
    render(<Card order={orderMock} show={true} closeCard={handleCloseCard} />)
    expect(screen.getByText(orderMock.client_name)).toBeDefined()
  })

  it('should Card is not defined', () => {
    const handleCloseCard = jest.fn
    render(<Card order={orderMock} show={false} closeCard={handleCloseCard} />)
    expect(screen.queryByText(orderMock.client_name)).toBeNull()
  })
})
