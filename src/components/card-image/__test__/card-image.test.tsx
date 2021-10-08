import { CardImage } from '..'
import { render, screen } from '@testing-library/react'

describe('CardImage component', () => {
  it('Should render loading properly', () => {
    render(<CardImage loading />)
    const div = screen.getByTestId('card-image-loading')
    expect(div).toHaveClass('animate-pulse')
  })
  it('Should render image properly', () => {
    render(<CardImage src="test" />)
    const img = screen.getByTestId('card-image')
    expect(img).toHaveClass(
      'w-64 h-64 object-contain object-center rounded-full'
    )
  })
  it('Should highlight properly', () => {
    render(<CardImage src="test" isNew />)
    const img = screen.getByTestId('card-image')
    expect(img).toHaveClass('border-[8px] border-blue-300 shadow-3xl-blue')
  })
})
