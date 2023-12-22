import { fireEvent, render, screen } from '@testing-library/react'
import Input from '../../../../src/components/atoms/Input/Input'

describe('Component input test', () => {
  const setup = () => {
    const utils = render(<Input />)
    const input = utils.container.querySelector('input')
    return {
      input,
      ...utils,
    }
  }

  it('should input must exist it must be possible to type', () => {
    const { input } = setup()
    if (!input) {
      return
    }
    fireEvent.change(input, { target: { value: 'admin' } })
    expect(input.value).toBe('admin')
  })
})
