import { render, screen, waitFor } from '@testing-library/react'
import event from '@testing-library/user-event'
import { getUser } from 'services/placeholder'
import { mockData, mockNewData } from 'tests/mock'
import View from '..'

const service = getUser as any

jest.mock('services/placeholder')

describe('User view', () => {
  it('Should render proper data and refetch and highlight properly after change the picture and country', async () => {
    service.mockResolvedValueOnce(mockData)
    render(<View />)
    const btn = screen.getByRole('button')
    await waitFor(() => screen.queryByTestId('card-image'))
    jest.resetAllMocks()
    service.mockResolvedValueOnce(mockNewData)
    expect(btn).toHaveTextContent('New user')
    event.click(btn)
    jest.spyOn(console, 'error').mockImplementation(jest.fn())
    expect(service).toHaveBeenCalledWith()
    jest.resetAllMocks()
    expect(btn).toHaveTextContent('Loading ...')
    await waitFor(() => btn.textContent !== 'Loading ...')
    expect(screen.getByTestId('card-image')).toHaveClass('shadow-3xl-blue')
    expect(screen.getByTestId('Country')).toHaveClass('shadow-3xl-blue')
    expect(screen.getByTestId('First name')).not.toHaveClass('shadow-3xl-blue')
    expect(screen.getByTestId('Last name')).not.toHaveClass('shadow-3xl-blue')
    expect(btn).toHaveTextContent('New user')
  })
})
