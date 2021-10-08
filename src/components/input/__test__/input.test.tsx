import { render, screen } from '@testing-library/react'
import { Input } from '..'

describe('Input core', () => {
  it('Should render properly', () => {
    render(<Input label="name" value="test value" />)
    const element = screen.getByTestId('name')
    expect(element).toBeInTheDocument()
    expect(element).toHaveValue('test value')
  })
  it('Should render loading properly', () => {
    render(<Input label="name" value="test value" loading />)
    const element = screen.getByTestId('name')
    expect(element).toHaveClass('animate-pulse')
  })
  it('Should render highlight properly', () => {
    render(<Input label="name" value="test value" isNew />)
    const element = screen.getByTestId('name')
    expect(element).toHaveClass('bg-blue-300 shadow-3xl-blue')
  })
})
