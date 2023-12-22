import Typograph from '@/components/atoms/Typograph/Typograph'
import { dashboard } from '@/constants/dashboard'
import useOutsideClick from '@/hooks/outsideClick'
import { useDispacthUser } from '@/hooks/userDispatch'
import { selectUserState } from '@/store/slices/user/userSlice'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import { useSelector } from 'react-redux'

interface MenuProps {
  show: boolean
  outsideCallback?: () => void
}
const Menu = ({ show, outsideCallback }: MenuProps) => {
  const { push } = useRouter()
  const refMenu = useRef<HTMLDivElement>(null)
  const { logout } = useDispacthUser()
  const { user } = useSelector(selectUserState)
  useOutsideClick(refMenu, () => {
    outsideCallback?.()
  })

  if (!show) {
    return null
  }
  const handleLogout = () => {
    logout()
    push('/')
  }
  return (
    <div
      ref={refMenu}
      className="flex flex-col shadow-xl absolute right-3 top-16 p-4 gap-4 rounded-md text-zinc-900 bg-white"
    >
      <Typograph className="text-sm">{user?.name}</Typograph>
      <button
        onClick={handleLogout}
        className="flex cursor-pointer gap-2 items-center hover:text-purple-300"
      >
        <Typograph className="text-sm">{dashboard.logout}</Typograph>
        <LogOut size={20} />
      </button>
    </div>
  )
}

export default Menu
