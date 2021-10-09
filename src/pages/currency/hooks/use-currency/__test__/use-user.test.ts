import { renderHook, act } from '@testing-library/react-hooks'
import WS from 'jest-websocket-mock'
import { useCurrency } from '..'

const subscribeMsg = {
  method: 'SUBSCRIBE',
  params: ['!miniTicker@arr'],
  id: 1,
}

let server

beforeEach(() => {
  server = new WS('wss://stream.binance.com:9443/ws')
})
afterEach(() => {
  WS.clean()
})

describe('Use currency hook', () => {
  it('Should subscribe to web socket', async () => {
    const { result } = renderHook(() => useCurrency())
    jest.spyOn(console, 'error').mockImplementation(jest.fn())
    await server.connected
    await expect(server).toReceiveMessage(JSON.stringify(subscribeMsg))
    expect(server).toHaveReceivedMessages([JSON.stringify(subscribeMsg)])
  })
  it('Should setFilter properly', async () => {
    const { result } = renderHook(() => useCurrency())
    jest.spyOn(console, 'error').mockImplementation(jest.fn())
    expect(result.current.filter).toBe('')
    act(() => result.current.onFilter('BTC'))
    expect(result.current.filter).toBe('BTC')
  })
})
