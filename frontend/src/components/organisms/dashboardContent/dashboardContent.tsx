'use client'
import Avatar from '@/components/atoms/Avatar/Avatar'
import { debounce } from 'lodash'
import Header from '@/components/atoms/Header/Header'
import Typograph from '@/components/atoms/Typograph/Typograph'
import Menu from '@/components/molecules/menu/Menu'
import OrderList from '../orderList/OrderList'
import Card from '../card/Card'
import Footer from '@/components/molecules/footer/Footer'
import { ToastContainer } from 'react-toastify'
import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { Order, selectOrderState } from '@/store/slices/order/orderSlice'
import { selectUserState } from '@/store/slices/user/userSlice'
import { dashboard } from '@/constants/dashboard'

const DashBoardContent = () => {
  const [orderSelected, setOrderSelected] = useState<Order | null>(null)
  const [showMenu, setShowMenu] = useState(false)
  const { user } = useSelector(selectUserState)
  const [searchOrder, setSearchOrder] = useState<string>('')

  const [sendFilter, setSendFilter] = useState(false)
  const {
    order: { orders },
  } = useSelector(selectOrderState)
  const { replace } = useRouter()
  useEffect(() => {
    if (user === null) {
      replace('/')
    }
  }, [user])

  const debouncedSave = useCallback(
    debounce(() => !sendFilter && setSendFilter(true), 1000),
    [],
  )

  const handleChange = (query: string) => {
    setSearchOrder(query)
    debouncedSave()
    if (sendFilter) {
      setSendFilter(false)
    }
  }

  const filterOrders = orders.filter(
    (order) =>
      order.client_name.toLowerCase().startsWith(searchOrder) ||
      order.client_name.toLowerCase().includes(searchOrder) ||
      order.address.toLowerCase().startsWith(searchOrder) ||
      order.address.toLowerCase().includes(searchOrder) ||
      order.status.toLowerCase().startsWith(searchOrder) ||
      order.status.toLowerCase().includes(searchOrder),
  )

  const handleSelectOrder = (order: Order) => {
    setOrderSelected(order)
  }
  return (
    <>
      <Header>
        <Typograph className="self-center text-white font-bold">
          {dashboard.titleHeader}
        </Typograph>
        <Avatar
          name={user?.name}
          onClick={() => {
            setShowMenu((state) => !state)
          }}
        />
      </Header>

      <Menu
        show={showMenu}
        outsideCallback={() => {
          setShowMenu((state) => !state)
        }}
      />

      <div className="flex justify-between mt-4 items-center w-[80%] max-sm:flex-col self-center ">
        <div className="w-32"></div>
        <Typograph className="text-purple-600 text-xl ">
          {dashboard.orders}
        </Typograph>
        <input
          value={searchOrder}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Buscar"
          className="p-2 bg-purple-200 rounded-md text-purple-900 w-32 max-sm:w-full"
        />
      </div>

      <OrderList
        orders={searchOrder.length > 0 ? filterOrders : orders}
        onSelectOrder={(order) => handleSelectOrder(order)}
      />

      <Card
        ousideCallback={() => {
          setOrderSelected(null)
        }}
        closeCard={() => {
          setOrderSelected(null)
        }}
        show={orderSelected !== null}
        order={orderSelected}
      />
      <ToastContainer />
      <Footer />
    </>
  )
}

export default DashBoardContent
