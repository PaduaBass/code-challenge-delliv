import SectionInfoLogin from '@/components/organisms/login/SectionInfoLogin/SectionInfoLogin'
import { login } from '@/constants/login'
import { render, screen } from '@testing-library/react'

describe('SectionInfoLogin molecule test', () => {
  it('should SectionInfoLogin is defined', () => {
    render(<SectionInfoLogin />)
    expect(screen.getByText(login.title)).toBeDefined()
  })
})
