import { useCallback, useEffect, useMemo, useState } from 'react'
import useWebSocket from 'react-use-websocket'

export const useCurrency = () => {
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
    lastJsonMessage,
    onFilter: useCallback((value) => setFilter(value), []),
    currencies:
      lastJsonMessage.length &&
      lastJsonMessage
        .filter((item) =>
          filter ? item.s.toLowerCase().includes(filter) : true
        )
        .sort((a, b) => (parseFloat(a.c) < parseFloat(b.c) ? 1 : -1)),
  }
}
