import { renderHook, act } from '@testing-library/react-hooks'

import { useCurrency } from '..'

describe('Use user hook', () => {
  afterEach(() => jest.resetAllMocks())

  it('Should render proper data', async () => {
    // service.mockResolvedValueOnce(mockData)
    // const { result, waitFor } = renderHook(() => useCurrency())
    // expect(result.current.loading).toBeTruthy()
    // await waitFor(() => !result.current.loading)
    // expect(service).toHaveBeenCalledTimes(1)
    // expect(result.current.data).toBe(mockData)
  })
  it('Should refetch proper data and catch the diff between country and img', async () => {
    // service.mockResolvedValueOnce(mockData)
    // const { result, waitFor, waitForNextUpdate } = renderHook(() =>
    //   useCurrency()
    // )
    // await waitFor(() => !result.current.loading)
    // expect(result.current.cache).toBe(undefined)
    // jest.resetAllMocks()
    // service.mockResolvedValueOnce(mockNewData)
    // act(() => result.current.refetch())
    // jest.spyOn(console, 'error').mockImplementation(jest.fn())
    // expect(result.current.fetching).toBeTruthy()
    // await waitForNextUpdate()
    // expect(result.current.cache).toBe(mockData)
    // expect(result.current.data).toBe(mockNewData)
    // expect(result.current.isNew).toStrictEqual({
    //   country: true,
    //   first: false,
    //   img: true,
    //   last: false,
    // })
  })
})
