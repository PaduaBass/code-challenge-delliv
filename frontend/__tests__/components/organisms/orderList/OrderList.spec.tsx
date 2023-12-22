import OrderList from '@/components/organisms/orderList/OrderList'
import { Order } from '@/store/slices/order/orderSlice'
import { render, screen } from '@testing-library/react'

describe('OrderList organism test', () => {
  it('should OrderList is defined', () => {
    const orders: Order[] = [
      {
        address: 'Presidente castelo branco',
        client_name: 'test',
        status: 'Enviado',
        id: '',
      },
    ]
    const handleSelectOrder = jest.fn
    render(<OrderList orders={orders} onSelectOrder={handleSelectOrder} />)
    expect(screen.getByText('Enviado')).toBeDefined()
  })
})
