import { render, screen } from '@testing-library/react'
import event from '@testing-library/user-event'
import { useState } from 'react'
import { Input } from '..'

const MockInput = () => {
  const [state, setstate] = useState('')
  return (
    <Input
      placeholder="Search"
      value={state}
      onChange={(value) => setstate(value)}
    />
  )
}

describe('Input core', () => {
  it('Should render properly', () => {
    render(<Input placeholder="Search" value="BTC" />)
    const element = screen.getByPlaceholderText(/search/i)
    expect(element).toBeVisible()
    expect(element).toHaveValue('BTC')
  })
  it('Should change properly', () => {
    render(<MockInput />)
    const element = screen.getByPlaceholderText(/search/i)
    event.type(element, 'BSD')
    expect(element).toHaveValue('BSD')
  })
})
