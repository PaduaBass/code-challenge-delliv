interface AvatarProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string
}

const Avatar = ({ name, ...props }: AvatarProps) => {
  return (
    <button
      className="flex justify-center items-center font-bold tex-xl uppercase w-10 h-10 rounded-full bg-white"
      {...props}
    >
      {name?.[0]}
    </button>
  )
}

export default Avatar
