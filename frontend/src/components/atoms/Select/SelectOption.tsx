interface SelectOptionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  isSelected?: boolean
}
const SelectOption = ({ value, isSelected, ...props }: SelectOptionProps) => {
  return (
    <button
      className={`flex p-2 text-sm hover:bg-purple-100 rounded-md ${
        isSelected && 'bg-purple-100'
      }`}
      {...props}
    >
      {value}
    </button>
  )
}

export default SelectOption
