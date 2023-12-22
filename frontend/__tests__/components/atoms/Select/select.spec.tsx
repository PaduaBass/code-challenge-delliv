import { render, screen } from '@testing-library/react'
import { Select } from '../../../../src/components/atoms/Select/index'
import userEvent from '@testing-library/user-event'

describe('Component select test', () => {
  it('should select must exist', () => {
    const { container } = render(
      <Select.Root value="Option 1">
        <Select.Option value="Option 1" />
        <Select.Option value="Option 2" />
      </Select.Root>,
    )
    expect(screen.getByText('Option 1'))
    const div = container.querySelectorAll('div')[1]
    userEvent.click(div)
  })
})
