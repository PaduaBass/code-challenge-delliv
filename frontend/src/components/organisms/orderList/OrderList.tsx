import { Order } from '@/store/slices/order/orderSlice'
import { MapPin, PenSquare, User } from 'lucide-react'

interface OrderListProps {
  orders: Order[]
  onSelectOrder: (order: Order) => void
}
const OrderList = ({ orders, onSelectOrder }: OrderListProps) => {
  return (
    <div className="bg-white gap-2 w-[80%] mt-4 flex flex-col self-center rounded-md h-[calc(100%-200px)] overflow-y-scroll">
      {orders.map((order) => (
        <div
          key={order.id}
          onClick={() => {
            onSelectOrder(order)
          }}
          className="bg-purple-200 grid grid-cols-3 text-purple-950 rounded-md p-6 cursor-pointer text-sm max-sm:grid-cols-1 max-sm:gap-4"
        >
          <div className="flex items-center gap-2">
            <User size={20} />
            <span>{order.client_name}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={20} />
            <span>{order.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <PenSquare size={20} />
            <span>{order.status}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default OrderList
