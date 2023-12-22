interface HeaderProps {
  children?: React.ReactNode
}
const Header = ({ children }: HeaderProps) => {
  return (
    <header className="h-16 justify-between w-full items-center p-2 flex shadow-lg bg-purple-500">
      {children}
    </header>
  )
}

export default Header
