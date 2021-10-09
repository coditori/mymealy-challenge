import { useCallback, useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'

export const useCurrency = (): IUseCurrencies => {
  const [filter, setFilter] = useState('')

  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
    ' wss://stream.binance.com:9443/ws'
  )

  useEffect(() => {
    sendJsonMessage({
      method: 'SUBSCRIBE',
      params: ['!miniTicker@arr'],
      id: 1,
    })
  }, [readyState])

  return {
    filter,
    onFilter: useCallback((value) => setFilter(value), []),
    currencies:
      lastJsonMessage && lastJsonMessage.length
        ? lastJsonMessage
            .filter((item) =>
              filter ? item.s.toLowerCase().includes(filter) : true
            )
            .sort((a, b) => (parseFloat(a.c) < parseFloat(b.c) ? 1 : -1))
        : [],
  }
}
