import InfoRegister from '@/components/molecules/register/infoRegister/InfoRegister'
import { register } from '@/constants/register'
import { render, screen } from '@testing-library/react'

describe('InfoRegister molecule test', () => {
  it('should InfoRegister is defined', () => {
    render(<InfoRegister />)
    expect(screen.getByText(register.title)).toBeDefined()
  })
})
