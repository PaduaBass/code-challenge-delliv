interface TypographProps extends React.HtmlHTMLAttributes<HTMLElement> {
  children: React.ReactNode
}
const Typograph = ({ children, ...props }: TypographProps) => {
  return <h1 {...props}>{children}</h1>
}

export default Typograph
