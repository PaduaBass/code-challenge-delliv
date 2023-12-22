import { shared } from '@/constants/shared'

const Footer = () => {
  return (
    <footer className="absolute w-screen justify-center items-center bottom-0 text-purple-950 text-sm text-center">
      <span>{shared.footer}</span>
    </footer>
  )
}

export default Footer
