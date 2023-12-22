interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  showRightIcon?: boolean
  rightIcon?: string
  showLeftIcon?: boolean
  leftIcon?: string
  label?: string
  error?: string
}
const Input = ({ label, error, id, ...props }: InputProps) => {
  return (
    <div className="flex flex-col">
      {label !== null && (
        <label htmlFor={id ?? ''} className="text-sm text-purple-200">
          {label}
        </label>
      )}
      <input
        id={id}
        className="p-2 shadow-lg rounded-md bg-white text-purple-700 placeholder:text-purple-400 focus:ring-2 focus:bg-white focus:ring-purple-700 "
        {...props}
      />
      {error !== null && (
        <span className="text-white text-xs mt-1">{error}</span>
      )}
    </div>
  )
}

export default Input
