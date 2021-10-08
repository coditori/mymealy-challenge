import { Button } from '..'
import { render, screen } from '@testing-library/react'

describe('Button component', () => {
  it('Should render children properly', () => {
    render(<Button>Click me</Button>)
    const child = screen.getByText(/Click me/i)
    expect(child).toBeVisible()
  })
  it('Should change cursor on fetching', () => {
    render(<Button fetching>Click me</Button>)
    const child = screen.getByRole('button')
    expect(child.className).toContain('cursor-wait')
  })
  it('Should be loading if fetching props is true', () => {
    render(<Button fetching>Click me</Button>)
    const child = screen.getByRole('button')
    expect(child).toHaveTextContent('Loading ...')
  })
})
