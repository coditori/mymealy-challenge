import { render, screen } from '@testing-library/react'
import { CurrencyTable } from '..'

describe('Currency table', () => {
  it('Should render proper th', () => {
    render(<CurrencyTable currencies={[]} />)
    expect(screen.getAllByRole('heading')).toHaveLength(2)
  })
  it('Should render proper loading', () => {
    render(<CurrencyTable currencies={[]} />)
    expect(screen.getAllByRole('row')).toHaveLength(1)
    expect(screen.getAllByRole('cell')).toHaveLength(1)
    expect(screen.getByRole('cell')).toHaveTextContent('Loading ...')
  })
  it('Should render proper TD', () => {
    render(
      <CurrencyTable
        currencies={[
          { s: 'any1', c: '123' },
          { s: 'any2', c: '123' },
          { s: 'any3', c: '123' },
        ]}
      />
    )
    expect(screen.getAllByRole('row')).toHaveLength(3)
    expect(screen.getAllByRole('cell')).toHaveLength(6)
  })
})
