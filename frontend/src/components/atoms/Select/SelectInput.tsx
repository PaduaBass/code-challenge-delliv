'use client'
import { useState } from 'react'

interface SelectInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode
  label?: string
}
const SelectInput = ({ children, label, ...props }: SelectInputProps) => {
  const [showOptions, setShowOptions] = useState(false)
  const handleCloseOnSelect = () => {
    setShowOptions(false)
  }
  return (
    <div className="flex flex-col ">
      {label && <label className="text-xs">{label}</label>}
      <div
        onClick={() => setShowOptions((state) => !state)}
        className="bg-purple-200 flex p-2 text-purple-950 rounded-md"
      >
        {props.value}
      </div>
      {showOptions && (
        <div
          onClick={handleCloseOnSelect}
          className="flex flex-col text-purple-950 p-2 bg-purple-200 rounded-md mt-2"
        >
          {children}
        </div>
      )}
    </div>
  )
}

export default SelectInput
