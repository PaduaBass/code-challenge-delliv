import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  theme?: 'primary' | 'secondary'
}
const Button = ({ children, theme = 'primary', ...props }: ButtonProps) => {
  const changeBgColor = () => {
    switch (theme) {
      case 'primary':
        return 'bg-white'
      case 'secondary':
        return 'bg-purple-500 text-white'
    }
  }
  return (
    <button
      className={`flex p-2 shadow-lg gap-2 mt-4 items-center w-full justify-center p-2 rounded-md text-purple-700 font-bold ${changeBgColor()}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
