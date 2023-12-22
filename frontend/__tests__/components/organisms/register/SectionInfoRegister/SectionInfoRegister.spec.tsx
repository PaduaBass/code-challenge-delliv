import SectionInfoRegister from '@/components/organisms/register/SectionInfoRegister/SectionInfoRegister'
import { register } from '@/constants/register'
import { render, screen } from '@testing-library/react'

describe('SectionInfoLogin molecule test', () => {
  it('should SectionInfoRegister is defined', () => {
    render(<SectionInfoRegister />)
    expect(screen.getByText(register.title)).toBeDefined()
  })
})
