import { useEffect } from 'react'

function useOutsideClick(
  ref: React.RefObject<HTMLDivElement>,
  callback: () => void,
) {
  const handleClick = (e: MouseEvent) => {
    if (ref.current !== null && !ref.current.contains(e.target as Node)) {
      callback()
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}
export default useOutsideClick
