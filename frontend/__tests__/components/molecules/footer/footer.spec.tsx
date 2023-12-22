import Footer from '@/components/molecules/footer/Footer'
import { shared } from '@/constants/shared'
import { render, screen } from '@testing-library/react'

describe('Footer molecule test', () => {
  it('should component footer is defined', () => {
    render(<Footer></Footer>)
    expect(screen.getByText(shared.footer)).toBeDefined()
  })
})
